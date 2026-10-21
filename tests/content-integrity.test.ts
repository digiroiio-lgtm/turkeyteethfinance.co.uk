import test from "node:test";
import assert from "node:assert/strict";
import { pages, treatments } from "../lib/content";
import { standaloneGuides } from "../lib/guides";
import { publicPages } from "../lib/public-pages";
import { guideStructuredData, guideText } from "../lib/guide-schema";
import { llmsFull } from "../lib/llms";
import { homeGuideSections } from "../lib/home-guide";
import { evidence } from "../lib/evidence";

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

test("pricing information and homepage budgets contain no assumed clinic prices or repayment examples", () => {
  assert.equal(/£\s?\d/.test(JSON.stringify(pages.prices)), false);
  assert.equal(homeGuideSections.some(section => !!section.calculation), false);
  assert.equal(/an assumed £|Original payment example|Original budgeting example/.test(JSON.stringify(homeGuideSections)), false);
});
