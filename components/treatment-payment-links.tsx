import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { packagePrice, treatmentPackages } from "@/lib/packages";

export function TreatmentPaymentLinks({ treatment }: { treatment: string }) {
  const items = treatmentPackages.filter(item => item.treatment === treatment);
  if (!items.length) return null;
  return (
    <section className="section treatment-payment-section" aria-labelledby="treatment-payment-heading">
      <div className="container">
        <div className="treatment-payment-intro">
          <p className="eyebrow"><Calculator size={18} aria-hidden="true" /> PAYMENT PLANNING</p>
          <h2 id="treatment-payment-heading">Explore monthly payments for {treatment.toLowerCase()}.</h2>
          <p>Choose a package to open the calculator with its published price already selected. Add your own upfront contribution, term and interest-rate assumption to compare repayments and total cost.</p>
        </div>
        <div className="treatment-payment-grid">
          {items.map(item => (
            <article className="treatment-payment-card" key={item.id}>
              <h3>{item.name}</h3>
              <p className="treatment-payment-price">{packagePrice(item)} <span>GBP · package price</span></p>
              <p>{item.stay} · Hotel and specified transfers included.</p>
              <Link href={`/finance-calculator?package=${item.id}#repayment-calculator`} className="button button-small" aria-label={`Estimate monthly payments for ${item.name}`}>
                Calculate monthly payments <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <p className="small treatment-payment-note">Subject to clinical assessment and a personalised written quote. Calculator results use your assumptions and are not lender offers or approval decisions. Flights, insurance, extra procedures and extra nights are excluded unless confirmed in your quote.</p>
        {treatment === "Dental implants" && <p className="small">This package combines four implants with 24 crowns. It is not a price for one implant tooth or an All-on-4 full-arch plan.</p>}
        <Link className="text-link" href="/prices#dental-treatment-packages">Check package inclusions and exclusions <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
