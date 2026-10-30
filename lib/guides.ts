import { guidePaymentQuestions, includePaymentQuestions } from "./payment-questions";
import type { FAQ, Section } from "./content";
export type PatientGuide = {
  id: string; title: string; category: string; summary: string;
  paragraphs: string[]; path?: string; description?: string;
  lastModified: string; sections: Section[]; faqs: FAQ[]; related: string[];
};
export const guideArticles: PatientGuide[] = [
  {
    id: "compare-quotes", path: "/guides/compare-dental-quotes",
    title: "How to compare dental treatment quotes",
    category: "TREATMENT PLANNING",
    summary: "Compare the clinical scope, materials, visits and written terms before comparing totals.",
    description: "A practical checklist for UK patients comparing dental quotes for Antalya: teeth, materials, implant components, temporary teeth, visits and written terms.",
    lastModified: "2026-10-21",
    paragraphs: ["Compare what is proposed for your own teeth before comparing the total price. A useful dental quote identifies the treatment, materials, stages and exclusions clearly enough for you to ask questions. An estimate based on an online enquiry remains provisional until the treating dentist assesses you."],
    sections: [
      {
        title: "Are the quotes proposing the same treatment?",
        body: "Start with the teeth or arches being treated and the clinical reason for each procedure. A quote for veneers is not equivalent to one for crowns, and a full-arch implant bridge is different from replacing a single missing tooth. Matching the headline number of teeth does not make two plans comparable.",
        paragraphs: ["Make a simple list of the proposed work and the questions you still have. Ask which treatment addresses disease or function and which changes are optional. If the plans differ, request an explanation before deciding that one is better value. A lower total may reflect a smaller scope, a different restoration or an item excluded from the estimate. You can ask another dentist to explain alternatives."],
        links: [{ text: "Compare veneers and crown planning", href: "/veneers-finance" }, { text: "Understand implant components", href: "/dental-implants-finance" }],
      },
      {
        title: "Which materials and components are included?",
        body: "Request the restoration type and material beside the relevant teeth. For implants, distinguish the fixture, abutment and final restoration. For full-arch care, ask what is temporary, what is final and whether the estimate concerns one arch or both. A package name alone does not establish these details.",
        paragraphs: ["Write down the implant system where relevant and keep the specification with your records. Check whether laboratory work, temporary restorations, scans and planned reviews are included. Ask whether extractions or preparatory care are part of the current estimate or need a separate decision after assessment. If the plan changes, ask for an updated written version before agreeing to the additional work."],
        sources: ["implants"],
      },
      {
        title: "How do I compare travel and appointment requirements?",
        body: "Use the appointment schedule for the proposed treatment rather than assuming every quote can be completed during one stay. A staged plan may require a healing interval and a return visit. Identify which visit includes surgery, temporary teeth, the final restoration and any review appointments.",
        paragraphs: ["Keep treatment costs separate from flights, accommodation and other travel expenses. If a hotel or transfer is offered, confirm the nights, room arrangements and journeys actually covered. Ask about the effect of an extra appointment or a change to the travel dates. Use your actual booking options for budgeting; there is no assumed flight, hotel or package price in this checklist."],
        sources: ["stages"], links: [{ text: "Plan treatment visits to Antalya", href: "/guides/plan-dental-visit-antalya" }],
      },
      {
        title: "What written terms should I read before paying?",
        body: "Read the clinic’s payment, cancellation, refund and aftercare terms before paying or booking travel. Ask what happens if the clinical assessment changes the plan or you decide not to proceed. Keep the current quote and correspondence so that the agreed scope can be checked later.",
        paragraphs: ["A warranty should identify what is covered, its conditions and how a concern is assessed after you return to the UK. Clarify responsibility for any return flights, extra accommodation and remedial work. Do not assume that a treatment warranty covers travel or every possible complication. Ask for a named clinical contact and the route for raising a complaint."],
        sources: ["gdc"],
      },
      {
        title: "What should I send when requesting a clearer estimate?",
        body: "Send the treatment questions that remain unanswered, the teeth or procedures you want to discuss and your likely travel period. Choose email or WhatsApp for the response. You may provide dental information or photographs if you choose, but avoid including banking details, passport scans or credit-application information.",
        paragraphs: ["The coordination team can help organise questions and appointments; the treating dentist determines clinical suitability. A useful next step is a written response identifying what is included and what still needs examination. There is no need to choose a credit product to ask for a treatment estimate. Any lender’s documents remain separate from the clinical proposal."],
        links: [{ text: "Review the treatment cost checklist", href: "/prices" }, { text: "Request an itemised treatment estimate", href: "/get-a-quote" }],
      },
    ],
    faqs: [
      { question: "Can I compare an implant fixture price with a complete tooth replacement?", answer: "Not without checking the scope. A complete replacement may also involve an abutment, crown, scans and other care. Ask for each item to be specified before comparing totals." },
      { question: "Is the cheapest written quote necessarily the lowest overall cost?", answer: "No. The treatment scope, travel, extra visits, excluded procedures and aftercare arrangements can differ. Compare the complete proposed journey using your actual estimates and bookings." },
      { question: "Should I keep the earlier quote if my plan changes?", answer: "Yes. Keep the original and revised documents and ask the team to identify the changes. Agree the updated treatment and cost before proceeding with additional work." },
    ],
    related: ["prices", "our-clinic", "get-a-quote"],
  },
  {
    id: "plan-your-visit", path: "/guides/plan-dental-visit-antalya",
    title: "Planning your dental visit to Antalya",
    category: "YOUR JOURNEY",
    summary: "Prepare for appointments, staged treatment and continuity of care after returning home.",
    description: "Plan a dental visit to Antalya from the UK: assessment, treatment stages, travel confirmation, clinical records and aftercare arrangements.",
    lastModified: "2026-10-21",
    paragraphs: ["Plan your Antalya visit around a confirmed clinical schedule, with time for the appointments and checks your treating dentist recommends. Separate the clinical plan from travel arrangements. If treatment has surgical and restorative stages, ask whether you need a return visit before committing to bookings."],
    sections: [
      {
        title: "What needs confirming before I book flights?",
        body: "Confirm the proposed treatment, the appointments for your visit and what still needs assessment in person. Ask who will treat you and how to contact the team if a question arises. An initial online estimate does not establish a diagnosis or guarantee the final plan and cost.",
        paragraphs: ["Keep your treatment estimate, visit schedule and accommodation details together. Tell the team about your travel dates and ask whether they fit the proposed care before making non-refundable arrangements. Check any changes to the itinerary in writing. A coordination service can help with administration, while decisions about treatment readiness and travel after procedures belong with the clinical team."],
        links: [{ text: "Check the clinic and treating team", href: "/our-clinic" }, { text: "Read how treatment coordination works", href: "/how-it-works" }],
      },
      {
        title: "How can implant stages affect the number of visits?",
        body: "Implant care can include assessment, surgery, healing and fitting the final teeth, with additional procedures in some cases. These stages do not necessarily fit into a single trip. Ask the treating dentist which appointments apply to you, what you will wear while healing and when reassessment takes place.",
        paragraphs: ["If grafting or extractions are proposed, clarify whether they alter the order or timing. Ask what changes if an immediate temporary restoration is not suitable. Do not book the restorative trip around an assumed healing deadline; the clinical team should confirm readiness. Keep a separate plan for each proposed visit and any treatment balance associated with that stage."],
        sources: ["stages"], links: [{ text: "Understand dental implant planning", href: "/dental-implants-finance" }, { text: "Understand full-arch temporary and final teeth", href: "/all-on-4-finance" }],
      },
      {
        title: "What if my plan changes after assessment?",
        body: "Ask the team to explain the revised clinical recommendation and its effect on appointments and cost before deciding whether to proceed. The in-person assessment may identify needs that an online enquiry could not establish. You should have the opportunity to ask about alternatives and understand the consequences of postponing treatment.",
        paragraphs: ["Check whether the change affects your stay, temporary teeth, a return visit or arrangements already made. Request an updated estimate rather than relying on an informal conversation. Keep the old and new versions so you can see what changed. Ask about the applicable cancellation or refund terms if the revised proposal does not suit your circumstances."],
        links: [{ text: "Compare the revised quote", href: "/guides/compare-dental-quotes" }],
      },
      {
        title: "What should I take home after treatment?",
        body: "Request the treatment summary, aftercare instructions and the details needed to identify any implants or restorations. Confirm the recommended reviews and how to contact the clinical team from the UK. These records help you explain the work if you see another dentist later.",
        paragraphs: ["Ask the treating team to explain the instructions before you leave rather than simply giving you a document. Keep the clinical contact separate from administrative booking contacts. Clarify how an urgent concern will be assessed and whether you should seek local care. The enquiry website and patient coordination service do not replace the treating clinician’s individual advice."],
        sources: ["gdc"],
      },
      {
        title: "How should I plan follow-up and possible return travel?",
        body: "Agree the follow-up process and responsibility for costs before treatment starts. Routine reviews, repair of a restoration and treatment of a complication may involve different arrangements. A warranty should not be assumed to cover every procedure, flight or extra night of accommodation.",
        paragraphs: ["Ask how the clinic reviews photographs or reports from another dentist, when an in-person appointment may be necessary and how travel would be arranged. Discuss your plans with your usual dentist so they understand the treatment you are considering abroad. Review insurance terms directly with the insurer for your proposed trip; do not assume ordinary holiday cover meets the needs of planned dental treatment."],
        links: [{ text: "Check quote inclusions and written terms", href: "/prices" }, { text: "Ask a question about your proposed visit", href: "/contact" }],
      },
    ],
    faqs: [
      { question: "Does an initial estimate mean I should book my dental trip immediately?", answer: "No. Confirm the treatment schedule, remaining assessment requirements and travel arrangements with the team first. Ask how a revised clinical plan could affect your stay and bookings." },
      { question: "Can an implant healing interval be fixed before I am assessed?", answer: "The treating dentist must assess your circumstances and confirm the stages. Healing and any additional care may change when the final restoration is appropriate." },
      { question: "Who should I contact about clinical concerns after returning home?", answer: "Use the clinical contact and aftercare process agreed with the treating clinic. Obtain those details before leaving Antalya and seek appropriate local care if an urgent problem occurs." },
    ],
    related: ["dental-implants-finance", "our-clinic", "get-a-quote"],
  },
  {
    id: "finance-abroad-uk", path: "/guides/dental-finance-for-treatment-abroad-uk",
    title: "Dental finance for treatment abroad: what UK patients should compare",
    category: "PAYMENT OPTIONS",
    summary: "How to compare ways to pay for dental treatment abroad: APR, fees, term and total repayable.",
    description: "What UK patients should compare when choosing how to pay for dental treatment abroad: personal loans, dental finance, credit cards and saving, with the questions to ask each lender.",
    lastModified: "2026-10-28",
    paragraphs: ["There is no single best way to pay for dental treatment abroad. The right choice depends on how much you need, how quickly you want to repay and what you can comfortably afford. Establish the treatment cost in writing first, then compare the full cost of each payment route using the provider’s own documents rather than headline figures."],
    sections: [
      {
        title: "What are the main ways to pay for treatment abroad from the UK?",
        body: "UK patients commonly choose between paying from savings, using a personal loan, using dental or treatment finance arranged through a credit broker, or using a credit card. Each has different costs, protections and approval requirements, and none is right for everyone.",
        paragraphs: ["Paying from savings avoids borrowing costs altogether but may not suit a larger plan. A personal loan or broker-arranged finance spreads the cost into fixed monthly payments, with the lender deciding on your application. A credit card may offer different consumer protections but can become expensive if the balance is not cleared quickly. Read the terms for any product you consider, and speak to an impartial source such as MoneyHelper if you are unsure which suits your circumstances."],
        sources: ["personalLoans"], links: [{ text: "See how monthly payment planning works", href: "/pay-monthly" }],
      },
      {
        title: "What should I compare between finance options?",
        body: "Compare the APR, the repayment term, the amount of each payment, any arrangement or late fees and the total amount repayable. The cheapest monthly payment is not necessarily the lowest overall cost, because a longer term usually means more interest paid in total.",
        paragraphs: ["Ask each lender for a written quotation based on your own circumstances, because the rate you are offered may differ from any representative example. Check whether you can repay early and whether doing so carries a charge. Read what happens if you miss a payment and who to contact if your circumstances change. Do not borrow more than the confirmed treatment cost, and keep travel and accommodation budgets separate from the amount you finance."],
        sources: ["personalLoans"], links: [{ text: "Questions to ask about eligibility", href: "/finance-eligibility" }],
      },
      {
        title: "How does a credit broker differ from a lender?",
        body: "A credit broker introduces you to lenders and explains the application process, but it does not lend the money. The credit agreement is with the lender, and the lender makes the decision. A broker such as Ideal4Finance should tell you clearly which lender you are applying to and what the terms are.",
        paragraphs: ["Ask the broker whether it works with a panel of lenders, whether any fee or commission applies and whether making an application involves a credit search. Check the broker’s regulatory status on the Financial Conduct Authority Register yourself. A treatment enquiry with a clinic or coordination company is separate from any credit application and does not commit you to borrowing."],
        sources: ["broker"], links: [{ text: "Is Turkey Teeth Finance legit?", href: "/is-turkey-teeth-finance-legit" }],
      },
      {
        title: "Should I arrange finance before or after the treatment plan?",
        body: "Arrange finance after you have a written treatment plan and cost, not before. The dental estimate tells you how much you need, and the treating dentist may revise the plan after assessing you in person. Applying early risks borrowing against a figure that later changes.",
        paragraphs: ["Ask the clinic to confirm which stages are included, when payments fall due and what happens to any deposit if the plan changes. A finance offer does not confirm that treatment is clinically suitable, and you are free to decline the plan after your assessment. Keep the clinic’s written terms and the lender’s agreement together so you can check them against each other."],
        links: [{ text: "Compare your dental quotes first", href: "/guides/compare-dental-quotes" }, { text: "Check packages and prices", href: "/prices" }],
      },
      {
        title: "What are the risks of borrowing for treatment abroad?",
        body: "You remain responsible for repaying the loan even if you are unhappy with the treatment or need further work. Extra visits, flights or remedial care are costs that finance may not cover. Treatment abroad also involves clinical risks that you should discuss with your usual dentist before you decide.",
        paragraphs: ["Think about what you would do if your income fell or if the treatment needed more time or cost than planned. Check whether your travel insurance covers planned dental treatment, because ordinary holiday cover often does not. The General Dental Council and the NHS publish balanced guidance on having dental care overseas, and it is worth reading before you commit to any payment route."],
        sources: ["gdc", "nhsTravel"],
      },
    ],
    faqs: [
      { question: "What is the best dental finance option in the UK for treatment abroad?", answer: "There is no single best option. Compare APR, fees, term and total repayable from each provider’s own quotation, and choose the route you can comfortably afford. Paying from savings avoids borrowing costs entirely." },
      { question: "Does asking for a treatment quote affect my credit file?", answer: "A treatment enquiry is not a credit application. The broker and lender explain any credit checks when you choose to apply through their separate process." },
      { question: "Is a lower monthly payment always better?", answer: "No. A longer term lowers each payment but usually increases the total interest paid. Compare the total amount repayable as well as the monthly figure." },
    ],
    related: ["pay-monthly", "dental-finance", "finance-eligibility"],
  },
  {
    id: "understand-finance", title: "Questions to ask before choosing finance",
    category: "PAYMENT OPTIONS", summary: "APR, fees, repayment terms and the full borrowing cost.",
    lastModified: "2026-10-22", sections: [], faqs: [], related: [],
    paragraphs: [
      "Establish the treatment budget before considering whether to borrow, then read any lender’s actual quotation separately. The dental estimate describes proposed care; a credit agreement describes a financial commitment. Compare the full borrowing cost and repayment conditions, and do not assume that a treatment enquiry requires an application or guarantees approval.",
      "Compare the APR, repayment term, each payment, any fees and the total amount repayable. Read early settlement, missed payment and cancellation information in the lender’s documents.",
      "Only apply using the approved broker link. A finance offer does not confirm that treatment is clinically suitable and does not mean you should accept the proposed dental plan.",
    ],
  },
];
guideArticles.push({
  id: "deposits-and-stage-payments", path: "/guides/turkey-teeth-deposits-and-payment-plans",
  title: "Turkey teeth payment plans: deposits, stages and monthly loans",
  category: "PAYMENT OPTIONS", lastModified: "2026-10-30",
  summary: "Separate clinic payment dates from loan repayments and plan for changes before booking travel.",
  description: "Understand deposits, staged clinic payments, monthly borrowing and two-visit implant budgets for Turkey dental treatment. Questions to confirm in writing.",
  paragraphs: ["A Turkey teeth payment plan can mean two different things: a schedule for paying the clinic, or a separate credit agreement that you repay monthly. Neither tells you whether a treatment is appropriate. Start with an itemised clinical estimate, then obtain the payment dates and terms from each organisation involved. There is no universal deposit percentage or repayment start date that applies to every clinic and lender."],
  sections: [
    { title: "Is paying in stages the same as paying monthly?", body: "No. Clinic stage payments follow an agreed treatment schedule. For example, an implant plan may separate the surgical visit from the visit for final restorations. That does not mean the clinic lends money over a number of months. A loan is a separate agreement with a lender, with its own repayment dates, interest and conditions.", paragraphs: ["Ask the clinic whether the whole treatment balance must be settled before the final work, and obtain the actual dates in writing. Ask the lender when repayments start, even if your proposed trip is months away. Do not assume that treatment completion triggers the first repayment or that a delayed appointment pauses your agreement."], sources: ["stages", "personalLoans"], links: [{ text: "Compare payment routes", href: "/pay-monthly" }] },
    { title: "How much deposit should I expect?", body: "Ask for the required amount, recipient, due date and purpose in your own written quote. This website does not publish a universal booking deposit. The contribution you enter in our calculator is your own budgeting choice; it is not a clinic policy, a reservation or permission to transfer money.", paragraphs: ["Before sending funds, confirm the recipient using the clinic’s established contact channel and keep the invoice and payment record. Read when a booking becomes binding, what happens if you cancel, and whether any amount is refundable. Ask how a postponed trip is handled. Keep the clinic’s answer alongside your quotation rather than relying on another patient’s experience."], links: [{ text: "Check who provides treatment and coordination", href: "/is-turkey-teeth-finance-legit" }] },
    { title: "How should I budget for two implant visits?", body: "List the proposed clinical work, hotel nights, travel costs and clinic payment due at each visit. The published implant-and-crown package is not automatically an All-on-4 plan. Your dentist must confirm the scope, temporary restoration, healing requirements and readiness for the next stage.", paragraphs: ["Use a separate line for the second set of flights, time away from work and any extra nights. Ask who pays if clinical readiness changes your return date. A package’s included nights do not cap every possible expense. Obtain a clinical contact for questions after returning to the UK and clarify how reviews or complications would be assessed."], sources: ["stages", "gdc"], links: [{ text: "Read package inclusions", href: "/prices" }] },
    { title: "What if the treatment plan changes or I cancel?", body: "Request the reason, revised treatment scope, new cost and effect on visits before agreeing to additional care. Ask about alternatives and what happens if you do not proceed. Your original estimate and any revised version should identify what remains provisional and what has been agreed.", paragraphs: ["Speak to the broker or lender separately about any existing credit. A cancelled appointment, clinic refund or smaller treatment plan does not automatically settle or rewrite a loan. Retain both sets of documents and ask each provider to explain its own process. Do not rely on a general website description for the outcome of a particular cancellation or dispute."], sources: ["personalLoans", "gdc"] },
    { title: "What should I do if finance is declined?", body: "A decline does not change the clinical assessment or require another application. Ask the broker to explain the outcome and the effect of any further search. Avoid assuming that a different lender will approve you or that a larger deposit guarantees acceptance.", paragraphs: ["Consider whether saving, changing the timing or discussing clinically appropriate staged care with a dentist would be more manageable. Protect essential household commitments when reviewing an elective treatment budget. MoneyHelper provides independent information about borrowing; the coordination team can explain the enquiry process but does not recommend a personal credit product."], sources: ["personalLoans"], links: [{ text: "Understand eligibility", href: "/finance-eligibility" }, { text: "Explore repayment assumptions", href: "/finance-calculator" }] },
  ],
  faqs: [
    { question: "Is a clinic stage-payment plan a monthly loan?", answer: "No. Stage payments set dates for paying the clinic. A loan is a separate credit agreement with a lender, which sets repayment dates, costs and conditions." },
    { question: "Do loan repayments always start after dental treatment?", answer: "No. Check the first repayment date in the lender’s documents. Treatment dates and loan repayment dates are separate." },
    { question: "Does a clinic refund automatically cancel my finance?", answer: "Do not assume so. Ask the clinic about its refund terms and the broker or lender about your separate agreement." },
  ], related: ["pay-monthly", "finance-calculator", "prices", "finance-eligibility"],
});
for (const guide of guideArticles) {
  const questions = guide.path && guidePaymentQuestions[guide.path];
  if (questions) includePaymentQuestions(guide, questions);
}
export const standaloneGuides = guideArticles.filter(guide => !!guide.path);
export function guideForPath(path: string) { return standaloneGuides.find(guide => guide.path === path); }
