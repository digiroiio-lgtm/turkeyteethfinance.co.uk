import { guideArticles } from "./guides";
import { SITE_URL } from "./site";

/** The same entries and destinations as the visible guide directory, including its inline checklist. */
export function guidesDirectoryStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": SITE_URL + "/guides#directory",
    name: "Dental treatment guide directory",
    numberOfItems: guideArticles.length,
    itemListElement: guideArticles.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: SITE_URL + (guide.path || `/guides#${guide.id}-details`),
    })),
  };
}
