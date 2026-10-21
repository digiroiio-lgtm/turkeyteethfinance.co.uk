import type { EvidenceId } from "./evidence";
export type FAQ = { question: string; answer: string };
export const homeContent = {
  lastModified: "2026-10-21",
  title: "Dental Finance Turkey | Flexible Payment Options",
  description:
    "Explore dental treatment in Antalya with flexible payment options for eligible UK patients. Start with a free written treatment estimate, with no required phone call.",
  label: "DENTAL TREATMENT IN TURKEY",
  heading: "Your new smile in Turkey.",
  accent: "Flexible payment options.",
  intro:
    "Quality dental treatment in Antalya with finance options for eligible UK patients, subject to status and lender approval.",
};

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

export const treatments = [
  {
    slug: "veneers-finance",
    name: "Veneers",
    icon: "sparkles",
    text: "Explore changes to the shape, colour and appearance of your smile.",
    detail: "Suitability and preparation depend on your teeth.",
  },
  {
    slug: "dental-implants-finance",
    name: "Dental implants",
    icon: "implant",
    text: "Discuss options for replacing missing teeth and restoring function.",
    detail: "Clinical assessment and healing time are essential.",
  },
  {
    slug: "zirconia-crowns-finance",
    name: "Zirconia crowns",
    icon: "tooth",
    text: "Understand restorative options for teeth that need full coverage.",
    detail: "The dentist will explain alternatives and preparation.",
  },
  {
    slug: "all-on-4-finance",
    name: "All-on-4",
    icon: "smile",
    text: "Find out about implant-supported treatment for a full arch.",
    detail: "Implant number and loading depend on your assessment.",
  },
  {
    slug: "smile-makeover-finance",
    name: "Smile makeover",
    icon: "heart",
    text: "A personalised plan built around your dental needs and goals.",
    detail: "Your plan may combine several different treatments.",
  },
];

export const pages: Record<string, PageContent> = {
  "pay-monthly": {
    lastModified: "2026-10-21",
    title: "Pay Monthly for Dental Treatment in Turkey",
    description:
      "Explore monthly payment options for dental treatment in Antalya. Get a personalised quote, understand treatment costs and check UK finance eligibility.",
    label: "PAY MONTHLY",
    heading: "Same smile.",
    accent: "More possibilities.",
    kind: "monthly",
    intro:
      "Explore dental treatment in Antalya with flexible monthly payment options for eligible UK patients, subject to status and lender approval.",
    sections: [
      {
        title: "Start with the right treatment plan",
        body: "Before thinking about repayments, understand what your teeth need. Your written quote sets out the proposed treatment, estimated cost and expected visits. The dentist confirms the final plan after a clinical assessment.",
        links: [{"text": "Understand treatment cost inclusions", "href": "/prices"}, {"text": "Read the existing finance questions", "href": "/finance-faq"}],
        sources: ["gdc"],
      },
      {
        title: "A separate decision about finance",
        body: "You can then review available finance options through Ideal4Finance. It is a credit broker, not a lender. Compare the APR, term, fees and total amount repayable before deciding whether an offer suits your budget.",
      },
      {
        title: "Understand the whole cost",
        body: "Check whether your quote includes scans, temporary restorations, accommodation, transfers and follow-up. Budget for flights, insurance and any return visits separately unless your quote explicitly includes them.",
      },
    ],
    faqs: [commonFAQs[0], commonFAQs[2]],
    related: ["finance-eligibility", "prices", "dental-finance"],
  },
  "dental-finance": {
    lastModified: "2026-10-21",
    title: "Dental Finance in Turkey for UK Patients",
    description:
      "Understand the difference between your dental treatment quote and a credit application. Explore finance for UK patients planning dental care in Turkey.",
    label: "DENTAL FINANCE",
    heading: "Dental finance in Turkey.",
    accent: "Explore your options.",
    intro:
      "A clear treatment plan comes first. Then explore ways to pay for dental care in Antalya, including third-party finance for eligible UK patients.",
    sections: [
      {
        title: "What is dental finance?",
        body: "Dental finance is a way of borrowing to help pay for treatment, with repayments made under a separate credit agreement. The price of your dental treatment and the total cost of credit are different figures.",
        links: [{"text": "Read the existing eligibility information", "href": "/finance-eligibility"}, {"text": "Understand the treatment estimate", "href": "/prices"}],
        sources: ["broker"],
      },
      {
        title: "How the application works",
        body: "Once you understand your treatment estimate, the approved Ideal4Finance application link lets you explore available offers. Ideal4Finance sources options from lenders. You review an offer and complete the lender’s own application process.",
      },
      {
        title: "Who receives the funds?",
        body: "Under the customer process supplied by Ideal4Finance, a successful lender pays the funds to the customer. You remain responsible for paying the clinic according to the agreed treatment payment schedule.",
      },
      {
        title: "Fees and total cost",
        body: "Your written quote must show any applicable treatment or finance-related administration fee before you commit. A quoted treatment price is not a credit quotation. Read the lender’s APR, repayment schedule, charges and total repayable carefully.",
      },
    ],
    faqs: [commonFAQs[3]],
    related: ["pay-monthly", "finance-eligibility", "finance-faq"],
  },
  "get-a-quote": {
    lastModified: "2026-10-20",
    title: "Free Dental Treatment Quote Turkey",
    description:
      "Request a personalised dental treatment estimate for Antalya. Choose email or WhatsApp, tell us your goals and get a written plan without a required phone call.",
    label: "YOUR FIRST STEP",
    heading: "Your smile.",
    accent: "Your personal plan.",
    kind: "quote",
    intro:
      "Tell us what you have in mind. Start your free treatment enquiry online, with email or WhatsApp as your preferred way to stay in touch.",
    sections: [],
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
    "lastModified": "2026-10-21",
    "title": "Dental Implants in Turkey: Visits & Care",
    "description": "Understand implant components, alternatives, healing visits and aftercare in Antalya. Request an itemised estimate for your missing teeth.",
    "label": "DENTAL IMPLANTS",
    "heading": "Dental implants in Turkey.",
    "accent": "A clearer way forward.",
    "intro": "Explore implant treatment in Antalya and understand the full journey before considering how to pay. Finance may be available to eligible UK patients.",
    "sections": [
      {
        "title": "What replaces a missing tooth with an implant?",
        "body": "An implant replaces a tooth root and supports a restoration such as a crown, bridge or denture. The implant fixture, connecting abutment and visible replacement tooth are different components. Ask the clinic to identify which components and treatment stages appear in your estimate.",
        "paragraphs": [
          "Replacing one tooth is different from supporting a full arch. A dentist needs to assess your gums, bone, remaining teeth and medical history before choosing an approach. An implant is not simply a crown inserted in one appointment. Keep the proposed restoration and number of missing teeth clear when comparing alternatives or reading a package description."
        ],
        "sources": [
          "implants"
        ]
      },
      {
        "title": "How do implants compare with bridges and dentures?",
        "body": "Implants, conventional bridges and removable dentures support replacement teeth in different ways. A conventional bridge uses neighbouring teeth for support, while a removable denture is taken out for care. The most appropriate option depends on the teeth, bone and your ability to maintain the restoration.",
        "paragraphs": [
          "Ask what would happen to adjacent teeth with each option and how maintenance would work at home. If most teeth in an arch are missing, discuss a full-arch plan rather than multiplying a single-implant estimate. Preserving a tooth that can be treated is a separate clinical question from replacing one that cannot be retained."
        ],
        "sources": [
          "implants"
        ],
        "links": [
          {
            "text": "Understand full-arch implant treatment",
            "href": "/all-on-4-finance"
          }
        ]
      },
      {
        "title": "Why might implant treatment need separate visits?",
        "body": "Assessment, possible bone grafting, implant placement and fitting the final restoration are separate parts of implant care. Healing can require a gap between appointments. Immediate temporary teeth are possible only in selected circumstances and are not a promise that final treatment is complete.",
        "paragraphs": [
          "Ask for the expected surgical and restorative visits in writing, including what you will wear while healing and when the team reassesses the plan. If grafting is proposed, ask whether it changes the order or number of visits. Keep your travel bookings tied to a confirmed clinical schedule rather than an advertised holiday duration."
        ],
        "sources": [
          "stages"
        ],
        "links": [
          {
            "text": "Plan your Antalya visits",
            "href": "/guides/plan-dental-visit-antalya"
          }
        ]
      },
      {
        "title": "What risks and long-term responsibilities should I discuss?",
        "body": "Implant surgery and the final restoration have risks and maintenance needs. The treating dentist should explain factors relevant to your health, smoking, gum condition and available bone, as well as possible surgical complications. A favourable general statistic cannot predict your result.",
        "paragraphs": [
          "Request written instructions for cleaning, professional reviews and reporting discomfort or a loose component. Keep a record of the implant system and the restorations fitted. Discuss how a concern raised from the UK will be assessed and who would meet any return-travel or remedial-care costs. A warranty and a biological outcome are different matters."
        ],
        "sources": [
          "implants"
        ]
      },
      {
        "title": "What must an implant estimate itemise?",
        "body": "An implant estimate should distinguish the fixture, abutment, final restoration and any temporary teeth. Confirm the implant system, scans, extractions, grafting if required, planned visits and aftercare arrangements. A headline per-implant figure does not necessarily cover a complete replacement tooth.",
        "paragraphs": [
          "Tell the coordination team which teeth are missing or broken and whether any implants are already present. Share existing records only if you choose to do so through the enquiry process. Ask for the payment schedule alongside the clinical stages and check what happens if assessment changes the plan. No diagnosis or guaranteed completion date can be established through an enquiry alone."
        ],
        "links": [
          {
            "text": "Compare complete written estimates",
            "href": "/guides/compare-dental-quotes"
          },
          {
            "text": "Request itemised treatment costs",
            "href": "/prices"
          }
        ]
      }
    ],
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
    lastModified: "2026-10-21",
    title: "Dental Finance Eligibility UK | What to Check",
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
      commonFAQs[2],
    ],
    related: ["dental-finance", "pay-monthly", "finance-faq"],
  },
  "veneers-finance": {
    "lastModified": "2026-10-21",
    "title": "Veneers in Turkey: Materials & Risks",
    "description": "Compare veneers, bonding and crowns for treatment in Antalya. Understand preparation, maintenance, appointment planning and an itemised written estimate.",
    "label": "VENEERS",
    "heading": "Veneers in Turkey.",
    "accent": "A personal difference.",
    "intro": "Discuss the shape, colour and appearance of your teeth with a dentist. Get a written veneers estimate before exploring available payment options.",
    "sections": [
      {
        "title": "What can veneers change, and what do they leave unchanged?",
        "body": "Veneers cover the front surface of existing teeth to change their appearance. They do not replace missing teeth, and a cosmetic change does not treat an underlying infection or gum problem. The dentist needs to assess the teeth and bite before recommending whether veneers are appropriate.",
        "paragraphs": [
          "Describe the specific change you want: the edge shape, a small gap, colour or the appearance of a particular tooth. Ask the dentist to distinguish a surface change from a problem that needs orthodontic or restorative care. A request for a natural appearance is a discussion about your own teeth, rather than an instruction to reproduce another person’s smile."
        ],
        "sources": [
          "veneers"
        ]
      },
      {
        "title": "How do porcelain veneers, composite and crowns compare?",
        "body": "Porcelain veneers are laboratory-made coverings; composite material is shaped and bonded to the tooth. A crown covers more of the tooth than a veneer. The choice depends on the remaining tooth structure and treatment goals, rather than a package name or the number of teeth visible in a photograph.",
        "paragraphs": [
          "Ask for the actual restoration type and material beside each tooth in your plan. If you are offered zirconia, clarify whether the proposal is for a crown rather than a front-surface veneer. Discuss whether whitening, alignment or a smaller repair could address your concern. Availability and suitability must be confirmed by the treating team."
        ],
        "sources": [
          "nhs"
        ],
        "links": [
          {
            "text": "Compare zirconia crowns with veneers",
            "href": "/zirconia-crowns-finance"
          }
        ]
      },
      {
        "title": "What are the preparation and maintenance risks?",
        "body": "Veneer treatment can involve irreversible removal of enamel. Veneers may chip, loosen or need replacement, and grinding or an unsuitable bite can affect the choice of restoration. Ask how these issues apply to you before agreeing to prepare healthy teeth.",
        "paragraphs": [
          "A written discussion should cover the condition of each tooth, alternatives and the possibility of later repair or replacement. Ask how an uncomfortable bite or a damaged restoration would be assessed after you return to the UK. Avoid treating any stated lifespan or photograph as a guarantee. The dentist should give cleaning and review instructions suited to the material and your mouth."
        ],
        "sources": [
          "veneers"
        ]
      },
      {
        "title": "What happens during a veneer visit to Antalya?",
        "body": "A veneer plan may include assessment, preparation, a scan or impression, laboratory work, a fit check and bonding. The precise appointments and temporary restorations depend on the material and clinical findings. Ask the clinic to confirm the schedule before you book flights.",
        "paragraphs": [
          "Agree how you will review shape and shade, when any trial or temporary stage occurs, and what happens if an adjustment is needed. Leave room in the travel plan for the appointments actually recommended. You should understand the proposed treatment before consenting, and have a clear contact for concerns after leaving Antalya."
        ],
        "links": [
          {
            "text": "Plan appointments and travel",
            "href": "/guides/plan-dental-visit-antalya"
          }
        ]
      },
      {
        "title": "What information should I send for a veneers estimate?",
        "body": "Tell the team which teeth concern you, what change you would like and whether you already have crowns, veneers or bonding. Photographs are optional through the enquiry form. They can support an initial discussion, but cannot confirm preparation, suitability or a final price.",
        "paragraphs": [
          "Request an itemised estimate showing the number of teeth, material, temporary restorations, reviews and any preparatory care. State your preferred contact method and likely travel period. You can ask for alternatives before deciding. An enquiry does not book treatment or apply for credit, and the clinical assessment may change an initial estimate."
        ],
        "links": [
          {
            "text": "Check the treatment quote checklist",
            "href": "/guides/compare-dental-quotes"
          },
          {
            "text": "Understand what your estimate includes",
            "href": "/prices"
          }
        ]
      }
    ],
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
    "title": "Dental Treatment Prices Turkey | Written Quotes",
    "description": "Understand what affects dental treatment prices in Antalya. Compare treatment, travel, visit schedules and payment options with a personalised written estimate.",
    "label": "PRICES & PAYMENT OPTIONS",
    "heading": "Dental treatment prices.",
    "accent": "Clear before you commit.",
    "kind": "prices",
    "intro": "Every smile needs a different plan. Request an itemised quote in pounds so you can understand the treatment, inclusions and payment schedule.",
    "sections": [
      {
        "title": "How can I get a reliable treatment price?",
        "body": "Request an itemised written estimate for the treatment your teeth need. Prices on this site are provided through personal estimates rather than a fixed package price list. The final plan and cost depend on the treating dentist’s assessment, not a budget entered into the online planner.",
        "paragraphs": [
          "Tell the team the treatment you want to discuss, any existing dental work and your likely travel period. Ask which parts of the estimate are provisional and which questions need examination or imaging. If assessment changes the proposal, request a revised plan and total before agreeing to additional care. Do not interpret a headline advertised elsewhere as the price for your own case."
        ],
        "links": [
          {
            "text": "Request your personal treatment estimate",
            "href": "/get-a-quote"
          },
          {
            "text": "Use the full quote comparison checklist",
            "href": "/guides/compare-dental-quotes"
          }
        ]
      },
      {
        "title": "What needs to be itemised for each treatment?",
        "body": "Veneers and crowns need a tooth count, restoration type and material. An implant estimate should distinguish fixtures, abutments and final teeth. A full-arch plan should identify each arch and both temporary and final restorations. Different specifications cannot be compared using a total alone.",
        "paragraphs": [
          "The table on this page lists the questions to resolve for each treatment. Ask about scans, extractions, preparatory work, laboratory stages and planned reviews. Where an item is not included, ask whether it can be estimated separately or remains unknown until assessment. Record the scope and exclusions beside the total rather than relying on the word “package”."
        ],
        "links": [
          {
            "text": "Veneer preparation and materials",
            "href": "/veneers-finance"
          },
          {
            "text": "Implant components and visits",
            "href": "/dental-implants-finance"
          }
        ]
      },
      {
        "title": "Are hotel nights, transfers and return visits included?",
        "body": "Accommodation and transfers are included only when your written quote explicitly lists them. Confirm the hotel or room arrangement, the number of nights and the journeys covered. A first-stay package should not be assumed to include later treatment trips, extra nights or travel for a complication.",
        "paragraphs": [
          "Keep your travel bookings separate from the clinical estimate so that changes are visible. Ask whether the quoted treatment involves one stay or several stages and how extra appointments would affect the itinerary. Use current travel options and your own circumstances when budgeting. This page does not substitute assumed flights, hotel costs or sample clinic prices for verified quotations."
        ],
        "links": [
          {
            "text": "Plan staged visits to Antalya",
            "href": "/guides/plan-dental-visit-antalya"
          }
        ]
      },
      {
        "title": "What happens if the clinical plan or price changes?",
        "body": "Ask for the changed procedures, reasons and revised cost in writing before deciding whether to proceed. A provisional online estimate may change after examination. Clarify the clinic’s deposit, cancellation, refund and payment-timing terms before paying or making non-refundable travel arrangements.",
        "paragraphs": [
          "Keep both versions of the estimate and confirm which items are removed, added or delayed. Ask how already-agreed accommodation or appointments would be affected. If treatment has separate stages, request the payment schedule for each one. You can ask for time to consider the revised proposal and any alternatives explained by the treating dentist."
        ],
        "links": [
          {
            "text": "Check the clinical and coordination roles",
            "href": "/our-clinic"
          }
        ]
      },
      {
        "title": "What should written aftercare and warranty terms explain?",
        "body": "Written terms should explain how clinical concerns are assessed and which repairs, reviews or complications are covered. Check the conditions and exclusions, the contact route from the UK and responsibility for travel. A treatment warranty is not a guarantee of an individual result or unlimited free future care.",
        "paragraphs": [
          "A warranty may be relevant to a restoration while other clinical issues require a different assessment. Ask the clinic to clarify uncertainty before you commit rather than relying on an informal assurance. Keep the aftercare instructions and treatment records with your quote so that the agreed responsibilities can be checked if a question arises later."
        ],
        "sources": [
          "gdc"
        ]
      }
    ],
    "faqs": [
      {
        "question": "Why are there no fixed clinic prices on this Prices page?",
        "answer": "Prices are provided through personalised written estimates. Request the procedures, materials and inclusions for your own case; a budget entered into the planner does not establish a clinic price."
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
    "lastModified": "2026-10-21",
    "title": "Smile Makeover in Turkey: Personal Plans",
    "description": "Plan a smile makeover in Antalya around your own teeth. Compare less invasive options, treatment stages, materials and individual quote details.",
    "label": "SMILE MAKEOVER",
    "heading": "Your smile makeover.",
    "accent": "One considered plan.",
    "intro": "A smile makeover is a personal treatment plan, not one standard procedure. Start by discussing what you want to change and what your teeth need.",
    "sections": [
      {
        "title": "What is included in a personalised smile makeover?",
        "body": "A smile makeover is a plan combining the changes appropriate to your teeth and goals, rather than one standard procedure. It may involve different treatments for different teeth. A dentist should separate treatment needed for oral health from optional changes in appearance.",
        "paragraphs": [
          "Start with the change that matters to you: colour, a chipped edge, missing teeth or the balance of your smile. Explain what you would prefer to retain as well as what you want to alter. The plan should identify the recommended procedures and alternatives. A package with a fixed number of restorations is not a substitute for assessing each tooth."
        ],
        "links": [
          {
            "text": "Understand veneers",
            "href": "/veneers-finance"
          },
          {
            "text": "Understand crowns",
            "href": "/zirconia-crowns-finance"
          }
        ]
      },
      {
        "title": "Could a less invasive option address my concern?",
        "body": "Ask whether a smaller repair, whitening or alignment treatment could address your concern before choosing extensive restorations. These approaches have different indications and limitations. A dentist must assess which options are appropriate, including whether existing dental disease needs attention first.",
        "paragraphs": [
          "The least invasive suitable plan may not resemble a social-media smile transformation. Ask how each option changes the tooth and what future maintenance may involve. If orthodontic treatment is considered, discuss the continuity and location of follow-up rather than assuming it can be completed during a short trip. You can seek another clinical opinion before consenting to irreversible treatment."
        ],
        "sources": [
          "nhs"
        ]
      },
      {
        "title": "How do function and appearance fit into the same plan?",
        "body": "A treatment plan needs to consider the bite, gum health and existing teeth alongside the appearance of the smile. Shade and shape preferences are useful, but do not establish what the teeth can support. Ask how these decisions will be checked clinically.",
        "paragraphs": [
          "Discuss how the proposed restorations relate to untreated teeth and any existing implants or crowns. A photograph shows only part of the mouth and cannot establish every diagnosis. Ask when you will review the appearance, what adjustments are possible and how final checks are organised. The clinical team should explain the limits of the result rather than promising an exact copy of a reference."
        ],
        "links": [
          {
            "text": "Meet the clinic-listed treating team",
            "href": "/our-clinic"
          }
        ]
      },
      {
        "title": "Why can the treatment sequence change the travel plan?",
        "body": "The order of a smile makeover depends on the procedures involved. A plan including implants may need a healing interval and a later restorative visit, while another plan may involve a different sequence. Confirm the actual appointments before arranging travel.",
        "paragraphs": [
          "Ask which stages must be completed before the next can begin, what temporary teeth are planned and what would trigger a revised schedule. Discuss who will communicate changes while you are in Antalya and after returning home. Allow decisions about healing and treatment readiness to remain with the clinical team rather than a predetermined holiday timetable."
        ],
        "sources": [
          "stages"
        ],
        "links": [
          {
            "text": "Plan your dental visit",
            "href": "/guides/plan-dental-visit-antalya"
          }
        ]
      },
      {
        "title": "How do I compare a makeover package with an individual plan?",
        "body": "Compare the proposed treatment tooth by tooth, including materials, temporary restorations, visits and aftercare. A broad package name does not confirm that every item is needed or included. Ask for essential and optional procedures to be distinguished and priced in the written estimate.",
        "paragraphs": [
          "Bring a list of your priorities to the initial enquiry and ask what needs clinical confirmation. Check how additional treatment would be authorised if assessment changes the estimate. You can request time to consider alternatives. The treatment form starts a conversation with the coordination team and does not commit you to procedures or create a credit application."
        ],
        "links": [
          {
            "text": "Compare written treatment quotes",
            "href": "/guides/compare-dental-quotes"
          },
          {
            "text": "Review what affects treatment costs",
            "href": "/prices"
          }
        ]
      }
    ],
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
    "lastModified": "2026-10-21",
    "title": "Zirconia Crowns in Turkey: Planning",
    "description": "Understand zirconia crowns in Antalya: tooth preparation, alternatives, fit and aftercare. Ask for a tooth-by-tooth treatment plan and written estimate.",
    "label": "ZIRCONIA CROWNS",
    "heading": "Zirconia crowns in Turkey.",
    "accent": "Plan with confidence.",
    "intro": "Understand whether crowns are appropriate for your teeth, what preparation involves and how your treatment could be paid for.",
    "sections": [
      {
        "title": "When might a dentist recommend a crown?",
        "body": "A crown covers a tooth to restore its shape and function when appropriate. It may be considered for a weakened, damaged or heavily restored tooth. The reason for recommending a crown should be explained separately for each tooth, rather than assumed from a full-smile package.",
        "paragraphs": [
          "A crown on a natural tooth and a crown supported by an implant are different situations. Ask the dentist which applies to each item in your plan. Teeth that need restorative treatment should be distinguished from healthy teeth being considered for cosmetic changes. You can ask what would happen if you chose a smaller restoration or no cosmetic treatment."
        ],
        "sources": [
          "crowns"
        ]
      },
      {
        "title": "How are zirconia crowns different from veneers?",
        "body": "A crown covers the prepared tooth more fully; a veneer usually covers the front surface. Zirconia names a material, while crown and veneer describe the restoration. Ask for both the material and the restoration type, particularly when marketing uses the terms interchangeably.",
        "paragraphs": [
          "The comparison should start with the remaining tooth, existing fillings, bite and the change you want. A natural-looking finish also involves shape and shade, not simply choosing the whitest option. Ask whether whitening, bonding or a veneer could address your concern with a different amount of preparation. No material removes the need for appropriate treatment planning."
        ],
        "sources": [
          "nhs"
        ],
        "links": [
          {
            "text": "Read about front-surface veneers",
            "href": "/veneers-finance"
          }
        ]
      },
      {
        "title": "What does preparing a tooth for a crown involve?",
        "body": "Fitting a crown generally involves reshaping the tooth, taking a scan or impression and fitting a temporary restoration while the final one is made. Preparation removes tooth tissue and is not reversible. Ask how much healthy structure would remain and what risks apply to your tooth.",
        "paragraphs": [
          "Existing decay, a large filling or previous root canal treatment may alter the plan. Do not assume that every tooth needs root canal treatment, or that it can always be avoided. The dentist should explain any proposed additional procedure and its separate cost. A photograph cannot establish the condition of the nerve, roots or supporting tissues."
        ],
        "sources": [
          "nhs"
        ]
      },
      {
        "title": "How should fit, bite and shade be checked?",
        "body": "The final crown needs a clinical check for fit, bite and appearance before treatment is completed. Discuss how you will review the proposed shade and shape and when adjustments can be made. Reference photographs can help communicate preferences but cannot promise an identical result.",
        "paragraphs": [
          "Before leaving Antalya, obtain the material specification and a treatment summary. Ask how to report a crown that feels uncomfortable, and what review is recommended once you return home. Arrange the visit schedule with enough time for the checks the team recommends, rather than treating laboratory completion as the end of clinical care."
        ],
        "links": [
          {
            "text": "Plan the appointment schedule",
            "href": "/guides/plan-dental-visit-antalya"
          }
        ]
      },
      {
        "title": "What should a crown quote and aftercare plan show?",
        "body": "A crown estimate should name the teeth, material and number of restorations, with temporary crowns and additional treatment clearly identified. Confirm the review arrangements and written warranty conditions, including exclusions and responsibility for travel. A warranty is not a promise that a crown will last a particular length of time.",
        "paragraphs": [
          "Ask how you should clean around the restorations and whether your bite or grinding affects maintenance. Keep the agreed specification and any revised treatment plan. Your next step is an itemised assessment of the teeth that concern you, not choosing a fixed number of crowns without a clinical reason for each one."
        ],
        "links": [
          {
            "text": "Compare the contents of your quote",
            "href": "/guides/compare-dental-quotes"
          },
          {
            "text": "Understand treatment cost inclusions",
            "href": "/prices"
          }
        ]
      }
    ],
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
    "lastModified": "2026-10-21",
    "title": "All-on-4 in Turkey: Visits & Care",
    "description": "Plan full-arch implant treatment in Antalya. Compare fixed and removable options, temporary and final teeth, visits and quote inclusions.",
    "label": "ALL-ON-4",
    "heading": "All-on-4 in Turkey.",
    "accent": "A full-arch plan.",
    "intro": "Discuss implant-supported options for a full arch of missing or failing teeth. A dentist must assess whether this approach is suitable for you.",
    "sections": [
      {
        "title": "What does an All-on-4 treatment plan replace?",
        "body": "All-on-4 describes a full-arch replacement supported by four implants in suitable cases. It is different from replacing one missing tooth. The dentist must assess the remaining teeth, bone, gums and proposed restoration before recommending this approach or a different implant configuration.",
        "paragraphs": [
          "Ask whether the discussion concerns the upper arch, lower arch or both. A full-arch label does not tell you the restoration material, the temporary arrangement or which preparatory procedures are included. If teeth are still present, ask which could be retained and why removal is recommended for any others. The decision should be clinical rather than based on a fixed package."
        ],
        "links": [
          {
            "text": "Compare single-tooth implant planning",
            "href": "/dental-implants-finance"
          }
        ]
      },
      {
        "title": "How do fixed full-arch teeth and removable options differ?",
        "body": "A full-arch implant bridge and an implant-retained removable denture are different restorations. Ask whether your proposed teeth are intended to stay fixed in the mouth or be removed for cleaning. The number of implants alone does not describe the final restoration or its maintenance.",
        "paragraphs": [
          "Discuss access for cleaning, the way the restoration is supported and what happens if a component needs repair. The dentist should explain why a particular design is recommended for your bone and bite. More implants are not automatically the right answer for every person, and a conventional denture remains a separate option to discuss where appropriate."
        ],
        "sources": [
          "implants"
        ]
      },
      {
        "title": "Are immediate teeth the same as final teeth?",
        "body": "Immediate temporary teeth and the final full-arch restoration are different treatment stages. Whether a temporary restoration can be fixed at surgery depends on clinical conditions and implant stability. The final material, timing and assessment should be set out separately in the treatment plan.",
        "paragraphs": [
          "Ask what will happen if immediate loading is not suitable and whether the temporary alternative changes daily care or the travel schedule. Obtain a plan for the healing interval and the later restorative visit. A temporary smile photographed after surgery does not establish that treatment is complete or that the same approach will be suitable for you."
        ],
        "sources": [
          "stages"
        ],
        "links": [
          {
            "text": "Plan separate visits and the healing interval",
            "href": "/guides/plan-dental-visit-antalya"
          }
        ]
      },
      {
        "title": "What should a full-arch estimate include?",
        "body": "A full-arch estimate needs to specify each arch, implant system, temporary restoration and final teeth. Ask whether extractions, scans, any grafting and all planned appointments are included. Confirm what can change after assessment and how a revised plan would be agreed.",
        "paragraphs": [
          "Check the material of the final restoration and any later repair or maintenance charges. A single figure may describe one arch rather than both jaws, or a surgical stage rather than the whole course. Compare the same scope before comparing totals. Request travel and accommodation details separately wherever they are part of a package."
        ],
        "links": [
          {
            "text": "Use the itemised quote checklist",
            "href": "/guides/compare-dental-quotes"
          },
          {
            "text": "Check treatment inclusions",
            "href": "/prices"
          }
        ]
      },
      {
        "title": "How will I maintain a full-arch restoration in the UK?",
        "body": "A full-arch restoration needs a cleaning and professional review plan suited to its design. Ask the treating team to demonstrate the required care and explain how to obtain clinical help after returning home. Responsibility for maintenance, repairs and return travel should be clear before treatment starts.",
        "paragraphs": [
          "Keep the implant and component records and ask whether a UK dentist can provide routine reviews for the particular restoration. Do not assume a cosmetic warranty covers every biological complication or travel expense. If a restoration feels loose or causes discomfort, contact the clinical team promptly for individual advice rather than waiting for a future holiday."
        ],
        "links": [
          {
            "text": "Check clinical contacts and responsibilities",
            "href": "/our-clinic"
          }
        ]
      }
    ],
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
    "title": "Dental Treatment Before and After Turkey",
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
    "title": "Dental Treatment Turkey Patient Reviews",
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
    faqs: [commonFAQs[1], commonFAQs[4]],
    related: ["get-a-quote", "dental-finance", "our-clinic"],
  },
  "our-clinic": {
    "lastModified": "2026-10-21",
    "title": "Dental Clinic Antalya Turkey | Akdeniz Dental",
    "description": "Learn about treatment coordination with Akdeniz Dental in Antalya. Understand the role of the clinical team, questions to ask and your aftercare arrangements.",
    "label": "OUR CLINIC",
    "heading": "Dental care in Antalya.",
    "accent": "Your questions answered.",
    "kind": "clinic",
    "intro": "Explore dental treatment with Akdeniz Dental in Antalya, Turkey. Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination and administrative support. Clinical assessments, treatment planning and dental treatment are provided by the clinical team in Turkey.",
    "sections": [
      {
        "title": "Where is the treating clinic in Antalya?",
        "body": "Akdeniz Dental’s official contact page lists its clinic at Çaybaşı Mahallesi 1358 Sokak, Premier Plaza B Blok, Kat 1, Muratpaşa, Antalya. Confirm the appointment location with the clinical team before travelling. The treating clinic is separate from the UK company that coordinates patient enquiries.",
        "paragraphs": [
          "Use the official contact and gallery links to review the clinic’s own information and facilities. Ask which location and treating professional apply to your proposed care rather than assuming that a general clinic description determines your appointment. The public details and linked clinician profiles on this page were checked against the clinic website on 21 October 2026."
        ],
        "sources": [
          "contact",
          "gallery"
        ]
      },
      {
        "title": "Who assesses and carries out my dental treatment?",
        "body": "Clinical assessment, treatment planning and procedures are provided by the clinical team in Turkey. The clinic’s published profiles identify dentists and specialists; the source-linked details below describe what the clinic currently publishes. They do not confirm who will be assigned to your case or independently verify professional registration.",
        "paragraphs": [
          "Ask the clinic which professional will assess you and carry out each procedure, and request current registration and relevant qualification details before consenting. The listed clinicians have not been represented as authors or reviewers of this website’s general planning information. Administrative coordination is separate from clinical diagnosis, informed consent and individual treatment advice."
        ],
        "sources": [
          "team"
        ],
        "links": [
          {
            "text": "Compare treatment planning questions",
            "href": "/guides/compare-dental-quotes"
          }
        ]
      },
      {
        "title": "How can I check the clinic and laboratory environment?",
        "body": "Akdeniz Dental publishes clinic and laboratory galleries on its official website. These are the appropriate source links for viewing the environment and facilities. Photographs show a setting, not proof that a particular procedure or material is appropriate for your teeth.",
        "paragraphs": [
          "Ask how the clinical and laboratory teams check your planned restoration, its material specification and any trial or adjustment stages. Request the details relevant to your own treatment instead of choosing from a photograph alone. The model images used for this website’s design remain illustrative and are not presented as photographs of your treating dentist or a patient’s result."
        ],
        "sources": [
          "gallery",
          "lab"
        ]
      },
      {
        "title": "What should I confirm about aftercare and UK coordination?",
        "body": "Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination and administrative support. It does not provide clinical dental treatment. Before treatment, obtain the clinical contact, review schedule, written aftercare instructions and route for raising concerns with the treating clinic in Turkey.",
        "paragraphs": [
          "Ask how a concern reported from the UK would be assessed and whether review or remedial care could require travel. Clarify the applicable warranty, cost responsibilities and complaint arrangements in writing. Keep the treatment summary and any implant or restoration details. Coordination support does not replace a dentist’s examination or individual advice about a clinical problem."
        ],
        "links": [
          {
            "text": "Plan your appointments and follow-up",
            "href": "/guides/plan-dental-visit-antalya"
          },
          {
            "text": "Contact the patient coordination team",
            "href": "/contact"
          }
        ]
      }
    ],
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
    lastModified: "2026-10-20",
    title: "Dental Finance Turkey FAQs | UK Patient Questions",
    description:
      "Answers about dental finance, treatment estimates, credit applications, payments and planning dental care in Antalya for UK patients.",
    label: "YOUR QUESTIONS",
    heading: "Dental finance questions.",
    accent: "Every step of the way.",
    kind: "faq",
    intro:
      "Straightforward answers to the questions patients ask before requesting a quote or exploring third-party finance.",
    sections: [],
    faqs: [
      ...commonFAQs,
      {
        question: "Is the treatment enquiry a finance application?",
        answer:
          "No. The enquiry form helps us understand your treatment interests. A credit application is a separate process through the approved broker link and the lender you choose.",
      },
      {
        question: "Do you advertise a fixed APR or monthly repayment?",
        answer:
          "No. The broker and lender provide the applicable information for your circumstances. Our budget explorer is not a loan calculator and does not produce credit quotations.",
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
    lastModified: "2026-10-21",
    title: "Dental Finance and Treatment Guides | Turkey",
    description:
      "Practical guides for UK patients considering dental care in Turkey: comparing quotes, preparing for treatment, reviewing finance and planning aftercare.",
    label: "PATIENT GUIDES",
    heading: "Dental treatment guides.",
    accent: "Better questions.",
    kind: "guides",
    intro:
      "Practical reading to help you compare treatment plans, understand payment options and prepare for care abroad.",
    sections: [
      {
        title: "Use guides as a starting point",
        body: "General information helps you prepare questions. It does not replace a clinical assessment or personalised information from the broker and lender. Ask qualified professionals to explain the decisions that affect you.",
        links: [{"text": "Compare treatment quotes in detail", "href": "/guides/compare-dental-quotes"}, {"text": "Plan your visit to Antalya", "href": "/guides/plan-dental-visit-antalya"}],
        sources: ["gdc"],
      },
    ],
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
