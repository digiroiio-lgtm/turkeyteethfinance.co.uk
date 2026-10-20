import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { publicPages } from "../lib/public-pages.ts";
import { canonicalUrl, SITE_URL } from "../lib/site.ts";

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
  const missing = await fetch(`http://127.0.0.1:${port}/not-a-public-page-aeo-check`, { headers });
  await missing.body?.cancel();
  if (missing.status !== 404) throw new Error("The schema head slot must not create new public routes.");
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
