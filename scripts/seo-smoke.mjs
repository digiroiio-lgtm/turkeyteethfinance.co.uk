import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { mkdtemp, writeFile, rm, readdir, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { publicPages } from "../lib/public-pages.ts";
import { canonicalUrl, SITE_URL } from "../lib/site.ts";
import { standaloneGuides } from "../lib/guides.ts";
import { guideText } from "../lib/guide-schema.ts";
import { monthlyPlanningText } from "../lib/monthly-schema.ts";
import { pages } from "../lib/content.ts";
import { JSDOM } from "jsdom";
import { packageInclusions, packagePrice, treatmentPackages } from "../lib/packages.ts";

const preview = process.argv.includes("--preview");
const listener = createServer();
await new Promise((resolve) => listener.listen(0, "127.0.0.1", resolve));
const port = listener.address().port;
await new Promise((resolve) => listener.close(resolve));
const directory = await mkdtemp(join(tmpdir(), "ttf-seo-"));
const expected = join(directory, "expected.json");
await writeFile(expected, JSON.stringify(publicPages().map((page) => canonicalUrl(page.path))));
const server = spawn(process.execPath, [
  "node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port),
], { stdio: ["ignore", "inherit", "inherit"], env: { ...process.env, NODE_ENV: "production" } });

try {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    if (server.exitCode !== null) throw new Error("Production server exited before the smoke check.");
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(500) });
      await response.body?.cancel();
      if (response.status === 200) { ready = true; break; }
    } catch { /* Startup may not yet have bound the port. */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (!ready) throw new Error("Production server did not become ready.");
  for (const file of await readdir(".next/static/chunks")) {
    if (!file.endsWith(".js")) continue;
    const javascript = await readFile(join(".next/static/chunks", file), "utf8");
    if (javascript.includes("Veneers cover the front surface of existing teeth") || javascript.includes("Compare what is proposed for your own teeth before comparing the total price") || javascript.includes("The FCA survey included 17,950 respondents")) {
      throw new Error("Server-rendered editorial content must not be bundled into client JavaScript: " + file);
    }
  }
  // Check the rendered document, not just the schema-building function.
  const headers = { Host: new URL(SITE_URL).host };
  const html = await (await fetch(`http://127.0.0.1:${port}/`, { headers })).text();
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || "";
  const nodes = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((match) => {
      const data = JSON.parse(match[1]);
      return data["@graph"] || [data];
    });
  const articles = nodes.filter((node) => node["@type"] === "Article");
  if (articles.length !== 1 || !articles[0].dateModified || !articles[0].articleBody) {
    throw new Error("Homepage Article JSON-LD must be complete and present once in head.");
  }
  for (const path of ["/contact", "/prices", "/privacy"]) {
    const page = await fetch(`http://127.0.0.1:${port}${path}`, { headers });
    const pageHtml = await page.text();
    if (page.status !== 200 || pageHtml.includes('"@type":"Article"')) {
      throw new Error("Homepage article leaked into " + path + " or the route failed.");
    }
  }
  const registry = new Set(publicPages().map(page => page.path));
  for (const entry of publicPages()) {
    const response = await fetch(`http://127.0.0.1:${port}${entry.path}`, { headers });
    const document = new JSDOM(await response.text()).window.document;
    const schemas = [...document.head.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => {
      const data = JSON.parse(script.textContent); return data["@graph"] || [data];
    });
    if (response.status !== 200 || document.querySelectorAll("h1").length !== 1 || schemas.filter(node => node["@type"] === "WebPage").length !== 1) throw new Error("SSR heading or page schema failed: " + entry.path);
    if (document.querySelector('script[src*="googletagmanager.com"]')) throw new Error("Google library must wait for consent.");
    const catalog = schemas.filter(node => node["@type"] === "OfferCatalog");
    if (entry.path === "/prices") {
      if (catalog.length !== 1 || catalog[0].itemListElement.length !== 5 || document.querySelectorAll(".package-card").length !== 5) throw new Error("Expected five cards and one head catalog.");
      for (const [index, item] of treatmentPackages.entries()) {
        const card = document.getElementById("package-" + item.id);
        const offer = catalog[0].itemListElement[index];
        if (!card?.textContent.includes(packagePrice(item)) || !card.textContent.includes(item.stay) || packageInclusions.some(text => !card.textContent.includes(text)) || offer.price !== item.price || offer.priceCurrency !== "GBP" || new URL(offer.url).hash !== "#package-" + item.id) throw new Error("Package/schema mismatch: " + item.id);
      }
    } else if (catalog.length) throw new Error("Catalog leaked into " + entry.path);
    if (entry.path === "/" && document.querySelectorAll(".package-card").length !== 3) throw new Error("Expected three homepage previews.");
    if (entry.path === "/get-a-quote" && !document.getElementById("treatment-enquiry")) throw new Error("Treatment quote links need a server-rendered destination anchor.");
    if (entry.path === "/pay-monthly") {
      const article = schemas.filter(node => node["@type"] === "Article");
      const rendered = document.getElementById("monthly-planning-guide");
      if (article.length !== 1 || article[0].articleBody !== monthlyPlanningText() || article[0].dateModified !== entry.lastModified || !rendered) throw new Error("Monthly planning Article must match SSR content and be present once in head.");
      if (document.querySelector('main script[type="application/ld+json"]')) throw new Error("Monthly planning schema must be in head.");
      for (const section of pages["pay-monthly"].sections) {
        if (!rendered.textContent.includes(section.body)) throw new Error("Missing monthly planning answer: " + section.title);
        for (const quote of section.quotes || []) if (![...rendered.querySelectorAll("blockquote")].some(element => element.textContent.includes(quote.text))) throw new Error("Missing attributed quotation: " + quote.name);
      }
    }
    const faq = schemas.find(node => node["@type"] === "FAQPage");
    const visible = [...document.querySelectorAll(".faq-list details")];
    if (visible.length && (faq?.mainEntity.length !== visible.length || visible.some((element, index) => faq.mainEntity[index].acceptedAnswer.text !== element.querySelector("p").textContent))) throw new Error("FAQ schema differs from rendered answers: " + entry.path);
    for (const anchor of document.querySelectorAll('main a[href^="/"]')) {
      const destination = new URL(anchor.getAttribute("href"), SITE_URL);
      if (!registry.has(destination.pathname) && destination.pathname !== "/") throw new Error("Broken contextual page link: " + destination.pathname);
    }
    const guide = standaloneGuides.find(guide => guide.path === entry.path);
    if (guide) {
      const article = schemas.filter(node => node["@type"] === "Article");
      if (article.length !== 1 || article[0].articleBody !== guideText(guide)) throw new Error("Guide Article differs from its source: " + entry.path);
      if (document.querySelector('main script[type="application/ld+json"]')) throw new Error("Guide schema must be in head.");
      for (const section of guide.sections) if (!document.querySelector("main").textContent.includes(section.body)) throw new Error("Missing SSR guide answer: " + section.title);
    }
  }
  const missing = await fetch(`http://127.0.0.1:${port}/not-a-public-page-aeo-check`, { headers });
  await missing.body?.cancel();
  if (missing.status !== 404) throw new Error("The schema head slot must not create new public routes.");
  const missingGuide = await fetch(`http://127.0.0.1:${port}/guides/not-a-public-guide`, { headers });
  await missingGuide.body?.cancel();
  if (missingGuide.status !== 404) throw new Error("Unknown guides must return 404.");
  const args = [
    "scripts/check-seo.py", "--base", `http://127.0.0.1:${port}`,
    "--canonical", SITE_URL, "--host", new URL(SITE_URL).host,
    "--expected", expected,
  ];
  if (preview) args.push("--preview");
  const checker = spawn("python3", args, { stdio: "inherit" });
  const code = await new Promise((resolve, reject) => {
    checker.once("error", reject);
    checker.once("exit", (status) => resolve(status));
  });
  if (code !== 0) throw new Error(`SEO ${preview ? "preview" : "production"} smoke check failed.`);
} finally {
  if (server.exitCode === null) {
    await new Promise((resolve) => {
      const timer = setTimeout(() => { server.kill("SIGKILL"); resolve(); }, 5000);
      timer.unref();
      server.once("exit", () => { clearTimeout(timer); resolve(); });
      server.kill("SIGTERM");
    });
  }
  await rm(directory, { recursive: true, force: true });
}
