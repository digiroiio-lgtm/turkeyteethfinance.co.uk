"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { packageForId, treatmentPackages } from "@/lib/packages";
import { estimateRepayments } from "@/lib/repayment-calculator";
const money = (value: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
export function RepaymentCalculator() {
  const query = useSearchParams();
  const selected = packageForId(query.get("package"));
  return <CalculatorFields key={selected?.id || "custom"} initialPackage={selected?.id} />;
}
export function CalculatorFields({ initialPackage }: { initialPackage?: string }) {
  const selected = packageForId(initialPackage);
  const [packageId, setPackageId] = useState(selected?.id || "");
  const [cost, setCost] = useState(String(selected?.price || 3500));
  const [deposit, setDeposit] = useState("0");
  const [months, setMonths] = useState("24");
  const [annualRate, setAnnualRate] = useState("");
  const complete = [cost, deposit, months, annualRate].every(value => value.trim() !== "");
  const result = complete ? estimateRepayments(Number(cost), Number(deposit), Number(months), Number(annualRate)) : null;
  const termComparison = result ? [12, 24, 36, 60].map(term => ({ term, result: estimateRepayments(Number(cost), Number(deposit), term, Number(annualRate))! })) : [];
  return <div className="repayment-tool">
    <div className="repayment-fields">
      <label htmlFor="repayment-package">Start with a published treatment package</label>
      <select id="repayment-package" value={packageId} onChange={event => {
        const item = packageForId(event.target.value); setPackageId(item?.id || "");
        if (item) setCost(String(item.price));
      }}><option value="">Custom treatment budget</option>{treatmentPackages.map(item => <option key={item.id} value={item.id}>{item.name} — {money(item.price)}</option>)}</select>
      <label htmlFor="repayment-cost">Treatment cost (£)</label>
      <input id="repayment-cost" type="number" inputMode="decimal" min="0.01" max="100000" step="0.01" value={cost} onChange={event => { setCost(event.target.value); setPackageId(""); }} />
      <label htmlFor="repayment-deposit">Upfront contribution (£)</label>
      <input id="repayment-deposit" type="number" inputMode="decimal" min="0" max={Number(cost) || 100000} step="0.01" value={deposit} onChange={event => setDeposit(event.target.value)} aria-describedby="contribution-note" />
      <p className="small" id="contribution-note">Your own contribution, not a clinic’s required booking deposit.</p>
      <label htmlFor="repayment-months">Repayment term (months)</label>
      <input id="repayment-months" type="number" inputMode="numeric" min="1" max="120" step="1" value={months} onChange={event => setMonths(event.target.value)} />
      <label htmlFor="repayment-rate">Assumed annual interest rate (%)</label>
      <input id="repayment-rate" type="number" inputMode="decimal" min="0" max="100" step="0.01" value={annualRate} placeholder="Enter your own assumption" onChange={event => setAnnualRate(event.target.value)} aria-describedby="rate-note" />
      <p className="small" id="rate-note">Annual nominal interest rate, not APR. No fees are included. Entering zero tests a mathematical scenario; it does not indicate an available interest-free offer.</p>
    </div>
    <div className="repayment-results" role="status" aria-live="polite" aria-atomic="true">
      <h3>Your illustrative estimate</h3>
      {result ? <dl>
        <div><dt>Amount financed</dt><dd>{money(result.principal)}</dd></div>
        <div><dt>Estimated monthly repayment</dt><dd>{money(result.monthly)}</dd></div>
        <div><dt>Total interest</dt><dd>{money(result.interest)}</dd></div>
        <div><dt>Total loan repayments</dt><dd>{money(result.total)}</dd></div>
        <div><dt>Total including upfront contribution</dt><dd>{money(result.includingDeposit)}</dd></div>
      </dl> : <p>{complete ? "Check your inputs: cost must be above zero and at most £100,000; the contribution cannot exceed the cost; choose 1–120 whole months and a rate between 0 and 100%." : "Enter your own interest-rate assumption to see an estimate. No lender rate is selected for you."}</p>}
      <p className="small">Illustration only. This does not check your credit file, assess eligibility or apply for finance. Actual lender calculations, fees and payment dates can differ. Displayed figures are rounded; a final payment may differ.</p>
      <Link className="button button-small" href={packageId ? `/get-a-quote?package=${packageId}#treatment-enquiry` : "/get-a-quote#treatment-enquiry"}>Request a written treatment quote</Link>
    </div>
    {result && <div className="table-scroll repayment-comparison"><table className="cost-table"><caption>Compare terms using your inputs and the same assumed rate</caption><thead><tr><th scope="col">Months</th><th scope="col">Monthly estimate</th><th scope="col">Total interest</th><th scope="col">Total loan repayments</th></tr></thead><tbody>{termComparison.map(({ term, result: row }) => <tr key={term}><th scope="row">{term}</th><td>{money(row.monthly)}</td><td>{money(row.interest)}</td><td>{money(row.total)}</td></tr>)}</tbody></table></div>}
  </div>;
}
