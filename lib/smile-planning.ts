import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";
function pack(id: string) {
  const item = packageForId(id);
  if (!item) throw new Error(`Missing confirmed package: ${id}`);
  return item;
}
const crowns20 = pack("zirconium-20"), crowns24 = pack("zirconium-24");
const veneers16 = pack("veneers-16"), veneers20 = pack("veneers-20");
const implant = pack("osstem-4-crowns-24");
const money = (n: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 2 }).format(n);
const percent = (n: number) => `${Number(n.toFixed(1))}%`;

export const smilePlanningSections: Section[] = [
  {
    title: "What is included in a personalised smile makeover?",
    body: "A smile makeover is a personal treatment plan rather than one standard procedure. It can combine changes appropriate to different teeth, your goals and your oral health. Ask the dentist to separate clinically necessary care from optional appearance changes, explain the alternatives and identify the treatment proposed for each tooth before discussing a package or payment option.",
    paragraphs: [
      "Start with the feature that matters to you, such as colour, a chipped edge, missing teeth or the appearance of an existing restoration. Explain what you would like to keep as well as change. The resulting plan should describe the clinical starting point, proposed procedures and what each is intended to achieve, rather than applying the same procedure to every visible tooth.",
      `The site's five published packages range from ${packagePrice(crowns20)} for 20 zirconium crowns to ${packagePrice(implant)} for four Osstem implants with 24 zirconium crowns. Those are different specifications, not interchangeable versions of a single makeover. Your own plan may involve fewer teeth, mixed treatments or an approach outside those packages. Request an individual written estimate after discussing what actually needs assessment.`,
    ],
    links: [{ text: "See the published treatment specifications", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "What should assessment establish before I change my smile?",
    body: "Assessment should establish tooth and gum health, the bite, existing restorations and the reason for each proposed procedure. A cosmetic goal does not establish clinical suitability, and photographs cannot confirm every finding. Ask the dentist what is known, what needs investigation and which changes would be irreversible before you consent to treatment or arrange travel.",
    paragraphs: [
      "Request a tooth list or diagram showing the intended treatment and the reason for it. Ask which teeth need care for health or function and which are being considered for elective appearance changes. If the plan involves preparation or extraction, ask about preserving tooth structure and reasonable alternatives, including what would happen if you deferred that element.",
      "You can seek another professional opinion before a major decision. The coordination team can help organise communication, but the treating dentist must explain diagnosis, suitability and consent. A package photograph, a preferred shade or a borrowing option cannot replace that discussion. The independent expert quoted here has not assessed your mouth or endorsed this service; her statement provides context for taking time to understand the proposed treatment.",
    ],
    quotes: [{ text: "What seems like a quick fix can create long-term problems.", name: "Karen Coates", role: "Oral Health Content Specialist at the Oral Health Foundation", source: "ohfTourismRisk", attributionDate: "13 January 2026; updated 7 July 2026" }],
    sources: ["ohfTourismRisk", "ohfCoates", "gdc"],
  },
  {
    title: "Could whitening, alignment or a smaller repair meet my goal?",
    body: "Ask whether your concern could be addressed with whitening, alignment, bonding or a smaller repair before choosing extensive restorations. These approaches do different things and have different limitations. The appropriate option follows the dentist's assessment of the problem, your teeth and your priorities, including whether existing disease needs treatment before any elective appearance changes.",
    paragraphs: [
      "For a colour concern, ask what whitening could achieve and how existing restorations would affect the discussion. For crowding, ask whether moving teeth would better address the issue than changing their visible contours. For a chipped edge, ask whether a limited repair is reasonable. These are examples of questions to discuss, not diagnoses or promises that a particular alternative is suitable for you.",
      "If orthodontic care is considered, discuss its duration and continuity rather than assuming it can be completed during a short trip. Ask how the option compares in tooth preparation, appointments and maintenance, and what would happen if you chose no cosmetic treatment. A less extensive plan may look different from a social-media transformation while addressing the concern that matters to you. Keep the alternatives and their limitations in the written planning discussion.",
    ],
    sources: ["nhs"],
  },
  {
    title: "How do veneers, crowns and bonding fit into the same plan?",
    body: "Veneers generally cover the front surface of a tooth, crowns cover it more fully and composite bonding adds shaped material to address suitable concerns. A makeover can involve different procedures for different teeth. Ask for both the restoration type and material in your plan so a familiar material name does not hide a change in treatment scope.",
    paragraphs: [
      "If a proposal mentions zirconia, clarify whether the restoration is a crown rather than a front-surface veneer. Ask what preparation is intended, how existing fillings or crowns affect the choice and how the result will relate to teeth left untreated. A previously crowned tooth needs its own assessment; replacing that crown is different from placing a veneer on another tooth.",
      "Request separate reasons for each procedure rather than assuming the same approach belongs across the smile. Ask which changes are irreversible and what later repair or replacement could involve. If the treating dentist recommends a different restoration after examination, obtain an explanation and revised cost before agreeing. Comparing materials makes sense only alongside the tooth, design and clinical purpose; a brand or package name alone cannot select the appropriate restoration.",
    ],
    sources: ["veneers", "crowns"],
    links: [{ text: "Understand veneer treatment", href: "/veneers-finance" }, { text: "Compare crown planning and preparation", href: "/zirconia-crowns-finance" }],
  },
  {
    title: "What changes if my makeover includes missing teeth or implants?",
    body: "Replacing missing teeth adds different clinical questions from changing the appearance of existing teeth. An implant replaces a root and supports a restoration, while other options include bridges and dentures. Ask the dentist to distinguish replacement teeth from natural-tooth restorations and explain the components, surgical stages and alternatives in the combined plan.",
    paragraphs: [
      `The ${packagePrice(implant)} published package specifies four Osstem implants and 24 zirconium crowns. It does not automatically describe a full-arch bridge or establish which of your teeth need treatment. Ask how each implant and restoration relates to your mouth, whether temporary teeth are included and what remains provisional until assessment.`,
      "If a full-arch proposal is discussed, confirm the upper and lower arches separately and request reasons for any extractions of remaining teeth. A fixed bridge and an implant-retained removable denture require different specifications and care. The implant count cannot tell you which is being offered or how long the whole course will take. A combined makeover needs its own written design and schedule, rather than combining headline treatment prices without a clinical plan.",
    ],
    sources: ["implantRecords"],
    links: [{ text: "Plan implant stages and components", href: "/dental-implants-finance" }, { text: "Understand full-arch treatment scope", href: "/all-on-4-finance" }],
  },
  {
    title: "How much do the published packages cost?",
    body: "There is no universal smile makeover price because the procedures and teeth involved vary. Use the published packages as specifications to discuss, then request a personal written estimate. The quote should identify treatment, materials, visits and exclusions, and distinguish confirmed charges from items that remain uncertain until the treating dentist completes the assessment.",
    paragraphs: [
      `The owner-confirmed registry lists 20 zirconium crowns at ${packagePrice(crowns20)}, 24 at ${packagePrice(crowns24)}, 16 veneers at ${packagePrice(veneers16)} and 20 veneers at ${packagePrice(veneers20)}. The four-Osstem-implant plus 24-zirconium-crown package is ${packagePrice(implant)}. Prices and inclusions were confirmed on 21 October 2026; all remain subject to clinical assessment and personalised treatment planning.`,
      "The packages include the specified treatment, hotel accommodation and airport and clinic transfers. Ask about diagnostic work, temporary restorations, additional procedures, room arrangements and excluded travel expenses separately. A plan involving a different number of teeth or mixed procedures needs its own estimate. Do not use a package total to invent the price of an individual component or assume an advertised specification includes every procedure that your assessment might identify.",
    ],
    links: [{ text: "Check current prices and package inclusions", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "How can I compare package value without treating extra healthy teeth?",
    body: "Compare the treatment you need and the complete inclusions before comparing package averages. A larger restoration count can reduce an average while increasing the overall cost and the amount of treatment. Ask why each tooth is included and whether a smaller plan meets your goals, rather than choosing more restorations because the arithmetic looks favourable.",
    paragraphs: [
      `The crown packages differ by ${money(crowns24.price - crowns20.price)}, a ${percent((crowns24.price / crowns20.price - 1) * 100)} total increase for 20% more crowns. Their full-package averages are ${money(crowns20.price / 20)} and ${money(crowns24.price / 24)} per restoration. These include the stay and transfers; they are not standalone crown fees or a recommendation to prepare additional teeth.`,
      `The veneer packages differ by ${money(veneers20.price - veneers16.price)}, a 20% total increase for 25% more veneers. Their package averages are ${money(veneers16.price / 16)} and ${money(veneers20.price / 20)} per restoration. Calculations use the published totals, with percentages rounded to one decimal place where needed. They are not separately purchasable veneer fees, discount promises or comparisons with equivalent UK treatment. Ask for your own scope to be priced in writing.`,
    ],
    links: [{ text: "Compare complete written quotations", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "Why can treatment sequencing change my travel schedule?",
    body: "The order of treatment depends on the procedures, oral health and healing needed for your case. A makeover involving implants can require a later restorative visit, while another plan may use a different sequence. Confirm the clinical stages and appointments before buying tickets, and ask which findings could change the proposed travel dates or costs.",
    paragraphs: [
      "The published crown and veneer packages specify one visit with five hotel nights. The implant-and-crown package specifies two visits with three plus five nights, eight hotel nights in total. Those are accommodation arrangements, not a promise that every mixed treatment plan can be completed within the same stays or that implant treatment finishes in eight consecutive days.",
      "Ask what happens at assessment, preparation, temporary fitting and final reviews, and what must occur before the next stage begins. Confirm who communicates changes while you are in Antalya and after you return home. Discuss extra-night charges, changed flights and the consequences of additional procedures before agreeing to them. A laboratory deadline or package stay should not determine clinical readiness, and a photograph taken during a temporary stage does not establish that care is complete.",
    ],
    sources: ["stages"],
    links: [{ text: "Prepare your Antalya appointment and travel plan", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "How can I agree a natural appearance while protecting function?",
    body: "Describe your preferred shade, shape and character, then ask how the dentist will assess them alongside your bite, gum health and existing teeth. Appearance and function belong in the same plan. Reference images can communicate preferences, but cannot guarantee a copy of another person's smile or establish what your own teeth can safely support.",
    paragraphs: [
      "Explain features you want to retain as well as change. Ask how the proposed restorations will relate to teeth not being treated and to any existing crowns, bonding or implants. Confirm when your preferences will be recorded and reviewed, whether any trial or temporary stage is planned and how questions about the result can be raised before final completion.",
      "The clinical team needs to check fit and bite as well as colour. If something feels uncomfortable or differs from what you expected, contact the treating team for assessment rather than attempting to adjust it yourself. Before travelling home, obtain the treatment summary and review instructions. A clear design discussion should leave you knowing which decisions are agreed, which depend on clinical findings and how a proposed change would be explained and documented.",
    ],
    links: [{ text: "Meet the clinic-listed treating team", href: "/our-clinic" }],
  },
  {
    title: "Can a published success rate predict my whole makeover result?",
    body: "A research percentage applies to a defined treatment, patient group and outcome, not an entire mixed smile makeover. A restoration remaining in service is different from needing no intervention. Ask what the study measured, for how long and whether its material and design resemble the proposal, rather than treating a headline number as a personal guarantee.",
    paragraphs: [
      "For example, Waldecker and colleagues' 2022 prospective zirconia single-crown study evaluated 158 restorations in 65 participants after dropouts. Five-year failure-free survival was 93.1% for monolithic and 96.2% for partially veneered crowns. Complication-free survival, termed success, was 87.0% and 95.8% respectively. The survival difference was not statistically significant, while the success difference was significant in that sample.",
      "Those results concern those crown designs and definitions, not audited Akdeniz Dental outcomes, veneers, implants or every procedure in a makeover. You cannot multiply or combine unrelated study percentages to calculate your chance of a perfect smile. Discuss individual risks and maintenance with the dentist, and review the written guarantee separately. A commercial warranty, clinical survival and satisfaction with appearance are different questions that need clear explanations in their own right.",
    ],
    sources: ["crownWaldecker"],
  },
  {
    title: "How should I use before-and-after cases when choosing treatment?",
    body: "Use patient cases to ask questions about a comparable starting point and treatment, rather than choosing a smile from the final photograph alone. Ask which procedures were performed, which teeth were treated and whether the image shows temporary or final restorations. Another patient's appearance cannot establish your suitability, outcome or the number of teeth needing work.",
    paragraphs: [
      "If your concern is mainly colour, a case involving extensive crowns is not automatically relevant. If you have missing teeth, a veneer-only example does not explain the replacement plan you may need. Discuss the clinical differences before using the image to set expectations, and ask what details the photograph does not show about bite, supporting tissues and later maintenance.",
      "This site's model photographs are illustrative. The treating clinic's published gallery is linked separately so you can review the source and ask about individual examples. We have not invented a patient case to explain a package. Sending photographs privately for an enquiry is also different from agreeing to have a case published. Review the privacy information and use the agreed channel if you choose to share images or existing dental records.",
    ],
    sources: ["results"],
    links: [{ text: "Learn how to interpret published patient cases", href: "/before-and-after" }],
  },
  {
    title: "What maintenance and review arrangements should my plan include?",
    body: "Your plan should explain cleaning, professional reviews and how to report concerns for each treatment included. A combination of natural-tooth restorations and implants may need different care and records. Ask the treating team to demonstrate the relevant instructions and confirm who will provide routine follow-up after you return to the UK before treatment starts.",
    paragraphs: [
      "Request the material specification, treatment summary, relevant imaging and implant brand and component details if implants are placed. Check whether a local dentist has agreed to see you and on what terms. Having records is helpful, but does not establish that every practice can provide every component or has accepted responsibility for the work.",
      "In the BDA's 2022 survey of 1,000 UK dentists, 93% raised continuity-of-care concerns and 77% mentioned difficulties seeking redress or making complaints about dental tourism. These historical professional responses are not a makeover complication rate or findings about this clinic. They explain why the practical contact plan and written responsibilities matter. Ask what can be discussed remotely, which concerns need an examination and how an unplanned review would be arranged and paid for.",
    ],
    sources: ["implantRecords", "bdaTourism"],
  },
  {
    title: "What extra costs could follow a makeover or change the total?",
    body: "Your total can change if assessment identifies additional treatment or if travel, reviews or remedial care fall outside the quoted scope. Ask which charges are confirmed, provisional or excluded and what the guarantee covers. Keep the treatment price, personal travel budget and later maintenance responsibilities separate so a headline package does not hide unresolved costs.",
    paragraphs: [
      "The BDA's historical survey reported that 65% of relevant respondents described repair costs of at least £500 after treatment abroad, and 51% reported more than £1,000. These are reports about cases encountered across dental treatments, not a forecast of your bill or evidence that a particular proportion of this clinic's patients will need repairs.",
      "Ask who pays for assessment, repairs, replacement parts, extra hotel nights and return flights if needed. Clarify the route for obtaining help locally or in Antalya, including what records and invoices should be retained. Request an updated written plan before authorising additional work. A guarantee does not automatically cover every biological problem or travel expense, and necessary care should not be delayed simply to wait for another trip abroad.",
    ],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time of the statement", source: "bdaTourism", attributionDate: "14 July 2022" }],
    sources: ["bdaTourism"],
  },
  {
    title: "Can I explore finance after reviewing my makeover estimate?",
    body: "You can request a written treatment estimate before deciding how to pay. The enquiry is separate from a credit application and does not guarantee eligibility. Any finance remains subject to status, affordability and lender approval; it cannot establish treatment suitability or replace the dentist's explanation of the procedures, alternatives and ongoing care required for your personal plan.",
    paragraphs: [
      "Establish the complete scope and total first, including travel and exclusions. Ask for payment stages alongside the clinical schedule and what happens if assessment changes the recommendation or you decide not to proceed. Avoid adding elective procedures solely because a monthly amount appears manageable. Essential spending and future dental care also belong in the affordability decision.",
      "MoneyHelper explains that a representative APR only has to be offered, or bettered, to 51% of approved borrowers, so it is not your personal rate. If you choose to consider borrowing, read the actual rate, term, fees and total repayable in the provider's documents. Ask how an eligibility check differs from a full application and what may be recorded on your credit file. The coordination team cannot promise approval or a lender's terms.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Understand the separate finance process", href: "/dental-finance" }],
  },
  {
    title: "What should I send to request an individual smile makeover plan?",
    body: "Describe the changes you would like, the teeth that concern you and any existing dental work you know about. Include your likely travel period and preferred reply method. Photographs are optional through the enquiry form and support an initial discussion; the treating dentist must still assess suitability and confirm the final treatment, stages and cost.",
    paragraphs: [
      "Ask for a tooth-by-tooth proposal that distinguishes essential and elective work, identifies materials and temporary restorations, and explains visits and aftercare responsibilities. Ask what remains uncertain until examination and how any revision will be explained before you agree to further procedures. Review the privacy information before sharing health details, records or photographs through the agreed channel.",
      "Prices here come from the owner's confirmed package registry; averages and differences are calculations from those totals. Clinical statistics describe the linked study's own population and methods, not this clinic's performance. We have not invented patient results or year-on-year comparisons. The coordination team prepared this general guide, and the independent experts quoted have not endorsed the service. Personal clinical advice comes from your treating dentist, while any personal credit offer comes from the lender.",
    ],
    links: [{ text: "Request my written smile makeover estimate", href: "/get-a-quote?treatment=Smile%20makeover#treatment-enquiry" }],
  },
];
