import { COMPANY, publicationApproved } from "./site";

export type InlineContent = string | { text: string; href: string };
export type LegalParagraph =
  | string
  | { parts: InlineContent[]; note?: boolean };
export type LegalContent = {
  path: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  updated: string;
  notice?: string;
  sections: { heading: string; paragraphs: LegalParagraph[] }[];
};

export function paragraphParts(paragraph: LegalParagraph): InlineContent[] {
  return typeof paragraph === "string" ? [paragraph] : paragraph.parts;
}

export function privacyContent(): LegalContent {
  const email = process.env.PRIVACY_CONTACT_EMAIL;
  return {
    path: "/privacy",
    title: "Privacy & Cookies",
    description:
      "How treatment enquiries, optional dental photographs and privacy choices are handled on Turkey Teeth Finance.",
    label: "YOUR INFORMATION",
    heading: "Privacy & cookies",
    updated: "20 October 2026",
    notice: publicationApproved()
      ? undefined
      : "Draft notice for review. The enquiry service must not be enabled until the privacy contact, processors, retention schedule and international transfer arrangements are approved.",
    sections: [
      {
        heading: "Who handles your enquiry",
        paragraphs: [
          `${COMPANY} operates this website for healthcare consultancy and patient coordination. Dental care is delivered by the treating clinic in Antalya, Turkey. The UK company does not provide clinical treatment.`,
        ],
      },
      {
        heading: "Information you choose to provide",
        paragraphs: [
          "The enquiry form asks for your name, email address, treatment interests and preferred contact method. A WhatsApp number is optional unless you choose WhatsApp for your reply. Dental concerns, photographs and additional notes are optional.",
        ],
      },
      {
        heading: "Purpose and consent",
        paragraphs: [
          "We use submitted information to respond to your treatment enquiry and coordinate a proposed plan. We ask for explicit consent before processing optional dental information or photographs and sharing them with the treating clinical team in Turkey. Marketing consent is separate and optional. You can withdraw consent; this does not affect the lawfulness of earlier processing.",
        ],
      },
      {
        heading: "Sharing and international processing",
        paragraphs: [
          "Your enquiry may need to be reviewed by the treating clinical team in Turkey. Turkey is outside the UK. Credit applications are handled separately by the broker and lender under their own privacy notices.",
          process.env.PRIVACY_PROCESSORS_NOTICE ||
            "Processor information will be confirmed before enquiry delivery is enabled.",
          process.env.PRIVACY_TRANSFER_NOTICE ||
            "International transfer safeguards will be confirmed before enquiry delivery is enabled.",
        ],
      },
      {
        heading: "Security and retention",
        paragraphs: [
          "Submitted data is sent over HTTPS to the configured private enquiry service. Uploaded photographs are restricted by number, size and file format. Enquiry details are not placed in public URLs, browser storage, advertising events or application logs by this website.",
          process.env.PRIVACY_RETENTION_NOTICE ||
            "The approved retention schedule will be confirmed before enquiry delivery is enabled.",
        ],
      },
      {
        heading: "Your rights and contact",
        paragraphs: [
          "You may request access, correction or deletion of your information, object to certain processing and ask about withdrawing consent. Rights depend on the circumstances and applicable law.",
          email
            ? {
                parts: [
                  "For privacy requests, email ",
                  { text: email, href: `mailto:${email}` },
                  ". You may also raise a concern with the UK Information Commissioner’s Office at ",
                  {
                    text: "ico.org.uk",
                    href: "https://ico.org.uk/make-a-complaint/",
                  },
                  ".",
                ],
              }
            : {
                note: true,
                parts: [
                  "The operator’s privacy contact is pending configuration. Do not submit personal or dental information while the enquiry service is unavailable.",
                ],
              },
        ],
      },
      {
        heading: "Cookies and browser storage",
        paragraphs: [
          {
            parts: [
              "This build does not include advertising tags or analytics cookies. When enquiry delivery is enabled, Cloudflare Turnstile is loaded for the security check on the final form step; see ",
              {
                text: "Cloudflare’s privacy information",
                href: "https://www.cloudflare.com/privacypolicy/",
              },
              ". If non-essential tracking is added later, it must remain disabled until the appropriate consent choice is made.",
            ],
          },
        ],
      },
    ],
  };
}

export function termsContent(): LegalContent {
  return {
    path: "/terms",
    title: "Website Terms",
    description:
      "Important information about treatment estimates, clinical responsibility and third-party finance on Turkey Teeth Finance.",
    label: "WEBSITE INFORMATION",
    heading: "Website terms",
    updated: "20 October 2026",
    sections: [
      {
        heading: "Our role",
        paragraphs: [
          `${COMPANY} provides healthcare consultancy and patient coordination. Clinical diagnosis, consent, treatment and clinical aftercare advice are the responsibility of the treating professionals in Turkey.`,
        ],
      },
      {
        heading: "General information",
        paragraphs: [
          "This website provides general information to help you ask questions and compare options. It is not a clinical diagnosis, personalised financial advice or an emergency dental service. Model imagery is illustrative and is not evidence of a patient outcome.",
        ],
      },
      {
        heading: "Treatment estimates",
        paragraphs: [
          "An online treatment estimate is provisional. A qualified treating dentist must assess your needs before confirming suitability, the treatment plan and final price. Obtain the clinic’s treatment terms, payment schedule, cancellation policy and aftercare arrangements before paying or booking travel.",
        ],
      },
      {
        heading: "Third-party finance",
        paragraphs: [
          "A treatment enquiry is not a credit application. Finance is subject to status, affordability and lender approval. Ideal4Finance is a credit broker, not a lender. Your credit agreement, if accepted, is with the lender you choose. Read all applicable terms, charges and the total amount repayable before deciding.",
        ],
      },
      {
        heading: "Budget explorer",
        paragraphs: [
          "The interactive budget explorer records a budget you would like to discuss. It does not calculate repayments, assess eligibility, quote a treatment price or offer credit.",
        ],
      },
      {
        heading: "External websites",
        paragraphs: [
          "External services have their own terms and privacy notices. Read them before submitting information or entering an agreement.",
        ],
      },
      {
        heading: "Questions",
        paragraphs: [
          {
            parts: [
              "Use the ",
              { text: "contact page", href: "/contact" },
              " for general enquiries. Do not send urgent clinical concerns through a website enquiry form.",
            ],
          },
        ],
      },
    ],
  };
}
