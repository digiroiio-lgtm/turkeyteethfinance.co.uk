import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";
const price = (id: string) => packagePrice(packageForId(id)!);

/** General decision support. No lender rates, repayment illustrations or eligibility promises. */
export const dentalFinanceSections: Section[] = [
  {
    title: "What is dental finance, and what does it pay for?",
    body: "Dental finance means borrowing to help meet a treatment cost under a separate credit agreement. It does not decide which dental procedures you need or confirm their suitability. Establish the clinical proposal first, then distinguish the treatment price, the amount you might borrow and the total you would repay under any actual offer.",
    paragraphs: [
      "A written dental estimate describes the proposed care, materials, appointments and inclusions. A lender’s quotation describes borrowing, including charges and repayment conditions. Those documents answer different questions. The coordination team can help obtain treatment information, while the broker or lender must explain a credit offer. An enquiry about treatment does not itself apply for credit.",
      "Use a decision record with separate headings for clinical scope, treatment payments, travel commitments and any borrowing documents. If a number changes, identify which document needs updating before agreeing to proceed. A reduction in the treatment scope does not automatically rewrite an existing loan agreement, and an approval decision does not establish that a treatment plan is appropriate. You can take time to clarify either decision without accepting the other.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Compare the treatment estimate itself", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "Who provides treatment, coordination, broking and lending?",
    body: "Akdeniz Dental provides clinical care in Antalya, Turkey. Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination and administrative support. Ideal4Finance is a credit broker, not a lender. Keep each organisation’s role clear so that clinical questions, appointment enquiries and credit questions reach the professional responsible for the answer.",
    paragraphs: [
      "The clinical team in Turkey performs assessments, plans treatment and delivers dental care. Ask that team about diagnosis, alternatives, risks and a proposed change to the plan. Ask the UK coordination team for help organising communication and administration. Do not interpret a coordinator’s reply as a clinical assessment or as a personal recommendation to borrow.",
      "Read the broker’s current information and any lender’s documents before making a financial commitment. Check which organisation supplies each document and retain its contact details. If an explanation is unclear, ask the relevant provider to clarify it in writing. This page does not independently certify lender suitability or provide regulated financial advice. The clinic and coordination company should not be treated as interchangeable with the broker or the lender simply because the enquiry started on this website.",
    ],
    sources: ["broker"],
    links: [{ text: "Read the treating clinic’s published information", href: "/our-clinic" }, { text: "Understand patient coordination", href: "/how-it-works" }],
  },
  {
    title: "How is a package price different from a borrowing amount?",
    body: "A package total describes specified treatment and inclusions, while a borrowing amount depends on your own payment decision and the actual credit process. The two figures should not be assumed to match. Review your personalised estimate and available resources before discussing borrowing, and never infer repayments from the package price alone.",
    paragraphs: [
      `Owner-confirmed treatment package totals are ${price("zirconium-20")} for 20 zirconium crowns, ${price("zirconium-24")} for 24 zirconium crowns, ${price("veneers-16")} for 16 veneers and ${price("veneers-20")} for 20 veneers. The 4 Osstem implant plus 24 zirconium crown package is ${price("osstem-4-crowns-24")}. These figures are treatment package prices, not credit examples, standalone component prices or recommended borrowing amounts. All are subject to clinical assessment and personalised treatment planning.`,
      "Check current specifications on the Prices page rather than treating this comparison as a substitute for your own quote. Tell the clinical team what you want to discuss and ask whether a package is suitable. Choosing more procedures because a package appears better value is not a clinical justification. Your dentist should explain alternatives, including a different scope of care where appropriate. A package selection does not require you to choose finance.",
    ],
    links: [{ text: "Read confirmed package inclusions and conditions", href: "/prices" }],
  },
  {
    title: "What should I understand about the application process?",
    body: "Understand your treatment estimate before considering a separate credit application. Where an approved broker link is available, use the provider’s own process and review the information it supplies. Ask which checks occur at each stage. A treatment enquiry, an indication of eligibility and a completed credit agreement are different steps with different consequences.",
    paragraphs: [
      "Do not send credit documents, banking credentials or card details through a general treatment enquiry. The website’s quote form is designed to organise treatment questions and contact preferences. Any credit application belongs in the broker or lender’s intended process. Ask the provider what information is needed and how your data will be used before submitting financial details.",
      "Read any offer in full and confirm who the lender is. Avoid assuming that a preliminary result means funds are available or that an application must be completed because you have discussed appointments. You may ask for clinical information without taking out a loan. If there is no approved application link on this website, a treatment enquiry remains the available next step; it does not bypass the finance publication controls or create an application through an alternative route.",
    ],
    sources: ["broker", "personalLoans"],
    links: [{ text: "Read existing eligibility information", href: "/finance-eligibility" }, { text: "Request treatment information first", href: "/get-a-quote" }],
  },
  {
    title: "How should I read fees, APR and the total amount repayable?",
    body: "Read the actual lender’s quotation for the interest rate, APR, term, fees, payment schedule and total amount repayable. Separately check any fee shown in the treatment paperwork. A treatment price is not a credit quotation, and a smaller monthly payment should not be assessed without understanding the full commitment and its duration.",
    paragraphs: [
      "Ask for unclear charges to be explained before agreeing. Identify which provider charges the amount, when it becomes payable and where it appears in the documents. Check whether the payment schedule shown by the clinic concerns treatment stages rather than a loan instalment. Keep the wording of the actual offer instead of relying on a verbal summary, website budget slider or an assumed rate.",
      "MoneyHelper’s personal-loans guide explains the relationship between borrowing terms and overall cost. Use it as background reading while asking the broker or lender about your particular documents. This website supplies no assumed APR, illustrative repayment or standard approval outcome. If documents differ, ask for an explanation of the difference before you decide. For household budgeting and payment planning, the separate Pay Monthly page offers a practical checklist without substituting for the lender’s own disclosures.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Use the monthly payment planning checklist", href: "/pay-monthly" }],
  },
  {
    title: "What do national savings figures tell me about affordability?",
    body: "National research can explain why emergency headroom matters, but it cannot tell you whether a particular loan is affordable. Review your own essential spending, existing commitments and accessible savings. Consider a change in income or an unexpected bill before accepting credit, and keep the choice to postpone treatment open if the budget is uncertain.",
    paragraphs: [
      "The FCA reported in May 2025 that one in ten people had no cash savings and another 21% had less than £1,000 available for emergencies, based on its Financial Lives research. These are national context figures, not characteristics of this website’s visitors and not a suggestion that borrowing is an appropriate response.",
      "Look at the effect of the proposed commitment alongside rent or mortgage payments, bills and existing debts. Your lender’s assessment does not replace your own consideration of what happens if your circumstances change. If you need help understanding the decision, seek independent guidance rather than treating treatment availability as a deadline to accept credit. Do not use a general savings statistic as a target reserve or assume that it caps the possible cost of an emergency. Use your own records and circumstances.",
    ],
    sources: ["fcaSavings", "personalLoans"],
    quotes: [{ text: "Our data shows that finances are stretched for many - with some unable to save for a rainy day.", name: "Sarah Pritchard", role: "Executive Director of Consumers and Competition at the FCA at publication", source: "fcaSavings", attributionDate: "16 May 2025" }],
  },
  {
    title: "Has financial resilience changed, and how reliable are the figures?",
    body: "Use the survey year, sample and comparison period when interpreting financial statistics. A published percentage is evidence about a defined population at a particular time, not a current affordability check. Historical trends can provide context for careful planning, but they do not predict approval or identify a suitable credit product for an individual patient.",
    paragraphs: [
      "The FCA’s Financial Lives May 2024 survey included 17,950 respondents. It estimated low financial resilience among 24% of UK adults, around 13.1 million people, compared with 24% and 12.9 million in May 2022. The proportions were not statistically different. This compares two years apart, not a year-on-year change.",
      "The finding is useful because it encourages a pause before making a commitment, not because it establishes any rule about dental borrowing. Keep research findings separate from your clinical quote and the lender’s decision. Ask whether a number is a sample count, a population estimate or a price, and inspect the linked source when the distinction matters. This website does not present national survey estimates as its own patient outcomes, approval rates or evidence that finance would benefit your household.",
    ],
    sources: ["fcaSurvey"],
  },
  {
    title: "Who receives the money, and when do I pay the clinic?",
    body: "Under the customer process supplied by Ideal4Finance, a successful lender pays funds to the customer. You remain responsible for paying the clinic according to the agreed treatment payment schedule. Confirm the actual disbursement arrangements and timing with the provider, rather than assuming an offer means the clinic has already been paid or your appointments are secured.",
    paragraphs: [
      "Keep the lender’s confirmation separate from the clinic’s invoice and payment instructions. Ask which amount is due at each clinical stage, how payment is acknowledged and what happens if the appointment schedule changes. Do not book travel on an assumption about when funds will arrive. A proposed visit date and a lender’s processing timetable are separate matters to confirm with the organisations involved.",
      "The confirmed implant package includes 3 + 5 hotel nights over two visits, while crown and veneer packages include 5 nights. These accommodation arrangements are not a credit term, an instalment plan or a guarantee about the interval between visits. Match the clinic’s written payment schedule to your treatment stages and ask the lender about its own repayment obligations. Do not infer that repayments automatically pause while you are waiting for further clinical care.",
    ],
    sources: ["broker"],
    links: [{ text: "Plan treatment stages and travel", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "What happens if treatment changes or I decide not to proceed?",
    body: "Ask the clinic about treatment changes, cancellations and refunds, and separately ask the lender about the credit agreement. One provider’s decision does not automatically settle the other agreement. If examination changes the proposed care, request a revised plan and cost, then clarify the consequences for any payment or borrowing you have already arranged.",
    paragraphs: [
      "Read the actual written terms before paying, accepting finance or booking travel. Record who should receive a cancellation request and how the provider confirms receipt. Ask the lender to explain any relevant withdrawal, early settlement or payment conditions for your agreement rather than applying a rule from a different product or a general online example. This page does not promise a particular refund entitlement or outcome.",
      "If a concern arises, gather the dated estimate, revised plan, invoices and relevant correspondence so each provider can identify the issue. Keep clinical questions about suitability with the treating dentist. Keep questions about a credit balance or repayment obligation with the broker or lender. If you decide to postpone, ask each relevant organisation what action is needed; cancelling a journey or an appointment should not be assumed to close a financial agreement. Seek independent guidance when the documents remain unclear.",
    ],
    sources: ["personalLoans", "gdc"],
    links: [{ text: "Check questions to ask about written treatment terms", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "Why should aftercare and possible return costs affect my decision?",
    body: "Understand the arrangements for follow-up, clinical concerns and possible return visits before deciding on treatment or borrowing. Ask what any warranty covers and who pays associated travel or accommodation costs. A package total should not be treated as a cap on every future expense or as proof that ongoing care is already arranged in the UK.",
    paragraphs: [
      "The BDA’s July 2022 survey of 1,000 UK dentists found that, among the relevant respondents, 65% reported remedial costs of at least £500 and 51% reported costs above £1,000 after treatment abroad. Of all respondents, 93% raised continuity-of-care concerns and 77% raised redress concerns. These are historical dentist reports, not patient complication rates, current repair fees or Akdeniz Dental outcome data.",
      "Ask for the clinical contact route and written aftercare instructions, including what happens if another visit is required. Keep provider terms and your own travel arrangements together, and check insurance directly rather than assuming it covers planned dental care or complications. A contingency amount is a personal planning decision, not a promise that all potential costs will be met. If the available budget depends on there being no changes or additional care, pause and obtain clearer information before committing.",
    ],
    sources: ["bdaTourism", "gdc"],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair of the British Dental Association at publication", source: "bdaTourism", attributionDate: "14 July 2022" }],
    links: [{ text: "Review aftercare and continuity questions", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "Where can I get help if borrowing or repayments feel difficult?",
    body: "Seek independent guidance if you are unsure about borrowing, and contact the lender promptly if an existing repayment becomes difficult. A new treatment enquiry is not a debt advice service. You can step back from a treatment decision while clarifying your finances instead of treating credit approval as an instruction to proceed with dental care.",
    paragraphs: [
      "The FCA’s May 2025 release, reporting its May 2024 survey, stated that 1.7 million people had used debt advice or debt management services in the 12 months before the survey; 61% said their debts became more manageable. This is a reported experience in national research, not a guaranteed result from advice and not evidence supporting a dental loan.",
      "MoneyHelper provides impartial information that can help you identify further support. Keep a list of your questions and the documents you do not understand, and ask the relevant professional to explain the options. Do not send account credentials or sensitive credit records through this website’s general enquiry form. If your immediate need is clinical information, request a written treatment estimate with no obligation to apply for credit. The next useful step may be a clearer explanation, a different clinical plan or postponement rather than an application.",
    ],
    sources: ["fcaSavings", "personalLoans"],
    links: [{ text: "Ask for a written treatment estimate", href: "/get-a-quote" }, { text: "Read existing finance questions and answers", href: "/finance-faq" }],
  },
];

export const ukFinanceQuestion = "Can I get finance for dental treatment in Turkey if I live in the UK?";
export const ukFinanceAnswer =
  "Possibly. UK residents can explore third-party finance for treatment in Antalya through a credit broker, but the lender decides on residency, income, affordability and credit circumstances, so approval is never guaranteed. A treatment enquiry is not a credit application, and you can request a written estimate first.";
export const financeRoutesIntro =
  "These are the payment routes this site describes. They differ in who provides the money, who makes the decision and when payments happen. Use the table to see what to check before choosing, then read the clinic’s or lender’s own documents for the terms that apply to you.";
export const financeRoutes = [
  {
    route: "Savings or clinic stage payments",
    provider: "Your savings; payment dates agreed with Akdeniz Dental",
    decision: "No credit decision. The clinic’s written terms apply",
    timing: "According to the payment schedule in your written quote",
    check: "No loan interest when using savings. Confirm stage dates, deposit, cancellation terms and inclusions; staging is not a monthly loan",
  },
  {
    route: "Finance through the broker",
    provider: "A lender introduced by Ideal4Finance, which is a credit broker and not a lender",
    decision: "The lender, subject to status and affordability",
    timing: "Under the broker’s customer process a successful lender pays funds to you, and you remain responsible for paying the clinic on its schedule",
    check: "APR, term, fees, total amount repayable, early settlement",
  },
  {
    route: "Other borrowing you arrange yourself",
    provider: "Your own bank or lender",
    decision: "That lender",
    timing: "Under that agreement, still separate from your payments to the clinic",
    check: "The lender’s written quotation and MoneyHelper’s personal-loans guidance",
  },
  {
    route: "Credit card you arrange yourself",
    provider: "Your card issuer, if the clinic accepts your card",
    decision: "The card issuer; acceptance and limits depend on its terms",
    timing: "Pay the clinic on its agreed dates and repay the card issuer separately",
    check: "Purchase rate, any promotional period, fees, minimum payments and total cost. Confirm acceptance with the clinic; no interest-free card offer is made here",
  },
] as const;
