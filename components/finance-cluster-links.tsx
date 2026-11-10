import Link from "next/link";

const destinations = [
  { href: "/", title: "Turkey teeth finance", copy: "Start with the UK patient overview of dental treatment in Turkey and the separate ways to pay." },
  { href: "/pay-monthly", title: "Pay monthly for Turkey teeth", copy: "Compare monthly borrowing with clinic stage payments and understand what to check." },
  { href: "/dental-finance", title: "Dental finance in Turkey for UK patients", copy: "Understand treatment estimates, brokers, lenders and the separate credit process." },
  { href: "/finance-calculator", title: "Turkey teeth finance calculator", copy: "Model repayments using your own amount, rate and term assumptions." },
  { href: "/finance-eligibility", title: "UK dental finance eligibility and credit checks", copy: "Review the questions to ask before using a broker or lender application." },
  { href: "/prices", title: "Turkey teeth prices and treatment packages", copy: "Check confirmed package scope and inclusions before considering a budget." },
  { href: "/veneers-turkey-cost", title: "Veneers in Turkey: what the price covers", copy: "See the published veneer packages, E.max versus porcelain and the costs outside the package." },
  { href: "/dental-implants-turkey-prices", title: "Dental implants in Turkey: what the price covers", copy: "See the published implant package, the two visits and what can change the final estimate." },
];
const clusterSlugs = new Set(["pay-monthly", "dental-finance", "finance-calculator", "finance-eligibility", "finance-faq", "prices", "smile-makeover-finance", "all-on-4-finance", "dental-implants-finance", "veneers-finance", "zirconia-crowns-finance", "how-it-works", "reviews", "before-and-after", "our-clinic", "all-on-6-finance", "veneers-turkey-cost", "dental-implants-turkey-prices"]);
export function FinanceClusterLinks({ currentSlug }: { currentSlug: string }) {
  if (!clusterSlugs.has(currentSlug)) return null;
  return (
    <section className="section finance-cluster" aria-labelledby="finance-cluster-heading">
      <div className="container narrow">
        <h2 id="finance-cluster-heading">Explore Turkey teeth finance and payment information</h2>
        <p>These guides cover different parts of the decision. A treatment estimate is not a credit application, and any borrowing decision belongs to the lender.</p>
        <ul className="context-links">
          {destinations.filter(item => item.href !== `/${currentSlug}`).map(item => (
            <li key={item.href}><Link href={item.href}>{item.title}</Link><p>{item.copy}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
