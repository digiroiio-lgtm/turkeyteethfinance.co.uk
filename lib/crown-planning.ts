import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";

function pack(id: string) {
  const item = packageForId(id);
  if (!item) throw new Error(`Missing confirmed crown package: ${id}`);
  return item;
}
const small = pack("zirconium-20");
const large = pack("zirconium-24");
const money = (n: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 2 }).format(n);
const percent = (n: number) => `${Number(n.toFixed(1))}%`;

export const crownPlanningSections: Section[] = [
  {
    title: "When might a dentist recommend a zirconia crown?",
    body: "A crown covers a tooth to restore its shape and function when that approach is appropriate. It may be considered for a weakened, broken or heavily restored tooth. Zirconia describes the material; the dentist should explain the reason for treating each tooth and why a crown is preferable to a smaller restoration or another option.",
    paragraphs: [
      "The ADA describes crowns as a way to protect a weak tooth, restore a broken one or support a tooth with a large filling when insufficient structure remains. A crown can also form part of a bridge or cover an implant. These are different clinical situations, so ask which applies to every item in your proposed plan.",
      `The published packages specify 20 zirconium crowns for ${packagePrice(small)} or 24 for ${packagePrice(large)}. Those counts are package specifications, not targets for a healthy smile. An individual assessment may lead to fewer crowns, mixed procedures or a different recommendation. Start by describing the teeth that concern you, then request a written explanation of the treatment needed rather than choosing the restoration count first.`,
    ],
    sources: ["crowns"],
    links: [{ text: "See the published crown packages", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "How are zirconia crowns different from veneers and bonding?",
    body: "A crown covers more of the tooth, while a veneer generally covers its front surface and bonding adds shaped composite material. The choice depends on the remaining tooth, the concern being addressed and the bite. Ask for the restoration type and material beside each tooth, because similar marketing names can describe substantially different procedures.",
    paragraphs: [
      "Zirconia is a material rather than another name for a veneer. If an offer uses the phrase 'zirconia veneers', ask what will actually be made and how the tooth will be prepared. Do not assume a front-surface covering and a full-coverage crown involve the same removal of tooth structure or the same maintenance.",
      "Ask whether whitening, alignment, bonding or a smaller repair could address your concern. Each has its own indications and limitations; a dentist must assess suitability. If a proposal changes from veneers to crowns after examination, request the reason, revised tooth list and updated cost before agreeing. A treatment comparison should make the consequences for your own teeth understandable rather than relying on a photograph, material brand or package label alone.",
    ],
    sources: ["nhs", "veneers"],
    links: [{ text: "Compare veneer treatment considerations", href: "/veneers-finance" }],
  },
  {
    title: "What should assessment establish before healthy teeth are prepared?",
    body: "Assessment should establish the condition of each tooth, the problem to be addressed and the alternatives before a crown is recommended. Ask how much healthy structure would remain and which changes are irreversible. Your goals are part of the discussion, but a request for a particular smile does not establish a need for extensive crowns.",
    paragraphs: [
      "In a September 2026 GDC article, Shamir B. Mehta reports that 27% of 1,619 adults examined in the 2023 UK Adult Oral Health Survey had at least one crowned tooth; the proportion was 58% among those over 65. These figures describe existing restorations in a survey sample, not how many people should receive crowns or which teeth you should treat.",
      "Request a tooth-by-tooth explanation, including the difference between essential restorative care and optional appearance changes. Ask what happens if you defer treatment or choose a less extensive approach. A photograph cannot establish every clinical finding. The treating dentist should explain suitability and consent, while the coordination team helps organise information and communication. The independent expert quoted here has not assessed your case or endorsed this service.",
    ],
    quotes: [{ text: "Crown treatments are still a valuable aspect of restorative dentistry and can offer excellent long-term outcomes.", name: "Shamir B. Mehta", role: "Lead Clinical Adviser, Fitness to Practise, at the General Dental Council at publication", source: "gdcCrowns", attributionDate: "10 September 2026" }],
    sources: ["gdcCrowns"],
    links: [{ text: "See the treating clinic and coordination roles", href: "/our-clinic" }],
  },
  {
    title: "What does crown preparation involve?",
    body: "Preparing a natural tooth for a crown usually involves reshaping it, taking a scan or impression and using a temporary restoration before the final crown is fitted. Removing tooth tissue is irreversible. Ask the dentist to explain the proposed preparation, the condition of the remaining tooth and the risks relevant to your individual situation.",
    paragraphs: [
      "Existing decay, fillings, fractures or previous treatment may affect the recommendation. Ask what the examination and imaging have established and what remains uncertain. If additional work is recommended, request its reason and cost separately. A material described as strong does not remove the need for appropriate preparation, a sound treatment plan and a restoration designed for the tooth involved.",
      "Before consenting, ask what you will wear while the final restoration is made and how to report a temporary crown that becomes uncomfortable or comes off. Confirm how the clinic will handle a change in symptoms during the visit. You should understand the sequence and alternatives before treatment starts, rather than discovering the implications once the tooth has been prepared. Keep the current written plan so any change can be discussed against the same specification.",
    ],
    sources: ["nhs", "gdcCrowns"],
  },
  {
    title: "Does a crown always mean I need root canal treatment?",
    body: "Root canal treatment is a separate clinical decision and is not automatically required for every crown. Ask why it is recommended for a particular tooth, what findings support it and whether it changes the restoration, cost or appointment schedule. A general crown package cannot determine the condition of the nerve or roots in your own teeth.",
    paragraphs: [
      "The NHS describes root canal treatment as treating infection at the centre of a tooth. A tooth that has already had this treatment needs its own restorative assessment. Tell the clinical team about previous procedures you know about and ask what records or imaging would help. Do not assume either that every tooth needs root canal care or that it can always be avoided.",
      "If symptoms or assessment change the proposal, request an updated plan before agreeing to further treatment. Ask who will provide any additional procedure and how the clinical team will coordinate the stages. Keep the distinction between the treatment addressing a problem inside a tooth and the crown restoring its outer form. Your enquiry can start that discussion, but a remote estimate cannot confirm the diagnosis or guarantee that no additional care will be needed.",
    ],
    sources: ["nhs"],
  },
  {
    title: "How much are the published 20- and 24-crown packages?",
    body: `The published 20-zirconium-crown package costs ${packagePrice(small)} and the 24-crown package costs ${packagePrice(large)}. Both specify five hotel nights and airport and clinic transfers. These totals relate to the stated packages, subject to clinical assessment and personalised planning; your written quote must confirm the teeth, procedures, materials and arrangements relevant to your own case.`,
    paragraphs: [
      `Dividing the whole package by the restoration count gives averages of ${money(small.price / 20)} and ${money(large.price / 24)} per crown respectively. These include the package arrangements and are not standalone crown fees. The calculations use the owner's confirmed price registry dated 21 October 2026, rather than an estimate of typical Turkish or UK prices.`,
      "Ask which diagnostic work, temporary restorations, additional procedures and reviews are included. Check the room arrangements, covered transfer journeys and exclusions before paying. If a different number of teeth or a different restoration is appropriate, request a separate written estimate instead of multiplying a package average. Keep the specification with the total and payment schedule so an initial price does not become detached from what the treating clinic is actually proposing.",
    ],
    links: [{ text: "Check current crown package prices and inclusions", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "What does the package price difference tell me?",
    body: `The 24-crown package costs ${money(large.price - small.price)} more overall, a ${percent((large.price / small.price - 1) * 100)} increase for 20% more restorations. Its package-average cost per crown is ${percent((1 - (large.price / 24) / (small.price / 20)) * 100)} lower. These comparisons explain two published specifications; they do not establish that treating additional teeth is clinically appropriate or better value for your health.`,
    paragraphs: [
      `The average difference is ${money(small.price / 20 - large.price / 24)} per restoration. It comes from dividing each complete package total by its crown count and comparing the results; percentages are rounded to one decimal place. The figures are not a discount promise, individual tooth prices or a comparison against equivalent UK treatment. A lower average can still mean a larger total commitment.`,
      "Ask why each proposed tooth needs a crown and whether a smaller plan would meet your needs. The appropriate count follows the clinical assessment. If you are comparing offers from different providers, check materials, preparation, temporary work, visits and aftercare before comparing their averages. Mark missing information as unconfirmed rather than assuming two similarly named packages include the same treatment and responsibilities.",
    ],
    links: [{ text: "Use the written treatment quote checklist", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "Does every tooth in a smile makeover need a crown?",
    body: "A smile makeover does not require the same procedure on every tooth. Some teeth may need restorative care, others may be considered for appearance changes, and some may need no treatment. Ask the dentist to distinguish those groups and explain the proposed options tooth by tooth before you choose a package or consent to preparation.",
    paragraphs: [
      "A plan could involve different types of restorations or a smaller scope than an advertised package. Ask how the proposed work will relate to teeth left untreated and any existing crowns or implants. Your goals can include a natural appearance, comfort and function without prescribing a particular number of restorations in advance.",
      "If several procedures are proposed, request a clear sequence and a written explanation of which are essential and which are optional. Ask how the plan would change if you declined an elective element. A wider smile or a brighter shade in a reference photograph cannot show what is appropriate for your teeth and gums. You can take time to consider the options and obtain another professional opinion before deciding on extensive irreversible treatment.",
    ],
    links: [{ text: "Explore individual smile makeover planning", href: "/smile-makeover-finance" }],
  },
  {
    title: "How should I plan appointments and travel to Antalya?",
    body: "The published crown packages specify one visit with five hotel nights, but the clinical team must confirm the appointments needed for your case. One trip can contain several sessions. Ask when assessment, preparation, temporary work, fitting and final reviews will take place, and how changes to the treatment plan would affect your travel arrangements.",
    paragraphs: [
      "Request a dated schedule and ask which parts are provisional until examination. Confirm how long the clinic expects laboratory work and checks to take, rather than using the included nights as a completion guarantee. If additional procedures are identified, ask about their effect on both cost and timing before agreeing to them.",
      "Check flights, insurance for planned dental treatment, companion arrangements and extra-night charges separately. Ask who coordinates changes to transfers or appointments, and whether you need flexibility in return travel. Leave enough room for the checks the clinician recommends and for discussing any concerns before departure. A laboratory delivery date is not the same as the end of clinical care, and the package stay should not determine when the team decides treatment is ready to finish.",
    ],
    links: [{ text: "Prepare the Antalya visit checklist", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "How should fit, bite, shade and appearance be reviewed?",
    body: "The final crown needs clinical checks for fit, bite and appearance before treatment is completed. Discuss how you will review shade and shape and when adjustments can be considered. Reference images can communicate preferences, but they cannot guarantee an identical result or replace the dentist's assessment of how the restoration functions in your mouth.",
    paragraphs: [
      "Describe your preferred appearance in concrete terms, such as a natural colour or a particular edge shape. Ask how the team will consider untreated teeth and existing restorations. Confirm who records your preferences and what happens if the proposed result differs from what you expected. Raise concerns while there is time to discuss the options with the treating team.",
      "If your bite feels uncomfortable or a crown feels high, contact the clinical team for assessment rather than attempting to adjust it yourself. Before travelling home, obtain the material specification and treatment summary, along with a clear route for reporting later concerns. The team should explain which issues need examination and how a review would be arranged, including whether a return visit or local care might be necessary.",
    ],
    sources: ["gdcCrowns"],
  },
  {
    title: "What does clinical research say about zirconia crown longevity?",
    body: "Zirconia crown research can inform questions about longevity, but a study percentage is not a personal lifespan guarantee or a clinic success rate. Ask which design, teeth, follow-up and outcome the research describes. A crown remaining in service and a crown needing no intervention are different outcomes, so check what the published figure actually measures.",
    paragraphs: [
      "Waldecker and colleagues' prospective study, published in 2022, evaluated 158 restorations in 65 participants after dropouts. At five years, failure-free survival was 93.1% for monolithic zirconia single crowns and 96.2% for partially veneered zirconia single crowns. Complication-free survival, termed success in the study, was 87.0% and 95.8% respectively. The survival difference was not statistically significant; the success difference was significant in this sample.",
      "These findings concern those study groups and definitions, not audited Akdeniz Dental outcomes, every zirconia formulation or a full-mouth package. They do not establish that one design is preferable for you. Ask the treating dentist whether the proposed material and design resemble the evidence cited, how your underlying teeth affect the recommendation and what ongoing care is expected. Written guarantee terms need their own review, separately from any research estimate.",
    ],
    sources: ["crownWaldecker"],
  },
  {
    title: "What maintenance and possible complications should I discuss?",
    body: "Discuss the underlying tooth, gums, bite and restoration with the dentist before treatment, including what might need attention later. Crowns can require review, repair or replacement, and a material described as strong does not make the whole treatment maintenance-free. Ask for cleaning instructions and a practical follow-up plan suited to your own mouth.",
    paragraphs: [
      "Tell the clinician about grinding, previous discomfort and existing dental work. Ask whether these affect the proposed design or maintenance instructions. The dentist should explain which symptoms need prompt contact and how routine reviews will be arranged after you return home. A protective appliance, if recommended, should be discussed for your case rather than assumed to eliminate every risk.",
      "Keep any maintenance requirements attached to the written guarantee. Ask which exclusions apply, what evidence the clinic needs to assess a concern and how to obtain copies of your records. Routine care and urgent assessment may require different arrangements. A photograph or message can help report a problem, but may not establish its cause or the appropriate treatment. Confirm that any local dentist you intend to use has agreed to see you and understands the work completed.",
    ],
    sources: ["gdc"],
  },
  {
    title: "Who pays if a crown needs repair after I return home?",
    body: "Payment responsibility depends on the written treatment and guarantee terms, so clarify it before booking. Ask which reviews, repairs and replacements are covered, what exclusions apply and whether extra travel is included. A guarantee does not automatically cover flights, accommodation, another dentist's fees or every possible problem affecting the tooth beneath the crown.",
    paragraphs: [
      "The BDA's 2022 survey of 1,000 UK dentists reported that 65% of relevant respondents described repair costs of at least £500 after dental treatment abroad, while 51% reported more than £1,000. These are historical reports about cases encountered across treatments, not a zirconia crown complication rate, a forecast bill or data about this clinic.",
      "Ask how the clinic handles a loose restoration, an uncomfortable bite or a concern requiring urgent attention. Get the contact route, assessment arrangements and responsibilities in writing. If you need local care, retain the clinical records and invoices so the treating provider can understand what happened. Do not delay necessary assessment solely to arrange overseas travel. A clear contingency plan helps you understand the practical commitment without assuming a problem will occur.",
    ],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time of the statement", source: "bdaTourism", attributionDate: "14 July 2022" }],
    sources: ["bdaTourism"],
  },
  {
    title: "Can I explore payment options after receiving my crown estimate?",
    body: "You can request a written crown estimate before deciding how to pay. The treatment enquiry is separate from a credit application and does not guarantee eligibility. Any finance is subject to status, affordability and lender approval, while the dentist determines treatment suitability independently of whether a payment option might be available for the proposed work.",
    paragraphs: [
      "Start with the clinical scope, exclusions and realistic total. Ask for the treatment payment schedule and what happens if assessment changes the plan or you decide not to proceed. Do not select more restorations simply because a monthly amount looks manageable. Travel, essential spending and future care also belong in your budget.",
      "If you consider credit, read the provider's actual rate, term, fees and total repayable. MoneyHelper explains that a representative APR only has to be offered, or bettered, to 51% of approved borrowers. It cannot establish your personal rate. Ask how eligibility checks differ from a full application and what may be recorded on your credit file. The coordination team cannot promise approval, and a longer term can increase total interest even when the monthly payment is lower.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Understand the separate dental finance process", href: "/dental-finance" }],
  },
  {
    title: "What should I include in a personal crown enquiry?",
    body: "Describe the teeth that concern you, your main goals and any previous crowns, fillings or root canal treatment you know about. Include your likely travel period and choose email or WhatsApp for replies. Optional photographs can support an initial discussion, but the treating dentist must assess suitability and confirm the final treatment plan and cost.",
    paragraphs: [
      "Request a tooth-by-tooth written estimate identifying the material, restoration type, temporary work, appointments, additional procedures and aftercare responsibilities. Ask what remains provisional and how any revision would be explained before you agree to further work. Share health details only through the agreed enquiry process and review the privacy information before sending records or photographs.",
      "Package totals on this page come from the owner's confirmed registry, and averages and percentage differences are calculations from those totals. Clinical statistics are attributed to their original publications and describe their own populations and methods. We have not invented patient cases, clinic success rates or year-on-year comparisons. The coordination team prepared this general guide; the independent experts quoted have not endorsed the service. Your treating dentist supplies personal clinical advice, and any personal credit offer comes from the lender.",
    ],
    links: [{ text: "Request my written crown estimate", href: "/get-a-quote?treatment=Zirconia%20crowns#treatment-enquiry" }],
  },
];
