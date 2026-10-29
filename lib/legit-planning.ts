import type { FAQ, Section } from "./content";

export const legitSections: Section[] = [
  {
    title: "Who is involved in treatment and finance?",
    body: "Four separate parties are involved. This website helps UK patients request a written treatment estimate for dental care in Antalya and understand how third-party finance works. Treatment is provided by the clinical team at Akdeniz Dental in Antalya, and Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination. Any credit agreement is with the lender you select.",
    paragraphs: [
      "Three different organisations are involved, and it helps to keep them apart. Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination and administration. Akdeniz Dental in Antalya provides assessment, treatment planning and treatment. Ideal Sales Solutions Ltd, trading as Ideal4Finance, describes itself as a credit broker rather than a lender, and it explains finance through its own separate application. The lender it matches you with makes the credit decision.",
      "Because the roles are separate, you can ask for a treatment estimate without making a credit application, and you can read the broker’s information before deciding whether finance suits you at all.",
    ],
    links: [
      { text: "See the treating clinic and team", href: "/our-clinic" },
      { text: "Read the four-step process", href: "/how-it-works" },
    ],
    sources: ["broker"],
  },
  {
    title: "How does Turkey teeth finance work for UK patients?",
    body: "You request a free written treatment estimate by email or WhatsApp, with no phone call required. The clinical team proposes a plan, and the treating dentist confirms the diagnosis, treatment and final cost at your assessment in Antalya. Finance is a separate step: you may apply through the approved broker link, and the lender decides on your application.",
    paragraphs: [
      "A treatment enquiry is not a credit application, and checking this website does not involve a credit search. If you choose to apply, the broker and lender explain the checks, the APR, the fees and the total amount repayable for your circumstances before you commit.",
      "You do not have to use finance. Ask for the clinic’s available payment methods in your written estimate if you would rather pay another way.",
    ],
    links: [
      { text: "Understand finance for dental treatment in Turkey", href: "/dental-finance" },
      { text: "Check who can apply", href: "/finance-eligibility" },
    ],
    sources: ["personalLoans"],
  },
  {
    title: "How can I check that a dental finance website is genuine?",
    body: "Check who is behind it, what it says it is, and whether the claims can be verified independently. A genuine service names its companies, explains its role, avoids guaranteeing approval and does not ask for card or banking details through an enquiry form. Do the same checks here rather than relying on this page alone.",
    bullets: [
      "Find the company names in the website footer and look them up on Companies House.",
      "Ask the broker for its Financial Conduct Authority firm reference number and check it on the FCA Register yourself.",
      "Read the clinic’s own website, its team page and independent reviews, and ask for the current registration of the dentist who will treat you.",
      "Be wary of any service that guarantees finance approval, quotes a fixed APR before assessing you, or asks for passport or banking details in a treatment enquiry.",
      "Read the General Dental Council and NHS guidance on having dental treatment abroad before you travel.",
    ],
    paragraphs: [
      "Check each named party separately: the companies on Companies House, the broker and lender on the FCA Register, and the clinic on its own website. Ask each organisation to confirm its role and details directly.",
    ],
    sources: ["gdc", "nhsChecklist"],
  },
  {
    title: "What should I ask before I pay or travel?",
    body: "Ask for the treatment plan, materials, number of visits and exclusions in writing, and compare them with any other quote you hold. Confirm the payment, cancellation, refund and aftercare terms before you pay a deposit or book flights. Keep every document so the agreed scope can be checked later.",
    paragraphs: [
      "Ask how a concern will be assessed after you return to the UK, who your clinical contact is, and who is responsible for the cost of any extra flights or remedial work. A warranty should list what it covers and under what conditions, and it should not be assumed to cover travel.",
      "Treatment abroad carries risks as well as potential savings. The NHS, the General Dental Council and the Oral Health Foundation all publish balanced guidance, and speaking to your usual dentist first is sensible.",
    ],
    links: [
      { text: "Compare dental treatment quotes", href: "/guides/compare-dental-quotes" },
      { text: "Plan your visit to Antalya", href: "/guides/plan-dental-visit-antalya" },
    ],
    sources: ["ohfTourismRisk", "nhsTravel"],
  },
];

export const legitFaqs: FAQ[] = [
  {
    question: "Who actually provides the credit?",
    answer:
      "Any credit agreement is with the lender you select after applying. Ideal4Finance describes itself as a credit broker, not a lender, and this website only helps you request a treatment estimate and understand how finance works.",
  },
  {
    question: "Can I request a quote without applying for credit?",
    answer:
      "Yes. A treatment enquiry is separate from a finance application and does not involve a credit check. You can ask for a written estimate and decide about payment afterwards.",
  },
  {
    question: "Will I definitely be approved for finance?",
    answer:
      "No. Every application is assessed by the lender on your status and affordability. Nobody on this website can guarantee acceptance, a particular rate or a repayment term.",
  },
  {
    question: "Who treats me and who is responsible for my care?",
    answer:
      "The treating dentists at Akdeniz Dental in Antalya are responsible for diagnosis, consent, treatment and aftercare advice. The UK company provides non-clinical coordination only.",
  },
  {
    question: "Where can I check the companies involved?",
    answer:
      "Use Companies House for the company names in the footer, the FCA Register for the broker’s regulatory status, and the clinic’s own website for its team. Ask each organisation to confirm the details directly.",
  },
];
