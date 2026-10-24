import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";
const price = (id: string) => packagePrice(packageForId(id)!);

/** Longer answers behind the finance FAQ. Figures are the dated, linked public sources and confirmed packages already used elsewhere on the site. */
export const financeFaqSections: Section[] = [
  {
    title: "How does a treatment package price relate to the amount I might borrow?",
    body: "A package price describes specified treatment and inclusions. A borrowing amount is a separate decision made under a lender’s own process, so the two figures should not be assumed to match. Review your written estimate first, then decide whether any borrowing is needed at all.",
    paragraphs: [
      `Owner-confirmed package totals are ${price("zirconium-20")} for 20 zirconium crowns, ${price("zirconium-24")} for 24 zirconium crowns, ${price("veneers-16")} for 16 veneers and ${price("veneers-20")} for 20 veneers. The implant package with 24 zirconium crowns is ${price("osstem-4-crowns-24")}. These are treatment package prices subject to clinical assessment, not credit examples, standalone component prices or recommended borrowing amounts.`,
      "Crown and veneer packages include 5 hotel nights, while the implant package includes 3 + 5 nights across two visits. Those inclusions describe accommodation, not a repayment schedule or a guarantee about the gap between visits. If your budget only works when every figure stays unchanged, ask for a revised written estimate before committing to any credit agreement.",
      "Choosing a larger package because its average looks lower is not a clinical reason to restore more teeth. Ask the treating dentist to explain the diagnosis, the alternatives and why each proposed procedure is needed, and keep that conversation separate from any conversation about payment.",
      "Dividing a package total by the number of teeth gives an average that also absorbs hotel nights and transfers, so it is not a standalone price per tooth. Use averages only to compare packages with the same inclusions, and ask the clinic to itemise any figure that you intend to rely on when planning your budget.",
    ],
    links: [{ text: "Check confirmed package inclusions and conditions", href: "/prices" }],
  },
  {
    title: "Why do national savings figures matter before I borrow?",
    body: "Savings research shows how many households have little cash to absorb an unexpected cost. The FCA reported that one in ten adults had no cash savings and 21% had under £1,000 available. Those figures are context for your own budget, not a verdict on whether credit suits you.",
    paragraphs: [
      "The figures come from the FCA’s Financial Lives research and describe UK adults as a whole, not visitors to this website or dental patients. Use them as a prompt to check your own position: essential bills, existing commitments, accessible savings and what would happen if your income changed during treatment or repayment.",
      "A lender’s assessment is not a substitute for your own judgement. Treatment availability is not a deadline for accepting credit, and you can postpone a decision while you clarify what you can afford. Independent guidance is available if the numbers feel uncertain, and an enquiry for a written estimate does not commit you to borrowing.",
    ],
    sources: ["fcaSavings"],
    quotes: [{ text: "Our data shows that finances are stretched for many - with some unable to save for a rainy day.", name: "Sarah Pritchard", role: "Executive Director of Consumers and Competition at the FCA at publication", source: "fcaSavings", attributionDate: "16 May 2025" }],
  },
  {
    title: "How reliable are national financial-resilience statistics?",
    body: "Check the sample, the survey date and the comparison period before relying on any statistic. The FCA’s May 2024 survey included 17,950 respondents and estimated that 24% of UK adults, around 13.1 million people, had low financial resilience. That describes a defined population at one time.",
    paragraphs: [
      "The same research recorded 24% and 12.9 million people in May 2022. The two proportions were not statistically different, and the comparison spans two years rather than one. A figure that has barely moved is still a useful reminder to pause before a large commitment, but it says nothing about an individual household’s ability to repay.",
      "Ask three questions of any number you meet while researching treatment abroad: is it a sample count, a population estimate or a price; when was it collected; and who was included. Where a figure matters to your decision, open the linked source rather than relying on a summary. This website does not present national estimates as its own patient outcomes or approval rates.",
    ],
    sources: ["fcaSurvey"],
  },
  {
    title: "What do UK dentists report about remedial costs after treatment abroad?",
    body: "The British Dental Association surveyed 1,000 UK dentists in July 2022. Among relevant respondents, 65% reported remedial costs of at least £500 and 51% reported costs above £1,000. These are dentists’ reports, not patient complication rates or Akdeniz Dental outcome data.",
    paragraphs: [
      "Of all respondents, 93% raised concerns about continuity of care and 77% raised concerns about redress. The survey is now several years old and reflects what dentists saw in UK practice, so it cannot tell you the likelihood of a problem in your own case or the cost of fixing one today.",
      "What the survey does support is a practical checklist. Ask the clinic for written aftercare instructions, a named contact route and an explanation of what happens if another visit is required. Confirm who pays for extra travel or accommodation, check whether your insurance covers dental complications, and treat any contingency amount as a personal planning figure rather than a limit on possible costs.",
    ],
    sources: ["bdaTourism", "gdc"],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair of the British Dental Association at publication", source: "bdaTourism", attributionDate: "14 July 2022" }],
    links: [{ text: "Review aftercare and continuity questions", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "Where can I get help if repayments become difficult?",
    body: "Contact your lender promptly if a repayment becomes difficult, and seek independent debt guidance. The FCA reported that 1.7 million people used debt advice or debt management services in the 12 months before its survey, and 61% said their debts became more manageable afterwards.",
    paragraphs: [
      "That is a reported experience in national research, not a guaranteed result of advice and not evidence in favour of taking a dental loan. It does show that help exists and that many people use it. MoneyHelper provides impartial information about borrowing and can point you to free support.",
      "Keep a list of the questions and documents you do not understand, and ask the relevant organisation to explain them in writing. Do not send account credentials or sensitive credit records through the treatment enquiry form. If your immediate need is clinical information, request a written estimate with no obligation to apply for credit; the right next step may be a clearer explanation, a different clinical plan or postponement.",
    ],
    sources: ["fcaSavings", "personalLoans"],
    links: [{ text: "Ask for a written treatment estimate", href: "/get-a-quote" }],
  },
  {
    title: "How should I compare two written dental quotes?",
    body: "Compare the same scope of care across six headings: diagnosis and alternatives, treatment and materials, preparatory care, temporary and final restorations, travel inclusions, and aftercare and cancellation terms. A quote that omits any of the six is not yet comparable with one that includes them.",
    paragraphs: [
      "For implant treatment, clarify whether the implant, abutment and final crown are each included. For crowns or veneers, ask about preparation, laboratory work and review appointments. Record which items a package includes so you do not count them twice or mistake an excluded item for a free one.",
      "The GDC recommends asking about the treating professional’s qualifications, regulation, complications and arrangements if further work is needed. Obtain the answers in writing so you can revisit them without sales pressure. An estimate based on photographs can change after an in-person assessment, so ask what is likely to alter the figure and by how much.",
      "Finally, compare dates as well as prices. Check how long each estimate remains valid, whether a deposit is required and what happens to it if the plan changes after examination. A lower figure with a short validity window or unclear exclusions can be harder to act on than a slightly higher one that states its scope clearly.",
    ],
    sources: ["gdc"],
    links: [{ text: "Compare written dental quotes", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "What should I confirm before booking travel for a first appointment?",
    body: "Confirm the clinical plan, the written payment schedule and cancellation terms before booking flights or accommodation. A treatment estimate, a travel booking and a credit agreement are three separate commitments, and a change to one does not automatically change the others.",
    paragraphs: [
      "Ask which currency is charged, what card or transfer costs apply and who is responsible for extra nights if treatment runs longer than planned. If a package includes a hotel or transfers, check the dates, the room arrangement and which journeys are covered. Do not book travel on an assumption about when lender funds will arrive.",
      "Keep the dated estimate, any revised plan, invoices and correspondence together so that each provider can identify an issue quickly. Clinical questions belong with the treating dentist, appointment questions with the coordination team and credit questions with the broker or lender. You can step back at any stage while you wait for clearer information.",
    ],
    sources: ["gdc", "broker"],
    links: [{ text: "Plan treatment stages and travel", href: "/guides/plan-dental-visit-antalya" }],
  },
];
