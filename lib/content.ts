export type FAQ = { question: string; answer: string };
export type Section = { title: string; body: string; bullets?: string[] };
export type PageContent = {
  title: string;
  description: string;
  label: string;
  heading: string;
  accent: string;
  intro: string;
  sections: Section[];
  faqs: FAQ[];
  related: string[];
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
    faqs: commonFAQs,
    related: ["finance-eligibility", "prices", "dental-finance"],
  },
  "dental-finance": {
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
    faqs: commonFAQs,
    related: ["pay-monthly", "finance-eligibility", "finance-faq"],
  },
  "get-a-quote": {
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
    title: "Dental Implant Finance Turkey | UK Patients",
    description:
      "Plan dental implant treatment in Antalya with a personalised estimate. Understand healing, visits, additional costs and finance options for eligible UK patients.",
    label: "DENTAL IMPLANTS",
    heading: "Dental implants in Turkey.",
    accent: "A clearer way forward.",
    intro:
      "Explore implant treatment in Antalya and understand the full journey before considering how to pay. Finance may be available to eligible UK patients.",
    sections: [
      {
        title: "What does an implant replace?",
        body: "An implant is placed in the jaw to support a replacement tooth or a larger restoration. Assessment considers the missing teeth, available bone, gum health and medical history. Not everyone is suitable for implant treatment.",
      },
      {
        title: "Plan for healing and return visits",
        body: "Implant treatment often involves separate surgical and restorative stages. Your dentist will explain the expected healing interval and visit schedule. Immediate teeth or same-day loading cannot be promised before assessment.",
      },
      {
        title: "What should the implant quote include?",
        body: "Ask for the implant system, number of implants, abutments, restoration material, scans and temporary teeth to be itemised. Bone grafting, extractions or other preparatory treatment may change the price.",
      },
      {
        title: "Match payments to your treatment schedule",
        body: "Discuss when each stage is payable. If you choose to explore finance, compare the borrowing cost with your total treatment and travel budget. Lender approval does not confirm clinical suitability.",
      },
    ],
    faqs: [
      {
        question: "Can I finance just one implant?",
        answer:
          "You can request a quote for a single missing tooth or a larger treatment plan. Whether finance is offered depends on the lender’s criteria and your circumstances, not simply the number of implants.",
      },
      {
        question: "Will I need two trips?",
        answer:
          "Many implant plans involve more than one visit with a healing period in between. Your dentist will confirm the schedule, which may change after assessment or during healing.",
      },
      commonFAQs[2],
    ],
    related: ["all-on-4-finance", "prices", "how-it-works"],
  },
  "finance-eligibility": {
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
    title: "Veneers Finance Turkey | Costs & Payment Options",
    description:
      "Explore veneers in Antalya with a personalised plan. Understand enamel preparation, material choices, aftercare and finance options for eligible UK patients.",
    label: "VENEERS",
    heading: "Veneers in Turkey.",
    accent: "A personal difference.",
    intro:
      "Discuss the shape, colour and appearance of your teeth with a dentist. Get a written veneers estimate before exploring available payment options.",
    sections: [
      {
        title: "Veneers are not the same as crowns",
        body: "Veneers usually cover the front surface of a tooth, while a crown covers the prepared tooth more fully. The appropriate option depends on the condition of your teeth. Ask how much preparation is involved and whether less invasive alternatives are suitable.",
      },
      {
        title: "A smile designed around your teeth",
        body: "Your assessment should cover bite, gum health, the number of teeth involved, material and shade. A photograph or social media reference cannot determine the right treatment for you.",
      },
      {
        title: "Compare like-for-like quotes",
        body: "Check the material, laboratory work, temporary restorations and aftercare arrangements. The number of teeth, existing restorations and any preparatory care affect the estimate.",
      },
      {
        title: "Consider ongoing maintenance",
        body: "Discuss cleaning, review visits, repair and replacement with the treating dentist. Restorations may need maintenance over time. Include those possible costs when deciding on your treatment budget.",
      },
    ],
    faqs: [
      {
        question: "Are veneers reversible?",
        answer:
          "Some veneer treatment involves removing enamel, which is irreversible. Ask the dentist to explain preparation, alternatives, risks and expected maintenance before consenting.",
      },
      {
        question: "How many veneers will I need?",
        answer:
          "That depends on your smile, tooth condition and goals. A dentist should recommend the number after assessment rather than assuming that a fixed package is appropriate.",
      },
      commonFAQs[0],
    ],
    related: ["zirconia-crowns-finance", "smile-makeover-finance", "prices"],
  },
  prices: {
    title: "Dental Treatment Prices Turkey | Written Quotes",
    description:
      "Understand what affects dental treatment prices in Antalya. Compare treatment, travel, visit schedules and payment options with a personalised written estimate.",
    label: "PRICES & PAYMENT OPTIONS",
    heading: "Dental treatment prices.",
    accent: "Clear before you commit.",
    kind: "prices",
    intro:
      "Every smile needs a different plan. Request an itemised quote in pounds so you can understand the treatment, inclusions and payment schedule.",
    sections: [
      {
        title: "Why there is no single package price",
        body: "Tooth condition, the number of restorations, material, implant system and preparatory treatment affect the cost. A price based only on a photograph is provisional until the clinical assessment confirms the plan.",
      },
      {
        title: "Payment timing matters",
        body: "Ask when a deposit or staged treatment payment becomes due and what happens if the plan changes. Request the cancellation, refund and aftercare terms in writing before paying or booking flights.",
      },
      {
        title: "Treatment cost and credit cost",
        body: "A treatment estimate does not include a lender’s interest unless explicitly stated. If you choose finance, compare the APR, fees and total repayable as well as the monthly payment. Any applicable administration fee must be disclosed in your personal quote.",
      },
    ],
    faqs: [
      {
        question: "Are accommodation and transfers included?",
        answer:
          "Only if your written quote says so. Check the hotel, number of nights, transfer arrangements and whether extra nights or return visits cost more.",
      },
      {
        question: "Will the final price change?",
        answer:
          "The estimate may change if clinical assessment identifies additional needs. The treating team should explain any revised plan and cost before you agree to proceed.",
      },
      commonFAQs[2],
    ],
    related: ["get-a-quote", "pay-monthly", "how-it-works"],
  },
  "smile-makeover-finance": {
    title: "Smile Makeover Finance Turkey | Personal Plans",
    description:
      "Explore a personalised smile makeover in Antalya. Understand combined treatment plans, visit schedules and finance options for eligible UK patients.",
    label: "SMILE MAKEOVER",
    heading: "Your smile makeover.",
    accent: "One considered plan.",
    intro:
      "A smile makeover is a personal treatment plan, not one standard procedure. Start by discussing what you want to change and what your teeth need.",
    sections: [
      {
        title: "What can a smile makeover involve?",
        body: "Depending on assessment, a plan might include restorations, replacement of missing teeth or other dental care. Healthy teeth and gums, function and long-term maintenance should be considered alongside appearance.",
      },
      {
        title: "Understand each part of the plan",
        body: "Ask why each proposed procedure is recommended and what alternatives exist. An itemised plan lets you distinguish essential treatment from optional cosmetic changes.",
      },
      {
        title: "Coordinate the stages",
        body: "Some procedures must be completed before others and may need healing time. Your dentist should explain the treatment order, expected visits, temporary teeth and possible changes to the timeline.",
      },
      {
        title: "Budget for the whole journey",
        body: "Review all treatment stages, travel and aftercare costs together. Explore finance only once you understand the estimated total, and remember that approval and terms depend on the lender.",
      },
    ],
    faqs: [
      {
        question: "Is a smile makeover always crowns?",
        answer:
          "No. It is a broad description of a personalised plan. Treatment should follow the condition of your teeth and your goals, with appropriate alternatives explained by the dentist.",
      },
      commonFAQs[1],
      commonFAQs[2],
    ],
    related: ["veneers-finance", "dental-implants-finance", "before-and-after"],
  },
  "zirconia-crowns-finance": {
    title: "Zirconia Crowns Finance Turkey | Treatment Planning",
    description:
      "Understand zirconia crowns in Antalya, including preparation, shade, bite and maintenance. Request a written quote and explore UK finance options.",
    label: "ZIRCONIA CROWNS",
    heading: "Zirconia crowns in Turkey.",
    accent: "Plan with confidence.",
    intro:
      "Understand whether crowns are appropriate for your teeth, what preparation involves and how your treatment could be paid for.",
    sections: [
      {
        title: "What is a zirconia crown?",
        body: "A crown is a restoration that covers a prepared tooth. Zirconia is one material option. Your dentist should explain why a crown is recommended and whether a filling, veneer or another approach would be more appropriate.",
      },
      {
        title: "Preparation is a clinical decision",
        body: "Crowns usually require irreversible preparation of the tooth. The assessment should consider remaining tooth structure, gum health, bite and any existing restorations. Do not decide on a full set without discussing individual tooth needs.",
      },
      {
        title: "Agree on appearance and function",
        body: "Ask about shade, shape, trial stages and how the bite will be checked. Photographs are useful for discussion but cannot guarantee a particular appearance or outcome.",
      },
      {
        title: "Request an itemised crown quote",
        body: "Confirm the number of teeth, material specification, temporary crowns, any root canal treatment and follow-up arrangements. If you explore credit, keep the treatment price separate from the lender’s charges.",
      },
    ],
    faqs: [
      {
        question: "Are zirconia crowns the same as veneers?",
        answer:
          "No. Crowns and veneers cover different amounts of tooth and usually involve different preparation. The dentist should explain the recommended option for each tooth.",
      },
      {
        question: "How long will crowns last?",
        answer:
          "Longevity varies with the tooth, bite, oral hygiene and maintenance. Ask the clinic for written aftercare and any applicable warranty terms rather than relying on a guaranteed lifespan.",
      },
      commonFAQs[0],
    ],
    related: ["veneers-finance", "smile-makeover-finance", "prices"],
  },
  "all-on-4-finance": {
    title: "All-on-4 Dental Implants Finance Turkey",
    description:
      "Explore full-arch implant treatment in Antalya. Understand assessment, temporary and final teeth, healing and finance options for eligible UK patients.",
    label: "ALL-ON-4",
    heading: "All-on-4 in Turkey.",
    accent: "A full-arch plan.",
    intro:
      "Discuss implant-supported options for a full arch of missing or failing teeth. A dentist must assess whether this approach is suitable for you.",
    sections: [
      {
        title: "What does All-on-4 mean?",
        body: "The term describes a full-arch restoration supported by four implants in suitable cases. Some patients may need a different number of implants or another treatment. A marketing label cannot replace a clinical recommendation.",
      },
      {
        title: "Temporary teeth and final teeth",
        body: "Ask which temporary restoration is planned and when the final prosthesis would be fitted. Immediate loading depends on clinical conditions and implant stability and cannot be guaranteed before assessment.",
      },
      {
        title: "Understand the full-arch quote",
        body: "Check whether the price is for one arch or both. Confirm the implant system, restoration material, extractions, scans, temporary teeth, additional surgery and required visits.",
      },
      {
        title: "Aftercare is part of the decision",
        body: "Discuss how you will clean around the restoration, arrange reviews and get help after returning home. Include maintenance and potential return travel in your budget before considering finance.",
      },
    ],
    faqs: [
      {
        question: "Does All-on-4 include both jaws?",
        answer:
          "Not necessarily. A quote may be for one arch. Ask for the upper and lower treatment plans and prices to be clearly itemised.",
      },
      {
        question: "Can everyone have fixed teeth immediately?",
        answer:
          "No. Suitability and loading depend on the clinical assessment and conditions at surgery. The dentist should explain alternatives if immediate fixed teeth are not appropriate.",
      },
      commonFAQs[2],
    ],
    related: ["dental-implants-finance", "prices", "how-it-works"],
  },
  "before-and-after": {
    title: "Dental Treatment Before and After Turkey",
    description:
      "Understand how to review dental before-and-after photographs, compare relevant treatment cases and set realistic expectations for dental care in Antalya.",
    label: "PATIENT RESULTS",
    heading: "Before & after.",
    accent: "Individual outcomes.",
    kind: "results",
    intro:
      "A useful result shows the treatment, context and consent behind the photograph. Your outcome depends on your own clinical circumstances.",
    sections: [
      {
        title: "How to assess a before-and-after case",
        body: "Look for consistent lighting, angles and dates, a clear description of the treatment and confirmation that the patient agreed to publication. A photograph does not show every aspect of dental health or predict your own result.",
      },
      {
        title: "Bring references, keep an open mind",
        body: "You can share smile references when discussing your goals. The treating dentist must explain what is clinically appropriate, the limitations of treatment and the alternatives available to you.",
      },
    ],
    faqs: [
      {
        question: "Will my smile look exactly like a photograph?",
        answer:
          "No result can be promised from a photograph. Your starting point, tooth and gum condition, bite and proposed treatment all affect what can be achieved.",
      },
      commonFAQs[1],
    ],
    related: ["reviews", "our-clinic", "smile-makeover-finance"],
  },
  reviews: {
    title: "Dental Treatment Turkey Patient Reviews",
    description:
      "Learn what to look for in independent dental patient reviews: verified sources, treatment context, follow-up and a realistic picture of care in Turkey.",
    label: "PATIENT EXPERIENCES",
    heading: "Patient experiences.",
    accent: "Start with real stories.",
    kind: "reviews",
    intro:
      "Look beyond a star rating. Read about treatment planning, communication, aftercare and how the team handles questions after patients return home.",
    sections: [
      {
        title: "Choose reviews with context",
        body: "Look for a named review platform, a publication date and useful detail about the treatment. Check recent and less positive reviews as well as positive ones to understand the full range of experiences.",
      },
      {
        title: "Ask about ongoing support",
        body: "A review written immediately after treatment may not reflect longer-term experience. Ask the clinic how follow-up works, who answers clinical concerns and what written aftercare arrangements are provided.",
      },
    ],
    faqs: [
      {
        question: "Are there verified patient reviews on this site?",
        answer:
          "No verified review feed has been connected yet. We do not publish invented testimonials or ratings. Independent source links will be added after the clinic profile and permissions are verified.",
      },
      commonFAQs[1],
    ],
    related: ["before-and-after", "our-clinic", "how-it-works"],
  },
  "how-it-works": {
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
      },
      {
        title: "Clinical decisions belong with the dentist",
        body: "Our UK company helps coordinate the journey. Diagnosis, consent, procedures and aftercare advice are the responsibility of the treating clinical team in Antalya.",
      },
    ],
    faqs: commonFAQs,
    related: ["get-a-quote", "dental-finance", "our-clinic"],
  },
  "our-clinic": {
    title: "Dental Clinic Antalya Turkey | Akdeniz Dental",
    description:
      "Learn about treatment coordination with Akdeniz Dental in Antalya. Understand the role of the clinical team, questions to ask and your aftercare arrangements.",
    label: "OUR CLINIC",
    heading: "Dental care in Antalya.",
    accent: "Your questions answered.",
    kind: "clinic",
    intro:
      "Explore dental treatment with Akdeniz Dental in Antalya, Turkey. Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination and administrative support. Clinical assessments, treatment planning and dental treatment are provided by the clinical team in Turkey.",
    sections: [
      {
        title: "Get to know your treating team",
        body: "Before agreeing to treatment, ask which dentist or surgeon will provide each procedure and request their qualifications and registration details. Your clinical assessment and consent should be with the treating professionals.",
      },
      {
        title: "Laboratory and treatment planning",
        body: "Ask how your restorations are designed, checked and adjusted, and how the laboratory and clinical team work together. Confirm the material and treatment specification in your written plan.",
      },
      {
        title: "UK coordination and clinical care",
        body: "Akdeniz Dental Consultancy UK Ltd provides healthcare consultancy and patient coordination. The UK company does not provide clinical treatment. The treating clinic in Turkey is responsible for clinical decisions and procedures.",
      },
      {
        title: "Aftercare before you travel",
        body: "Request clear written instructions, an emergency contact, the follow-up schedule and any warranty conditions. Discuss how concerns will be assessed if you are back in the UK and what travel or treatment costs may arise.",
      },
    ],
    faqs: [
      {
        question: "Does the UK company provide dental treatment?",
        answer:
          "No. Akdeniz Dental Consultancy UK Ltd provides consultancy and patient coordination. Clinical treatment is delivered by the treating professionals in Antalya, Turkey.",
      },
      commonFAQs[4],
    ],
    related: ["before-and-after", "reviews", "contact"],
  },
  "finance-faq": {
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

export const guideArticles = [
  {
    id: "compare-quotes",
    title: "How to compare dental treatment quotes",
    category: "TREATMENT PLANNING",
    summary: "The important details behind a package price.",
    paragraphs: [
      "Compare the diagnosis and proposed treatment, not simply the number at the bottom of the quote. Ask which teeth are being treated, why each procedure is recommended and what alternatives exist.",
      "Request the restoration material, implant system where relevant, temporary teeth, scans and preparatory treatment in writing. Confirm the number of visits and what can change after clinical assessment.",
      "Separate treatment charges from travel, accommodation, insurance and follow-up costs. Ask about cancellation, refunds and aftercare before you pay.",
    ],
  },
  {
    id: "understand-finance",
    title: "Questions to ask before choosing finance",
    category: "PAYMENT OPTIONS",
    summary: "APR, fees, repayment terms and the full borrowing cost.",
    paragraphs: [
      "First establish the treatment budget and the amount you need to borrow. The treatment estimate and a lender’s credit quotation serve different purposes.",
      "Compare the APR, repayment term, each payment, any fees and the total amount repayable. Read early settlement, missed payment and cancellation information in the lender’s documents.",
      "Only apply using the approved broker link. A finance offer does not confirm that treatment is clinically suitable and does not mean you should accept the proposed dental plan.",
    ],
  },
  {
    id: "plan-your-visit",
    title: "Planning your dental visit to Antalya",
    category: "YOUR JOURNEY",
    summary: "Treatment stages, travel and a realistic aftercare plan.",
    paragraphs: [
      "Ask your treating team how many visits are expected and what recovery or healing time is needed. Complex treatments may require return trips.",
      "Wait for confirmation of your clinical plan and visit schedule before booking non-refundable travel. Check what your insurance covers and whether additional treatment or complications abroad are excluded.",
      "Before returning home, obtain aftercare instructions, a clinical contact and a copy of relevant treatment records. Discuss review appointments and the process for raising concerns.",
    ],
  },
];
