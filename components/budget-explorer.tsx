"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import { Eyebrow } from "./ui";
import { PRIMARY_CTA } from "@/lib/public-copy";
const options = ["Veneers", "Dental implants", "All-on-4", "Smile makeover"];
export function BudgetExplorer({ answerIntro = false }: { answerIntro?: boolean }) {
  const [treatment, setTreatment] = useState(options[0]);
  const [cost, setCost] = useState(3500);
  const amount = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(cost);
  return (
    <section className="section budget-section">
      <div className="container">
        <div className="budget-panel">
          <div className="budget-intro">
            <Eyebrow>EXPLORE YOUR TREATMENT BUDGET</Eyebrow>
            <h2>
              Start with
              <br />
              <span className="gradient-text">a clearer picture.</span>
            </h2>
            <p>
              {answerIntro
                ? "Use the planner to record a treatment budget you would like to discuss, then request a personal estimate from the team. Moving the slider does not calculate a price, assess your eligibility or apply for credit. Your written treatment estimate and any lender quotation are separate documents."
                : "Choose a budget you would like to discuss with the team. Your personal treatment estimate comes after we understand your needs."}
            </p>
            <p className="information-note">
              <Info size={21} />
              <span>
                This is a budget planner, not a treatment price or a loan
                quotation.
              </span>
            </p>
          </div>
          <div className="budget-controls">
            <fieldset className="treatment-tabs">
              <legend className="sr-only">Treatment interest</legend>
              {options.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={treatment === t}
                  className={treatment === t ? "selected" : ""}
                  onClick={() => setTreatment(t)}
                >
                  {t}
                </button>
              ))}
            </fieldset>
            <div className="budget-value">
              <label htmlFor="treatment-budget">Budget to discuss</label>
              <output htmlFor="treatment-budget" aria-live="polite">
                {amount}
              </output>
            </div>
            <input
              id="treatment-budget"
              type="range"
              min="1000"
              max="10000"
              step="100"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              style={
                {
                  "--range-progress": `${((cost - 1000) / 9000) * 100}%`,
                } as React.CSSProperties
              }
            />
            <div className="range-labels">
              <span>£1,000</span>
              <span>£10,000</span>
            </div>
            <div className="budget-summary">
              <p className="budget-summary-title">Your next step: a personal quote</p>
              <ul>
                <li>
                  <Check size={16} />
                  Understand the proposed treatment
                </li>
                <li>
                  <Check size={16} />
                  Review available ways to pay
                </li>
                <li>
                  <Check size={16} />
                  No credit check through this planner
                </li>
              </ul>
            </div>
            <Link
              href={`/get-a-quote?treatment=${encodeURIComponent(treatment)}&budget=${cost}`}
              className="button button-small"
            >
              {PRIMARY_CTA}
              <ArrowRight size={17} />
            </Link>
            <p className="small budget-fineprint">
              Monthly repayments are not shown without verified, approved lender
              examples. Credit is subject to status, affordability and lender
              approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
