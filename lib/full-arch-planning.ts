import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";
const combined = packageForId("osstem-4-crowns-24");
if (!combined) throw new Error("Missing confirmed implant-and-crown package");

export const fullArchPlanningSections: Section[] = [
  {
    title: "What does an All-on-4 treatment plan replace?",
    body: "All-on-4 describes a fixed full-arch replacement supported by four implants in suitable cases. It is a different treatment scope from replacing a single tooth. Ask whether the proposal concerns the upper arch, lower arch or both, and have the dentist explain the implant positions, restoration design and alternatives after assessing your mouth.",
    paragraphs: [
      "The implants support the replacement teeth as a system; the number does not describe the material, number of visible teeth or temporary arrangement. A full-arch plan should identify what remains in the mouth and how the proposed restoration will be supported. If natural teeth are still present, their condition needs its own explanation before any extraction decision.",
      "Begin with the problem you want assessed, such as difficulty with a denture or missing teeth, rather than asking for a fixed implant count. The treating dentist may recommend a different configuration or another approach. A label on a website cannot establish suitability, the final cost or whether immediate fixed temporary teeth are possible. Request a written plan that makes the proposed scope understandable before comparing offers or arranging travel.",
    ],
    sources: ["allOn4Mandible"],
    links: [{ text: "Compare general implant treatment planning", href: "/dental-implants-finance" }],
  },
  {
    title: "What needs assessment before full-arch treatment is recommended?",
    body: "The dentist must assess the remaining teeth, gums, bone, bite and relevant medical history before recommending a full-arch implant restoration. Your priorities and ability to maintain it also matter. Photographs can support an initial discussion, but cannot confirm the surgical plan, need for additional procedures or the final design and price.",
    paragraphs: [
      "Ask what examination and imaging are required, who interprets the findings and which parts of an initial estimate remain provisional. Tell the team about existing implants, dentures or previous treatment you know about. Share records through the agreed channel if you choose, and let the clinical team determine what further information is needed.",
      "The assessment should leave you able to explain why the proposed design is appropriate and what alternatives were considered. Ask which findings could change the plan and how a revision would be discussed before additional work begins. The clinic in Antalya provides clinical care, while Akdeniz Dental Consultancy UK Ltd provides non-clinical consultancy and patient coordination. A payment option or available travel date cannot establish that the treatment is suitable or determine when healing is complete.",
    ],
    sources: ["implants"],
    links: [{ text: "Check the clinic and coordination responsibilities", href: "/our-clinic" }],
  },
  {
    title: "Should all remaining teeth be removed for All-on-4?",
    body: "The treatment name does not justify removing every remaining tooth. Ask the dentist to assess each tooth, explain any extraction recommendation and discuss reasonable alternatives. Preserving a tooth that can be treated is a separate question from replacing one that cannot be retained, and an irreversible decision needs a clear clinical explanation before consent.",
    paragraphs: [
      "Request a tooth list or diagram showing which teeth are proposed for removal and why. Ask what would happen if you retained a particular tooth, delayed treatment or sought another approach. If a recommendation differs from an earlier opinion, ask the clinician to explain the findings behind that difference rather than choosing solely on price or convenience.",
      "An independent dental opinion can help you understand a major treatment proposal. Take time to consider the consequences, including the temporary stage and ongoing care after any extractions. A before-and-after photograph cannot show whether the same decision is appropriate for your mouth. Keep the assessment, proposed procedures and consent discussion together so the scope is clear before booking surgery or committing to travel arrangements.",
    ],
    sources: ["gdc"],
  },
  {
    title: "How do fixed full-arch teeth and removable alternatives differ?",
    body: "A fixed implant bridge and an implant-retained removable denture are different restorations. Ask whether the proposed teeth stay fixed in the mouth or are removed by you for cleaning. The design determines important aspects of care, repair and daily use; the number of implants alone cannot explain those responsibilities or establish the best option for you.",
    paragraphs: [
      "Discuss the support, cleaning access and maintenance of each option with the dentist. Ask how a conventional denture compares and what changes are expected with implant retention or a fixed bridge. Your preferences matter, but the clinical team needs to explain what your bone, soft tissues and bite can support and how that affects the design.",
      "Request the actual restoration specification rather than relying on a term such as 'implant denture' or 'permanent teeth'. Ask who can remove a fixed restoration if professional maintenance is needed and what happens if a component breaks. A restoration intended for long-term use can still need adjustments or replacement parts. The written proposal should make clear which option is being offered, what is included and how you would obtain help after returning home.",
    ],
    sources: ["leedsImplants"],
  },
  {
    title: "Are immediate fixed teeth the same as final teeth?",
    body: "Immediate temporary teeth and the final full-arch restoration are different stages. Whether a temporary bridge can be fixed at surgery depends on clinical conditions and implant stability. Ask what will be fitted after the first visit, what its limitations are and which alternative is planned if immediate loading is unsuitable in your case.",
    paragraphs: [
      "A statement about 'teeth in a day' should prompt questions about which restoration is being fitted, how it is supported and what remains to be completed. Request separate descriptions of the temporary and final materials, the clinical reviews and the later restorative stage. Do not assume an attractive photograph taken soon after surgery shows a completed course of treatment.",
      "Ask how an alternative temporary arrangement would affect daily care, cost and travel if the preferred option cannot be used. The dentist should explain what you can expect between stages and how any change will be authorised. A remote enquiry cannot promise immediate fixed teeth, and a temporary smile does not establish that the implants are ready for the final restoration. Keep the staged plan with your written estimate so the two are considered together.",
    ],
    sources: ["stages"],
    links: [{ text: "Plan the surgical and restorative visits", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "How long can healing and staged treatment take?",
    body: "Full-arch treatment may involve surgery, a healing interval, review and later fitting of the final teeth. The clinician decides readiness for each stage rather than working to a holiday deadline. Ask for a schedule that distinguishes confirmed appointments from provisional dates and explains how changes in healing or additional procedures could affect your visits.",
    paragraphs: [
      "For general implant context, Leeds Teaching Hospitals describes gum healing of around 1–2 weeks and, in most cases, integration of the implants over 2–6 months before use. These ranges are not a personal All-on-4 timetable, and immediate-loading protocols differ. They illustrate why a comfortable gum surface and readiness for the final restoration are separate clinical questions.",
      "Ask how extractions, grafting if required and reviews fit into your proposed sequence. Confirm what you will wear while healing and who responds to concerns when you are in the UK. If the plan changes, request an updated cost and appointment schedule before agreeing to further work. Do not infer a completion date from the implant count, included hotel nights or a general description of another patient's treatment.",
    ],
    sources: ["leedsImplants"],
  },
  {
    title: "Is the published implant-and-crown package an All-on-4 price?",
    body: `The published ${packagePrice(combined)} package specifies four Osstem implants and 24 zirconium crowns. It is not an All-on-4 price and does not by itself specify a fixed full-arch bridge. Ask for an individual full-arch quotation identifying each arch, the implant positions, temporary teeth and final restoration, rather than assuming the same implant count means the same treatment.`,
    paragraphs: [
      "The combined package registry was confirmed by the owner on 21 October 2026. It describes that package only and must not be multiplied, divided or relabelled to invent a full-arch fee. A treatment with the same number of implants can involve a different restorative design, component list, materials and clinical starting point.",
      "Request the complete full-arch specification before comparing totals. Confirm whether the proposal is for one arch or both, which teeth would be removed, what final material is planned and which procedures remain uncertain until assessment. Ask for accommodation and transfers to be itemised wherever offered. No universal full-arch price or personalised treatment suitability can be established from a package label or the initial enquiry alone.",
    ],
    links: [{ text: "Read the scope of the published packages", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "What should a full-arch estimate and travel budget include?",
    body: "A full-arch estimate should specify the arch, implant system, connecting components, temporary restoration, final teeth and all planned clinical stages. Ask about scans, extractions, grafting if needed and reviews separately. Your travel budget should also address flights, accommodation, transfers, companion expenses and any costs of extending or repeating a visit when those items are outside the quote.",
    paragraphs: [
      "Request the currency, payment deadlines, exclusions and cancellation terms in writing. Ask which charges are confirmed and which depend on examination. A figure might describe the surgical stage rather than the entire course, so confirm whether final teeth are included and whether they have a separate payment date. Compare the same scope before comparing the price.",
      "Ask what happens to bookings and payments if the clinical plan changes or you choose not to proceed. Confirm insurance for planned dental treatment abroad rather than assuming ordinary holiday cover is sufficient. Keep both trips and any healing interval on the planning sheet if staged care is proposed. An organised budget cannot remove clinical uncertainty, but it can show clearly which arrangements are agreed and which questions remain unresolved before you commit.",
    ],
    links: [{ text: "Use the detailed treatment quote checklist", href: "/guides/compare-dental-quotes" }, { text: "Prepare staged travel arrangements", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "What does long-term research show for the lower jaw?",
    body: "Long-term All-on-4 studies distinguish the replacement bridge surviving from individual implant survival, implant success and complications. These are different outcomes, so a high percentage cannot mean that every patient remained free of repairs. Read the study population and follow-up alongside the result, and ask your dentist which evidence is relevant to the proposed treatment.",
    paragraphs: [
      "Maló and colleagues' 2019 retrospective lower-jaw series included 471 patients and 1,884 implants, with follow-up of 10–18 years. Cumulative prosthesis survival was 98.8%, implant survival 93% and implant success 91.7%. The report recorded 31.6% lost to follow-up and 5.7% who died. These limitations matter when interpreting long-term estimates; not every original participant remained available for assessment.",
      "The study reported biological complications at 11.8% at implant level and mechanical complications at 36.7%. These are different outcome measures and must not be added into one patient risk. These are external historical results from a specific protocol and setting, not audited Akdeniz Dental outcomes or a guarantee for you. Discuss the design, maintenance and individual clinical factors rather than selecting treatment from the largest percentage alone.",
    ],
    quotes: [{ text: "Nevertheless, biological and mechanical complications can occur.", name: "Paulo Maló", role: "Surgeon in the Oral Surgery Department at Maló Clinic, Lisbon, at publication; lead author, quoted from the study conclusion", source: "allOn4Mandible", attributionDate: "28 March 2019" }],
    sources: ["allOn4Mandible"],
  },
  {
    title: "Can upper-jaw results be assumed from lower-jaw studies?",
    body: "Upper- and lower-jaw studies describe different patient groups and clinical settings, so their percentages should not be treated as interchangeable or compared as a direct trial. Ask which arch the evidence concerns, what restoration was used and how success was defined. The clinician must assess your anatomy and proposed treatment rather than applying an unrelated headline result.",
    paragraphs: [
      "A separate 2019 Maló and colleagues retrospective upper-jaw series included 1,072 patients and 4,288 implants, followed for 5–13 years. Reported prosthetic success was 99.2%, implant survival 94.7% and implant success 93.9%; 20.4% were lost to follow-up. Biological complications were reported at 7.8% at implant level. Mechanical complications were 58.8% for provisional prostheses and 7.3% for definitive prostheses.",
      "The provisional and definitive figures concern different restoration stages, not competing personal treatment offers. The article lists funding from Nobel Biocare Services AG. These results do not establish the performance of every system or the treatment this clinic might propose. Use them to ask about temporary and final teeth, reviews and repair responsibilities. Keeping study design, funding, follow-up and outcome definitions visible is more informative than presenting a single universal 'success rate'.",
    ],
    sources: ["allOn4Maxilla"],
  },
  {
    title: "How will I clean and maintain the restoration in the UK?",
    body: "Ask the treating team to demonstrate the cleaning method for your actual restoration and provide written instructions, a review schedule and a contact route. Maintenance needs depend on the design and your clinical circumstances. Before returning home, confirm who will provide routine care and whether a local dentist has agreed to review this particular restoration.",
    paragraphs: [
      "Request the implant brand and model, component details, treatment summary and relevant imaging. The FDA advises keeping implant identification records and arranging regular professional visits. Records can help another dentist understand the work, but they do not mean every practice can provide every component or has agreed to accept responsibility for future maintenance.",
      "In the BDA's 2022 survey of 1,000 UK dentists, 93% raised continuity-of-care concerns and 77% mentioned difficulties seeking redress or making complaints about dental tourism. Those historical responses are not All-on-4 complication rates or findings about this clinic. They explain why the review arrangements and responsibilities belong in the initial decision. Ask what can be discussed remotely and which concerns require examination, and keep the clinic's contact route available between planned visits.",
    ],
    sources: ["implantRecords", "bdaTourism"],
  },
  {
    title: "What happens if an implant or bridge component needs attention?",
    body: "An implant problem, a loose connecting component and damage to the replacement teeth require different assessments. Ask the clinic how each concern would be reviewed and who is responsible for care at home or in Antalya. A bridge remaining present does not establish that all its components and surrounding tissues need no further attention over time.",
    paragraphs: [
      "The FDA advises contacting your provider promptly if an implant feels loose or painful. Explain what you notice and when it began, but let a clinician determine the cause. A message or photograph may assist communication without replacing an examination. Seek appropriate local care for urgent concerns rather than waiting solely for a future trip abroad.",
      "Before treatment, ask how the plan would be reviewed if an implant did not integrate or a restoration needed repair. Confirm the possible temporary arrangements and how further work would be authorised. Keep those questions separate from a general research survival statistic. You need a practical route to assessment, records and a discussion of costs, rather than assuming a warranty predicts the clinical solution or that the same response is appropriate for every problem.",
    ],
    sources: ["implantRecords"],
  },
  {
    title: "Who pays for repairs, reviews and unplanned return travel?",
    body: "Coverage depends on the written treatment and guarantee terms, so clarify it before booking. Ask which reviews, repairs or replacements are included, what exclusions apply and whether extra flights or accommodation are covered. A warranty does not automatically pay every cost arising from a biological complication, maintenance need or visit to another dentist after you return home.",
    paragraphs: [
      "The BDA's historical survey reported that 65% of relevant respondents described repair costs of at least £500 after dental treatment abroad, and 51% reported more than £1,000. One in five of those dentists reported costs exceeding £5,000. These are reports about cases encountered across treatments, not a forecast of your bill or a measure of full-arch treatment risk.",
      "Ask for the contact route, assessment process and financial responsibilities in writing. Confirm what happens if urgent care is provided locally and what records or invoices the clinic needs to review the situation. Keep the treatment terms alongside the clinical plan and aftercare instructions. Contingency planning makes the commitment clearer without assuming a problem will occur or treating a general guarantee as a substitute for individual clinical advice.",
    ],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time of the statement", source: "bdaTourism", attributionDate: "14 July 2022" }],
    sources: ["bdaTourism"],
  },
  {
    title: "Can I consider finance after reviewing a full-arch estimate?",
    body: "You can request a written treatment estimate before deciding how to pay. The enquiry is separate from a credit application and does not guarantee eligibility. Any finance remains subject to status, affordability and lender approval; a borrowing option cannot establish suitability for All-on-4 or replace the dentist's explanation of the procedures and alternatives proposed.",
    paragraphs: [
      "Establish the complete treatment scope and total before considering a monthly amount. Ask for payment stages alongside the clinical appointments and confirm what happens if assessment changes the plan or you decide not to proceed. Include travel, essential spending and future dental care in your affordability calculation rather than treating the quoted treatment fee as the entire commitment.",
      "MoneyHelper explains that a representative APR only has to be offered, or bettered, to 51% of approved borrowers, so it does not establish your personal rate. If you choose to consider credit, read the actual term, rate, fees and total repayable in the provider's documents. Ask which eligibility checks differ from a full application and what may be recorded on your credit file. The coordination team cannot promise approval or a lender's terms.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Understand the separate dental finance process", href: "/dental-finance" }],
  },
  {
    title: "What information should I send for an individual full-arch plan?",
    body: "Describe whether your concern involves the upper arch, lower arch or both, any remaining teeth, existing implants or dentures and the outcome you want assessed. Include your likely travel period and preferred reply method. Optional photographs support an initial discussion; the dentist must still assess suitability and confirm the plan, stages and final cost.",
    paragraphs: [
      "Request a written proposal identifying every arch, implant system, temporary restoration, final material, additional procedures and aftercare responsibilities. Ask which details remain provisional until examination and how a revised plan will be explained before further work is authorised. Share health details only through the agreed enquiry process and review the privacy information before sending records or images.",
      "Clinical figures on this page come from the linked publications and describe their own populations, follow-up and outcome definitions. They are not clinic success claims, individual predictions or year-on-year performance comparisons. We have not invented a full-arch price or patient case. The coordination team prepared this general planning guide, and the independent experts quoted have not endorsed the service. Personal treatment advice comes from the treating dentist, while any personal credit terms come from the lender.",
    ],
    links: [{ text: "Request my written full-arch estimate", href: "/get-a-quote?treatment=All-on-4#treatment-enquiry" }],
  },
];
