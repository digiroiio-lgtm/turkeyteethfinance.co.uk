import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";

// All treatment figures derive from the owner's confirmed package registry.
function pack(id: string) {
  const item = packageForId(id);
  if (!item) throw new Error(`Missing confirmed package: ${id}`);
  return item;
}
const crowns20 = pack("zirconium-20");
const crowns24 = pack("zirconium-24");
const veneers16 = pack("veneers-16");
const veneers20 = pack("veneers-20");
const implant = pack("osstem-4-crowns-24");
const money = (value: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value);
const percent = (value: number) => `${Number(value.toFixed(1))}%`;

export const financeAnswer =
  "A package price covers the agreed treatment and inclusions. It is not the amount you would borrow: if you use finance, the lender’s documents separately set out the APR, term, fees and total amount repayable. A package price does not promise a repayment amount, an interest rate or acceptance.";

export const pricePlanningSections: Section[] = [
  {
    title: "How can I get a reliable treatment price?",
    body: "Request an itemised written estimate for the treatment your teeth need. The listed packages provide confirmed prices for the specified treatment and stay. Your personal quote confirms the scope and arrangements for your case. The final plan and cost depend on the treating dentist’s assessment, not a budget entered into the online planner.",
    paragraphs: [
      `The five published packages range from ${packagePrice(crowns20)} for 20 zirconium crowns to ${packagePrice(implant)} for four Osstem implants with 24 zirconium crowns. These are different treatment scopes, not a price range for an interchangeable procedure. Prices and inclusions were confirmed by the site owner on 21 October 2026.`,
      "Tell the team your main concerns, existing dental work and likely travel period. Ask which items remain provisional pending examination or imaging. If assessment changes the proposal, request a revised plan and total before agreeing to additional care. Keep the estimate, its date and the name of the clinical provider together.",
    ],
    links: [{ text: "Request your personal treatment estimate", href: "/get-a-quote" }, { text: "See the confirmed package specifications", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "How do the 20- and 24-crown package prices compare?",
    body: `The 20-crown package costs ${packagePrice(crowns20)} and the 24-crown package costs ${packagePrice(crowns24)}, each including five hotel nights and the specified transfers. Dividing the whole package by the crown count gives ${money(crowns20.price / 20)} and ${money(crowns24.price / 24)} respectively. These averages include the stay and transfers; they are not standalone crown fees.`,
    paragraphs: [
      `The difference is ${money(crowns24.price - crowns20.price)} in the package total, or ${percent((crowns24.price / crowns20.price - 1) * 100)} relative to the 20-crown price. The restoration count is 20% higher, while the package-average cost per crown is ${percent((1 - (crowns24.price / 24) / (crowns20.price / 20)) * 100)} lower. Calculations use the published totals, with percentages rounded to one decimal place.`,
      "A lower package average is not a reason to restore healthy teeth or choose more crowns. Ask the dentist to explain the indication for every tooth, any tooth preparation and suitable alternatives. The appropriate number follows your clinical needs. An individual plan involving fewer teeth needs its own written quote rather than multiplying these package averages.",
    ],
    links: [{ text: "Understand crown preparation and alternatives", href: "/zirconia-crowns-finance" }],
  },
  {
    title: "What do the veneer package totals mean per tooth?",
    body: `The 16-veneer package is ${packagePrice(veneers16)} and the 20-veneer package is ${packagePrice(veneers20)}. Their package averages are ${money(veneers16.price / 16)} and ${money(veneers20.price / 20)} per veneer when the full total is divided by the restoration count. Both packages include five hotel nights and the specified airport and clinic transfers.`,
    paragraphs: [
      `The larger package costs ${money(veneers20.price - veneers16.price)} more overall, a ${percent((veneers20.price / veneers16.price - 1) * 100)} increase, for 25% more veneers. Its package average is ${percent((1 - (veneers20.price / 20) / (veneers16.price / 16)) * 100)} lower. These are original calculations from the confirmed prices, not a discount promise, a UK price comparison or separately purchasable veneer rates.`,
      "Confirm the material, preparation, temporary restorations and teeth involved in your own estimate. A veneer covers a different part of the tooth from a crown, so a package name alone cannot establish equivalence. Discuss whether whitening, alignment or a smaller repair could address your concern before choosing irreversible treatment. Do not add veneers simply to obtain a lower calculated average.",
    ],
    links: [{ text: "Understand veneers and their alternatives", href: "/veneers-finance" }],
  },
  {
    title: "What needs to be itemised for each treatment?",
    body: "Veneers and crowns need a tooth count, restoration type and material. An implant estimate should distinguish fixtures, abutments and final teeth. A full-arch plan should identify each arch and both temporary and final restorations. Different specifications cannot be compared using a total alone.",
    paragraphs: [
      `The ${packagePrice(implant)} implant-and-crown package specifies four Osstem implants and 24 zirconium crowns. Dividing that total by four would wrongly treat accommodation, crowns and other included services as an individual implant price. Ask how the implants relate to the planned restorations and whether every component appears in the written specification.`,
      "Request separate confirmation of scans, extractions, bone grafting if needed, abutments, temporary teeth, laboratory stages and planned reviews. Where a procedure is excluded, ask whether it can be priced now or remains uncertain until assessment. The FDA recommends keeping the implant brand and model details for your records; request these with the treatment summary if implants are placed.",
    ],
    sources: ["implantRecords"],
    links: [{ text: "Understand implant components and stages", href: "/dental-implants-finance" }],
  },
  {
    title: "Are hotel nights, transfers and return visits included?",
    body: "The listed packages include hotel accommodation and airport and clinic transfers. Crown and veneer packages include five nights. The implant package includes three plus five nights across two visits, a total of eight hotel nights. Confirm room arrangements, the journeys covered and the clinical appointment schedule in your personal quote.",
    paragraphs: [
      "Eight hotel nights across two visits do not mean treatment finishes in eight consecutive days. The dentist determines the interval and readiness for later stages. Ask what you will wear while healing, how reviews are arranged and when you can safely travel. Additional procedures may alter the schedule, so do not book return dates from the package name alone.",
      "Check whether a companion, extra nights or changes to transfer times create additional charges. Keep both trips on your budget sheet, including flights and time away from work. A package that includes the planned stays does not automatically include travel or accommodation for a later complication. Request those responsibilities separately in the written aftercare terms.",
    ],
    sources: ["stages"],
    links: [{ text: "Plan staged visits to Antalya", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "How do I calculate the whole cost of travelling for treatment?",
    body: "Add your confirmed treatment package to separately quoted flights, insurance, excluded procedures, extra accommodation and any loss of income. Deduct an included item from your separate travel list to avoid counting it twice. Keep uncertain costs visible instead of treating the advertised package as a ceiling on every expense.",
    paragraphs: [
      `For the ${packagePrice(crowns24)} crown package, begin with that package total and add only the costs that your own itinerary and clinical quote leave outside it. For the ${packagePrice(implant)} two-visit package, include both flight itineraries. This method uses actual quotations; it does not assume a flight fare or suggest that a generic contingency amount will suit everyone.`,
      "Record the provider, currency, payment date and cancellation conditions beside each entry. If a quote uses another currency, note the exchange rate and any card or bank conversion charge when you compare it. Ask how a changed appointment would affect hotel and flight bookings. Retain receipts and written confirmations so you can distinguish paid amounts from future commitments.",
    ],
    links: [{ text: "Use the full quote comparison checklist", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "How much can follow-up care change the overall cost?",
    body: "Follow-up care can materially change the total, so agree who pays for reviews, remedial treatment and return travel before committing. Historical survey figures illustrate the need to ask these questions, but they cannot predict your bill. They are not complication rates for Turkey, this clinic or an individual patient.",
    paragraphs: [
      "In the BDA’s survey of 1,000 UK dentists, published on 14 July 2022, 65% of the dentists reporting on remedial care said repairs cost patients at least £500, 51% reported more than £1,000 and one in five reported more than £5,000. These are dentist-reported experiences, not a representative sample of all people treated abroad or current repair-price quotations.",
      "Use the finding to request specific answers about remote contact, examinations, repair authorisation and travel expenses. Ask whether a concern can be reviewed locally and how the treating clinic would coordinate records. A low initial price does not resolve these practical questions. Keep the clinic’s answer alongside your estimate rather than relying on an informal promise.",
    ],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time of the statement", source: "bdaTourism", attributionDate: "14 July 2022" }],
    sources: ["bdaTourism"],
  },
  {
    title: "What should written aftercare and warranty terms explain?",
    body: "Written terms should explain how clinical concerns are assessed and which repairs, reviews or complications are covered. Check the conditions and exclusions, the contact route from the UK and responsibility for travel. A treatment warranty is not a guarantee of an individual result or unlimited free future care.",
    paragraphs: [
      "The same 2022 BDA survey found that 93% of responding dentists identified concerns about continuity of care and 77% mentioned difficulties seeking redress or making a complaint. Those figures describe concerns reported by dentists, not the percentage of overseas patients who experience a problem. They support asking how follow-up works rather than assuming it from the warranty’s length.",
      "Request the duration and scope of any warranty, cleaning and review requirements, exclusions and complaint route. Ask which organisation takes responsibility for each stage. Keep the treatment summary, implant details where relevant and written instructions. The General Dental Council’s patient checklist specifically recommends asking who pays for extra flights, hotel stays and remedial work if something goes wrong.",
    ],
    sources: ["gdc", "bdaTourism"],
  },
  {
    title: "What happens if the clinical plan or price changes?",
    body: "Ask for the changed procedures, reasons and revised cost in writing before deciding whether to proceed. A provisional online estimate may change after examination. Clarify the clinic’s deposit, cancellation, refund and payment-timing terms before paying or making non-refundable travel arrangements. A published package does not authorise additional work automatically.",
    paragraphs: [
      "Keep both versions and compare the procedures tooth by tooth. Confirm what has been removed, added or postponed, and whether the accommodation or appointment schedule changes. Ask for the amount due at each clinical stage, how a deposit is credited and which payments are refundable in the circumstances described. Do not assume the same policy applies to the clinic and an airline.",
      "You can ask the dentist to explain alternatives and take time to consider the revised proposal. If the suggested plan involves more extensive treatment, a second opinion may help you understand the choices. Record your consent only after the scope, relevant risks and price have been explained. A coordinator can organise the discussion; the clinical decision belongs with you and the treating dentist.",
    ],
    sources: ["gdc"],
    links: [{ text: "Check the clinical and coordination roles", href: "/our-clinic" }],
  },
  {
    title: "Why keep an emergency buffer alongside the treatment budget?",
    body: "Keep essential household commitments and a personal emergency buffer in view before committing to treatment or travel. An included hotel stay does not cover every unexpected expense. Review what you could manage if income falls, a visit is delayed or an additional cost arises. A national statistic cannot establish an affordable budget for your household.",
    paragraphs: [
      "The FCA’s May 2024 Financial Lives survey, published in May 2025, found that 10% of UK adults had no cash savings and another 21% had less than £1,000 for emergencies. Its main report put low financial resilience at 24%, the same proportion as in May 2022; the FCA describes those proportions as not statistically different. This is a two-year comparison, not an annual trend or a 2026 estimate.",
      "List rent or mortgage payments, essential bills, dependants and existing commitments before deciding what you can set aside. Choose your own buffer using written costs and circumstances, rather than a percentage promoted as universally safe. A treatment enquiry can remain open while you consider the decision, and obtaining an estimate does not require accepting credit.",
    ],
    quotes: [{ text: "Our data shows that finances are stretched for many", name: "Sarah Pritchard", role: "Executive Director of Consumers and Competition at the Financial Conduct Authority at the time of the statement", source: "fcaSavings", attributionDate: "16 May 2025" }],
    sources: ["fcaSavings", "fcaSurvey"],
  },
  {
    title: "Is a treatment package price the same as the total cost of finance?",
    body: "A treatment price covers the agreed care and package inclusions. If you borrow, the lender’s documents separately explain the cost of credit and total repayable. Compare the actual offer’s APR, term, fees and payment schedule. The package price does not promise a repayment amount, an interest rate or acceptance.",
    paragraphs: [
      "MoneyHelper explains that the rate offered to an individual can differ from the advertised rate. Check the amount you would borrow, any costs payable separately and the complete repayment obligation. Ask the broker or lender to explain anything unclear before agreeing. Do not divide a package total by a chosen number of months and treat the result as an available finance offer.",
      "Keep your treatment estimate and any credit agreement as separate documents. The clinic answers questions about procedures and treatment payments; the broker and lender answer questions about credit. You can request a treatment estimate without applying for finance. If your plan changes, ask the relevant provider how it affects the arrangements rather than assuming a treatment cancellation automatically cancels a loan.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Understand the separate finance process", href: "/dental-finance" }],
  },
  {
    title: "Where can I get independent help before deciding?",
    body: "Use independent money guidance if treatment planning leaves you unsure about bills, borrowing or financial resilience. MoneyHelper provides free, impartial guidance separate from the clinic and patient coordination team. You can pause before paying a deposit, seek another clinical opinion and decide that the proposed timing or treatment does not suit you.",
    paragraphs: [
      "In the FCA’s May 2024 survey, 1.7 million people had used debt advice or debt management services in the preceding 12 months; 61% of those users said their debts were more manageable as a result. That finding concerns experiences of support. It is not evidence that borrowing for dental care improves finances or that a particular service guarantees a result.",
      "Prepare the confirmed treatment estimate, your existing commitments and the travel costs you would need to fund. Ask for help understanding the decision before accepting obligations. Independent guidance does not diagnose dental needs, so keep clinical questions with a qualified dentist. The statements quoted here provide general context and do not imply endorsement of this clinic, its packages or finance arrangements.",
    ],
    quotes: [{ text: "People who experience individual financial wellbeing are less stressed about money", name: "Oliver Morley", role: "Chief Executive at the Money and Pensions Service at the time of the statement", source: "fcaSavings", attributionDate: "16 May 2025" }],
    sources: ["fcaSavings"],
    links: [{ text: "Read practical payment planning information", href: "/pay-monthly" }],
  },
];
