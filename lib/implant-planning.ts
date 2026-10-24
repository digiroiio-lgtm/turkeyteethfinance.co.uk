import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";

const implantPackage = packageForId("osstem-4-crowns-24");
if (!implantPackage) throw new Error("Missing confirmed implant package");
const price = packagePrice(implantPackage);

export const implantPlanningSections: Section[] = [
  {
    title: "What does a dental implant replace?",
    body: "A dental implant replaces a missing tooth root and supports replacement teeth. The implant body, connecting abutment and visible restoration are different parts of the treatment. Ask the dentist to identify the components and teeth involved in your own plan, because an implant count alone does not describe the complete restoration or its cost.",
    paragraphs: [
      "A crown can replace the visible part of a single tooth, while a bridge or denture can replace several teeth. The design should follow your assessment, remaining teeth and clinical needs. Ask which restorations are implant-supported and which involve natural teeth, particularly if you are comparing a combined implant-and-crown package with a full-arch proposal.",
      `The published ${price} package specifies four Osstem implants and 24 zirconium crowns. This is a combined specification, not a price for one complete implant tooth. A dentist must explain how those components would relate to your mouth and whether that package is suitable. Start with the missing or damaged teeth you want assessed rather than selecting a restoration count from a package name.`,
    ],
    sources: ["implantRecords"],
    links: [{ text: "Check the published package specification", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "How do implants compare with bridges and removable dentures?",
    body: "Implants, tooth-supported bridges and removable dentures replace missing teeth in different ways. A bridge can use neighbouring teeth for support, while a removable denture is taken out for cleaning. The appropriate choice depends on your mouth, preferences and capacity for ongoing care; ask the dentist to explain the alternatives before consenting to surgery.",
    paragraphs: [
      "Discuss the condition of the neighbouring teeth and what each option would change. Ask whether a tooth can be retained, whether leaving a space is reasonable and what maintenance the proposed replacement needs. A recommendation to replace one missing tooth should be distinguished from a plan for a whole arch, which has a different scope and design.",
      "Make your priorities explicit, including chewing, appearance and how you feel about a removable restoration or surgery. Ask for the reasons behind the recommendation and what would happen if you delayed it. An implant is not automatically the right choice for every missing tooth. You can request another professional opinion before deciding, and compare complete treatment proposals rather than an implant headline price against the price of a denture.",
    ],
    sources: ["implants"],
    links: [{ text: "Understand full-arch treatment questions", href: "/all-on-4-finance" }],
  },
  {
    title: "What must the dentist assess before recommending implants?",
    body: "The dentist needs to assess your remaining teeth, gum health, available bone and relevant medical history before recommending implants. Your goals and ability to maintain the restoration also matter. An online enquiry or photograph can support an initial discussion, but cannot establish surgical suitability, the need for additional procedures or the final treatment cost.",
    paragraphs: [
      "Ask what examinations and imaging are required and who will interpret them. Explain existing dental work and any implants already present, and share records through the agreed channel if you choose. The clinical team should decide what further information is necessary. Request a clear explanation of any finding that changes the initial proposal.",
      "Keep clinical decisions separate from travel dates and payment options. Ask which parts of a written estimate remain provisional until assessment and how a revised recommendation will be discussed. The UK coordination company does not provide clinical treatment; the treating clinic in Antalya is responsible for the dental assessment and care. Published expert guidance helps frame questions but is not an assessment of your mouth or an endorsement of this service.",
    ],
    quotes: [{ text: "Dental implants are not the right option for everyone with missing teeth.", name: "Kathryn Durey", role: "Consultant in Restorative Dentistry at Leeds Dental Institute; author of the cited patient leaflet", source: "leedsImplants", attributionDate: "leaflet reviewed 4 June 2025" }],
    sources: ["leedsImplants"],
    links: [{ text: "Check the clinical and coordination roles", href: "/our-clinic" }],
  },
  {
    title: "Will extractions or bone grafting change my plan?",
    body: "Extractions and bone grafting can change the procedures, timing and total cost of implant treatment. Not everyone needs grafting, and its place in the sequence depends on the clinical findings. Ask the dentist which additional work is proposed, why it is needed and whether it is included in your written estimate before agreeing to it.",
    paragraphs: [
      "Leeds Teaching Hospitals describes early implant placement after extractions often performed 6–10 weeks beforehand. It also explains that larger grafts may be needed months before implant placement. These are examples from general patient information, not a timetable promised for treatment in Antalya. Your clinician determines the sequence and the point at which it is appropriate to move to the next stage.",
      "Ask what will happen at each visit, what you will wear between stages and how progress will be reviewed. If an assessment identifies additional work, request an updated specification, cost and travel schedule. Check what happens to any existing booking or payment if you decide against a revised proposal. A packaged stay does not determine the healing time or establish that every planned procedure can be completed on the original dates.",
    ],
    sources: ["leedsImplants"],
  },
  {
    title: "How long does healing take between implant stages?",
    body: "Implant treatment can involve a healing interval between surgery and fitting the final teeth. The dentist must assess readiness for each stage rather than work to a fixed holiday deadline. Ask how healing will be reviewed, whether you can return home between stages and what would trigger a change to the planned appointments.",
    paragraphs: [
      "Leeds Teaching Hospitals describes gum healing of around 1–2 weeks and, in most cases, an integration period of 2–6 months before the implants are used. Different tissues heal on different timescales. These general ranges do not establish when your own implant is ready or when it is safe for you to travel; seek instructions for your specific procedure.",
      "Request a schedule that distinguishes the surgical visit, interval, review and restorative appointments. Ask which dates are provisional and how the clinic will communicate any change while you are in the UK. Do not treat a comfortable gum surface or an attractive temporary restoration as confirmation that final treatment is complete. Keep sufficient flexibility in your arrangements to follow the treating team's assessment, and confirm responsibility for extra travel or accommodation if the schedule changes.",
    ],
    sources: ["leedsImplants", "stages"],
    links: [{ text: "Plan staged visits to Antalya", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "Can I have immediate fixed teeth while implants heal?",
    body: "Immediate temporary teeth may be possible in selected circumstances, but cannot be guaranteed from an enquiry or package description. Ask the clinician which temporary option is planned, whether it is fixed or removable and what its limitations are. Temporary teeth and the final restoration are different stages, with readiness decided through clinical assessment.",
    paragraphs: [
      "Ask what happens if the conditions for the preferred temporary option are not met at surgery. Request an explanation of the alternative, any effect on cost and the instructions you would need to follow. The plan should make clear which restoration you leave with after the first visit and what remains to be completed later.",
      "A statement about 'teeth in a day' should lead to questions about what is being fitted, how it is supported and whether it is temporary. Ask when the final design will be reviewed and what appointments are required before completion. If you already wear a denture, discuss how it will be managed during treatment. A clear written sequence is more useful than assuming a marketing phrase covers assessment, surgery, healing and final teeth in a single appointment.",
    ],
    sources: ["stages"],
  },
  {
    title: "What is included in the published implant package price?",
    body: `The published ${price} package specifies four Osstem implants with 24 zirconium crowns, hotel accommodation and airport and clinic transfers. The stay is three plus five nights across two visits. All package prices remain subject to clinical assessment and personalised planning; your own written quote must confirm the components, procedures and arrangements applicable to your case.`,
    paragraphs: [
      "The package registry was confirmed by the site owner on 21 October 2026. It is the source of the price on this page, not an estimate of an average market price. The combined total should not be divided by the implant count to invent a standalone implant fee: it also covers crowns and the specified package arrangements.",
      "Ask how the implants and crowns relate to the planned restoration, and request explicit confirmation of abutments, scans, extractions, grafting if required, temporary teeth and reviews. Mark uncertain or excluded items clearly. A different number of implants, a different restorative design or additional surgery needs its own estimate. Keep the quoted scope alongside the total and payment schedule so a later revision can be understood before you agree to further treatment or book travel.",
    ],
    links: [{ text: "Read the current package price and inclusions", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "How should I budget for two visits to Antalya?",
    body: "Budget for both planned trips, the treatment scope quoted and personal expenses outside the package. The published implant package includes eight hotel nights in total, split across two visits. That accommodation allowance does not include every possible journey or establish a guaranteed completion date; confirm the itinerary and exclusions in writing before buying flights.",
    paragraphs: [
      "The three-night and five-night stays represent 37.5% and 62.5% of the included hotel nights respectively. These original calculations describe accommodation only, not the share of treatment work or payments due on each visit. Ask the clinic for a separate payment schedule rather than assuming the total is divided in proportion to the nights.",
      "Check flights, companion expenses, extra nights, insurance for planned dental treatment and any costs of changing dates. Ask which transfer journeys are included and how arrival times are coordinated with appointments. Also clarify who pays for travel if an unplanned review is required after you return home. A complete budget includes the practical consequences of staged care, rather than treating the initial flight and surgical visit as the whole commitment.",
    ],
    links: [{ text: "Prepare your travel and appointment checklist", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "What should I compare in two implant quotations?",
    body: "Compare the complete restorative design, components, procedures, visits and aftercare terms before comparing totals. A headline implant price may describe only the fixture, while another offer includes the abutment and replacement tooth. Ask each provider to itemise the scope so you can see whether the proposals are equivalent and which questions remain unresolved.",
    paragraphs: [
      "Request the implant system, positions, final restoration type, temporary teeth and diagnostic work. Ask whether additional procedures are confirmed, excluded or still uncertain pending assessment. The plan should distinguish natural-tooth restorations from implant-supported work and explain the reason for each. If you are comparing a full arch with several individual replacements, ask the dentist to explain the design difference.",
      "Record the currency, payment deadlines, cancellation terms and responsibility for follow-up. Ask for changes to be provided in a dated written version so you can understand their clinical and financial effect. Do not use a package average to price a component the provider has not offered separately. The clearest comparison leaves you able to explain what will be done, who will do it and how you would obtain help afterwards.",
    ],
    links: [{ text: "Use the detailed written quote checklist", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "What does research say about long-term implant survival?",
    body: "Implants can remain in function for many years, but survival percentages describe the patients, systems and methods in a particular study. They do not guarantee your outcome or show that every restoration remained free of maintenance. Ask the dentist which evidence is relevant to your proposed treatment and how the study defined and measured survival.",
    paragraphs: [
      "French, Ofec and Levin's 2021 retrospective cohort included 10,871 implants in 4,247 patients treated by one periodontist. Estimated implant-level cumulative survival was 98.9% at three years, 98.5% at five, 96.8% at ten and 94.0% at fifteen. Mean follow-up was 4.5 years, despite the longest observation reaching 22.2 years. Not every implant was observed for the maximum period.",
      "In the same cohort, patient-level estimates were 97.4%, 96.7%, 92.5% and 86% at the corresponding time points. These distinguish an implant surviving from a patient avoiding any implant loss. The difference matters when someone receives multiple implants. These are external historical findings, not audited Akdeniz Dental outcomes, a guarantee or a prediction for your own surgery and final restoration.",
    ],
    sources: ["implantFrench"],
  },
  {
    title: "Does a surviving implant mean the whole treatment is maintenance-free?",
    body: "A surviving implant can still need attention to the surrounding tissues, abutment or attached crown, bridge or denture. Retention of the implant body is only one outcome. Ask about clinical health, function, comfort and maintenance separately, and make sure a headline survival figure is not being presented as a promise of trouble-free treatment.",
    paragraphs: [
      "Östman and colleagues' 2024 prospective report followed an initial group of 133 implants in 46 patients at a Swedish clinic. It reported 94.7% survival at twenty years and average marginal bone loss of 0.543 mm. Seven implants failed, including four in the same patient. There were also dropouts: twenty patients with 25 implants, mostly related to patient deaths. This is a small, specific cohort using TiUnite implants, not evidence for every implant system.",
      "The findings show why the follow-up group, measured outcome and study limitations belong beside the percentage. They cannot establish how an Osstem package will perform or whether a repair will be covered. Ask the clinician what signs need review, what maintenance is expected and what the written guarantee actually provides. A commercial warranty and a biological outcome answer different questions and should be assessed separately.",
    ],
    sources: ["implantOstman", "implantRecords"],
  },
  {
    title: "What risks and personal factors should I discuss?",
    body: "Discuss surgical risks, healing, gum health and the final restoration with the treating dentist. Ask how your medical history, smoking, medications and ability to maintain the work affect the proposal. A population statistic does not assess your personal risk, and a successful procedure still requires suitable instructions and access to follow-up care.",
    paragraphs: [
      "The FDA lists risks including injury to nearby structures, infection, implant failure and problems with the attached components. It advises patients to discuss candidacy and smoking with their provider. Share the history the clinical team requests through the agreed channel, and ask which risks are particularly relevant to the proposed implant positions and any additional surgery.",
      "In the French cohort, 3.3% of patients experienced at least one implant failure over the varying observation periods. This is a crude historical patient proportion, not an annual failure rate or your probability of a complication. Ask the dentist to explain the difference between an implant not integrating initially, a later biological problem and damage to the restoration. Avoid changing medication or managing a postoperative concern based on a general webpage; obtain instructions from the professional responsible for your care.",
    ],
    sources: ["implantRecords", "implantFrench"],
  },
  {
    title: "What aftercare and records should I arrange before returning home?",
    body: "Arrange written aftercare instructions, a review schedule and a clear contact route before leaving Antalya. Ask for your treatment summary, relevant imaging and implant brand and model details. These records help another dentist understand the work, but do not establish that a UK practice has agreed to provide maintenance or repairs for treatment completed abroad.",
    paragraphs: [
      "Ask who will assess a concern reported from the UK, what can be discussed remotely and when an in-person examination is needed. Confirm whether a local dentist will see you and on what terms. The FDA advises regular professional visits and reporting a loose or painful implant promptly. A message exchange cannot reliably replace every clinical examination.",
      "In the BDA's 2022 survey of 1,000 UK dentists, 93% raised continuity-of-care concerns and 77% mentioned difficulties seeking redress or making complaints about dental tourism. Those historical professional responses are not implant complication rates or findings about this clinic. They explain why the contact plan, records and written responsibilities should be part of the decision before travel, rather than questions left until a problem occurs.",
    ],
    sources: ["implantRecords", "bdaTourism"],
  },
  {
    title: "Who pays for remedial care or an unplanned return visit?",
    body: "Payment responsibility depends on the written treatment and guarantee terms, so obtain those details before booking. Ask which reviews and repairs are covered, what exclusions apply and whether extra flights or accommodation would be included. Do not assume a treatment warranty covers every complication, later maintenance or the practical cost of returning to the clinic.",
    paragraphs: [
      "The BDA's historical survey reported that 65% of relevant respondents described repair bills of at least £500 after treatment abroad, and 51% reported more than £1,000. One in five of those dentists reported costs exceeding £5,000. These describe cases encountered across dental treatments, not the cost or probability of an implant problem for you.",
      "Request a clear route for getting an assessment and authorising any additional work. Ask what happens if the restoration needs adjustment while the implant itself remains in place, or if a separate dentist provides urgent care. Keep invoices, records and correspondence together. If an urgent concern develops, seek appropriate local care rather than delaying solely to arrange an overseas appointment. Clarifying costs and responsibilities does not predict a problem; it makes your decision and contingency planning more informed.",
    ],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time of the statement", source: "bdaTourism", attributionDate: "14 July 2022" }],
    sources: ["bdaTourism"],
  },
  {
    title: "Can I explore finance after receiving an implant estimate?",
    body: "You can request a written implant estimate before deciding how to pay. The treatment enquiry is separate from a credit application and does not guarantee eligibility. Any finance is subject to status, affordability and lender approval; a payment option cannot establish clinical suitability or replace the treating dentist's explanation of the treatment plan.",
    paragraphs: [
      `Begin with the confirmed scope rather than a monthly figure. The ${price} package is a treatment price, not an amount a lender has agreed to provide. Your personal estimate may differ after assessment. Review the payment schedule alongside the clinical stages, and ask what happens if the plan changes or you decide not to proceed.`,
      "If you choose to consider borrowing, read the provider's actual rate, term, fees and total repayable. MoneyHelper explains that a representative APR only has to be offered, or bettered, to 51% of approved borrowers; it is not your personalised rate. Ask how eligibility checks differ from a full application and what is recorded on your credit file. Keep essential spending, travel and future care in your affordability calculation rather than assuming a smaller monthly amount makes the whole commitment suitable.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Understand the separate finance process", href: "/dental-finance" }],
  },
  {
    title: "What information should I send for a personal implant estimate?",
    body: "Describe the missing or damaged teeth, existing implants or dentures and the main concern you want assessed. Include your likely travel period and choose email or WhatsApp for replies. Photographs are optional through the enquiry form; they can support an initial discussion, but the treating dentist must confirm diagnosis, suitability, treatment and final cost after assessment.",
    paragraphs: [
      "Ask for a written specification of the fixture, connecting components, final and temporary teeth, diagnostic work and possible additional procedures. Request the expected visits, payment stages and aftercare responsibilities together. If something remains uncertain, ask what examination will resolve it and how any revision will be explained before you consent to further work or commit to travel.",
      "The package price here comes from the owner's confirmed registry; accommodation percentages are calculations from the specified nights. Clinical figures are attributed to external publications and describe their own populations and methods. We have not invented clinic success rates, individual cases or year-on-year results. The coordination team prepared this general planning guide, and the quoted experts have not reviewed or endorsed the service. Personal clinical advice comes from the treating dentist, while any personal credit terms come from the lender.",
    ],
    links: [{ text: "Request my written implant estimate", href: "/get-a-quote?treatment=Dental%20implants#treatment-enquiry" }],
  },
];
