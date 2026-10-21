import test from "node:test";
import assert from "node:assert/strict";
import { pages, treatments } from "../lib/content";
import { standaloneGuides } from "../lib/guides";
import { publicPages } from "../lib/public-pages";
import { guideStructuredData, guideText } from "../lib/guide-schema";
import { llmsFull } from "../lib/llms";
import { homeGuideSections } from "../lib/home-guide";
import { evidence } from "../lib/evidence";
import { monthlyStructuredData, monthlyPlanningText } from "../lib/monthly-schema";

test("treatment-specific answers have distinct questions, traceable sources and public contextual destinations", () => {
  const questions = new Set<string>();
  const publicPaths = new Set(publicPages().map(page => page.path));
  for (const treatment of treatments) {
    const page = pages[treatment.slug];
    assert.ok(page.treatment);
    assert.ok(page.faqs.length >= 4);
    for (const faq of page.faqs) {
      assert.equal(questions.has(faq.question), false, faq.question);
      questions.add(faq.question);
    }
    for (const section of page.sections) {
      for (const id of section.sources || []) assert.equal(new URL(evidence[id].url).protocol, "https:");
      for (const link of section.links || []) assert.ok(publicPaths.has(link.href), link.href);
    }
    assert.equal(/£\s?\d|\d+(?:\.\d+)?%\s*(?:APR|interest)|guaranteed acceptance/i.test(JSON.stringify(page.sections)), false);
  }
});

test("standalone guides share canonical registry, original article text and full LLM export without invented clinical review", () => {
  assert.equal(standaloneGuides.length, 2);
  const full = llmsFull();
  for (const guide of standaloneGuides) {
    assert.ok(publicPages().some(page => page.path === guide.path));
    assert.ok(guideText(guide).split(/\s+/).length >= 500);
    const schema = guideStructuredData(guide);
    assert.equal(schema.articleBody, guideText(guide));
    assert.equal(schema.url, "https://turkeyteethfinance.co.uk" + guide.path);
    assert.equal("reviewedBy" in schema, false);
    for (const section of guide.sections) {
      assert.ok(full.includes(section.body));
      for (const paragraph of section.paragraphs || []) assert.ok(full.includes(paragraph));
    }
  }
});

test("pricing calculations use confirmed packages, retain scope and do not imply standalone fees or credit offers", () => {
  const text = pages.prices.sections.flatMap(section => [section.body, ...(section.paragraphs || [])]).join(" ");
  assert.match(text, /£140 and £125/);
  assert.match(text, /£218\.75 and £210/);
  assert.match(text, /not standalone crown fees/);
  assert.match(text, /not a discount promise/);
  assert.match(text, /not a reason to restore healthy teeth/);
  assert.match(text, /not complication rates for Turkey/);
  assert.equal(/\d+(?:\.\d+)?%\s*(?:APR|interest)|£\d+\s*(?:per month|a month)|guaranteed acceptance/i.test(text), false);
  assert.equal(homeGuideSections.some(section => !!section.calculation), false);
  assert.equal(/an assumed £|Original payment example|Original budgeting example/.test(JSON.stringify(homeGuideSections)), false);
});

test("monthly planning has traceable quotations, dated national context and no loan illustration or clinical endorsement", () => {
  const page = pages["pay-monthly"];
  const schema = monthlyStructuredData();
  const full = llmsFull();
  assert.equal(schema.dateModified, page.lastModified);
  assert.equal(schema.articleBody, monthlyPlanningText());
  assert.equal("reviewedBy" in schema, false);
  for (const section of page.sections) {
    assert.ok(full.includes(section.body));
    for (const quote of section.quotes || []) {
      assert.ok(full.includes(`> ${quote.text}`));
      assert.ok(schema.articleBody.includes(quote.name));
      assert.ok(schema.citation.includes(evidence[quote.source].url));
    }
  }
  assert.match(schema.articleBody, /May 2024.*published in May 2025/);
  assert.match(schema.articleBody, /not statistically different/);
  assert.equal(/\d+(?:\.\d+)?%\s*(?:APR|interest)|£\d+\s*(?:per month|a month)|guaranteed acceptance|reviewed by a dentist/i.test(schema.articleBody), false);
});
