import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import ContentPage from "../app/[slug]/page";
import StructuredHead from "../app/@structuredHead/[...path]/page";
import { guidePlanningSections } from "../lib/guide-planning";
import { guidesDirectoryStructuredData } from "../lib/guides-directory-schema";
import { evidence } from "../lib/evidence";
import { guideArticles } from "../lib/guides";
import { llmsFull } from "../lib/llms";
import { packageForId, packagePrice } from "../lib/packages";
const words = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

test("guides hub serves substantial answers, usable guide destinations and attributed quotations", async () => {
  const document = new JSDOM(renderToStaticMarkup(<main>{await ContentPage({ params: Promise.resolve({ slug: "guides" }) })}</main>)).window.document;
  assert.ok(words(document.querySelector("main")!.textContent || "") >= 2000);
  for (const heading of [...document.querySelectorAll("h2")].slice(0, 5)) {
    const answer = heading.nextElementSibling;
    assert.equal(answer?.tagName, "P");
    const count = words(answer?.textContent || "");
    assert.ok(count >= 40 && count <= 60, heading.textContent + ": " + count);
  }
  for (let index = 0; index < guidePlanningSections.length; index++) {
    const count = words(document.getElementById(`section-${index + 1}`)!.textContent || "");
    assert.ok(count >= 75 && count <= 300, `${index}: ${count}`);
  }
  assert.equal(document.querySelectorAll("blockquote[cite]").length, 2);
  for (const item of guidesDirectoryStructuredData().itemListElement) {
    const path = new URL(item.url).pathname + new URL(item.url).hash;
    assert.ok([...document.querySelectorAll("a")].some(link => link.getAttribute("href") === path));
    if (new URL(item.url).hash) assert.ok(document.getElementById(new URL(item.url).hash.slice(1)));
  }
});

test("hub facts stay sourced, package prices shared and LLM copy synchronised", () => {
  const full = llmsFull();
  for (const section of guidePlanningSections) {
    assert.ok(full.includes(section.body));
    for (const paragraph of section.paragraphs || []) assert.ok(full.includes(paragraph));
    for (const source of section.sources || []) assert.equal(new URL(evidence[source].url).protocol, "https:");
    for (const quote of section.quotes || []) {
      assert.ok(full.includes(quote.text));
      assert.ok(words(quote.text) <= 25);
      assert.ok(quote.name && quote.role && quote.attributionDate);
    }
  }
  const text = guidePlanningSections.flatMap(s => [s.body, ...(s.paragraphs || [])]).join(" ");
  for (const id of ["zirconium-20", "zirconium-24", "veneers-16", "veneers-20", "osstem-4-crowns-24"]) assert.ok(text.includes(packagePrice(packageForId(id)!)));
  assert.match(text, /not patient complication rates/);
  assert.doesNotMatch(text, /\d+(?:\.\d+)?% APR|guaranteed approval|per month/i);
});

test("directory JSON-LD is emitted through the head slot and matches all visible entries", async () => {
  const html = renderToStaticMarkup(await StructuredHead({ params: Promise.resolve({ path: ["guides"] }) }));
  const document = new JSDOM(html).window.document;
  const data = [...document.querySelectorAll('script[type="application/ld+json"]')].map(script => JSON.parse(script.textContent!));
  const directory = data.find(node => node["@type"] === "ItemList");
  assert.deepEqual(directory, guidesDirectoryStructuredData());
  assert.equal(directory.numberOfItems, guideArticles.length);
  assert.equal(data.some(node => node["@type"] === "Article"), false);
});
