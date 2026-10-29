import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Moon, Sparkles } from "lucide-react";
import { packageCondition, packageInclusions, packageIntro, packagePrice, packageQuoteHref, packageWhatsAppHref, treatmentPackages } from "@/lib/packages";
export function TreatmentPackages({ preview = false }: { preview?: boolean }) {
  const items = preview ? treatmentPackages.filter(item => ["zirconium-24", "veneers-16", "osstem-4-crowns-24"].includes(item.id)) : treatmentPackages;
  return <section className="section packages-section" id="dental-treatment-packages" aria-labelledby="packages-heading" data-package-list={preview ? "packages_preview" : "packages_full"}><div className="container">
    <div className="section-heading"><p className="eyebrow">DENTAL TREATMENT PACKAGES</p><h2 id="packages-heading">Dental treatment packages <span className="gradient-text">in Antalya.</span></h2><p>{packageIntro}</p></div>
    <div className="package-grid">{items.map(item => <article className={`package-card${item.popular ? " package-popular" : ""}`} id={`package-${item.id}`} key={item.id}>
      {item.popular && <p className="package-badge"><Sparkles size={15} aria-hidden="true" /> Popular Choice</p>}
      <p className="package-kicker">{item.visits === 2 ? "TWO-VISIT PACKAGE" : "TREATMENT & STAY"}</p><h3>{item.name}</h3><p className="package-detail">{item.detail}</p>
      <p className="package-price">{packagePrice(item)} <span>GBP · package price</span></p><p className="package-stay"><Moon size={18} aria-hidden="true" /> {item.stay}</p>
      <ul className="package-inclusions">{packageInclusions.map(inclusion => <li key={inclusion}><Check size={17} aria-hidden="true" /><span>{inclusion}</span></li>)}</ul>
      {!preview && <dl className="package-facts"><div><dt>Visits</dt><dd>{item.visits === 1 ? "One visit" : `${item.visits} visits`}</dd></div><div><dt>Not included in the package price</dt><dd>Flights, insurance, additional procedures and any extra nights</dd></div><div><dt>Payment dates</dt><dd>Ask for the payment schedule in your written quote</dd></div></dl>}
      <p className="package-assessment">Subject to clinical assessment and personalised treatment planning.</p>
      <div className="package-actions"><Link href={packageQuoteHref(item)} className="button button-small" data-analytics-action="quote" data-analytics-location="package_card" data-analytics-package={item.id} aria-label={`Get a Free Quote for ${item.name}`}>Get a Free Quote <ArrowRight size={17} aria-hidden="true" /></Link>
      <a href={packageWhatsAppHref(item)} className="package-whatsapp" target="_blank" rel="noopener noreferrer" data-analytics-action="whatsapp" data-analytics-location="package_card" data-analytics-package={item.id} aria-label={`Enquire on WhatsApp about ${item.name}`}><MessageCircle size={18} aria-hidden="true" /> Enquire on WhatsApp</a>
      <Link className="package-treatment-link" href={item.treatmentPath}>Explore the treatment <ArrowRight size={14} aria-hidden="true" /></Link></div>
    </article>)}</div>
    <div className="package-footnote"><p>{packageCondition} Ask about flights, insurance, additional procedures and any extra nights separately.</p><p>{preview ? <Link href="/prices#dental-treatment-packages" className="text-link" data-analytics-action="packages" data-analytics-location="packages_preview">Compare all five packages <ArrowRight size={17} aria-hidden="true" /></Link> : <><Link href="/guides/compare-dental-quotes">Compare written quotes</Link> · <Link href="/guides/plan-dental-visit-antalya">Plan your visits</Link></>}</p></div>
  </div></section>;
}
