import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import ContentPage from "../app/[slug]/page";
import StructuredHead from "../app/@structuredHead/[...path]/page";
import { clinicPlanningSections } from "../lib/clinic-planning";
import { clinicProfile, evidence } from "../lib/evidence";
import { packageForId, packagePrice } from "../lib/packages";
import { pages } from "../lib/content";
import { llmsFull } from "../lib/llms";
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

test("clinic page serves substantial modular answers, real profile links and two attributed quotations", async () => {
  const document = new JSDOM(renderToStaticMarkup(<main>{await ContentPage({ params: Promise.resolve({ slug: "our-clinic" }) })}</main>)).window.document;
  assert.ok(words(document.querySelector("main")!.textContent || "") >= 2000);
  for (let i = 0; i < clinicPlanningSections.length; i++) {
    const section = document.getElementById(`section-${i + 1}`)!;
    const count = words(section.textContent || "");
    assert.ok(count >= 75 && count <= 300, `${i}: ${count}`);
  }
  assert.equal(document.querySelectorAll("blockquote[cite]").length, 2);
  for (const clinician of clinicProfile.clinicians) {
    assert.ok([...document.querySelectorAll("a")].some(a => a.href === clinician.url));
    assert.ok(document.body.textContent?.includes(clinician.education));
  }
  assert.ok(document.body.textContent?.includes("Source checked: 22 October 2026"));
  assert.ok(document.querySelector('a[href="/get-a-quote#treatment-enquiry"]'));
});

test("clinic research remains qualified, linked and consistent with shared prices and LLM text", () => {
  const full = llmsFull();
  for (const section of clinicPlanningSections) {
    assert.ok(full.includes(section.body));
    for (const paragraph of section.paragraphs || []) assert.ok(full.includes(paragraph));
    for (const source of section.sources || []) assert.equal(new URL(evidence[source].url).protocol, "https:");
    for (const quote of section.quotes || []) {
      assert.ok(full.includes(quote.text));
      assert.ok(words(quote.text) <= 25);
      assert.ok(quote.name && quote.role && quote.attributionDate);
    }
  }
  const text = clinicPlanningSections.flatMap(s => [s.body, ...(s.paragraphs || [])]).join(" ");
  assert.match(text, /not an audited Akdeniz Dental survival rate/);
  assert.match(text, /not the proportion of travelling patients/);
  assert.match(text, /not a current repair tariff/);
  assert.doesNotMatch(text, /\d+(?:\.\d+)?% APR|guaranteed (?:approval|results)|\d+ patients per month/i);
  for (const id of ["zirconium-20", "zirconium-24", "veneers-16", "veneers-20", "osstem-4-crowns-24"]) assert.ok(text.includes(packagePrice(packageForId(id)!)));
});

test("head clinic identity and FAQs match the actual provider and visible content", async () => {
  const document = new JSDOM(renderToStaticMarkup(await StructuredHead({ params: Promise.resolve({ path: ["our-clinic"] }) }))).window.document;
  const nodes = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => { const j = JSON.parse(s.textContent!); return j["@graph"] || [j]; });
  const clinic = nodes.find(n => n["@type"] === "Dentist");
  assert.equal(clinic.name, clinicProfile.name);
  assert.equal(clinic.telephone, clinicProfile.telephone);
  assert.equal(clinic.address.streetAddress, clinicProfile.streetAddress);
  assert.equal("aggregateRating" in clinic, false);
  assert.equal("review" in clinic, false);
  assert.equal(nodes.find(n => n["@type"] === "WebPage").dateModified, pages["our-clinic"].lastModified);
  assert.deepEqual(nodes.find(n => n["@type"] === "FAQPage").mainEntity.map((q: { name: string }) => q.name), pages["our-clinic"].faqs.map(f => f.question));
});
