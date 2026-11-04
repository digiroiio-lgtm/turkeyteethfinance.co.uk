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
  const clinicId = "https://akdenizdental.com/#clinic";
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organisation`,
            name: COMPANY,
            legalName: COMPANY,
            url: SITE_URL,
            description:
              "UK healthcare consultancy and non-clinical patient coordination company for people considering dental care in Antalya, Turkey. It does not provide clinical treatment or make lending decisions.",
          },
          {
            "@type": "Dentist",
            "@id": clinicId,
            name: "Akdeniz Dental",
            url: "https://akdenizdental.com/",
            telephone: "+90 541 248 35 62",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Çaybaşı Mahallesi 1358 Sokak, Premier Plaza B Blok, Kat 1",
              addressLocality: "Muratpaşa, Antalya",
              addressCountry: "TR",
            },
            description:
              "Treating dental clinic in Antalya, Turkey. Clinical assessment, treatment planning and dental treatment are provided by the clinic's clinical team.",
            sameAs: ["https://akdenizdental.com/"],
          },
          {
            "@type": "Organization",
            "@id": "https://ideal4finance.com/#organisation",
            name: "Ideal4Finance",
            url: "https://ideal4finance.com/",
            description:
              "Credit broker referenced for finance enquiries. It is not the lender; the lender makes the credit decision.",
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
            publisher: { "@id": `${SITE_URL}/#organisation` },
            ...(path !== "/privacy" && path !== "/terms" ? { about: { "@id": "https://akdenizdental.com/#clinic" } } : {}),
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
