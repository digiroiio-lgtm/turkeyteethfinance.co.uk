import test from "node:test";
import { packageForId, packagePrice } from "../lib/packages";
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
      for (const link of section.links || []) {
        const destination = new URL(link.href, "https://turkeyteethfinance.co.uk");
        assert.equal(destination.origin, "https://turkeyteethfinance.co.uk");
        assert.ok(publicPaths.has(destination.pathname), link.href);
      }
    }
    const text = JSON.stringify(page.sections);
    assert.equal(/\d+(?:\.\d+)?%\s*(?:APR|interest)|£\d+\s*(?:per month|a month)|guaranteed acceptance/i.test(text), false);
    if (treatment.slug === "veneers-finance") {
      for (const id of ["veneers-16", "veneers-20"]) {
        assert.ok(text.includes(packagePrice(packageForId(id)!)));
      }
      assert.match(text, /not separately purchasable veneer fees/);
      assert.match(text, /not independently audited Akdeniz Dental results/);
    } else if (treatment.slug === "dental-implants-finance") {
      assert.ok(text.includes(packagePrice(packageForId("osstem-4-crowns-24")!)));
      assert.match(text, /not a price for one complete implant tooth/);
      assert.match(text, /not audited Akdeniz Dental outcomes/);
    } else if (treatment.slug === "zirconia-crowns-finance") {
      for (const id of ["zirconium-20", "zirconium-24"]) {
        assert.ok(text.includes(packagePrice(packageForId(id)!)));
      }
      assert.match(text, /not standalone crown fees/);
      assert.match(text, /not audited Akdeniz Dental outcomes/);
    } else if (treatment.slug === "all-on-4-finance") {
      assert.ok(text.includes(packagePrice(packageForId("osstem-4-crowns-24")!)));
      assert.match(text, /not an All-on-4 price/);
      assert.match(text, /not audited Akdeniz Dental outcomes/);
    } else if (treatment.slug === "smile-makeover-finance") {
      for (const id of ["zirconium-20", "zirconium-24", "veneers-16", "veneers-20", "osstem-4-crowns-24"]) {
        assert.ok(text.includes(packagePrice(packageForId(id)!)));
      }
      assert.match(text, /not standalone crown fees/);
      assert.match(text, /not separately purchasable veneer fees/);
      assert.match(text, /not audited Akdeniz Dental outcomes/);
    } else {
      assert.equal(/£\s?\d/.test(text), false);
    }
  }
});

test("standalone guides share canonical registry, original article text and full LLM export without invented clinical review", () => {
  assert.equal(standaloneGuides.length, 4);
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

test("monthly planning has sourced payment answers and no lender illustration or clinical endorsement", () => {
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
  assert.match(schema.articleBody, /Clinic stage payments are different/);
  assert.match(schema.articleBody, /Loan repayments need not begin after treatment/);
  assert.ok(page.sections.some(section => section.links?.some(link => link.href === "/finance-calculator")));
  assert.equal(/\d+(?:\.\d+)?%\s*(?:APR|interest)|£\d+\s*(?:per month|a month)|guaranteed acceptance|reviewed by a dentist/i.test(schema.articleBody), false);
});
