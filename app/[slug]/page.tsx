import { TreatmentPackages } from "@/components/treatment-packages";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";
import { pages } from "@/lib/content";
import { packagePrice, treatmentPackages } from "@/lib/packages";
import {
  routeSlugs,
  financeApplicationUrl,
  publicationApproved,
  leadsConfigured,
} from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/hero";
import { BudgetExplorer } from "@/components/budget-explorer";
import { QuoteForm } from "@/components/quote-form";
import {
  ConversionBanner,
  FAQSection,
  FinanceNotice,
  QuoteCTA,
} from "@/components/ui";
import {
  TrustStrip,
  Journey,
  TreatmentGrid,
  EligibilityPanel,
  CostTable,
  RelatedLinks,
  Guides,
  Sources,
  QuoteIntro,
  CarePanel,
} from "@/components/sections";
import { ContentAttribution, EditorialSections, ClinicEvidence, PatientEvidence } from "@/components/editorial";
import { monthlyPlanning } from "@/lib/monthly-planning";
import { financeAnswer } from "@/lib/price-planning";
export const dynamicParams = false;
export function generateStaticParams() {
  return routeSlugs.map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) return {};
  return pageMetadata(p.title, p.description, `/${slug}`);
}
const packagesForTreatment = (treatment?: string) =>
  treatmentPackages.filter((item) => item.treatment === treatment);
const packageScopeNote: Record<string, string> = {
  "Veneers": "These are set-number packages, not a fee per veneer, so ask which teeth are included and whether any need crowns or other preparation instead.",
  "Dental implants": "The package combines four implants with 24 crowns. It is not a price for one implant tooth or for a full-arch plan, so ask which implants and crowns are specified for your mouth.",
  "Zirconia crowns": "These are set-number packages, not a standalone fee per crown, so ask which teeth are included and what preparation they need.",
};

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) notFound();
  const financeUrl = publicationApproved()
    ? financeApplicationUrl()
    : undefined;
  return (
    <>
      <Hero
        label={p.label}
        heading={p.heading}
        accent={p.accent}
        intro={p.intro}
        treatment={p.treatment}
        type={
          p.kind === "monthly"
            ? "monthly"
            : p.kind === "journey"
              ? "journey"
              : "inner"
        }
      />
      <div className="container breadcrumbs">
        <nav aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={14} />
          <span aria-current="page">{p.label.toLowerCase()}</span>
        </nav>
      </div>
      <ContentAttribution date={p.lastModified} />
      {p.kind === "monthly" && (
        <>
          <section className="section" aria-label="Short answer">
            <div className="container narrow">
              <p className="answer-first"><strong>{monthlyPlanning.answer}</strong></p>
            </div>
          </section>
          <TrustStrip />
          <BudgetExplorer />
          <article className="section guide-article" id="monthly-planning-guide" aria-label={monthlyPlanning.title}>
            <div className="container narrow">
              <p className="eyebrow">YOUR PAYMENT PLANNING GUIDE</p>
              <h2>{monthlyPlanning.title}</h2>
              <p>{monthlyPlanning.intro}</p>
              <EditorialSections sections={p.sections} article />
              <QuoteCTA />
            </div>
          </article>
          <TreatmentGrid compact />
        </>
      )}
      {p.kind === "journey" && <Journey detailed />}
      {(p.kind === "quote" || p.kind === "contact") && (
        <section className="section quote-section" id="treatment-enquiry">
          <div className="container quote-layout">
            <QuoteIntro />
            <QuoteForm
              available={leadsConfigured()}
              turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            />
          </div>
        </section>
      )}
      {p.kind === "eligibility" && <EligibilityPanel />}
      {p.kind === "prices" && (
        <>
          <section className="section" aria-label="Package price and finance">
            <div className="container narrow">
              <p className="answer-first"><strong>{financeAnswer}</strong></p>
            </div>
          </section>
          <TreatmentPackages />
          <CostTable />
        </>
      )}
      {(p.kind === "results" || p.kind === "reviews") && <PatientEvidence kind={p.kind} />}
      {p.kind === "clinic" && <><CarePanel answerIntro /><ClinicEvidence /></>}
      {p.kind === "guides" && <Guides />}
      {p.kind !== "monthly" && p.sections.length > 0 && (
        <section className="section editorial-section">
          <div className={(p.kind === "guides" || p.kind === "clinic" || slug === "dental-finance" || slug === "finance-faq" || slug === "get-a-quote" || slug === "veneers-finance" || slug === "dental-implants-finance" || slug === "zirconia-crowns-finance" || slug === "all-on-4-finance" || slug === "smile-makeover-finance") ? "container narrow" : "container"}><EditorialSections sections={p.sections} article={p.kind === "guides" || p.kind === "clinic" || slug === "dental-finance" || slug === "finance-faq" || slug === "get-a-quote" || slug === "veneers-finance" || slug === "dental-implants-finance" || slug === "zirconia-crowns-finance" || slug === "all-on-4-finance" || slug === "smile-makeover-finance"} /></div>
        </section>
      )}
      {slug === "dental-finance" && (
        <section className="section">
          <div className="container finance-action">
            <h2>Start with your treatment quote.</h2>
            <p>
              Your treatment enquiry is separate from a credit application.
              Review your estimate before choosing how to pay.
            </p>
            <QuoteCTA />
            {financeUrl && (
              <a
                href={financeUrl} data-analytics-action="finance" data-analytics-location="content"
                className="text-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                Apply for finance with Ideal4Finance <ArrowRight size={16} />
              </a>
            )}
          </div>
        </section>
      )}
      {p.treatment && (
        <section className="section" aria-labelledby="treatment-payment-planning">
          <div className="container narrow">
            <h2 id="treatment-payment-planning">Plan the cost of {p.treatment.toLowerCase()} in Turkey</h2>
            {packagesForTreatment(p.treatment).length > 0 && (
              <p>
                Owner-confirmed packages for this treatment: {packagesForTreatment(p.treatment).map((item) => `${item.name} at ${packagePrice(item)} (${item.stay})`).join("; ")}. {packageScopeNote[p.treatment]}
              </p>
            )}
            <p>Keep your treatment estimate and any credit agreement separate. Ask for the procedures, materials, visits and payment dates in writing, then include travel and follow-up costs in your budget. A treatment enquiry does not establish eligibility for credit.</p>
            <ul className="context-links">
              <li><Link href="/prices">Compare dental package prices and inclusions</Link></li>
              <li><Link href="/pay-monthly">Understand Turkey dental payment plans</Link></li>
              <li><Link href="/dental-finance">Read the UK patient dental finance guide</Link></li>
              <li><Link href="/guides/compare-dental-quotes">Check what your written quote includes</Link></li>
            </ul>
          </div>
        </section>
      )}
      <FAQSection faqs={p.faqs} />
      <ConversionBanner treatment={p.treatment} />
      <RelatedLinks slugs={p.related} />
      <div className="container">
        <FinanceNotice full />
      </div>
      <Sources />

    </>
  );
}
