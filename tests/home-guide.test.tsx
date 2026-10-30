import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import Home from "../app/page";
import { homeContent } from "../lib/content";
import { homeGuideSections, homeGuideText, homeStructuredData, guideSource } from "../lib/home-guide";
import { packageForId } from "../lib/packages";
import { llmsFull } from "../lib/llms";

const words = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

test("the homepage renders substantial visible copy and direct answers below its first five headings", () => {
  const html = renderToStaticMarkup(<main><Home /></main>);
  const document = new JSDOM(html).window.document;
  assert.ok(words(document.body.textContent || "") >= 2000);
  const date = document.querySelector("time");
  assert.equal(date?.getAttribute("datetime"), homeContent.lastModified);
  assert.equal(date?.textContent, new Date(homeContent.lastModified + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }));
  for (const heading of [...document.querySelectorAll("h2")].slice(0, 5)) {
    const answer = heading.nextElementSibling;
    assert.equal(answer?.tagName, "P", heading.textContent || "");
    const count = words(answer?.textContent || "");
    assert.ok(count >= 40 && count <= 60, heading.textContent + ": " + count);
  }
  for (const section of homeGuideSections) {
    const content = document.getElementById(section.id)!;
    assert.ok(content, section.id);
    const count = words(content.textContent || "");
    assert.ok(count >= 75 && count <= 300, section.id + ": " + count);
  }
  assert.equal(document.querySelectorAll("blockquote[cite]").length, 3);
});

test("article dates, body and attribution describe the visible guide without invented credentials", () => {
  const graph = homeStructuredData()["@graph"];
  const article = graph.find((node) => node["@type"] === "Article")!;
  assert.equal(article.dateModified, homeContent.lastModified);
  assert.equal(article.articleBody, homeGuideText());
  assert.ok(article.author);
  assert.equal("reviewedBy" in article, false);
  for (const section of homeGuideSections) {
    for (const id of section.sourceIds) assert.equal(new URL(guideSource(id).url).protocol, "https:");
    if (section.quote) {
      assert.ok(words(section.quote.text) <= 25);
      assert.ok(section.quote.name && section.quote.role);
      assert.equal(new URL(guideSource(section.quote.sourceId).url).protocol, "https:");
    }
  }
});

test("LLM full text follows every homepage guide answer, source and quotation", () => {
  const full = llmsFull();
  for (const section of homeGuideSections) {
    assert.ok(full.includes(section.answer));
    for (const paragraph of section.paragraphs) assert.ok(full.includes(paragraph));
    for (const id of section.sourceIds) assert.ok(full.includes(guideSource(id).url));
    if (section.quote) assert.ok(full.includes(section.quote.text));
  }
});


test("homepage numeric comparisons use confirmed package totals without implying standalone treatment fees", () => {
  const text = homeGuideText();
  const crowns20 = packageForId("zirconium-20")!;
  const crowns24 = packageForId("zirconium-24")!;
  const veneers16 = packageForId("veneers-16")!;
  const veneers20 = packageForId("veneers-20")!;
  const implant = packageForId("osstem-4-crowns-24")!;
  assert.equal(crowns24.price - crowns20.price, 200);
  assert.equal(veneers20.price - veneers16.price, 700);
  assert.equal(implant.price - crowns20.price, 3040);
  assert.match(text, /£140.*£125/);
  assert.match(text, /£218\.75 and £210/);
  assert.match(text, /£200 difference/);
  assert.match(text, /£700 difference/);
  assert.match(text, /£3,040 above/);
  assert.match(text, /not standalone tooth prices/);
  assert.match(text, /procedures differ/);
});
