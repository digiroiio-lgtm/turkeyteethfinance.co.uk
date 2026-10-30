import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import ContentPage from "../app/[slug]/page";
import StructuredHead from "../app/@structuredHead/[...path]/page";
import { expandedTreatmentPages, implantComparison } from "../lib/expanded-treatments";
import { pages } from "../lib/content";
import { publicPages } from "../lib/public-pages";
import { treatmentArticle } from "../lib/treatment-schema";
import { llmsFull } from "../lib/llms";
import { leadSchema } from "../lib/lead-validation";
import { treatments } from "../lib/treatments";

test("new treatment pages expose matching visible answers, FAQs, Article schema and LLM text", async () => {
  const full = llmsFull();
  for (const slug of Object.keys(expandedTreatmentPages)) {
    const document = new JSDOM(renderToStaticMarkup(<main>{await ContentPage({params: Promise.resolve({slug})})}</main>)).window.document;
    const head = new JSDOM(renderToStaticMarkup(await StructuredHead({params: Promise.resolve({path:[slug]})}))).window.document;
    const nodes = [...head.querySelectorAll('script[type="application/ld+json"]')].flatMap(el => { const value = JSON.parse(el.textContent!); return value["@graph"] || [value]; });
    assert.ok(publicPages().some(p => p.path === "/" + slug));
    assert.equal(document.querySelectorAll("h1").length, 1);
    assert.equal(nodes.filter(n => n["@type"] === "Article").length, 1);
    assert.equal(nodes.find(n => n["@type"] === "Article").articleBody, treatmentArticle(slug).articleBody);
    assert.deepEqual(nodes.find(n => n["@type"] === "FAQPage").mainEntity.map((q: {name:string})=>q.name), pages[slug].faqs.map(q=>q.question));
    for (const s of pages[slug].sections) {
      assert.ok(document.body.textContent!.includes(s.body));
      assert.ok(full.includes(s.body));
    }
    assert.equal("reviewedBy" in treatmentArticle(slug), false);
    const quoteLink = document.querySelector('a[data-analytics-location="hero"]')!;
    assert.equal(new URL(quoteLink.getAttribute("href")!,"https://example.com").searchParams.get("treatment"), pages[slug].treatment);
  }
});

test("full-mouth comparison, E.max scope and treatment discovery retain clinical distinctions", () => {
  assert.equal(implantComparison.length, 3);
  assert.deepEqual(treatments.slice(0,3).map(t=>t.slug), ["full-mouth-dental-implants-turkey","all-on-6-finance","veneers-finance"]);
  assert.equal(treatments[4].slug, "composite-bonding-turkey");
  assert.match(pages["veneers-finance"].sections[0].paragraphs!.join(" "), /do not specify that every case uses E.max/);
  assert.match(pages["composite-bonding-turkey"].sections[0].paragraphs!.join(" "), /does not confirm an Akdeniz Dental bonding package/);
});

test("new enquiry interests are accepted while unrelated packages remain rejected", () => {
  const base = { teeth:"", concern:"I would like a written estimate", notes:"", fullName:"Test Patient", email:"test@example.com", whatsapp:"", preferredContact:"email", timeframe:"Not sure yet", budget:"", dataConsent:true, healthConsent:true, marketingConsent:false, website:"" };
  for (const treatment of ["Full mouth dental implants","All-on-6","Composite bonding"]) {
    assert.ok(leadSchema.safeParse({...base,treatment}).success, treatment);
    assert.equal(leadSchema.safeParse({...base,treatment,packageId:"osstem-4-crowns-24"}).success, false);
  }
});
