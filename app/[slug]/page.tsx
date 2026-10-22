import { TreatmentPackages } from "@/components/treatment-packages";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight } from "lucide-react";
import { pages } from "@/lib/content";
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
      {p.kind === "prices" && <><TreatmentPackages /><CostTable /></>}
      {(p.kind === "results" || p.kind === "reviews") && <PatientEvidence kind={p.kind} />}
      {p.kind === "clinic" && <><CarePanel answerIntro /><ClinicEvidence /></>}
      {p.kind === "guides" && <Guides />}
      {p.kind !== "monthly" && p.sections.length > 0 && (
        <section className="section editorial-section">
          <div className={(p.kind === "guides" || p.kind === "clinic" || slug === "dental-finance") ? "container narrow" : "container"}><EditorialSections sections={p.sections} article={p.kind === "guides" || p.kind === "clinic" || slug === "dental-finance"} /></div>
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
