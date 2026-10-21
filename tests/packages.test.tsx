import test from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import { TreatmentPackages } from "../components/treatment-packages";
import { packageStructuredData } from "../lib/package-schema";
import { packageInclusions, packagePrice, packageQuoteHref, packageWhatsAppHref, treatmentPackages } from "../lib/packages";
import { llmsFull } from "../lib/llms";
test("five confirmed cards, Service offers, stay, inclusions, quote paths and LLM text agree", () => {
  assert.deepEqual(treatmentPackages.map(item => item.price), [2800, 3000, 3500, 4200, 5840]);
  const document = new JSDOM(renderToStaticMarkup(<TreatmentPackages />)).window.document;
  assert.equal(document.querySelectorAll(".package-card").length, 5); assert.equal(document.querySelectorAll(".package-popular").length, 1); assert.equal(document.querySelector(".package-popular")?.id, "package-zirconium-24");
  const offers = packageStructuredData().itemListElement;
  for (const [index, item] of treatmentPackages.entries()) {
    const card = document.getElementById("package-" + item.id)!;
    assert.ok(card.textContent!.includes(packagePrice(item))); assert.ok(card.textContent!.includes(item.stay));
    for (const inclusion of packageInclusions) assert.ok(card.textContent!.includes(inclusion));
    assert.equal(card.querySelector('a[data-analytics-action="quote"]')?.getAttribute("href"), packageQuoteHref(item));
    assert.equal(new URL(packageWhatsAppHref(item)).pathname, "/905353998999");
    assert.equal(offers[index].price, item.price); assert.equal(offers[index].priceCurrency, "GBP"); assert.equal(offers[index].itemOffered["@type"], "Service");
    assert.ok(llmsFull().includes(item.name)); assert.ok(llmsFull().includes(packagePrice(item)));
  }
  assert.equal(new JSDOM(renderToStaticMarkup(<TreatmentPackages preview />)).window.document.querySelectorAll(".package-card").length, 3);
});
