import { commonFAQs, homeContent, journeySteps } from "./content";
import { COMPANY, SITE_NAME, SITE_URL } from "./site";
import { packageForId, packagePrice } from "./packages";

function confirmedPackage(id: string) {
  const item = packageForId(id);
  if (!item) throw new Error("Missing confirmed package: " + id);
  return item;
}
const crowns20 = confirmedPackage("zirconium-20");
const crowns24 = confirmedPackage("zirconium-24");
const veneers16 = confirmedPackage("veneers-16");
const veneers20 = confirmedPackage("veneers-20");
const implant = confirmedPackage("osstem-4-crowns-24");
const money = (value: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value);

export type GuideSource = { id: string; title: string; url: string };
export type GuideSection = {
  id: string; title: string; answer: string; paragraphs: string[];
  sourceIds: string[]; calculation?: string; links?: { text: string; href: string }[];
  quote?: { text: string; name: string; role: string; sourceId: string };
};
export const homeGuide = {
  title: "Dental treatment and finance in Turkey: a UK patient planning guide",
  updatedLabel: new Date(homeContent.lastModified + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }),
  author: COMPANY + " patient coordination team",
};
export const homeGuideSources: GuideSource[] = [
  { id: "confirmed-packages", title: "Owner-confirmed package prices and inclusions, 21 October 2026", url: SITE_URL + "/prices#dental-treatment-packages" },
  {
    "id": "gdc-abroad",
    "title": "General Dental Council: going abroad for dental treatment",
    "url": "https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment"
  },
  {
    "id": "nhs-implants",
    "title": "Guy’s and St Thomas’ NHS Foundation Trust: dental implants",
    "url": "https://www.guysandstthomas.nhs.uk/health-information/dental-implants"
  },
  {
    "id": "nhs-graft",
    "title": "Guy’s and St Thomas’ NHS Foundation Trust: bone grafting for dental implants",
    "url": "https://www.guysandstthomas.nhs.uk/health-information/bone-grafting-dental-implants"
  },
  {
    "id": "leeds",
    "title": "Leeds Teaching Hospitals NHS Trust: dental implants",
    "url": "https://www.leedsth.nhs.uk/patients/resources/dental-implants/"
  },
  {
    "id": "fca-survey",
    "title": "FCA: Financial Lives May 2024 survey, published May 2025",
    "url": "https://www.fca.org.uk/publication/financial-lives/financial-lives-survey-2024-key-findings.pdf"
  },
  {
    "id": "fca-help",
    "title": "FCA: savings, financial resilience and support, 16 May 2025",
    "url": "https://www.fca.org.uk/news/press-releases/more-people-have-bank-accounts-one-ten-have-no-cash-savings"
  },
  {
    "id": "bda",
    "title": "British Dental Association: transparency, costs and complaints",
    "url": "https://www.bda.org/news-and-opinion/news/flying-the-flag-for-private-dentistry/"
  },
  {
    "id": "gdc-crowns",
    "title": "Shamir B. Mehta, GDC: complaints about dental crowns, 10 September 2026",
    "url": "https://www.gdc-uk.org/news-blogs/blog/detail/blogs/2026/09/10/heavy-is-the-head-complaints-dental-crowns-insights-learning"
  },
  {
    "id": "fda-implants",
    "title": "U.S. FDA: dental implant components, records and follow-up",
    "url": "https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know"
  },
  {
    "id": "nih-materials",
    "title": "NIH NIDCR: dental materials and laboratory-made restorations",
    "url": "https://www.nidcr.nih.gov/grants-funding/funded-research/research-investments-advances/dental-materials"
  },
  {
    "id": "columbia-implants",
    "title": "Columbia University College of Dental Medicine: implant treatment stages",
    "url": "https://www.dental.columbia.edu/patient-care/columbiadoctors-dentistry/our-services/dental-implants"
  }
];
export const homeGuideSections: GuideSection[] = [
  {
    "id": "treatment-and-finance",
    "title": "How does dental finance in Turkey work for UK patients?",
    "answer": "Dental finance separates two decisions: whether a proposed treatment is right for your teeth, and whether borrowing is right for your budget. Start with a written estimate for care in Antalya, then review any lender’s terms independently. A treatment enquiry does not apply for credit or guarantee approval.",
    "paragraphs": [
      "Akdeniz Dental provides the clinical care in Antalya, Turkey. Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination and administrative support. Clinical assessments, treatment planning and dental treatment are provided by the clinical team in Turkey. Ideal4Finance is a credit broker, not a lender; the lender makes its own decision.",
      "Keep three documents separate: your treatment estimate, your travel arrangements and any credit agreement. A figure in a treatment quote is not the total borrowing cost. Ask the broker which checks are made before applying, and compare fees, APR, duration and total repayable in the actual offer. You can decide to postpone treatment or decline finance."
    ],
    "sourceIds": []
  },
  {
    "id": "written-quote",
    "title": "What should a written dental treatment quote include?",
    "answer": "A useful quote identifies the proposed procedures, the teeth involved, materials, estimated visits and itemised costs. It should also explain what is excluded and what may change after examination. Compare the same scope of care across providers before deciding that one package is cheaper or offers better value.",
    "paragraphs": [
      "Use six comparison headings: diagnosis and alternatives; treatment and materials; preparatory care; temporary and final restorations; travel inclusions; aftercare and cancellation terms. For implant treatment, clarify whether the implant, abutment and final crown are all included. For crowns or veneers, ask about preparation, laboratory work and reviews.",
      `Original package averages show why a headline needs context: dividing ${packagePrice(crowns20)} by 20 crowns gives ${money(crowns20.price / 20)}, while ${packagePrice(crowns24)} divided by 24 gives ${money(crowns24.price / 24)}. The equivalent whole-package averages for 16 and 20 veneers are ${money(veneers16.price / 16)} and ${money(veneers20.price / 20)}. These figures allocate hotel and transfers too; they are not standalone tooth prices or reasons to restore additional teeth.`,
      "The GDC recommends asking about the treating professional’s qualifications, regulation, complications and arrangements if further work is needed. Obtain the relevant information in writing so you can revisit it without sales pressure. A coordinator can organise those questions; the dentist must explain the clinical reasons behind the plan. An estimate based on photographs can change after assessment."
    ],
    "sourceIds": [
      "gdc-abroad", "confirmed-packages"
    ],
    "quote": {
      "text": "Every dental patient deserves safe, high-quality care, clear information about costs and somewhere meaningful to turn when they’re not satisfied",
      "name": "Eddie Crouch",
      "role": "Chair at the British Dental Association",
      "sourceId": "bda"
    }
  },
  {
    "id": "whole-budget",
    "title": "How do I calculate the whole cost of treatment abroad?",
    "answer": "Add the treatment estimate, travel, accommodation not included in the package, insurance and a separate contingency budget. Count every planned visit rather than just the first trip. A lower advertised treatment price can still produce a higher overall cost if essential items or return journeys are excluded.",
    "paragraphs": [
      "Build your own cost checklist using the clinic’s written estimate and the travel arrangements you are actually considering. Keep treatment, flights, accommodation, insurance and any reserve for changes as separate entries. Record which items a package includes so you do not count them twice or mistake an excluded item for a free service.",
      `The confirmed crown packages total ${packagePrice(crowns20)} for 20 crowns and ${packagePrice(crowns24)} for 24, a ${money(crowns24.price - crowns20.price)} difference. The 16- and 20-veneer packages total ${packagePrice(veneers16)} and ${packagePrice(veneers20)}, a ${money(veneers20.price - veneers16.price)} difference. Each includes five hotel nights and the specified transfers. Compare only clinically appropriate options; a lower calculated average does not justify treating healthy teeth.`,
      "Use your own written quote and current travel prices. Do not treat a contingency as a limit on what complications could cost. Confirm the currency charged, card or transfer costs, cancellation conditions and responsibility for extra accommodation. If a package includes a hotel or transfers, check dates, room arrangements and which journeys are covered."
    ],
    "sourceIds": ["confirmed-packages"],
    "links": [
      {
        "text": "Check treatment cost inclusions",
        "href": "/prices"
      },
      {
        "text": "Compare written dental quotes",
        "href": "/guides/compare-dental-quotes"
      }
    ]
  },
  {
    "id": "affordability",
    "title": "How can I decide whether repayments would be affordable?",
    "answer": "Assess any proposed repayment against your essential spending, existing debts and emergency savings before accepting credit. Look at the full borrowing cost and the effect of a change in income. An approval decision does not replace your own budget review, and treatment can be postponed if the finances feel uncertain.",
    "paragraphs": [
      "The FCA’s Financial Lives May 2024 survey found low financial resilience among 24% of UK adults, about 13.1 million people. The proportion was also 24% in May 2022. This is a two-year comparison, not evidence of a year-on-year improvement or an assessment of this website’s visitors.",
      "The FCA also reported that one in ten people had no cash savings and another 21% had less than £1,000 available. These national findings explain why emergency headroom matters; they do not establish your eligibility. Ask the lender about payment dates, missed-payment consequences and early settlement. Avoid selecting treatment solely because a monthly figure looks manageable."
    ],
    "sourceIds": [
      "fca-survey",
      "fca-help"
    ],
    "quote": {
      "text": "Our data shows that finances are stretched for many - with some unable to save for a rainy day.",
      "name": "Sarah Pritchard",
      "role": "Executive Director of Consumers and Competition at the FCA, at publication on 16 May 2025",
      "sourceId": "fca-help"
    }
  },
  {
    "id": "implant-timing",
    "title": "Can implant treatment be completed in one holiday?",
    "answer": "Some implant plans require several stages and return visits, so one holiday should not be assumed to complete treatment. Assessment, surgery, healing and the final restoration are different parts of care. Your treating dentist must confirm the schedule, any temporary teeth and the point at which you can travel.",
    "paragraphs": [
      "Guy’s and St Thomas’ NHS patient information describes 3 or 4 stages of implant treatment and says a complete course can take 6 to 12 months. That is general NHS guidance about its treatment pathway, not Akdeniz Dental’s promised timetable. Individual plans vary with the procedure and healing needs.",
      "Leeds Teaching Hospitals describes early implant placement after extractions have healed for around 6 to 10 weeks, while immediate placement is possible only in suitable conditions. Ask whether your plan involves immediate placement, immediate loading or a later restoration; those terms describe different steps. Get the proposed intervals and arrangements if healing takes longer before buying non-refundable flights.",
      "Columbia University’s patient information also separates implant placement, bone healing and fitting replacement teeth. These are stages of care, not a promise that every patient can complete treatment within the same travel schedule."
    ],
    "sourceIds": [
      "nhs-implants",
      "leeds",
      "columbia-implants"
    ]
  },
  {
    "id": "bone-grafting",
    "title": "What changes if I need a bone graft before implants?",
    "answer": "A bone graft can change the treatment stages, cost and timing because the dentist may need to create adequate support before placing an implant. Some grafts are performed with implant placement; others need a separate healing period. Assessment of your bone and overall health determines the appropriate approach.",
    "paragraphs": [
      "Guy’s and St Thomas’ states that bone grafts are usually left to heal for 3 to 6 months before implant treatment. This range is guidance from that NHS service, not a guaranteed healing time or a fixed schedule for treatment in Turkey. Ask your dentist whether grafting is needed, what material is proposed and how progress will be assessed.",
      "Do not compare a straightforward implant quote with a grafting plan as if they cover identical care. Request an itemised explanation of additional procedures and visits, what happens if healing is delayed and who arranges the review. Smoking and other individual factors can affect risk. Share your medical history and medicines with the clinical team rather than relying on a photograph alone."
    ],
    "sourceIds": [
      "nhs-graft"
    ]
  },
  {
    "id": "crowns-veneers",
    "title": "How do crowns, veneers and implants differ?",
    "answer": "Crowns and veneers restore or change existing teeth, while implants replace missing tooth roots and support replacement teeth. They are not interchangeable products to choose by price alone. Ask the dentist what each tooth needs, what healthy tissue would be removed and whether a less invasive alternative is appropriate.",
    "paragraphs": [
      "In a September 2026 GDC learning article, Shamir B. Mehta reports that 27% of 1,619 adults examined in the 2023 oral health survey had at least one crowned tooth. This describes that survey sample, not the proportion of people who should receive crowns or a result achieved by this clinic.",
      "A plan involving multiple crowns needs an individual explanation of why each restoration is indicated. Ask about alternatives, sensitivity, bite changes, maintenance and possible further treatment. Material names alone do not show that a plan is suitable. Request the proposed tooth numbers and reasons in writing, and consider discussing the plan with your existing dentist before committing.",
      "The NIH’s National Institute of Dental and Craniofacial Research describes crowns, veneers and bridges as laboratory-made indirect restorations. Ask which material and restoration design your dentist is proposing, rather than treating the terms as interchangeable."
    ],
    "sourceIds": [
      "gdc-crowns",
      "nih-materials"
    ],
    "quote": {
      "text": "Crown treatments are still a valuable aspect of restorative dentistry and can offer excellent long-term outcomes.",
      "name": "Shamir B. Mehta",
      "role": "Lead Clinical Adviser, Fitness to Practise, at the General Dental Council, 10 September 2026",
      "sourceId": "gdc-crowns"
    }
  },
  {
    "id": "results-statistics",
    "title": "What does an implant survival statistic actually tell me?",
    "answer": "An implant survival figure describes whether implants remain present over a stated follow-up period. It does not guarantee comfort, appearance, freedom from complications or the survival of every attached restoration. Check the source, follow-up period and patient group before comparing a statistic with your own proposed treatment.",
    "paragraphs": [
      "Leeds Teaching Hospitals’ patient information says about 90% of implants placed 10 years earlier remain present and functional. That general statement is not an audited Akdeniz Dental success rate, a warranty or a personal prediction. Ask the treating team for evidence relevant to your procedure and risk factors, including how complications and lost follow-up are counted.",
      "Discuss cleaning, smoking, reviews and possible repair costs as part of the long-term plan. An implant fixture, abutment and crown are different components; maintenance or replacement of one does not necessarily mean the same outcome for all three. This website does not publish invented patient results, review scores or clinic outcome percentages. Your clinical team should explain the limits of the evidence."
    ],
    "sourceIds": [
      "leeds"
    ]
  },
  {
    "id": "return-trip-budget",
    "title": "How should I budget for a second trip to Antalya?",
    "answer": "Budget a second trip separately whenever the clinical plan includes a return visit. Check flights, accommodation, time away and any final treatment balance for that visit. A package covering the first stay should not be assumed to cover later stays, routine reviews or a return journey for a complication.",
    "paragraphs": [
      "List each planned visit separately, using the clinical appointment schedule and actual travel options. Confirm whether the hotel and transfer arrangements apply to the first stay, later visits or both. Include the effect of time away from work and ask what would happen if the clinical team needed to change the dates.",
      `The ${packagePrice(implant)} package specifies four Osstem implants and 24 zirconium crowns, with three hotel nights on one visit and five on another: eight nights across two visits. Its total is ${money(implant.price - crowns20.price)} above the 20-crown package, but the procedures differ. This is a planning comparison, not an interchangeable treatment or a standalone implant fee.`,
      "Ask when the treatment balance is due and whether payments relate to clinical stages. Keep booking confirmations and written cancellation terms. If treatment is delayed or changed, clarify who pays for rearranged travel before accepting the revised plan. No assumed clinic deposit, package price or sample credit repayment is used here."
    ],
    "sourceIds": ["confirmed-packages"],
    "links": [
      {
        "text": "Plan your dental visit to Antalya",
        "href": "/guides/plan-dental-visit-antalya"
      }
    ]
  },
  {
    "id": "aftercare",
    "title": "What aftercare and complaint arrangements should I confirm?",
    "answer": "Confirm who provides clinical aftercare, how to contact them and what happens if a problem arises after you return home. Ask which reviews or corrective procedures are included and which costs remain yours. A written warranty should explain its conditions, exclusions and process rather than relying on a headline duration.",
    "paragraphs": [
      "Keep two distinct contacts: the treating clinical team for clinical concerns and the coordination team for administrative support. Before leaving, request your treatment summary, relevant imaging or implant information, written aftercare instructions and the complaint procedure. Ask how urgent concerns are triaged, where an examination would take place and whether extra flights or accommodation would be covered.",
      "The GDC advises patients to check the regulatory and complaint arrangements in the country where care takes place. UK patient coordination does not make treatment in Turkey subject to the same arrangements as treatment delivered in the UK. Discuss planned treatment with your own dentist and check insurance exclusions before travelling. Do not assume an existing policy covers elective treatment abroad or its complications.",
      "FDA patient guidance recommends keeping the implant system’s brand and model information, following the treating dentist’s cleaning instructions and attending regular reviews. This is general device information, not FDA endorsement of a clinic or a treatment plan."
    ],
    "sourceIds": [
      "gdc-abroad",
      "fda-implants"
    ]
  },
  {
    "id": "send-enquiry",
    "title": "What happens when I send a free treatment enquiry?",
    "answer": "The online enquiry tells the coordination team what you would like to discuss and how to contact you. You can choose email or WhatsApp and leave optional dental details blank. Sending the form does not make a diagnosis, confirm a treatment price, book travel or submit an application for credit.",
    "paragraphs": [
      "The form has 4 steps: treatment interest, your needs, contact details and review. You can select “Not sure yet” if you need help framing your questions. A name and valid email are required; a WhatsApp number is also needed if you choose that reply method. The review step separates required privacy and health-information consent from optional marketing consent.",
      "Photographs are optional, with a maximum of 3 files, 3 MB each and 4 MB in total. Supported formats are JPEG, PNG and WebP. If photograph upload is unavailable, remove the optional files and retry, or contact the team. Do not send identity documents, payment details or full medical records. The form displays a reference after the enquiry service accepts the submission."
    ],
    "sourceIds": []
  },
  {
    "id": "evidence-method",
    "title": "How were the facts on this page checked?",
    "answer": "This guide combines the website’s actual enquiry process with linked public information from UK dental bodies, NHS trusts and the FCA. Research figures retain their original dates and scope. Treatment and travel budgets should use your own written estimates and bookings; this page does not supply hypothetical prices or loan examples.",
    "paragraphs": [
      "Sources and page content were rechecked on 22 October 2026. The financial figures describe the FCA’s May 2024 survey, published in May 2025, rather than a new 2026 survey. The crown discussion references the GDC’s September 2026 learning article. NHS timing and survival information is general background and is not presented as clinic-specific evidence. Supplementary FDA, NIH and Columbia University patient resources were added on 21 October 2026. Package calculations use the owner-confirmed price registry dated 21 October 2026; displayed averages are rounded to two decimal places where needed.",
      "The three named quotations reproduce short extracts from the linked publications. Roles are those stated by the sources; none of the quoted experts has endorsed this website or reviewed your treatment. The guide is prepared by Akdeniz Dental Consultancy UK Ltd’s patient coordination team as general planning information. Clinical advice belongs with the treating dentist, and individual credit terms belong with the broker and lender."
    ],
    "sourceIds": [
      "fca-survey",
      "gdc-crowns"
    ]
  }
];

export function guideSource(id: string): GuideSource {
  const source = homeGuideSources.find((item) => item.id === id);
  if (!source) throw new Error("Unknown patient guide source: " + id);
  return source;
}

export function homeGuideText(): string {
  return homeGuideSections.map((section) => [
    section.title, section.answer, ...section.paragraphs,
    ...(section.quote ? [section.quote.text, section.quote.name + ", " + section.quote.role] : []),
  ].join("\n\n")).join("\n\n");
}

export function homeStructuredData() {
  const url = SITE_URL + "/";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": url + "#webpage", url: SITE_URL,
        name: homeContent.title, description: homeContent.description,
        dateModified: homeContent.lastModified, inLanguage: "en-GB",
        isPartOf: { "@id": url + "#website" },
        hasPart: { "@id": url + "#patient-guide" },
      },
      {
        "@type": "Article", "@id": url + "#patient-guide",
        url: url + "#patient-guide", headline: homeGuide.title,
        description: "A source-linked guide to treatment estimates, total costs, implant stages, aftercare and separate credit decisions.",
        dateModified: homeContent.lastModified, inLanguage: "en-GB",
        author: { "@type": "Organization", "@id": url + "#organisation", name: COMPANY, url: SITE_URL },
        publisher: { "@id": url + "#organisation", name: COMPANY },
        isPartOf: { "@id": url + "#webpage" },
        mainEntityOfPage: { "@id": url + "#webpage" },
        articleSection: homeGuideSections.map((section) => section.title),
        articleBody: homeGuideText(),
        citation: homeGuideSources.map((source) => source.url),
        about: { "@type": "Thing", name: SITE_NAME + " patient planning" },
      },
      {
        "@type": "FAQPage", "@id": url + "#faq",
        mainEntity: commonFAQs.map((faq) => ({
          "@type": "Question", name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "HowTo", "@id": url + "#how-it-works",
        name: "How to plan dental treatment in Antalya",
        description: "Four stages from a written treatment enquiry to your clinical assessment in Antalya. Finance is a separate decision with a lender.",
        inLanguage: "en-GB",
        isPartOf: { "@id": url + "#webpage" },
        step: journeySteps.map((step, i) => ({
          "@type": "HowToStep", position: i + 1, name: step.title,
          text: step.description + " " + step.bullets.join(". ") + ".",
        })),
      },
    ],
  };
}
