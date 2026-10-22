import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";

const price = (id: string) => packagePrice(packageForId(id)!);

/** Hub-only decision support. Detailed checklists remain on their own canonical guide URLs. */
export const guidePlanningSections: Section[] = [
  {
    title: "Which dental treatment guide should I read first?",
    body: "Start with the guide that matches your next decision: comparing a proposal, arranging a visit or understanding borrowing. Read the quote comparison guide before choosing between clinics, and the Antalya visit guide before booking travel. Use this directory to identify unanswered questions rather than to diagnose your teeth or select treatment.",
    paragraphs: [
      "If you have not yet received a proposal, begin with the treatment pages and note what you want to change, any symptoms and questions about alternatives. If you already have a quote, compare its clinical scope before its total. If dates have been suggested, check which appointments and reviews fit those dates. These are different decisions and do not need to happen together.",
      "Keep a short decision log: what is confirmed, what is provisional and who can answer the remaining question. Link each answer to a dated document. You can return to the relevant guide when your plan changes instead of relying on an earlier conversation or a package headline. A written treatment enquiry remains separate from a credit application.",
    ],
    links: [{ text: "Compare dental quotes in detail", href: "/guides/compare-dental-quotes" }, { text: "Plan your Antalya treatment visit", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "How should I interpret dental tourism statistics?",
    body: "Check the date, population and question behind a percentage before using it to judge treatment abroad. A survey of UK dentists describes their reported experiences, not the outcome of every patient who travels. It cannot establish your personal risk, compare individual clinics or replace a discussion of your proposed care.",
    paragraphs: [
      "The BDA’s July 2022 survey involved 1,000 UK dentists. Of all respondents, 94% had examined patients who travelled abroad; among those dentists, 86% reported treating cases with problems. These are dentist responses, not patient complication rates, and are not Akdeniz Dental outcome figures.",
      "Use the evidence to formulate questions: what might go wrong, how would a concern be assessed and who would arrange further care? Ask the treating dentist to explain the alternatives and limitations relevant to your own condition. A photograph, testimonial or national survey cannot predict an individual result. The linked original publication lets you inspect the wording instead of relying on an isolated percentage.",
    ],
    sources: ["bdaTourism", "gdc"],
    quotes: [{ text: "Patients need to provide informed consent for any treatment they have and be wary of a hard-sell", name: "Eddie Crouch", role: "Chair of the British Dental Association at publication", source: "bdaTourism", attributionDate: "14 July 2022" }],
  },
  {
    title: "Which numbers belong in a treatment comparison?",
    body: "Compare the total for the clinically appropriate treatment, the number of teeth or arches involved and the visits needed. Record what each amount includes before comparing packages. A larger restoration count is not automatically better care, and a lower average cost per tooth is not a reason to treat healthy teeth.",
    paragraphs: [
      `Owner-confirmed package totals are ${price("zirconium-20")} for 20 zirconium crowns, ${price("zirconium-24")} for 24 zirconium crowns, ${price("veneers-16")} for 16 veneers and ${price("veneers-20")} for 20 veneers. The 4 Osstem implant plus 24 zirconium crown package totals ${price("osstem-4-crowns-24")}. These are package totals, not standalone fees for each component. All remain subject to clinical assessment and personalised treatment planning.`,
      "Use the Prices page for the current package specifications and inclusions. In your comparison notes, keep the proposed procedure beside its price rather than grouping veneers, crowns and implant restorations as interchangeable teeth. Ask for the teeth concerned, materials, temporary restorations and exclusions to be identified. An alternative involving fewer procedures may be more appropriate even when it does not resemble an advertised package. Only the treating dentist can make that clinical assessment.",
    ],
    links: [{ text: "Check confirmed packages and inclusions", href: "/prices" }, { text: "Understand crowns and tooth preparation", href: "/zirconia-crowns-finance" }, { text: "Understand veneer options", href: "/veneers-finance" }],
  },
  {
    title: "What should I check before choosing a clinician?",
    body: "Check who will assess you, who will carry out each procedure and how their qualifications and registration can be verified. A clinic brand and a coordination company have different responsibilities. Ask for the named treating professionals and their relevant experience, then confirm their roles directly with the clinic before agreeing to care.",
    paragraphs: [
      "The clinic page links to Akdeniz Dental’s published clinician profiles, contact information and photographs. Those profiles are attributed to the clinic; this website does not claim an independent credential audit or that those clinicians reviewed every guide. Ask whether a specialist assessment is needed for the proposed work, who handles a change of plan and how you can ask clinical questions before consenting.",
      "Photographs of a building, laboratory or smiling model answer different questions from clinical records. Use authentic clinic imagery to understand the setting, but request evidence relevant to the actual procedure you are considering. Ask which practitioner is responsible for the examination and written treatment plan. The UK coordination team can organise communication and administration; clinical assessment and treatment are provided by the team in Turkey.",
    ],
    sources: ["gdc", "team"],
    links: [{ text: "Check the treating clinic and published team profiles", href: "/our-clinic" }],
  },
  {
    title: "How do I know whether my gums need attention first?",
    body: "Tell the dentist about bleeding gums, loose teeth, pain, previous gum treatment and your medical history before discussing cosmetic changes. The appropriate starting point is an assessment of oral health. A package description or online photograph cannot determine whether disease needs treatment first or which restoration would be suitable for you.",
    paragraphs: [
      "The US National Institute of Dental and Craniofacial Research describes gum assessment, including checking the gums and the support around teeth. Use its patient information to prepare questions, not to diagnose yourself. Tell the team about relevant medicines and health conditions through the appropriate clinical process. Do not change prescribed medicines because you are planning dental travel without advice from the professional responsible for them.",
      "Ask what the examination needs to establish before a final price or schedule is agreed. If initial findings change the plan, request a clear explanation of the priorities, alternatives and revised costs. You can pause while you consider the new information. Keep the distinction between an estimate based on an enquiry and the treatment plan agreed after examination; they are not equivalent evidence of suitability.",
    ],
    sources: ["gumAssessment"],
    links: [{ text: "Prepare your treatment questions", href: "/get-a-quote" }],
  },
  {
    title: "How should I use hotel nights when planning visits?",
    body: "Treat included hotel nights as an accommodation allowance, not as a promise that healing or all clinical care will finish within that stay. Match each visit to a written appointment schedule. Ask the dentist about treatment stages and travel readiness before making bookings that are difficult or expensive to change.",
    paragraphs: [
      "The confirmed crown and veneer packages include 5 hotel nights. The implant package includes 3 + 5 nights across two visits. Those nights do not specify the healing interval between visits or guarantee that extra appointments will never be needed. Confirm the dates, room arrangements, airport and clinic transfers, and responsibility for additional nights in your personalised quote.",
      "For implant care, ask which visit concerns placement, which concerns the final restoration and what happens during the interval. Columbia University’s implant information explains that implant treatment involves stages; your treating dentist must set your own timetable. If you cannot make a proposed return date, discuss that before paying. The visit planning guide covers the detailed preparation checklist without assuming that a holiday itinerary can dictate clinical decisions.",
    ],
    sources: ["universityImplants"],
    links: [{ text: "Prepare for a staged treatment visit", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "What should I arrange for aftercare in the UK?",
    body: "Agree how to contact the treating clinic after returning home, which reviews are planned and who will assess a problem. Ask about records, return visits and the limits of any warranty before treatment starts. Do not assume that a UK dentist has agreed to provide ongoing care or that every cost is covered.",
    paragraphs: [
      "In the BDA’s 2022 dentist survey, 93% of all respondents raised continuity-of-care concerns, 77% raised redress concerns and 66% raised communication concerns. These reported concerns do not measure patient complication rates or the quality of a particular clinic.",
      "Turn those themes into written questions rather than assuming a favourable or unfavourable result. Who responds to a clinical concern, what information should you send and what happens outside normal opening hours? If another visit is needed, clarify responsibility for travel and accommodation. Keep a copy of the agreed aftercare terms in a place you can access from the UK. For urgent symptoms, seek appropriate local care instead of waiting for an administrative enquiry to be answered. Your treating dentist should explain the warning signs relevant to your procedure.",
    ],
    sources: ["bdaTourism", "gdc"],
    links: [{ text: "Review the aftercare questions before booking", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "How much contingency should I allow for a changed plan?",
    body: "Use your own budget and written terms to allow for changed treatment, additional travel and care after returning home. There is no universal contingency amount that guarantees protection. Ask which costs are included, which remain uncertain and what happens if examination shows that the proposed package is unsuitable or needs to change.",
    paragraphs: [
      "Among the relevant dentist respondents in the BDA’s 2022 survey, 65% reported remedial costs of at least £500 and 51% reported more than £1,000. These historical reports are not a current repair price list, a forecast for your case or amounts promised by this clinic.",
      "Write down the consequences of postponing, cancelling or needing a return visit. Read the provider’s actual refund and cancellation conditions and check travel insurance directly rather than assuming planned dental treatment or complications are covered. If the budget only works when nothing changes, consider delaying a decision while you clarify the unknowns. Request a revised written estimate before accepting additional procedures. The quote comparison guide helps you record exclusions so that a headline package amount is not mistaken for an unlimited commitment to future care.",
    ],
    sources: ["bdaTourism", "gdc"],
    links: [{ text: "Identify exclusions in a written dental quote", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "How can I assess my budget without assuming credit approval?",
    body: "Review essential spending, existing debts and accessible savings before considering any borrowing. Use the actual lender’s documents for repayments and total borrowing cost, not a treatment package total. You can request clinical information without applying for credit, and you can postpone treatment if the proposed financial commitment would leave too little room for emergencies.",
    paragraphs: [
      "The FCA’s Financial Lives May 2024 findings, published in May 2025, reported that one in ten people had no cash savings and another 21% had less than £1,000 available. These national findings provide budgeting context, not an assessment of visitors to this website or a reason to take out a loan.",
      "Keep your treatment estimate and credit documents separate. Check the amount borrowed, interest, fees, payment dates and total repayable in any actual offer. If money is already difficult to manage, seek independent guidance rather than treating an application as the next required step. MoneyHelper provides general information about personal loans. The broker and lender must supply information specific to an application; these guides do not recommend a credit product or promise acceptance.",
    ],
    sources: ["fcaSavings", "personalLoans"],
    quotes: [{ text: "Our data shows that finances are stretched for many - with some unable to save for a rainy day.", name: "Sarah Pritchard", role: "Executive Director of Consumers and Competition at the FCA at publication", source: "fcaSavings", attributionDate: "16 May 2025" }],
    links: [{ text: "Read the existing payment planning information", href: "/pay-monthly" }],
  },
  {
    title: "What records should I keep after implant treatment?",
    body: "Ask for a treatment summary, the implant system and component details, relevant images and the follow-up instructions your dentist recommends. Keep these records accessible when you return home. They help another clinician understand what was placed, but do not transfer responsibility for care or replace an examination when a new concern arises.",
    paragraphs: [
      "The US Food and Drug Administration advises patients to keep implant brand and model information and discuss follow-up care. Ask the clinic how to request records and how a future dentist can obtain the clinical information needed for assessment. A package name such as an implant and crown bundle is not a complete specification of the components used in your mouth.",
      "Store the final plan, invoices and aftercare instructions together and check that the contact details remain usable from the UK. Keep revisions as well as the initial estimate so that changes are clear. Ask the dentist which symptoms need prompt attention and which review schedule applies to you. A coordinator can help request documents, while clinical questions about healing, hygiene or new symptoms should be directed to a qualified professional.",
    ],
    sources: ["implantRecords"],
    links: [{ text: "Understand implant treatment components", href: "/dental-implants-finance" }],
  },
  {
    title: "How do I turn these guides into a useful enquiry?",
    body: "Send a concise description of what you want to discuss, the questions your reading has raised and your likely travel period. Request an itemised written treatment estimate and identify any details that remain uncertain. Choose your preferred response channel so the coordination team can organise a relevant reply without requiring a phone call.",
    paragraphs: [
      "If you already have a proposal, ask about the specific differences rather than simply requesting a matching price. Useful questions identify the planned procedures, teeth, materials, stages, inclusions or aftercare arrangements you cannot yet compare. You can mention a package you want to discuss, but that choice does not establish clinical suitability. The team may need further information before a meaningful estimate can be prepared.",
      "Provide only the information needed for the enquiry. Dental photographs and health information belong in the intended enquiry process; do not send bank credentials, card numbers or credit-application documents in a general message. Review the privacy information before sharing sensitive material. There is no need to commit to a treatment or finance agreement to ask questions. Use the written response to update your decision log and return to the relevant detailed guide when another decision becomes clear.",
    ],
    links: [{ text: "Request a free written treatment quote", href: "/get-a-quote" }, { text: "Read how enquiry information is handled", href: "/privacy" }],
  },
];
