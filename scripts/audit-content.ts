import fs from "node:fs";
import path from "node:path";
import { JSDOM } from "jsdom";
import { publicPages } from "../lib/public-pages";
import { canonicalUrl } from "../lib/site";

const args = process.argv.slice(2);
const option = (key: string, fallback: string) => args.includes(key) ? args[args.indexOf(key) + 1] : fallback;
const root = option("--html-root", ".next/server/app");
const output = option("--output", "/tmp/content-audit.json");
const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;
const pathsFrom = option("--paths-from", "");
const oldPaths: Set<string> | undefined = pathsFrom ? new Set(JSON.parse(fs.readFileSync(pathsFrom, "utf8")).pages.map((page: { path: string }) => page.path)) : undefined;
const documents = publicPages().filter(page => !oldPaths || oldPaths.has(page.path)).map(page => {
  const file = path.join(root, page.path === "/" ? "index.html" : page.path.slice(1) + ".html");
  return { page, doc: new JSDOM(fs.readFileSync(file, "utf8")).window.document };
});
const questionCounts = new Map<string, number>();
for (const { doc } of documents) for (const q of doc.querySelectorAll(".faq-list summary")) {
  const key = q.textContent?.replace(/\+$/, "").trim() || "";
  questionCounts.set(key, (questionCounts.get(key) || 0) + 1);
}
const titleCounts = new Map<string, number>();
const h1Counts = new Map<string, number>();
for (const { doc } of documents) {
  for (const [map, text] of [[titleCounts, doc.title], [h1Counts, doc.querySelector("h1")?.textContent || ""]] as const) map.set(text, (map.get(text) || 0) + 1);
}
const rows = documents.map(({ page, doc }) => {
  const graph = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => {
    const data = JSON.parse(script.textContent || "{}");
    return data["@graph"] || [data];
  });
  const selector = ".editorial-card, .guide-article, .home-answer, .home-guide, .quote-aside";
  const owned = [...doc.querySelectorAll(selector)].filter(element => !element.parentElement?.closest(selector));
  const ownWords = wordCount(owned.map(e => e.textContent).join(" "));
  const contextualSources = owned.flatMap(e => [...e.querySelectorAll('a[href^="https://"]')]).length;
  const contextualLinks = owned.flatMap(e => [...e.querySelectorAll('a[href^="/"]')]).filter(a => !a.getAttribute("href")?.startsWith("/get-a-quote")).length;
  const faqs = [...doc.querySelectorAll(".faq-list summary")].map(e => e.textContent?.replace(/\+$/, "").trim() || "");
  const scopedFAQs = faqs.filter(q => (questionCounts.get(q) || 0) <= 2).length;
  const faqSchema = graph.find(g => g["@type"] === "FAQPage");
  const faqAnswers = [...doc.querySelectorAll(".faq-list details p")].map(e => e.textContent?.trim());
  const checks = {
    uniqueTitle: !!doc.title && titleCounts.get(doc.title) === 1,
    uniqueSingleH1: doc.querySelectorAll("h1").length === 1 && h1Counts.get(doc.querySelector("h1")?.textContent || "") === 1,
    canonicalAndIndex: doc.querySelector('link[rel="canonical"]')?.getAttribute("href") === canonicalUrl(page.path) && !doc.querySelector('meta[name="robots"]')?.getAttribute("content")?.includes("noindex"),
    webPageSchema: graph.some(g => g["@type"] === "WebPage" && g.url === canonicalUrl(page.path)),
    faqParity: !faqs.length || (faqSchema?.mainEntity?.length === faqs.length && faqSchema.mainEntity.every((q: { name: string; acceptedAnswer: { text: string } }, i: number) => q.name === faqs[i] && q.acceptedAnswer.text === faqAnswers[i])),
    substantiveOwnCopy: ownWords >= 350,
    specificFAQs: scopedFAQs >= 3,
    contextualSources: contextualSources >= 1,
    contextualInternalLinks: contextualLinks >= 2,
    attributableContent: !!doc.querySelector('time[datetime]') && /Prepared by|Source checked|Information prepared/i.test(doc.querySelector("main")?.textContent || ""),
  };
  return { path: page.path, title: doc.title, h1: doc.querySelector("h1")?.textContent, ownWords, scopedFAQs, contextualSources, contextualLinks, checks, score: Object.values(checks).filter(Boolean).length * 10 };
});
const scoped = rows.filter(r => !["/privacy", "/terms"].includes(r.path));
const report = { rubric: "Internal implementation readiness, not a Google, SERP-ranking or third-party GEO score. Ten documented binary checks, 10 points each. Legal pages receive technical inspection but are excluded from the scoped average.", repeatedFAQInstances: [...questionCounts.values()].reduce((sum, count) => sum + Math.max(0, count - 1), 0), pages: rows, scopePages: scoped.length, average: Math.round(scoped.reduce((sum, r) => sum + r.score, 0) / scoped.length) };
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ output, pages: rows.length, scopePages: report.scopePages, average: report.average, scores: rows.map(({ path, score, ownWords }) => ({ path, score, ownWords })) }, null, 2));
