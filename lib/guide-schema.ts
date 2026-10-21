import type { PatientGuide } from "./guides";
import { evidence } from "./evidence";
import { COMPANY, SITE_URL, canonicalUrl } from "./site";
export function guideText(guide: PatientGuide): string {
  return [...guide.paragraphs, ...guide.sections.flatMap(section => [section.title, section.body, ...(section.paragraphs || []), ...(section.bullets || [])])].join("\n\n");
}
export function guideStructuredData(guide: PatientGuide) {
  const url = canonicalUrl(guide.path!);
  return {
    "@context": "https://schema.org", "@type": "Article", "@id": url + "#article",
    url, headline: guide.title, description: guide.description, inLanguage: "en-GB",
    dateModified: guide.lastModified, articleBody: guideText(guide),
    mainEntityOfPage: { "@id": url + "#webpage" },
    author: { "@type": "Organization", name: COMPANY + " patient coordination team", "@id": SITE_URL + "/#organisation" },
    publisher: { "@id": SITE_URL + "/#organisation" },
    citation: [...new Set(guide.sections.flatMap(section => section.sources || []))].map(id => evidence[id].url),
  };
}
