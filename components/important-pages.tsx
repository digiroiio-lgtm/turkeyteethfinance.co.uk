import Link from "next/link";

/** Crawlable, descriptive links to the six principal site destinations. */
export const sitelinkDestinations = [
  { href: "/prices", label: "Dental Prices", detail: "Compare treatment packages and what is included." },
  { href: "/pay-monthly", label: "Pay Monthly", detail: "Understand payment options and lender decisions." },
  { href: "/finance-calculator", label: "Finance Calculator", detail: "Estimate repayments using your own assumptions." },
  { href: "/how-it-works", label: "How It Works", detail: "Follow the treatment planning and travel process." },
  { href: "/reviews", label: "Patient Reviews", detail: "Read the available patient experience information." },
  { href: "/contact", label: "Contact Us", detail: "Ask the coordination team about your treatment enquiry." },
] as const;

export function ImportantPages() {
  return (
    <section className="section" aria-labelledby="important-pages-heading">
      <div className="container">
        <h2 id="important-pages-heading">Explore Turkey Teeth Finance</h2>
        <p>Find treatment prices, payment guidance and practical information for your journey.</p>
        <ul className="sitelinks-grid">
          {sitelinkDestinations.map(({ href, label, detail }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
