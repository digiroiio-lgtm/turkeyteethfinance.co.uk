import {
  commonFAQs,
  guideArticles,
  homeContent,
  informationSources,
  pages,
  treatments,
  type FAQ,
} from "./content";
import {
  paragraphParts,
  privacyContent,
  termsContent,
  type LegalContent,
  type LegalParagraph,
} from "./legal-content";
import { publicPages } from "./public-pages";
import {
  COMPANY,
  SITE_NAME,
  SITE_URL,
  draftNotice,
  financeApplicationUrl,
  financeNotice,
  publicationApproved,
  routeSlugs,
} from "./site";

type Document = {
  path: string;
  title: string;
  description: string;
  heading: string;
  blocks: string[];
};

function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

function link(text: string, path: string): string {
  const label = text.replace(/[\\[\]]/g, "\\$&");
  return `[${label}](${absoluteUrl(path)})`;
}

function faqBlocks(faqs: FAQ[]): string[] {
  if (!faqs.length) return [];
  return [
    "### Frequently asked questions",
    ...faqs.flatMap((faq) => [`#### ${faq.question}`, faq.answer]),
  ];
}

function legalParagraph(paragraph: LegalParagraph): string {
  return paragraphParts(paragraph)
    .map((part) =>
      typeof part === "string" ? part : link(part.text, part.href),
    )
    .join("");
}

function legalDocument(content: LegalContent): Document {
  return {
    ...content,
    blocks: [
      `Last updated: ${content.updated}`,
      ...(content.notice ? [content.notice] : []),
      ...content.sections.flatMap((section) => [
        `### ${section.heading}`,
        ...section.paragraphs.map(legalParagraph),
      ]),
    ],
  };
}

function documents(): Document[] {
  const visible = new Set(publicPages().map((page) => page.path));
  return [
    {
      path: "/",
      ...homeContent,
      heading: `${homeContent.heading} ${homeContent.accent}`,
      blocks: [
        homeContent.intro,
        "### Treatments",
        ...treatments.filter((treatment) => visible.has(`/${treatment.slug}`)).flatMap((treatment) => [
          `#### ${treatment.name}`,
          treatment.text,
          treatment.detail,
          link(treatment.name, `/${treatment.slug}`),
        ]),
        ...faqBlocks(commonFAQs),
      ],
    },
    ...routeSlugs.map((slug): Document => {
      const page = pages[slug];
      return {
        path: `/${slug}`,
        title: page.title,
        description: page.description,
        heading: `${page.heading} ${page.accent}`,
        blocks: [
          page.intro,
          ...page.sections.flatMap((section) => [
            `### ${section.title}`,
            section.body,
            ...(section.bullets?.length
              ? [section.bullets.map((bullet) => `- ${bullet}`).join("\n")]
              : []),
          ]),
          ...(slug === "guides"
            ? guideArticles.flatMap((article) => [
                `### ${article.title}`,
                `Source: ${absoluteUrl(`/guides#${article.id}`)}`,
                article.summary,
                ...article.paragraphs,
              ])
            : []),
          ...faqBlocks(page.faqs),
          ...(page.related.length
            ? [
                "### Related pages",
                page.related
                  .filter((related) => visible.has(`/${related}`))
                  .map((related) => `- ${link(pages[related].title, `/${related}`)}`)
                  .join("\n"),
              ]
            : []),
        ],
      };
    }),
    legalDocument(privacyContent()),
    legalDocument(termsContent()),
  ].filter((page) => visible.has(page.path));
}

function introduction(): string[] {
  return [
    `# ${SITE_NAME}`,
    `> ${homeContent.description}`,
    `Website: ${absoluteUrl("/")}\nLanguage: en-GB\nOperator: ${COMPANY}`,
    pages["our-clinic"].intro,
    ...(!publicationApproved() ? [`> ${draftNotice}`] : []),
    financeNotice,
    ...(publicationApproved()
      ? [
          process.env.APPROVED_FINANCE_DISCLOSURE!.trim(),
          link("Apply for finance with Ideal4Finance", financeApplicationUrl()!),
        ]
      : []),
  ];
}

function sources(): string[] {
  return [
    "## Further information",
    "Read the provider’s own information before making a decision.",
    informationSources
      .map((source) => `- ${link(source.title, source.url)}`)
      .join("\n"),
    "General information only. Your treating dentist and lender provide the information specific to your circumstances.",
  ];
}

/** Short directory, regenerated from the same page data as the website. */
export function llmsIndex(): string {
  return (
    [
      ...introduction(),
      "## Site pages",
      publicPages()
        .map((page) => `- ${link(page.title, page.path)}: ${page.description}`)
        .join("\n"),
      "## Full content",
      `- ${link("Full website text", "/llms-full.txt")}: Shared page copy, treatment information, FAQs, guides and legal notices in one Markdown text file.`,
      ...sources(),
    ].join("\n\n") + "\n"
  );
}

/** Readable public copy; excludes navigation, form inputs and repeated UI. */
export function llmsFull(): string {
  return (
    [
      ...introduction(),
      `Content index: ${absoluteUrl("/llms.txt")}`,
      ...documents().flatMap((page) => [
        `## ${page.heading}`,
        `Source: ${absoluteUrl(page.path)}`,
        `Title: ${page.title}`,
        page.description,
        ...page.blocks,
      ]),
      ...sources(),
    ].join("\n\n") + "\n"
  );
}
