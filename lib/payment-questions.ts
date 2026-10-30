import type { FAQ, Section } from "./content";
import type { EvidenceId } from "./evidence";

type PaymentQuestion = {
  question: string;
  answer: string;
  explanation: string;
  sources: EvidenceId[];
  replaceTitle?: string;
  replaceFaqQuestion?: string;
  links?: { text: string; href: string }[];
};

export const pagePaymentQuestions: Record<string, PaymentQuestion[]> = {
  "pay-monthly": [
    {
      question: "Do Turkish dental clinics offer monthly finance, or only staged payments?",
      answer: "It depends on the clinic and the payment provider. Stage payments divide the clinic bill across treatment dates; a monthly loan is a separate credit agreement. Neither is automatically available. Ask for the clinic’s payment schedule and any lender’s terms in writing before booking, and do not assume that a two-visit implant plan includes monthly credit.",
      explanation: "For treatment coordinated through this website, Akdeniz Dental supplies the clinical plan and clinic payment dates. Any finance application is separate, through the approved broker process when available. Confirm who supplies the money, who receives it and whether payments are tied to appointments or a lender’s monthly timetable.",
      sources: ["broker", "personalLoans"], replaceTitle: "What does paying monthly for Turkey teeth mean?",
      links: [{ text: "Read deposits and stage-payment guidance", href: "/guides/turkey-teeth-deposits-and-payment-plans" }],
    },
    {
      question: "When do repayments start: before or after dental treatment in Turkey?",
      answer: "The first repayment date comes from your credit agreement, not your travel itinerary. Payments may start before treatment is finished, especially when implants require a later visit. Ask the lender for every payment date and the clinic for its separate deposit and stage-payment dates. Do not assume that moving an appointment changes a loan schedule.",
      explanation: "Put both schedules on one calendar, including any healing interval and return trip. Loan repayments need not begin after treatment. Before changing dates, ask each provider what happens under its own agreement and retain the written response. A coordinator cannot promise a lender repayment holiday.",
      sources: ["personalLoans", "stages"], replaceTitle: "When do deposits, stage payments and loan repayments start?",
      links: [{ text: "Plan treatment visits", href: "/guides/plan-dental-visit-antalya" }],
    },
  ],
  "finance-eligibility": [
    {
      question: "Can I check Turkey teeth finance eligibility without affecting my credit score?",
      answer: "Some providers offer an initial eligibility check using a soft search, which does not affect your credit score. A full application may involve a hard search recorded on your credit file. Check the wording at the actual application step. Reading this website, using our calculator or requesting a treatment quote does not run a credit check.",
      explanation: "MoneyHelper distinguishes eligibility checks from full applications. A soft search is still a credit check; it is not the same as ‘no credit check’. This website does not promise that every broker or lender step is a soft search. Ask the provider before submitting an application if the effect on your credit file is unclear.",
      sources: ["personalLoans"], replaceTitle: "Your credit circumstances",
      links: [{ text: "Explore repayments without an application", href: "/finance-calculator" }],
    },
    {
      question: "What can I do if my Turkey dental finance application is declined?",
      answer: "Ask the provider to explain the decision and whether a review is available before making another application. Check your credit report for errors and consider saving, postponing elective care or discussing clinically appropriate stages with your dentist. A larger deposit or a different lender does not guarantee approval. A treatment enquiry does not require a credit application.",
      explanation: "Review the effect of any further credit search and avoid repeated applications without understanding the reasons for the first decision. If essential bills or existing debts are difficult to manage, seek independent money guidance before adding borrowing. The coordination team can explain treatment enquiries but cannot overturn a lender’s decision.",
      sources: ["personalLoans"],
      links: [{ text: "Request treatment information without applying for finance", href: "/get-a-quote" }],
    },
    {
      question: "Can I get Turkey teeth finance with bad credit, and what checks apply?",
      answer: "Only the lender can decide. Credit history, income, existing commitments and affordability can affect approval, the amount and the rate offered. Bad credit does not establish acceptance or rejection for every product. Ask the provider about its criteria and search process; this website does not offer guaranteed approval or no-credit-check dental loans.",
      explanation: "Do not interpret ‘bad credit considered’ as an assurance of an affordable offer. Compare the actual APR, fees and total repayable if a lender makes an offer. Paying the clinic in stages is not a way to bypass a lender’s checks: it is a separate arrangement whose terms must be confirmed by the clinic.",
      sources: ["personalLoans"],
      links: [{ text: "Compare ways to pay", href: "/pay-monthly" }],
    },
  ],
  prices: [
    {
      question: "Does dental finance cover flights, hotels and a second trip to Turkey?",
      answer: "Coverage depends on the particular credit agreement. Our published packages include specified hotel nights and transfers, but flights, insurance, extra procedures and extra nights are excluded unless your written quote says otherwise. A package inclusion does not automatically make an expense financeable. Ask the provider exactly which invoice items and visits its product can fund.",
      explanation: "For a two-visit plan, list each trip’s flights, accommodation, time away from work and possible extra appointments separately. Avoid counting included hotel nights twice. Keep the treatment invoice, total trip budget and borrowing amount distinct; a provider may fund only eligible treatment costs even when a clinic sells a combined package.",
      sources: ["gdc", "broker"],
      links: [{ text: "Plan separate implant visits", href: "/guides/plan-dental-visit-antalya" }, { text: "Use the package calculator", href: "/finance-calculator" }],
    },
  ],
  "how-it-works": [
    {
      question: "Who pays for aftercare or corrective treatment while I am still repaying the loan?",
      answer: "Your clinic’s aftercare terms, any warranty and any applicable consumer protections determine the arrangements; finance alone does not provide free corrective treatment. Ask who assesses concerns and pays for reviews, repairs and return travel. Contact the lender about your agreement if a dispute arises, and do not assume repayments pause automatically.",
      explanation: "The GDC recommends asking what happens if things go wrong and whether further treatment costs are covered. Get a named clinical contact, written aftercare instructions and the complaints process before travel. Seek appropriate clinical help for an urgent concern while separately asking the provider about payment or dispute options.",
      sources: ["gdc", "personalLoans"],
      links: [{ text: "Read follow-up and return-travel planning", href: "/guides/plan-dental-visit-antalya" }],
    },
  ],
};

export const guidePaymentQuestions: Record<string, PaymentQuestion[]> = {
  "/guides/turkey-teeth-deposits-and-payment-plans": [
    {
      question: "What happens to my loan if my dental treatment is cancelled or changes?",
      answer: "A cancelled appointment or revised treatment plan does not automatically cancel a separate loan. Ask the clinic about its cancellation and refund terms, and ask the lender about your agreement, withdrawal rights and any repayment due. Get a revised itemised estimate before accepting changed treatment, and retain both clinical and finance documents.",
      explanation: "MoneyHelper explains that withdrawing from a personal loan can require returning funds, with interest for the period borrowed. Cancelling clinical treatment is a separate decision. If money has already been paid or a dispute arises, ask each provider to explain its process and any relevant protections rather than assuming a clinic refund closes the credit account.",
      sources: ["personalLoans", "gdc"], replaceTitle: "What if the treatment plan changes or I cancel?",
      replaceFaqQuestion: "Does a clinic refund automatically cancel my finance?",
    },
    {
      question: "How much deposit do I need, and can it be refunded?",
      answer: "There is no universal deposit or refund policy published by this website. Ask for the amount, recipient, due date, cancellation conditions and treatment-change terms in your written quote before paying. The calculator’s upfront contribution is your own budgeting input; it does not set a clinic deposit or confirm a refundable booking.",
      explanation: "Check what happens if you postpone, the clinic changes dates or the in-person assessment changes the proposed care. Obtain an invoice and retain confirmation of the agreed terms. A general treatment-abroad checklist can guide your questions, but it cannot establish the refund rights in an individual clinic agreement.",
      sources: ["gdc"], replaceTitle: "How much deposit should I expect?",
      links: [{ text: "Check package scope before paying", href: "/prices" }],
    },
  ],
  "/guides/dental-finance-for-treatment-abroad-uk": [
    {
      question: "How do I compare the total cost of Turkey dental finance with UK private treatment?",
      answer: "Compare clinically equivalent written plans, then add the cost of borrowing, all required trips, maintenance and aftercare arrangements. Use the actual lender APR, fees, term and total repayable, not just a monthly figure. Separate one arch from both arches, and temporary from final teeth. A cheaper headline package does not establish a lower overall cost.",
      explanation: "Record the clinic cost, upfront contribution, loan repayments and excluded expenses in separate columns so nothing is counted twice. At the same rate and amount, a longer term usually means more interest despite a lower monthly payment. Our calculator uses your nominal interest assumption, not an actual lender APR; use lender documents for the final comparison.",
      sources: ["personalLoans", "gdc"], replaceTitle: "What should I compare between finance options?",
      links: [{ text: "Compare treatment scope", href: "/guides/compare-dental-quotes" }, { text: "Explore repayment assumptions", href: "/finance-calculator" }],
    },
  ],
};

/** Replace overlapping answers rather than adding another page or duplicate section. */
export function includePaymentQuestions(content: { sections: Section[]; faqs: FAQ[]; lastModified: string }, questions: PaymentQuestion[]) {
  content.sections = [...content.sections];
  content.faqs = [...content.faqs];
  for (const item of questions) {
    const index = content.sections.findIndex(section => section.title === item.replaceTitle || section.title === item.question);
    const old = index >= 0 ? content.sections[index] : undefined;
    const section: Section = {
      ...old, title: item.question, body: item.answer,
      paragraphs: [...(old?.paragraphs || []), item.explanation],
      sources: [...new Set([...(old?.sources || []), ...item.sources])],
      links: [...new Map([...(old?.links || []), ...(item.links || [])].map(link => [link.href, link])).values()],
    };
    if (index >= 0) content.sections[index] = section;
    else content.sections.push(section);
    const faqIndex = content.faqs.findIndex(faq => faq.question === item.replaceFaqQuestion || faq.question === item.question);
    const faq = { question: item.question, answer: item.answer };
    if (faqIndex >= 0) content.faqs[faqIndex] = faq;
    else content.faqs.push(faq);
  }
  content.lastModified = "2026-10-30";
}
