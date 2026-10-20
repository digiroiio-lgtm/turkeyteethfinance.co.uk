import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { pages, guideArticles } from "@/lib/content";
import {
  routeSlugs,
  SITE_URL,
  COMPANY,
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
  EmptyProof,
  SectionTitle,
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
import { PageSchema, JsonLd } from "@/components/structured-data";
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
      {p.kind === "monthly" && (
        <>
          <TrustStrip />
          <BudgetExplorer />
          <Journey />
          <TreatmentGrid compact />
        </>
      )}
      {p.kind === "journey" && <Journey detailed />}
      {(p.kind === "quote" || p.kind === "contact") && (
        <section className="section quote-section">
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
      {p.kind === "prices" && <CostTable />}
      {(p.kind === "results" || p.kind === "reviews") && (
        <section className="section">
          <div className="container narrow">
            <EmptyProof kind={p.kind} />
          </div>
        </section>
      )}
      {p.kind === "clinic" && <CarePanel />}
      {p.kind === "guides" && (
        <>
          <Guides />
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@graph": guideArticles.map((a) => ({
                "@type": "Article",
                "@id": `${SITE_URL}/guides#${a.id}`,
                headline: a.title,
                description: a.summary,
                articleBody: a.paragraphs.join("\n\n"),
                url: `${SITE_URL}/guides#${a.id}`,
                inLanguage: "en-GB",
                author: { "@type": "Organization", name: COMPANY },
                publisher: { "@id": `${SITE_URL}/#organisation` },
                dateModified: "2026-10-20",
              })),
            }}
          />
        </>
      )}
      {p.sections.length > 0 && (
        <section className="section editorial-section">
          <div className="container">
            <SectionTitle
              label="INFORMATION THAT HELPS"
              title="The details"
              accent="that matter."
            />
            <div
              className={`editorial-grid ${p.sections.length === 3 ? "three" : ""}`}
            >
              {p.sections.map((s, i) => (
                <article className="editorial-card" key={s.title}>
                  <span className="article-number">0{i + 1}</span>
                  <h2>{s.title}</h2>
                  <p>{s.body}</p>
                  {s.bullets && (
                    <ul className="check-list">
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <Check />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
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
                href={financeUrl}
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
      <ConversionBanner />
      <RelatedLinks slugs={p.related} />
      <div className="container">
        <FinanceNotice full />
      </div>
      <Sources />
      <PageSchema
        path={`/${slug}`}
        title={p.title}
        description={p.description}
        faqs={p.faqs}
      />
      {p.kind === "clinic" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id": `${SITE_URL}/our-clinic#clinic`,
            name: "Akdeniz Dental",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Antalya",
              addressCountry: "TR",
            },
            medicalSpecialty: "Dentistry",
            description:
              "Treating dental clinic in Antalya, Turkey. Separate from the UK patient coordination company.",
          }}
        />
      )}
    </>
  );
}
