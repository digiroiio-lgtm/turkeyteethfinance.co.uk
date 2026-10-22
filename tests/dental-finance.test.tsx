import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import ContentPage from "../app/[slug]/page";
import StructuredHead from "../app/@structuredHead/[...path]/page";
import { dentalFinanceSections } from "../lib/dental-finance-planning";
import { pages } from "../lib/content";
import { packageForId, packagePrice } from "../lib/packages";
import { evidence } from "../lib/evidence";
import { llmsFull } from "../lib/llms";
import { publicationApproved } from "../lib/site";
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

test("dental finance renders substantial distinct explanations and attributed expert quotes", async () => {
  const document = new JSDOM(renderToStaticMarkup(<main>{await ContentPage({ params: Promise.resolve({ slug: "dental-finance" }) })}</main>)).window.document;
  assert.ok(words(document.querySelector("main")!.textContent || "") >= 2000);
  for (let i = 0; i < dentalFinanceSections.length; i++) {
    const section = document.getElementById(`section-${i + 1}`)!;
    const count = words(section.textContent || "");
    assert.ok(count >= 75 && count <= 300, `${i}: ${count}`);
  }
  for (const heading of [...document.querySelectorAll("h2")].slice(0, 5)) {
    assert.equal(heading.nextElementSibling?.tagName, "P");
    const count = words(heading.nextElementSibling?.textContent || "");
    assert.ok(count >= 40 && count <= 60, `${heading.textContent}: ${count}`);
  }
  assert.equal(document.querySelectorAll("blockquote[cite]").length, 2);
  assert.equal(document.querySelectorAll('a[data-analytics-action="finance"]').length, publicationApproved() ? 1 : 0);
  assert.ok(document.querySelector('a[href="/get-a-quote#treatment-enquiry"]'));
});

test("numeric context follows verified sources and shared prices without new credit illustrations", () => {
  const full = llmsFull();
  for (const section of dentalFinanceSections) {
    assert.ok(full.includes(section.body));
    for (const paragraph of section.paragraphs || []) assert.ok(full.includes(paragraph));
    for (const source of section.sources || []) assert.equal(new URL(evidence[source].url).protocol, "https:");
    for (const quote of section.quotes || []) {
      assert.ok(words(quote.text) <= 25);
      assert.ok(full.includes(quote.text));
      assert.ok(quote.name && quote.role && quote.attributionDate);
    }
  }
  const text = dentalFinanceSections.flatMap(s => [s.body, ...(s.paragraphs || [])]).join(" ");
  for (const id of ["zirconium-20", "zirconium-24", "veneers-16", "veneers-20", "osstem-4-crowns-24"]) assert.ok(text.includes(packagePrice(packageForId(id)!)));
  assert.match(text, /not credit examples/);
  assert.match(text, /not patient complication rates/);
  assert.match(text, /not statistically different/);
  assert.doesNotMatch(text, /\d+(?:\.\d+)?% APR|£\d+[.,\d]* (?:per month|a month)|guaranteed approval/i);
});

test("finance page retains the head WebPage and visible FAQ rather than mislabelling a credit offer", async () => {
  const document = new JSDOM(renderToStaticMarkup(await StructuredHead({ params: Promise.resolve({ path: ["dental-finance"] }) }))).window.document;
  const nodes = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => { const j = JSON.parse(s.textContent!); return j["@graph"] || [j]; });
  const page = nodes.find(n => n["@type"] === "WebPage");
  assert.ok(page);
  assert.equal(page.dateModified, pages["dental-finance"].lastModified);
  const faq = nodes.find(n => n["@type"] === "FAQPage");
  assert.deepEqual(faq.mainEntity.map((q: { name: string }) => q.name), pages["dental-finance"].faqs.map(f => f.question));
  assert.equal(nodes.some(n => ["LoanOrCredit", "FinancialProduct", "Article"].includes(n["@type"])), false);
});
