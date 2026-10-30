import { PaymentRouteComparison } from "./payment-route-comparison";
import Link from "next/link";
import { ukFinanceAnswer, ukFinanceQuestion } from "@/lib/dental-finance-planning";
import { packagePrice, packageQuoteHref, treatmentPackages } from "@/lib/packages";

export function FinanceAnswer() {
  return (
    <section className="section" aria-label="Finance for UK residents">
      <div className="container narrow">
        <h2 id="finance-uk-residents">{ukFinanceQuestion}</h2>
        <p className="answer-first"><strong>{ukFinanceAnswer}</strong></p>
        <PaymentRouteComparison embedded />
        <div id="finance-to-budget">
          <h3>From finance research to your own budget</h3>
          <p>Start from a confirmed package, then ask for a written estimate for your own teeth. Package prices are subject to clinical assessment.</p>
          <ul className="context-links">
            {treatmentPackages.map((item) => (
              <li key={item.id}>
                <Link href={`/prices#package-${item.id}`}>{item.name}: {packagePrice(item)}</Link>{" "}
                (<Link href={packageQuoteHref(item)}>request a quote</Link>)
              </li>
            ))}
            <li><Link href="/guides/compare-dental-quotes">Check what your written quote includes</Link></li>
            <li><Link href="/get-a-quote">Request a written treatment estimate</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
