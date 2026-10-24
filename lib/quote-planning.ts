import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";

// Owner-confirmed package registry, 21 October 2026. Calculations are planning
// examples, never clinical outcomes, lender offers or standalone treatment fees.
const pack = (id: string) => {
  const item = packageForId(id);
  if (!item) throw new Error(`Missing confirmed package: ${id}`);
  return item;
};
const crowns20 = pack("zirconium-20");
const crowns24 = pack("zirconium-24");
const veneers16 = pack("veneers-16");
const veneers20 = pack("veneers-20");
const implant = pack("osstem-4-crowns-24");
const money = (n: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 2 }).format(n);

export const quotePlanningSections: Section[] = [
  {
    title: "How do I get a dental treatment quote for Turkey?",
    body: "Complete the treatment enquiry form with your contact details, main concerns and preferred reply method. You can request an initial written estimate without a required phone call. The enquiry is free and does not commit you to treatment; a treating dentist must assess you before confirming the plan and final price.",
    paragraphs: [
      `For context, the five published packages currently run from ${packagePrice(crowns20)} for 20 zirconium crowns to ${packagePrice(implant)} for four Osstem implants with 24 zirconium crowns. These prices describe different treatment scopes. They cannot show which treatment you need or establish the cost of an individual tooth. The owner confirmed this price registry on 21 October 2026.`,
      "Explain what you want to improve in your own words, including any missing teeth or existing restorations you know about. If you are uncertain whether you need crowns, veneers or implants, say so. The clinical team can explain what information is needed next. Keep a copy of the written estimate and ask which parts remain provisional before booking travel.",
    ],
    links: [{ text: "View the source package prices and inclusions", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "What information should I include in my enquiry?",
    body: "Describe your main dental concerns, any treatment already suggested and your approximate travel plans. Include the contact details needed for your chosen reply method. You do not need to diagnose yourself or select a package before asking for help; explain the problem you would like the treating dentist to assess.",
    paragraphs: [
      "Useful details include where teeth are missing, whether you wear a denture, and whether you already have crowns, bridges or implants. Mention existing dental records when relevant, but ask how to share them securely. Do not put unnecessary health information in a general message. The form explains the consent required if you choose to provide health details.",
      "A clear enquiry separates your treatment goal from a spending limit. Wanting a brighter smile does not establish a need for tooth preparation, and a budget cannot establish suitability. If your concern is pain, swelling or an urgent problem, seek timely local dental care instead of waiting for an overseas quote. The enquiry service is for planning rather than emergency assessment.",
    ],
    sources: ["gdc"],
  },
  {
    title: "Is an online estimate a confirmed treatment plan?",
    body: "An online estimate is provisional information based on what you provide. It is not a diagnosis, a clinical examination or a guarantee that the advertised treatment is appropriate. The treating dentist confirms suitability, alternatives, the teeth involved and the final cost after assessment and any investigations needed for your case.",
    paragraphs: [
      "Photographs can help explain a concern, but they cannot establish everything about gums, bone, tooth roots or an existing restoration. Ask what examination and imaging are needed, who interprets the findings and which charges are already included. If a proposed treatment changes after assessment, request an updated written plan before agreeing to additional work.",
      "Keep the date and version of each estimate so you can see exactly what changed. A useful revision explains the clinical reason, added or removed procedures, effect on the total and any change in visits. You can ask for more time, discuss alternatives or seek another professional opinion. Accepting an estimate should never replace an informed discussion with the dentist who will treat you.",
    ],
    sources: ["gdc", "gumAssessment"],
  },
  {
    title: "What should my written treatment quote include?",
    body: "Your written quote should identify the treating provider, proposed procedures, teeth or arches involved, materials, total currency and what is included or excluded. It should also explain provisional items, payment stages, travel arrangements and aftercare responsibilities. Ask for clarification wherever a package label leaves the actual treatment specification unclear.",
    paragraphs: [
      `For example, the ${packagePrice(implant)} package names four Osstem implants and 24 zirconium crowns. Ask the clinic to explain the proposed tooth positions, implant components and restorative design for your case. A combined package total cannot be divided by four to obtain a standalone implant fee, because it includes other treatment and arrangements.`,
      "Request confirmation of scans, extractions, grafting if required, temporary restorations, abutments and reviews. Ask which items cannot be priced until examination and what happens if you decide against a revised plan. Keep the quotation together with the treatment terms and provider details. Those documents are more useful for comparing offers than a screenshot containing only a headline price.",
    ],
    sources: ["implantRecords"],
    links: [{ text: "Use the dental quote comparison guide", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "How much are the published crown packages?",
    body: `The published 20-zirconium-crown package costs ${packagePrice(crowns20)}, while the 24-crown package costs ${packagePrice(crowns24)}. Both specify five hotel nights and airport and clinic transfers. Your personal quote must confirm the teeth, materials and arrangements appropriate to you; a package price does not establish a clinical need for that number of crowns.`,
    paragraphs: [
      `The difference between the totals is ${money(crowns24.price - crowns20.price)}. Dividing the entire package by its crown count gives averages of ${money(crowns20.price / 20)} and ${money(crowns24.price / 24)} respectively. These are original calculations from the confirmed registry, rounded as displayed. They include the package arrangements and must not be described as separately purchasable crown fees.`,
      "Ask why each proposed tooth needs a crown, how much tooth preparation is involved and whether a smaller restoration or another option could address the problem. More restorations are not automatically better value for your health. A plan for a different number of teeth needs its own itemised estimate. Do not multiply a package average to predict a price the clinic has not quoted.",
    ],
    links: [{ text: "Read crown treatment considerations", href: "/zirconia-crowns-finance" }, { text: "Check the current published price registry", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "How should I compare veneer package prices?",
    body: `The 16-veneer package is ${packagePrice(veneers16)} and the 20-veneer package is ${packagePrice(veneers20)}, with five hotel nights and the specified transfers. Compare the restoration type, material, teeth involved and preparation rather than the total alone. Veneers and crowns cover teeth differently and should not be treated as interchangeable package labels.`,
    paragraphs: [
      `Dividing the package totals by restoration count gives ${money(veneers16.price / 16)} and ${money(veneers20.price / 20)} per veneer as package averages. The larger package costs ${money(veneers20.price - veneers16.price)} more overall, or 20% more, for 25% more veneers. These calculations describe the published packages, not a clinical recommendation, discount promise or comparison with UK treatment costs.`,
      "Confirm what the team means by a veneer and ask the dentist to explain preparation and alternatives. Whitening, alignment or a smaller repair may be questions to discuss depending on your concern. Ask how temporary restorations, shade decisions and final fitting are handled. If a quote switches between veneers and crowns, request a clear explanation and updated specification before deciding whether to proceed.",
    ],
    sources: ["veneers", "crowns"],
    links: [{ text: "Understand veneer treatment and alternatives", href: "/veneers-finance" }],
  },
  {
    title: "How many visits and hotel nights should I budget for?",
    body: "The published crown and veneer packages specify one visit with five hotel nights. The implant-and-crown package specifies two visits with three plus five nights, making eight hotel nights in total. These stays describe package arrangements; the treating dentist determines the appointments, healing interval and whether your individual case requires additional time.",
    paragraphs: [
      "Eight nights across two visits do not mean implant care finishes in eight consecutive days. Ask what happens during each trip, what you will wear between stages and when the dentist will reassess readiness for the final restoration. Request a written schedule before buying tickets, including whether the plan could change following examination or additional procedures.",
      "For clinical context, Leeds Teaching Hospitals explains that extractions are often performed 6–10 weeks before early implant placement. That is a general example from its patient information, not a promised interval for Antalya treatment. If grafting or additional healing is needed, discuss the effect on travel and cost. Confirm who pays for extra hotel nights, changed flights or an unplanned return visit.",
    ],
    sources: ["leedsImplants"],
    links: [{ text: "Plan your dental visits to Antalya", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "Are hotel accommodation, transfers and flights included?",
    body: "The listed packages include hotel accommodation and airport and clinic transfers. Do not assume flights, companion expenses, extra nights or later return trips are included. Your written quote should state the room arrangements, number of nights, covered journeys and any charges for changes so you can build a complete travel budget.",
    paragraphs: [
      "Separate confirmed package inclusions from personal travel spending. Ask about arrival and departure arrangements, the hotel check-in dates and how clinic journeys are coordinated. If you are travelling with someone, confirm whether their accommodation and transfers are covered. A convenient itinerary still needs to fit the appointment schedule rather than determining when clinical care must finish.",
      "Check insurance specifically for planned dental treatment abroad and ask the insurer what happens if your stay must be extended. Ordinary holiday cover may not be sufficient. The NHS notes that GHIC and EHIC cover does not cover travelling abroad for planned treatment. Request the relevant policy wording, keep emergency contact details accessible and include any uncovered costs in your decision before paying a deposit.",
    ],
    sources: ["nhsTravel"],
  },
  {
    title: "What extra costs could change the total I pay?",
    body: "Your total can change if assessment identifies treatment outside the initial scope or if travel and aftercare require additional spending. Ask which charges are confirmed, which are estimates and which are excluded. Keep the treatment price, personal travel budget and possible follow-up costs separate so a low headline total does not hide unresolved items.",
    paragraphs: [
      "Potential questions include whether diagnostic imaging, extractions, grafting, temporary teeth or additional reviews are included. These are items to clarify, not a prediction that you will need them. Ask the clinic to document any proposed addition and its reason before work begins. Also check the currency, payment deadlines and how changes or cancellations affect money already paid.",
      "The BDA's 2022 survey of 1,000 UK dentists reported that 65% of relevant respondents described repair costs of at least £500, and 51% reported more than £1,000. These are historical dentist reports about cases encountered, not the probability of a complication or a forecast of your bill. They support asking clear questions about financial responsibility for follow-up care.",
    ],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time of the statement", source: "bdaTourism", attributionDate: "14 July 2022" }],
    sources: ["bdaTourism"],
  },
  {
    title: "How do I compare two quotes fairly?",
    body: "Compare matching treatment specifications, travel arrangements and aftercare terms before comparing totals. Two offers are only directly comparable when you know which teeth, procedures, materials and visits each includes. Ask each provider to fill any gaps in writing rather than assuming that similar package names describe the same clinical work or responsibilities.",
    paragraphs: [
      `For a simple arithmetic example, the ${packagePrice(crowns24)} 24-crown package is ${money(crowns24.price - crowns20.price)} above the ${packagePrice(crowns20)} 20-crown package. That difference covers a different restoration count. It does not show that either option is appropriate for you or that the cheaper total represents better clinical care. A dentist's assessment comes before choosing between scopes.`,
      "Make a comparison sheet with treatment, exclusions, provider, dates and aftercare responsibilities on separate lines. Mark missing information as unconfirmed. Ask whether temporary and final restorations are both included and whether a return visit involves additional accommodation. You may also want an independent dental opinion about whether the proposed work is necessary. Compare the complete plan rather than being rushed by a promotional deadline.",
    ],
    sources: ["gdc"],
    links: [{ text: "Read the full comparison checklist", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "Who provides the treatment and who coordinates my enquiry?",
    body: "Akdeniz Dental provides the clinical treatment in Antalya. Akdeniz Dental Consultancy UK Ltd handles patient coordination and consultancy; it does not provide clinical treatment in the UK. Ask who will assess and treat you, which provider issues your treatment terms and how clinical questions will reach the responsible dentist before you book.",
    paragraphs: [
      "The coordination team can help organise information, explain the enquiry process and arrange communication. It cannot replace a dentist's diagnosis or a lender's decision. If you receive a treatment suggestion, ask whether it is preliminary and when the treating dentist will confirm it. Keep the clinical provider's name, address and contact route with your written plan.",
      "Check your assigned clinician's qualifications and current registration directly with the relevant provider and authority. Published team profiles are a starting point rather than independent verification. Also ask about professional insurance, complaint handling and communication after you return home. A helpful contact person and an attractive package cannot establish clinical suitability, so make sure you know who is responsible for each part of your care.",
    ],
    sources: ["team", "gdc"],
    links: [{ text: "See clinic details and published clinician profiles", href: "/our-clinic" }],
  },
  {
    title: "Does requesting a quote apply for finance or affect my credit file?",
    body: "Submitting this treatment enquiry does not apply for credit. It starts a conversation about a provisional treatment estimate and your preferred contact method. Any finance application is a separate process through the finance provider, with its own eligibility checks, information requirements and lender decision. Requesting treatment information does not guarantee finance approval.",
    paragraphs: [
      "First establish the treatment scope and realistic total. If you later choose to explore finance, check the current provider's terms, how its eligibility search works and whether a full application records a credit search. Do not assume every step uses the same type of check. The clinic and coordination team cannot promise an acceptance, rate or loan amount.",
      "MoneyHelper explains that personal loans are generally repaid over 1–5 years and that the exact rate is often unknown until application. That is general borrowing information, not the term or rate available through this site. Review the provider's own documents for your circumstances and distinguish a provisional indication from a completed agreement. You can also request a treatment estimate without choosing finance.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Understand the separate dental finance process", href: "/dental-finance" }],
  },
  {
    title: "How can I assess affordability before deciding?",
    body: "Assess affordability using the complete treatment and travel budget alongside your regular essential spending. If you consider borrowing, compare the monthly repayment, term, fees and total repayable in the actual lender documents. A manageable-looking monthly figure does not by itself show that the whole commitment is affordable or that treatment is clinically appropriate.",
    paragraphs: [
      "MoneyHelper explains that a representative APR only has to be offered, or bettered, for 51% of approved borrowers. It is therefore not a personalised rate guarantee. A longer repayment term can reduce the monthly amount while increasing total interest. Avoid choosing treatment or adding procedures simply because a larger loan might appear to spread the cost conveniently.",
      "The FCA's May 2024 Financial Lives findings, published in May 2025, reported that 10% of UK adults had no cash savings. This is population context rather than information about dental patients or this site's applicants. Keep room for unexpected spending, aftercare and ordinary commitments. If you are already struggling with bills, seek free impartial guidance before taking on another financial obligation.",
    ],
    quotes: [{ text: "Our data shows that finances are stretched for many", name: "Sarah Pritchard", role: "Executive Director of Consumers and Competition at the Financial Conduct Authority at the time of the statement", source: "fcaSavings", attributionDate: "16 May 2025" }],
    sources: ["personalLoans", "fcaSavings"],
  },
  {
    title: "What should I ask about aftercare and complications?",
    body: "Ask who will provide planned reviews, who responds to a problem at home and who pays if further treatment or travel is needed. Get these arrangements in writing before booking. A guarantee and an aftercare plan answer different questions, so check the exclusions, required maintenance and practical route to getting help.",
    paragraphs: [
      "In the BDA's 2022 survey, 93% of responding dentists raised continuity-of-care concerns about dental tourism. This measures professional concerns in a historical survey, not the complication rate among patients travelling abroad and not an outcome measure for Akdeniz Dental. It explains why access to records and follow-up arrangements belongs in a quote discussion rather than being left until departure.",
      "Ask for copies of the completed treatment summary, relevant imaging and implant brand and model details where applicable. Agree how routine maintenance will be arranged after you return and whether a local dentist has agreed to provide it. If a problem occurs, clinical assessment may be needed; a message exchange alone cannot establish the cause or remedy. For urgent symptoms, use appropriate local care rather than waiting for travel.",
    ],
    sources: ["bdaTourism", "implantRecords"],
    links: [{ text: "Read about aftercare and guarantees", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "What happens after I receive my estimate?",
    body: "Review the proposed scope, unresolved clinical questions, total price and arrangements before deciding whether to proceed. Ask for an updated written version if anything changes. You can request clarification, seek a second opinion or pause the discussion; receiving an estimate is not a requirement to book treatment, travel or a credit agreement.",
    paragraphs: [
      "Make sure you understand which next step is an administrative booking and which is clinical consent. Confirm the assessment appointment, proposed schedule, deposit and cancellation terms with the relevant provider before paying. If you decide to explore finance, read those separate terms without treating a preliminary indication as a completed agreement. Avoid booking non-refundable travel around an unconfirmed clinical timeline.",
      "Keep the plan, provider details and correspondence together so questions can be answered against the same version. After the treating dentist's assessment, check the final treatment specification and cost again. If the revised proposal differs materially, ask why and take the time you need to consider it. A clear process leaves you with an understandable decision rather than only a price and a flight date.",
    ],
    sources: ["nhsChecklist"],
  },
  {
    title: "Where do the figures and expert statements on this page come from?",
    body: "Package figures come from this site's owner-confirmed price registry dated 21 October 2026. Package averages and differences are calculations from those totals, not separate fees or clinical results. External figures and quotations link to their original publishers, with the publication context identified so you can distinguish general guidance from an individual treatment recommendation.",
    paragraphs: [
      `For example, ${money(crowns20.price)} divided by 20 is ${money(crowns20.price / 20)}, and ${money(veneers16.price)} divided by 16 is ${money(veneers16.price / 16)}. Each calculation includes the full package total. Financial examples do not forecast credit acceptance, and historical survey findings do not establish present-day complication rates, patient satisfaction or the results you could expect from this clinic.`,
      "We have not invented patient cases, clinician endorsements, success percentages or year-on-year performance comparisons. Independent experts quoted here have not reviewed or endorsed this service. The coordination team prepared this planning information; your treating dentist supplies personal clinical advice and your lender supplies any personal credit terms. Check the current package page and request a dated written estimate before relying on a price for booking.",
    ],
    links: [{ text: "Check the published package specifications", href: "/prices#dental-treatment-packages" }],
  },
];
