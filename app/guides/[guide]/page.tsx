import Link from "next/link";
import { notFound } from "next/navigation";
import { standaloneGuides, guideForPath } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";
import { ContentAttribution, EditorialSections } from "@/components/editorial";
import { FAQSection, QuoteCTA } from "@/components/ui";
import { RelatedLinks } from "@/components/sections";
export const dynamicParams = false;
export function generateStaticParams() {
  return standaloneGuides.map(guide => ({ guide: guide.path!.split("/").at(-1)! }));
}
export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }) {
  const guide = guideForPath("/guides/" + (await params).guide);
  return guide ? pageMetadata(guide.title, guide.description!, guide.path!) : {};
}
export default async function GuidePage({ params }: { params: Promise<{ guide: string }> }) {
  const guide = guideForPath("/guides/" + (await params).guide);
  if (!guide) notFound();
  return <>
    <div className="container breadcrumbs"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><Link href="/guides">Patient guides</Link><span aria-hidden="true"> / </span><span aria-current="page">{guide.title}</span></nav></div>
    <ContentAttribution date={guide.lastModified} />
    <article className="container narrow guide-article">
      <p className="eyebrow">{guide.category}</p>
      <h1>{guide.title}</h1>
      {guide.paragraphs.map(paragraph => <p className="direct-answer" key={paragraph}>{paragraph}</p>)}
      <nav aria-label="On this page" className="guide-topics">{guide.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.title}>{section.title}</a>)}</nav>
      <EditorialSections sections={guide.sections} article />
      <p>Ask about the treatment details and visit schedule that apply to your own enquiry.</p>
      <QuoteCTA />
    </article>
    <FAQSection faqs={guide.faqs} />
    <RelatedLinks slugs={guide.related} />
  </>;
}
