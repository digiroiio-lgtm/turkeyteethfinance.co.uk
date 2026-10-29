import { packageCondition, packageInclusions, packagePrice, treatmentPackages } from "./packages";
import { guideSource, homeGuide, homeGuideSections } from "./home-guide";
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
import { standaloneGuides } from "./guides";
import { clinicProfile, evidence } from "./evidence";
import { monthlyPlanning } from "./monthly-planning";
import { financeAnswer } from "./price-planning";
import { financeRoutes, financeRoutesIntro, ukFinanceAnswer, ukFinanceQuestion } from "./dental-finance-planning";
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
        `Last updated: ${homeGuide.updatedLabel}\nPrepared by ${homeGuide.author}.`,
        ...homeGuideSections.flatMap((section) => [
          `### ${section.title}`, section.answer, ...section.paragraphs,
          ...(section.quote ? [
            `> ${section.quote.text}`,
            `${section.quote.name}, ${section.quote.role}. ${link("Original statement", guideSource(section.quote.sourceId).url)}`,
          ] : []),
          ...section.sourceIds.map((id) => link(guideSource(id).title, guideSource(id).url)),
          ...(section.calculation ? [section.calculation] : []),
          ...(section.links || []).map(item => link(item.text, item.href)),
        ]),
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
          ...(slug === "prices" ? [financeAnswer, "### Confirmed dental treatment packages", ...treatmentPackages.map(item => `${item.name}: ${packagePrice(item)} GBP. ${item.detail}. ${item.stay}. Includes ${packageInclusions.join(", ")}. ${packageCondition}`)] : []),
          `Last updated: ${page.lastModified}. Prepared by ${COMPANY} patient coordination team.`,
          ...(slug === "dental-finance" ? [`### ${ukFinanceQuestion}`, ukFinanceAnswer, financeRoutesIntro, ...financeRoutes.map(row => `${row.route}. Provided by: ${row.provider}. Decided by: ${row.decision}. Payment timing: ${row.timing}. Check: ${row.check}.`)] : []),
          ...(slug === "pay-monthly" ? [`### ${monthlyPlanning.title}`, monthlyPlanning.answer, monthlyPlanning.intro] : []),
          ...page.sections.flatMap((section) => [
            `### ${section.title}`,
            section.body,
            ...(section.paragraphs || []),
            ...(section.quotes || []).flatMap(quote => [
              `> ${quote.text}`,
              `${quote.name}, ${quote.role}. Statement published ${quote.attributionDate}. ${link("Original statement", evidence[quote.source].url)}`,
            ]),
            ...(section.bullets?.length
              ? [section.bullets.map((bullet) => `- ${bullet}`).join("\n")]
              : []),
            ...(section.sources || []).map(id => link(evidence[id].title, evidence[id].url)),
            ...(section.links || []).map(item => link(item.text, item.href)),
          ]),
          ...(slug === "guides"
            ? guideArticles.flatMap((article) => [
                `### ${article.title}`,
                `Source: ${absoluteUrl(article.path || `/guides#${article.id}-details`)}`,
                article.summary,
                ...(article.path ? [] : article.paragraphs),
              ])
            : []),
          ...(slug === "our-clinic" ? [
            `### ${clinicProfile.name}: clinic-published information`,
            `${clinicProfile.streetAddress}, ${clinicProfile.locality}, Turkey. ${clinicProfile.telephone}`,
            `Source checked: ${clinicProfile.checked}. Qualifications are attributed to the clinic’s profiles; independent registration verification is not claimed.`,
            ...clinicProfile.clinicians.flatMap(clinician => [clinician.name, clinician.role, clinician.education, link("Clinic profile", clinician.url)]),
          ] : []),
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
    ...standaloneGuides.map((guide): Document => ({
      path: guide.path!, title: guide.title, description: guide.description!, heading: guide.title,
      blocks: [
        `Last updated: ${guide.lastModified}. Prepared by ${COMPANY} patient coordination team.`,
        ...guide.paragraphs,
        ...guide.sections.flatMap(section => [
          `### ${section.title}`, section.body, ...(section.paragraphs || []),
          ...(section.sources || []).map(id => link(evidence[id].title, evidence[id].url)),
          ...(section.links || []).map(item => link(item.text, item.href)),
        ]),
        ...faqBlocks(guide.faqs),
        ...guide.related.map(slug => link(pages[slug].title, `/${slug}`)),
      ],
    })),
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
