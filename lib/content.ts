import { calculatorContent } from "./calculator-content";
import { smilePlanningSections } from "./smile-planning";
import { fullArchPlanningSections } from "./full-arch-planning";
import { crownPlanningSections } from "./crown-planning";
import { implantPlanningSections } from "./implant-planning";
import { veneerPlanningSections } from "./veneer-planning";
import { quotePlanningSections } from "./quote-planning";
import type { EvidenceId } from "./evidence";
import { monthlyPlanning } from "./monthly-planning";
import { pricePlanningSections } from "./price-planning";
import { guidePlanningSections } from "./guide-planning";
import { dentalFinanceSections } from "./dental-finance-planning";
import { clinicPlanningSections } from "./clinic-planning";
import { financeFaqSections } from "./finance-faq-planning";
import { legitSections, legitFaqs } from "./legit-planning";
export type FAQ = { question: string; answer: string };
export const homeContent = {
  lastModified: "2026-10-30",
  title: "Turkey Teeth Finance: Payment Options for UK Patients",
  description:
    "Can you finance Turkey teeth? See how payment options and third-party finance work for UK patients, what to check first and how to request a quote.",
  label: "DENTAL TREATMENT IN TURKEY",
  heading: "Finance Turkey teeth:",
  accent: "Payment options for UK patients.",
  intro:
    "Quality dental treatment in Antalya with finance options for eligible UK patients, subject to status and lender approval.",
  answer:
    "Possibly. UK residents can explore third-party finance for dental treatment in Turkey, but the lender decides on your application, so approval is never guaranteed. This page explains how the options work, what to compare and what to check before you apply. You start by requesting a free written treatment estimate, with no phone call needed. The clinical team proposes a plan, and your dentist confirms it at your assessment in Antalya.",
};

export const journeySteps = [
  {
    title: "Quote",
    label: "START ONLINE",
    description: "Tell us your goals by email or WhatsApp.",
    x: 20,
    y: 866,
    bullets: [
      "Choose your treatment interest",
      "Share your questions in writing",
      "No phone call required",
    ],
  },
  {
    title: "Plan",
    label: "MAKE IT PERSONAL",
    description: "Review your treatment plan and payment options.",
    x: 270,
    y: 866,
    bullets: [
      "Review the proposed treatment",
      "Understand costs and visit stages",
      "Explore finance separately",
    ],
  },
  {
    title: "Book",
    label: "WHEN YOU ARE READY",
    description: "Confirm your travel and clinic appointments.",
    x: 520,
    y: 866,
    bullets: [
      "Confirm clinical arrangements",
      "Check your payment schedule",
      "Plan travel and accommodation",
    ],
  },
  {
    title: "Smile",
    label: "YOUR CARE JOURNEY",
    description: "Meet your clinical team and begin your care.",
    x: 770,
    y: 866,
    bullets: [
      "Attend your clinical assessment",
      "Agree the final plan with your dentist",
      "Understand follow-up and aftercare",
    ],
  },
];

export const informationSources = [
  {
    title: "Ideal4Finance: credit broker information",
    url: "https://ideal4finance.com/",
  },
  {
    title: "General Dental Council: considering treatment abroad",
    url: "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment",
  },
];

export type Section = {
  title: string;
  body: string;
  paragraphs?: string[];
  bullets?: string[];
  sources?: EvidenceId[];
  quotes?: { text: string; name: string; role: string; source: EvidenceId; attributionDate: string }[];
  links?: { text: string; href: string }[];
};
export type PageContent = {
  indexable?: boolean;
  lastModified: string;
  title: string;
  description: string;
  label: string;
  heading: string;
  accent: string;
  intro: string;
  sections: Section[];
  faqs: FAQ[];
  related: string[];
  treatment?: string;
  kind?:
    | "calculator"
    | "monthly"
    | "quote"
    | "eligibility"
    | "prices"
    | "results"
    | "reviews"
    | "journey"
    | "clinic"
    | "faq"
    | "contact"
    | "guides";
};

export const commonFAQs: FAQ[] = [
  {
    question: "Can I pay monthly for dental treatment in Turkey?",
    answer:
      "Eligible UK patients can explore third-party finance to spread the cost of treatment. Availability depends on your circumstances, affordability and the lender’s decision. Start with a written treatment quote so you know how much you need.",
  },
  {
    question: "Do I need to make a phone call to get a quote?",
    answer:
      "No. Send your enquiry online and choose email or WhatsApp. A clinical assessment is still needed before the dentist can confirm a diagnosis, treatment plan and final price.",
  },
  {
    question: "Is finance approval guaranteed?",
    answer:
      "No. Every application is assessed by the lender. We cannot guarantee acceptance, a particular interest rate, a repayment term or an offer.",
  },
  {
    question: "Who provides treatment and who provides finance?",
    answer:
      "Dental treatment is provided by the treating clinic in Antalya. Akdeniz Dental Consultancy UK Ltd provides consultancy and patient coordination. Ideal4Finance is a credit broker, not a lender; any credit agreement is with the lender you select.",
  },
  {
    question: "When should I book my travel?",
    answer:
      "Wait until the clinic has confirmed your treatment plan and visit schedule, and you have arranged an appropriate way to pay. Some treatments require more than one trip, with healing time in between.",
  },
];


export const instalmentFAQs: FAQ[] = [
  {
    question: "Can I pay for veneers or dental implants abroad in instalments?",
    answer:
      "Eligible UK patients can explore third-party finance to spread the cost of veneers or implants in Antalya, subject to status, affordability and lender approval. Get a written treatment estimate first, then read the broker’s and lender’s information separately. Paying without finance is also possible.",
  },
  {
    question: "Can I get finance for dental treatment in Turkey if I live in the UK?",
    answer:
      "Possibly. Eligible UK residents can apply through the approved broker link, and the lender decides on residency, income, affordability and credit circumstances. Submitting a treatment enquiry is not a credit application and approval is never guaranteed.",
  },
  {
    question: "What is the best way to pay monthly for Turkey teeth treatment from the UK?",
    answer:
      "There is no single best option. Compare the APR, fees, repayment term and total amount repayable in each lender’s own documents, and borrow only what you can comfortably afford. A written treatment estimate tells you how much you need before you compare.",
  },
];

export { treatments } from "./treatments";

export const pages: Record<string, PageContent> = {
  "finance-calculator": calculatorContent,
  "pay-monthly": {
    lastModified: "2026-10-30",
    title: "Can You Pay Monthly for Turkey Teeth? Payment Options",
    description:
      "Can you pay monthly for Turkey teeth? Compare loans, clinic stage payments and other ways to pay, then estimate repayments using your own assumptions.",
    label: "PAY MONTHLY",
    heading: "Can you pay monthly for Turkey teeth?",
    accent: "Understand your options.",
    kind: "monthly",
    intro:
      "Explore dental treatment in Antalya with flexible monthly payment options for eligible UK patients, subject to status and lender approval.",
    sections: monthlyPlanning.sections,
    faqs: [commonFAQs[0], instalmentFAQs[0], instalmentFAQs[2], commonFAQs[2]],
    related: ["finance-calculator", "finance-eligibility", "prices", "dental-finance", "is-turkey-teeth-finance-legit"],
  },
  "dental-finance": {
    lastModified: "2026-10-30",
    title: "Dental Finance in Turkey for UK Patients",
    description:
      "Can UK residents get finance for dental treatment in Turkey? A conditional answer, a payment-route comparison and how a treatment quote differs from a credit application.",
    label: "DENTAL FINANCE",
    heading: "Dental finance in Turkey.",
    accent: "Explore your options.",
    intro:
      "A clear treatment plan comes first. Then explore ways to pay for dental care in Antalya, including third-party finance for eligible UK patients.",
    sections: dentalFinanceSections,
    faqs: [instalmentFAQs[1], commonFAQs[3]],
    related: ["pay-monthly", "finance-eligibility", "finance-faq", "is-turkey-teeth-finance-legit"],
  },
  "get-a-quote": {
    lastModified: "2026-10-24",
    title: "Free Dental Treatment Quote Turkey",
    description:
      "Request a personalised dental treatment estimate for Antalya. Choose email or WhatsApp, tell us your goals and get a written plan without a required phone call.",
    label: "YOUR FIRST STEP",
    heading: "Your smile.",
    accent: "Your personal plan.",
    kind: "quote",
    intro:
      "Tell us what you have in mind. Start your free treatment enquiry online, with email or WhatsApp as your preferred way to stay in touch.",
    sections: quotePlanningSections,
    faqs: [
      commonFAQs[1],
      {
        question: "Is the online quote a confirmed treatment plan?",
        answer:
          "No. It is an initial estimate based on the information you provide. Only a qualified treating dentist can confirm a diagnosis, suitability, treatment plan and final cost after assessment.",
      },
    ],
    related: ["how-it-works", "prices", "finance-eligibility"],
  },
  "dental-implants-finance": {
    "lastModified": "2026-10-29",
    "title": "Dental Implants Finance in Turkey",
    "description": "Understand implant components, alternatives, healing visits and aftercare in Antalya. Request an itemised estimate for your missing teeth.",
    "label": "DENTAL IMPLANTS",
    "heading": "Dental implants in Turkey.",
    "accent": "A clearer way forward.",
    "intro": "Explore implant treatment in Antalya and understand the full journey before considering how to pay. Finance may be available to eligible UK patients.",
    "sections": implantPlanningSections,
    "faqs": [
      {
        "question": "Is the abutment included in a dental implant quote?",
        "answer": "It must be checked. The implant fixture, abutment and crown are separate components, so ask for each to be identified in writing rather than assuming a headline implant price includes them all."
      },
      {
        "question": "Do I need bone grafting before an implant?",
        "answer": "Not everyone does. The treating dentist assesses the amount and condition of bone and explains whether grafting is recommended, how it changes the stages and whether it has a separate cost."
      },
      {
        "question": "Can I return to the UK between implant stages?",
        "answer": "Many treatment plans have a healing interval between surgical and restorative visits. The clinical team must advise when travel is appropriate and arrange the relevant review and contact plan."
      },
      {
        "question": "Will I have temporary teeth while implants heal?",
        "answer": "Ask which temporary option is planned for your case. The type of temporary restoration and whether it can be fixed depend on clinical findings; immediate fixed teeth cannot be guaranteed in advance."
      },
      {
        "question": "What implant records should I keep after treatment?",
        "answer": "Request the implant brand and component details, treatment summary, relevant imaging and aftercare instructions. These records help another dentist understand the work if you need a review later."
      }
    ],
    "related": [
      "all-on-4-finance",
      "prices",
      "how-it-works"
    ],
    "treatment": "Dental implants"
  },
  "finance-eligibility": {
    lastModified: "2026-10-30",
    title: "Turkey Teeth Finance Eligibility & Credit Checks",
    description:
      "Understand the UK finance eligibility questions to consider before applying for dental treatment finance. Decisions depend on affordability, status and lender criteria.",
    label: "FINANCE ELIGIBILITY",
    heading: "UK finance eligibility.",
    accent: "Before you apply.",
    kind: "eligibility",
    intro:
      "Check the practical requirements before exploring finance. This guide is not an eligibility decision, a credit check or a promise of approval.",
    sections: [
      {
        title: "Residency and identity",
        body: "Be prepared to confirm your UK residential address and provide the identity and address information requested by the broker or lender. The exact residence and address-history requirements depend on the product.",
        links: [{"text": "Read finance questions and limitations", "href": "/finance-faq"}, {"text": "Understand the separate treatment enquiry", "href": "/get-a-quote"}],
        sources: ["broker"],
      },
      {
        title: "Income and affordability",
        body: "Lenders assess whether repayments are affordable based on your income, commitments and circumstances. Employment status alone does not determine the result. Check the current application criteria rather than relying on an assumed income threshold.",
      },
      {
        title: "Your credit circumstances",
        body: "The lender decides what checks are needed and how credit history affects an application. Read the application disclosures before proceeding and ask the broker whether a particular step affects your credit file.",
      },
      {
        title: "Nationality and language",
        body: "Speak with the broker about the requirements that apply to your UK residence and circumstances. Nationality or language does not, on its own, establish eligibility. If you need help understanding the agreement, request support before accepting it.",
      },
    ],
    faqs: [
      {
        question:
          "Can Polish, Romanian or Russian speakers living in the UK apply?",
        answer:
          "Ask the broker to confirm the current residency, income and product requirements for your circumstances. Speaking a particular language is not an approval criterion and does not replace the lender’s assessment.",
      },
      {
        question: "Does checking this page affect my credit score?",
        answer:
          "Reading this page or submitting our treatment enquiry does not make a credit application. The broker and lender explain any checks when you use their separate finance application.",
      },
      instalmentFAQs[1],
      commonFAQs[2],
    ],
    related: ["dental-finance", "pay-monthly", "finance-faq"],
  },
  "veneers-finance": {
    "lastModified": "2026-10-29",
    "title": "Veneers Finance in Turkey: Planning",
    "description": "Compare veneers, bonding and crowns for treatment in Antalya. Understand preparation, maintenance, appointment planning and an itemised written estimate.",
    "label": "VENEERS",
    "heading": "Veneers in Turkey.",
    "accent": "A personal difference.",
    "intro": "Discuss the shape, colour and appearance of your teeth with a dentist. Get a written veneers estimate before exploring available payment options.",
    "sections": veneerPlanningSections,
    "faqs": [
      {
        "question": "Can I have veneers on teeth that already have crowns?",
        "answer": "A previously crowned tooth needs its own assessment. A front-surface veneer and a replacement crown are different restorations. Ask the dentist to identify the existing work and proposed treatment tooth by tooth."
      },
      {
        "question": "Is composite bonding the same as a porcelain veneer?",
        "answer": "No. Composite is bonded and shaped on the tooth; a porcelain veneer is made separately and bonded in place. Preparation, repair and maintenance differ. Ask which option is suitable for your particular concern."
      },
      {
        "question": "Will veneers straighten my teeth?",
        "answer": "Veneers can change visible contours, but do not move the tooth roots as orthodontic treatment does. Ask whether alignment treatment would be a more appropriate way to address crowding or your bite."
      },
      {
        "question": "Can I choose the shade before treatment?",
        "answer": "You can discuss your preferred shade and natural appearance with the treating dentist. Ask how the choice will be checked alongside your existing teeth and any restorations before final bonding."
      },
      {
        "question": "Can a veneers estimate be confirmed from photographs?",
        "answer": "No. Photographs support an initial estimate. The treating dentist must assess tooth structure, oral health and bite before confirming the treatment and final cost."
      }
    ],
    "related": [
      "zirconia-crowns-finance",
      "smile-makeover-finance",
      "prices"
    ],
    "treatment": "Veneers"
  },
  "prices": {
    "lastModified": "2026-10-21",
    "title": "Turkey Teeth Packages & Prices with Finance",
    "description": "Compare confirmed Turkey teeth packages in Antalya with hotel and transfers for UK patients, then explore finance subject to status. Written quotes follow clinical assessment.",
    "label": "PRICES & PAYMENT OPTIONS",
    "heading": "Dental treatment prices.",
    "accent": "Clear before you commit.",
    "kind": "prices",
    "intro": "Every smile needs a different plan. Request an itemised quote in pounds so you can understand the treatment, inclusions and payment schedule.",
    "sections": pricePlanningSections,
    "faqs": [
      {
        "question": "Are package prices a confirmed personal treatment plan?",
        "answer": "Package prices are subject to clinical assessment and personalised treatment planning. Your written quote confirms procedures, materials and arrangements for your case; the budget planner does not establish a clinic price."
      },
      {
        "question": "Is the treatment budget slider a price quotation?",
        "answer": "No. It records a budget you would like to discuss. It does not calculate a clinic price, a monthly repayment or a credit decision."
      },
      {
        "question": "Will a package include every implant component?",
        "answer": "Check the written specification. Ask about the implant fixture, abutment, final restoration, temporary teeth, scans and any additional procedures separately."
      },
      {
        "question": "Should I compare per-tooth prices or complete treatment estimates?",
        "answer": "Compare the complete clinical scope and inclusions first. Per-tooth figures may omit preparatory treatment, temporary restorations, visits or other items needed in your case."
      },
      {
        "question": "Does a treatment warranty automatically cover travel expenses?",
        "answer": "No such cover should be assumed. Ask for the exact terms covering extra flights, accommodation, reviews and remedial work before treatment starts."
      }
    ],
    "related": [
      "get-a-quote",
      "pay-monthly",
      "how-it-works"
    ]
  },
  "smile-makeover-finance": {
    "lastModified": "2026-10-29",
    "title": "Smile Makeover Finance in Turkey",
    "description": "Plan a smile makeover in Antalya around your own teeth. Compare less invasive options, treatment stages, materials and individual quote details.",
    "label": "SMILE MAKEOVER",
    "heading": "Your smile makeover.",
    "accent": "One considered plan.",
    "intro": "A smile makeover is a personal treatment plan, not one standard procedure. Start by discussing what you want to change and what your teeth need.",
    "sections": smilePlanningSections,
    "faqs": [
      {
        "question": "Can a smile makeover involve fewer teeth than a package advertises?",
        "answer": "Yes. The recommended number and type of restorations should follow the condition of your teeth and your goals. Ask which proposed procedures are essential and which are optional."
      },
      {
        "question": "Can I ask for a natural rather than very white smile?",
        "answer": "Yes. Describe the shade, shape and character you prefer and ask how these will be reviewed. The treating team must explain what is appropriate for your teeth and existing restorations."
      },
      {
        "question": "Does a smile makeover replace a dental examination?",
        "answer": "No. The label describes a broad treatment aim. A clinical assessment is needed to evaluate tooth and gum health, bite and the suitability of each proposed procedure."
      },
      {
        "question": "Will a makeover involving implants need return travel?",
        "answer": "It may. Implant surgery, healing and final restorations can involve separate visits. Ask the dentist to confirm the sequence and travel schedule for your own plan."
      },
      {
        "question": "What should I include in a smile makeover enquiry?",
        "answer": "Describe your main concerns, any existing dental work and your likely travel period. You may add photographs if you choose, but the final plan and cost require clinical assessment."
      }
    ],
    "related": [
      "veneers-finance",
      "dental-implants-finance",
      "before-and-after"
    ],
    "treatment": "Smile makeover"
  },
  "zirconia-crowns-finance": {
    "lastModified": "2026-10-29",
    "title": "Zirconia Crowns Finance in Turkey",
    "description": "Understand zirconia crowns in Antalya: tooth preparation, alternatives, fit and aftercare. Ask for a tooth-by-tooth treatment plan and written estimate.",
    "label": "ZIRCONIA CROWNS",
    "heading": "Zirconia crowns in Turkey.",
    "accent": "Plan with confidence.",
    "intro": "Understand whether crowns are appropriate for your teeth, what preparation involves and how your treatment could be paid for.",
    "sections": crownPlanningSections,
    "faqs": [
      {
        "question": "Does every tooth in a smile makeover need a crown?",
        "answer": "No. Each tooth needs its own assessment and reason for treatment. A smile makeover can involve different procedures or fewer teeth than a package suggests."
      },
      {
        "question": "Is zirconia the name of a crown or a veneer?",
        "answer": "Zirconia describes a material. Ask whether the proposed restoration is a full-coverage crown or another design and have that description written beside each tooth."
      },
      {
        "question": "Do crowns always require root canal treatment?",
        "answer": "No. Root canal treatment is a separate clinical decision. Ask why it is needed for a particular tooth and whether it changes your estimate or appointments."
      },
      {
        "question": "Can I approve a natural-looking crown shade?",
        "answer": "Discuss the desired shade and shape with your dentist and ask how they will be reviewed before the final restoration is fitted. Appearance cannot be guaranteed from a reference image."
      },
      {
        "question": "What happens if a crown feels high when I bite?",
        "answer": "Contact the treating clinical team for assessment and advice. Confirm the review process and how concerns raised after returning home will be handled; do not attempt to adjust the crown yourself."
      }
    ],
    "related": [
      "veneers-finance",
      "smile-makeover-finance",
      "prices"
    ],
    "treatment": "Zirconia crowns"
  },
  "all-on-4-finance": {
    "lastModified": "2026-10-29",
    "title": "All-on-4 Finance in Turkey: Visits & Care",
    "description": "Plan full-arch implant treatment in Antalya. Compare fixed and removable options, temporary and final teeth, visits and quote inclusions.",
    "label": "ALL-ON-4",
    "heading": "All-on-4 in Turkey.",
    "accent": "A full-arch plan.",
    "intro": "Discuss implant-supported options for a full arch of missing or failing teeth. A dentist must assess whether this approach is suitable for you.",
    "sections": fullArchPlanningSections,
    "faqs": [
      {
        "question": "Is an All-on-4 quote for one arch or both jaws?",
        "answer": "Either is possible. Ask for the upper and lower treatment plans to be listed separately, including the implants and final restoration for each arch."
      },
      {
        "question": "Can teeth be fixed immediately after full-arch implant surgery?",
        "answer": "Only if the clinical conditions allow it. Ask what temporary alternative is planned if the implants cannot be loaded immediately; a fixed temporary bridge is not guaranteed in advance."
      },
      {
        "question": "Is an implant denture the same as a fixed bridge?",
        "answer": "No. Some implant-supported restorations are removable and others are fixed. The proposed design, cleaning requirements and final material must be specified in your plan."
      },
      {
        "question": "Should all my remaining teeth be removed for All-on-4?",
        "answer": "The dentist must assess each remaining tooth and explain the reasons for any extraction, along with reasonable alternatives. A treatment label alone does not justify removing a tooth."
      },
      {
        "question": "Will a full-arch warranty include return flights?",
        "answer": "Do not assume it does. Request the written terms for repairs, complications, accommodation and travel, including what happens when a concern is reported from the UK."
      }
    ],
    "related": [
      "dental-implants-finance",
      "prices",
      "how-it-works"
    ],
    "treatment": "All-on-4"
  },
  "before-and-after": {
    "lastModified": "2026-10-21",
    "title": "Turkey Teeth Before & After: What to Know",
    "description": "Understand how to review dental before-and-after photographs, compare relevant treatment cases and set realistic expectations for dental care in Antalya.",
    "label": "PATIENT RESULTS",
    "heading": "Before & after.",
    "accent": "Individual outcomes.",
    "kind": "results",
    "intro": "A useful result shows the treatment, context and consent behind the photograph. Your outcome depends on your own clinical circumstances.",
    "sections": [
      {
        "title": "Where can I view cases published by Akdeniz Dental?",
        "body": "Use Akdeniz Dental’s own before-and-after gallery to view cases published by the treating clinic. This website does not present its illustrative model photographs as patient results. Case images are not copied here without permission and verified treatment context.",
        "paragraphs": [
          "When discussing a photograph, ask which procedures were carried out and whether the image shows a temporary stage or a final restoration. A polished smile image may not show the bite, supporting tissues or later maintenance. Choose a case relevant to your clinical starting point and discuss its limitations with the treating dentist rather than assuming the same result can be reproduced."
        ],
        "sources": [
          "results"
        ],
        "links": [
          {
            "text": "Understand the proposed smile makeover",
            "href": "/smile-makeover-finance"
          }
        ]
      },
      {
        "title": "How should I compare a result with my own teeth?",
        "body": "Compare the type of treatment and the starting condition, rather than shade alone. Crowns, veneers and implant-supported teeth address different situations. A result achieved for one patient cannot establish your suitability, the number of teeth needing treatment or a guaranteed appearance.",
        "paragraphs": [
          "Bring specific questions about shape, tooth preservation, function and maintenance. Ask how the treating dentist would assess your concern and what less invasive alternatives may be appropriate. The clinical plan should explain each proposed procedure independently of the example photograph. You can request time to consider the proposal before agreeing to irreversible treatment."
        ],
        "links": [
          {
            "text": "Compare veneers with full-coverage crowns",
            "href": "/veneers-finance"
          },
          {
            "text": "Review crown preparation",
            "href": "/zirconia-crowns-finance"
          }
        ]
      },
      {
        "title": "What context makes a patient case useful?",
        "body": "A useful case identifies the procedures, the treatment stage and the circumstances in which photographs were taken. Consistent angles and lighting make comparison easier. The patient’s permission to publish photographs is separate from consent to treatment and from providing images privately for an enquiry.",
        "paragraphs": [
          "Ask for relevant clinical context and aftercare arrangements rather than interpreting a before-and-after image as a success-rate statistic. If you send your own photographs through the enquiry form, they are used under the privacy notice and the consents you choose. Sending them does not grant permission to publish your identity or clinical case as marketing material."
        ],
        "links": [
          {
            "text": "Read how enquiry information is handled",
            "href": "/privacy"
          },
          {
            "text": "Check the treating clinic",
            "href": "/our-clinic"
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "Are the website’s hero portraits actual treatment results?",
        "answer": "No. The hero portraits are illustrative model images, as labelled. They must not be used to infer a procedure, treatment outcome or patient testimonial."
      },
      {
        "question": "Does sending my photographs mean they can be used publicly?",
        "answer": "No. Providing photographs for an enquiry does not grant marketing publication rights. Patient-case publication requires separate permission and verified treatment details."
      },
      {
        "question": "Can I request the same smile as a case photograph?",
        "answer": "You can use a photograph to explain preferences. The treating dentist must assess your teeth and explain what is appropriate and realistic; an identical outcome cannot be promised."
      },
      {
        "question": "Could a before-and-after photo show temporary implant teeth?",
        "answer": "Yes, treatment can have temporary and final restorative stages. Ask the clinic which stage a published image shows and what later appointments were required."
      }
    ],
    "related": [
      "reviews",
      "our-clinic",
      "smile-makeover-finance"
    ]
  },
  "reviews": {
    "lastModified": "2026-10-21",
    "title": "Akdeniz Dental Reviews: What to Check",
    "description": "Learn what to look for in independent dental patient reviews: verified sources, treatment context, follow-up and a realistic picture of care in Turkey.",
    "label": "PATIENT EXPERIENCES",
    "heading": "Patient experiences.",
    "accent": "Start with real stories.",
    "kind": "reviews",
    "intro": "Look beyond a star rating. Read about treatment planning, communication, aftercare and how the team handles questions after patients return home.",
    "sections": [
      {
        "title": "Where can I read independent Akdeniz Dental reviews?",
        "body": "The clinic’s official website links to its Akdeniz Dental Clinic profile on Trustpilot. Use that source to read current reviews and the platform’s review labels. This website does not reproduce a star score, invent patient testimonials or treat every published review as independently verified clinical evidence.",
        "paragraphs": [
          "Read the full range of experiences, including recent and less positive feedback. Check whether a review describes an initial visit, completed treatment or longer-term follow-up. A patient account can help you prepare questions about communication and support, but it cannot determine the right procedure or predict your outcome."
        ],
        "sources": [
          "reviews"
        ],
        "links": [
          {
            "text": "Understand the clinical provider",
            "href": "/our-clinic"
          }
        ]
      },
      {
        "title": "What should I look for beyond a rating?",
        "body": "Look for treatment context, the point in the patient journey and how the clinic responds to questions or concerns. A review about appointment organisation answers a different question from a report about follow-up after returning home. Star ratings do not establish clinical suitability.",
        "paragraphs": [
          "Use the account to identify questions relevant to your situation: how changes to a treatment plan were explained, whether temporary and final teeth were distinguished, and how written information was provided. Avoid assuming that one person’s experience applies to your case. Ask the team to explain the written process you would use if a concern arose."
        ],
        "links": [
          {
            "text": "Plan aftercare before travel",
            "href": "/guides/plan-dental-visit-antalya"
          }
        ]
      },
      {
        "title": "How can I use reviews when comparing treatment plans?",
        "body": "Use reviews alongside an individual clinical assessment, a written estimate and clear aftercare terms. A positive account does not replace checking the treating professional, the proposed procedures and the responsibilities in your own agreement. An online review cannot confirm whether a package is appropriate for your teeth.",
        "paragraphs": [
          "Keep a short list of questions prompted by the experiences you read. Ask about the contact route from the UK, the review schedule and the terms for any return visit. Keep these answers with the treatment estimate so that you compare written arrangements, rather than relying on a collection of favourable quotations."
        ],
        "links": [
          {
            "text": "Compare written dental quotes",
            "href": "/guides/compare-dental-quotes"
          },
          {
            "text": "Check treatment cost inclusions",
            "href": "/prices"
          }
        ]
      }
    ],
    "faqs": [
      {
        "question": "Does this site publish a live Trustpilot rating?",
        "answer": "No. Read the current rating and reviews on the linked Trustpilot profile. No fixed review score or clinical success percentage is claimed on this website."
      },
      {
        "question": "Are independent reviews the same as a clinical outcome audit?",
        "answer": "No. Reviews describe individual experiences and may concern different treatments and stages. They do not establish a measured clinic complication rate or predict another patient’s result."
      },
      {
        "question": "Can I read less positive patient experiences too?",
        "answer": "Yes. Use the review platform to read the full range of feedback, review dates and any clinic responses. Consider the treatment context rather than selecting only favourable examples."
      },
      {
        "question": "What should I ask the clinic after reading reviews?",
        "answer": "Ask how the written treatment plan, communication, follow-up and complaints process would work in your case. Request specific answers and keep them with your estimate."
      }
    ],
    "related": [
      "before-and-after",
      "our-clinic",
      "how-it-works"
    ]
  },
  "how-it-works": {
    lastModified: "2026-10-21",
    title: "How Dental Finance in Turkey Works",
    description:
      "Follow four steps from a written treatment enquiry to planning your visit to Antalya. Explore finance separately, with no required phone call to request a quote.",
    label: "HOW IT WORKS",
    heading: "Four simple steps.",
    accent: "We help you plan.",
    kind: "journey",
    intro:
      "From your first written enquiry to your visit, understand the treatment, payment options and travel arrangements before you commit.",
    sections: [
      {
        title: "You stay in control",
        body: "Choose email or WhatsApp for your enquiry. Review your plan in writing, ask questions and decide in your own time. You do not need to accept a finance offer to obtain a treatment quote.",
        links: [{"text": "Plan your clinical appointments", "href": "/guides/plan-dental-visit-antalya"}, {"text": "Check the treating team", "href": "/our-clinic"}],
        sources: ["gdc"],
      },
      {
        title: "Clinical decisions belong with the dentist",
        body: "Our UK company helps coordinate the journey. Diagnosis, consent, procedures and aftercare advice are the responsibility of the treating clinical team in Antalya.",
      },
    ],
    faqs: [commonFAQs[1], commonFAQs[4], legitFaqs[0]],
    related: ["get-a-quote", "dental-finance", "our-clinic", "is-turkey-teeth-finance-legit"],
  },
  "is-turkey-teeth-finance-legit": {
    lastModified: "2026-10-30",
    title: "Is Turkey Teeth Finance Legit? How It Works",
    description:
      "Who is behind turkeyteethfinance.co.uk, what each company does, how finance works for UK patients and how to check a dental finance service yourself.",
    label: "IS IT LEGIT?",
    heading: "Is Turkey Teeth Finance legit?",
    accent: "Check it for yourself.",
    intro:
      "Turkey Teeth Finance helps UK patients request a written treatment estimate for dental care in Antalya and understand third-party finance. It is not a lender and not a clinic. Here is who does what, and how to verify each party.",
    sections: legitSections,
    faqs: legitFaqs,
    related: ["how-it-works", "our-clinic", "reviews", "finance-faq"],
  },
  "our-clinic": {
    "lastModified": "2026-10-22",
    "title": "Akdeniz Dental Clinic in Antalya",
    "description": "Learn about treatment coordination with Akdeniz Dental in Antalya. Understand the role of the clinical team, questions to ask and your aftercare arrangements.",
    "label": "OUR CLINIC",
    "heading": "Dental care in Antalya.",
    "accent": "Your questions answered.",
    "kind": "clinic",
    "intro": "Explore dental treatment with Akdeniz Dental in Antalya, Turkey. Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination and administrative support. Clinical assessments, treatment planning and dental treatment are provided by the clinical team in Turkey.",
    "sections": clinicPlanningSections,
    "faqs": [
      {
        "question": "Are the clinician qualifications on this page independently verified?",
        "answer": "The names, roles and education are attributed to the linked profiles on Akdeniz Dental’s official website. Ask the clinic for current professional registration and the credentials relevant to your proposed procedure. No independent credential verification is claimed here."
      },
      {
        "question": "Can I choose or confirm my treating dentist before travel?",
        "answer": "Ask the clinic to identify the professional expected to assess you and carry out each stage. The public team list does not establish appointment availability or guarantee an assignment."
      },
      {
        "question": "Are the UK coordination company and Turkish clinic the same clinical provider?",
        "answer": "No. The UK company provides non-clinical coordination and administration. Clinical assessment, planning and treatment are the responsibility of the treating team in Turkey."
      },
      {
        "question": "Where can I see photographs of the actual clinic?",
        "answer": "Use the linked clinic and laboratory galleries published by Akdeniz Dental. The illustrative model images on this website do not depict a clinical result."
      },
      {
        "question": "What should I obtain before leaving the clinic?",
        "answer": "Ask for a treatment summary, any implant and restoration details, written aftercare instructions, the review schedule and the clinical contact for concerns from the UK."
      }
    ],
    "related": [
      "before-and-after",
      "reviews",
      "contact"
    ]
  },
  "finance-faq": {
    lastModified: "2026-10-30",
    title: "Turkey Dental Finance FAQs for UK Patients",
    description:
      "Answers about dental finance, treatment estimates, credit applications, payments and planning dental care in Antalya for UK patients.",
    label: "YOUR QUESTIONS",
    heading: "Dental finance questions.",
    accent: "Every step of the way.",
    kind: "faq",
    intro:
      "Straightforward answers to the questions patients ask before requesting a quote or exploring third-party finance.",
    sections: financeFaqSections,
    faqs: [
      ...commonFAQs,
      {
        question: "Is the treatment enquiry a finance application?",
        answer:
          "No. The enquiry form helps us understand your treatment interests. A credit application is a separate process through the approved broker link and the lender you choose.",
      },
      {
        question: "Does the calculator advertise a lender rate or repayment?",
        answer:
          "No. The repayment calculator uses an annual nominal interest-rate assumption you enter yourself. It is a mathematical illustration, not a lender APR, a credit quotation or an eligibility decision. The separate budget explorer only records a treatment budget.",
      },
      {
        question: "Can I choose to pay without finance?",
        answer:
          "Yes. Ask for the clinic’s available payment methods and payment schedule in your written quote. You do not need a credit application to request a treatment estimate.",
      },
      {
        question: "What if I need urgent dental help?",
        answer:
          "This website is not an emergency dental service. For urgent care in the UK, contact your dentist or use NHS 111. For a medical emergency, use the appropriate local emergency service.",
      },
    ],
    related: ["dental-finance", "finance-eligibility", "prices"],
  },
  contact: {
    lastModified: "2026-10-21",
    title: "Contact | Dental Treatment Quote Antalya",
    description:
      "Contact the patient coordination team about treatment in Antalya. Request a written estimate, ask a question and choose email or WhatsApp without a required call.",
    label: "LET’S TALK",
    heading: "Contact our patient team.",
    accent: "On your terms.",
    kind: "contact",
    intro:
      "Ask a question about treatment planning, travel coordination or your written estimate. Choose the communication method that works for you.",
    sections: [
      {
        title: "Start with a written enquiry",
        body: "Use the treatment enquiry form to tell us what you are interested in. Choose email or WhatsApp so the team can respond in the way you prefer. A telephone call is not required.",
        links: [{"text": "Read how enquiry data is used", "href": "/privacy"}, {"text": "Check the clinical provider", "href": "/our-clinic"}],
        sources: ["gdc"],
      },
      {
        title: "Keep personal information secure",
        body: "Do not send banking details, card numbers, passport information or credit applications through the treatment form. The broker collects finance application information through its own separate process.",
      },
    ],
    faqs: [commonFAQs[1], commonFAQs[3]],
    related: ["get-a-quote", "our-clinic", "finance-faq"],
  },
  guides: {
    lastModified: "2026-10-30",
    title: "Turkey Dental Treatment & Finance Guides",
    description:
      "Practical guides for UK patients considering dental care in Turkey: comparing quotes, preparing for treatment, reviewing finance and planning aftercare.",
    label: "PATIENT GUIDES",
    heading: "Dental treatment guides.",
    accent: "Better questions.",
    kind: "guides",
    intro:
      "Practical reading to help you compare treatment plans, understand payment options and prepare for care abroad.",
    sections: guidePlanningSections,
    faqs: [
      {
        question: "Is this personalised clinical or financial advice?",
        answer:
          "No. These guides provide general information and questions to discuss with the relevant professional. Only the treating dentist can assess clinical needs; the broker and lender provide the information for a finance application.",
      },
    ],
    related: ["prices", "how-it-works", "finance-faq"],
  },
};

export { guideArticles } from "./guides";
