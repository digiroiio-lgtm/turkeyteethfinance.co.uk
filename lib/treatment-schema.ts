import { pages } from "./content";
import { COMPANY, SITE_URL, canonicalUrl } from "./site";
import { evidence } from "./evidence";
import { implantComparison } from "./expanded-treatments";
export const expandedTreatmentSlugs = ["full-mouth-dental-implants-turkey", "all-on-6-finance", "composite-bonding-turkey", "veneers-finance"];
export function implantComparisonText() {
  return implantComparison.map(row => `${row.option}. Support: ${row.support}. Removal: ${row.removal}. Cost scope: ${row.cost}.`).join("\n");
}
export function treatmentArticle(slug: string) {
  const p = pages[slug];
  const url = canonicalUrl(`/${slug}`);
  return {
    "@context": "https://schema.org", "@type": "Article", "@id": url + "#patient-guide",
    headline: p.title, description: p.description, url, inLanguage: "en-GB", dateModified: p.lastModified,
    author: { "@type": "Organization", "@id": SITE_URL + "/#organisation", name: COMPANY + " patient coordination team" },
    publisher: { "@id": SITE_URL + "/#organisation" }, mainEntityOfPage: { "@id": url + "#webpage" },
    articleBody: [p.intro, ...p.sections.flatMap(s => [s.title, s.body, ...(s.paragraphs || []), ...(s.bullets || [])]), ...(slug === "full-mouth-dental-implants-turkey" ? [implantComparisonText()] : [])].join("\n\n"),
    citation: [...new Set(p.sections.flatMap(s => s.sources || []))].map(id => evidence[id].url),
  };
}
