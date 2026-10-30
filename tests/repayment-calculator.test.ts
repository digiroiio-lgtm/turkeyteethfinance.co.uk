import test from "node:test";
import assert from "node:assert/strict";
import { estimateRepayments } from "../lib/repayment-calculator";
import { publicPages } from "../lib/public-pages";
import { llmsFull } from "../lib/llms";
import { calculatorContent } from "../lib/calculator-content";
test("repayment mathematics handles interest, contributions, zero-interest and fully paid costs", () => {
  const result = estimateRepayments(3000, 1000, 24, 12)!;
  assert.ok(Math.abs(result.monthly - 94.1469444465) < 0.000001);
  assert.equal(result.principal, 2000);
  assert.equal(result.includingDeposit, result.total + 1000);
  assert.equal(result.interest, result.total - 2000);
  assert.deepEqual(estimateRepayments(3000, 600, 24, 0), { principal: 2400, monthly: 100, total: 2400, interest: 0, includingDeposit: 3000 });
  assert.equal(estimateRepayments(3000, 3000, 24, 12)?.monthly, 0);
  assert.ok(estimateRepayments(3000, 0, 60, 12)!.interest > estimateRepayments(3000, 0, 24, 12)!.interest);
  assert.ok(Number.isFinite(estimateRepayments(3000, 0, 120, 1e-12)!.monthly));
});
test("invalid input cannot produce misleading negative or non-finite payments", () => {
  for (const args of [[0,0,24,10], [3000,-1,24,10], [3000,3001,24,10], [3000,0,0,10], [3000,0,24.5,10], [3000,0,121,10], [3000,0,24,-1], [3000,0,24,101], [NaN,0,24,10], [3000,0,24,Infinity]]) {
    assert.equal(estimateRepayments(...args as [number,number,number,number]), null);
  }
});
test("calculator method and limitations are discoverable in canonical registry and LLM export", () => {
  assert.ok(publicPages().some(page => page.path === "/finance-calculator"));
  const text = llmsFull();
  for (const section of calculatorContent.sections) {
    assert.ok(text.includes(section.body));
    for (const paragraph of section.paragraphs || []) assert.ok(text.includes(paragraph));
  }
});
