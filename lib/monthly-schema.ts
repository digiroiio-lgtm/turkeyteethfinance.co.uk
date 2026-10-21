import { monthlyPlanning } from "./monthly-planning";
import type { Section } from "./content";
import { pages } from "./content";
import { evidence } from "./evidence";
import { COMPANY, SITE_URL, canonicalUrl } from "./site";

export function monthlyPlanningText(): string {
  return [monthlyPlanning.intro, ...pages["pay-monthly"].sections.flatMap((section: Section) => [
    section.title, section.body, ...(section.paragraphs || []), ...(section.bullets || []),
    ...(section.quotes || []).flatMap(quote => [quote.text, `${quote.name}, ${quote.role}. Statement published ${quote.attributionDate}.`]),
  ])].join("\n\n");
}

export function monthlyStructuredData() {
  const url = canonicalUrl("/pay-monthly");
  const sections = pages["pay-monthly"].sections;
  const sources = [...new Set(sections.flatMap(section => [
    ...(section.sources || []), ...(section.quotes || []).map(quote => quote.source),
  ]))];
  return {
    "@context": "https://schema.org", "@type": "Article", "@id": url + "#planning-guide",
    url: url + "#monthly-planning-guide", headline: monthlyPlanning.title,
    description: monthlyPlanning.intro, inLanguage: "en-GB",
    dateModified: pages["pay-monthly"].lastModified,
    articleBody: monthlyPlanningText(), mainEntityOfPage: { "@id": url + "#webpage" },
    author: { "@type": "Organization", "@id": SITE_URL + "/#organisation", name: COMPANY + " patient coordination team" },
    publisher: { "@id": SITE_URL + "/#organisation" },
    citation: sources.map(id => evidence[id].url),
  };
}
