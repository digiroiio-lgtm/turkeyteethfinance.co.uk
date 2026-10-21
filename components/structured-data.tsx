import { COMPANY, SITE_URL, SITE_NAME } from "@/lib/site";
import type { FAQ } from "@/lib/content";
import { canonicalUrl } from "@/lib/site";
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
export function SiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organisation`,
            name: COMPANY,
            url: SITE_URL,
            description:
              "Healthcare consultancy and patient coordination for dental care in Antalya. The UK company does not provide clinical treatment.",
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: SITE_NAME,
            url: SITE_URL,
            inLanguage: "en-GB",
            publisher: { "@id": `${SITE_URL}/#organisation` },
          },
        ],
      }}
    />
  );
}
export function PageSchema({
  path,
  title,
  description,
  faqs = [],
  lastModified,
  parent,
}: {
  path: string;
  title: string;
  description: string;
  faqs?: FAQ[];
  lastModified?: string;
  parent?: { name: string; path: string };
}) {
  const url = canonicalUrl(path);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: title,
            description,
            ...(lastModified ? { dateModified: lastModified } : {}),
            inLanguage: "en-GB",
            isPartOf: { "@id": `${SITE_URL}/#website` },
          },
          ...(path === "/"
            ? []
            : [
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: SITE_URL,
                    },
                    ...(parent ? [{
                      "@type": "ListItem", position: 2, name: parent.name, item: canonicalUrl(parent.path),
                    }] : []),
                    {
                      "@type": "ListItem",
                      position: parent ? 3 : 2,
                      name: title,
                      item: url,
                    },
                  ],
                },
              ]),
          ...(faqs.length
            ? [
                {
                  "@type": "FAQPage",
                  "@id": `${url}#faq`,
                  mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: { "@type": "Answer", text: f.answer },
                  })),
                },
              ]
            : []),
        ],
      }}
    />
  );
}
