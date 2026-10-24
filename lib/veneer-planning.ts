import type { Section } from "./content";
import { packageForId, packagePrice } from "./packages";

// Owner-confirmed package registry (21 October 2026); never standalone tooth fees.
function pack(id: string) {
  const item = packageForId(id);
  if (!item) throw new Error(`Missing confirmed package: ${id}`);
  return item;
}
const small = pack("veneers-16");
const large = pack("veneers-20");
const money = (n: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 2 }).format(n);
const percent = (n: number) => `${Number(n.toFixed(1))}%`;

export const veneerPlanningSections: Section[] = [
  {
    title: "What can veneers change about my teeth?",
    body: "Veneers change the visible front surface of existing teeth. They can address aspects of colour, shape and small gaps, but do not replace missing teeth or move tooth roots. Your dentist should establish the cause of your concern and the health of each tooth before recommending a cosmetic restoration.",
    paragraphs: [
      `The published veneer packages cover 16 teeth for ${packagePrice(small)} or 20 teeth for ${packagePrice(large)}. These counts describe package specifications, not how many teeth you should treat. An individual plan could involve fewer teeth, a different approach or no veneers. The owner confirmed the package registry on 21 October 2026; your written estimate confirms the scope relevant to you.`,
      "Begin with a specific goal, such as changing a particular edge, colour or visible space. Ask which part can be addressed by a surface restoration and whether another treatment would better address the underlying issue. A photograph can help explain your preferences but cannot establish everything the dentist needs to assess. You can ask for a natural appearance without committing to a full-smile package.",
    ],
    sources: ["ohfVeneers"],
    links: [{ text: "See the published veneer package specifications", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "How do porcelain veneers, composite and crowns differ?",
    body: "A porcelain veneer is made separately and bonded to a tooth; composite material is shaped and bonded on the tooth. A crown covers the tooth more fully. Ask for both the restoration type and material in your treatment plan, because a material name alone does not tell you how the tooth will be prepared.",
    paragraphs: [
      "The ADA describes porcelain and composite as the two main veneer types. Composite may require less enamel removal and can be easier to repair, but has different stain and wear characteristics. Neither a particular material nor a familiar brand establishes suitability for your mouth. Ask what the clinic proposes for each tooth and what its maintenance will involve.",
      "If an offer uses 'zirconia veneers', request clarification of the restoration actually planned. A crown and a front-surface veneer should not be compared as if they involve the same work. Discuss your existing fillings and restorations with the dentist, and request separate reasons for any proposed crowns. Confirm the material in writing rather than inferring it from a package photograph or a general description of the clinic's services.",
    ],
    sources: ["veneers", "nhs"],
    links: [{ text: "Compare crown treatment and preparation", href: "/zirconia-crowns-finance" }],
  },
  {
    title: "Who needs assessment before choosing veneers?",
    body: "Everyone considering veneers needs a clinical assessment before the treatment and final cost can be confirmed. Discuss tooth and gum health, existing restorations, your bite and your goals with the treating dentist. A package choice, budget or photograph cannot determine whether veneers are appropriate or whether preparatory care is required first.",
    paragraphs: [
      "Make a list of the teeth that concern you and any treatment already recommended. Tell the clinical team about existing crowns, bonding or implants, and ask what records would be useful. Let the dentist decide which examination or investigations are needed. Ask which findings could change the proposal and how any additional work would be explained and authorised.",
      "You can also request an independent opinion before an irreversible change. Ask what the recommendation is intended to achieve, what happens if you defer treatment and which alternatives should be considered. If different teeth need different procedures, request a tooth-by-tooth plan. The coordination team can help organise the discussion; clinical advice and consent belong with the treating professional. Treatment in Antalya is provided by the clinic, while the UK company provides consultancy and patient coordination.",
    ],
    sources: ["gdc"],
    links: [{ text: "Check the clinic and coordination roles", href: "/our-clinic" }],
  },
  {
    title: "Is veneer preparation reversible?",
    body: "Enamel removed for a veneer cannot simply be put back, so preparation needs a careful discussion before you consent. Ask how your proposed restoration would change each tooth, what alternatives exist and what future repair or replacement might involve. A promise of minimal preparation does not establish what your own teeth require.",
    paragraphs: [
      "The NHS explains that some veneers involve removing a little of the front of the tooth, while not every veneer needs this. Ask the dentist to distinguish the proposed technique from a general marketing term such as 'no-prep'. If a plan changes to a more extensive restoration after examination, request an explanation and revised written proposal before agreeing to proceed.",
      "Keep the discussion focused on preserving appropriate tooth structure and solving your particular concern. The amount of preparation should follow the clinical assessment rather than a package size or an example from social media. Ask about sensitivity, possible complications and maintenance without assuming that every risk will happen. Independent expert statements here provide context for questions; they are not endorsements of this clinic or reviews of your personal treatment plan.",
    ],
    quotes: [{ text: "What seems like a quick fix can create long-term problems.", name: "Karen Coates", role: "Oral Health Content Specialist at the Oral Health Foundation", source: "ohfTourismRisk", attributionDate: "13 January 2026; updated 7 July 2026" }],
    sources: ["nhs", "ohfTourismRisk", "ohfCoates"],
  },
  {
    title: "Should I choose 16 or 20 veneers?",
    body: "Choose the number of veneers only after the dentist explains which teeth would benefit and why. The published packages are convenient specifications to discuss, not clinical targets. Ask how the proposed teeth relate to your smile, existing restorations and untreated teeth, and whether a smaller plan would meet your goals.",
    paragraphs: [
      "Moving from 16 to 20 restorations means four additional teeth, a 25% increase in the number treated. That arithmetic does not show an improvement in health or appearance. Ask for a diagram or tooth list so you understand the actual scope, including whether the proposal involves both arches and how the team plans to match the result to neighbouring teeth.",
      "If fewer teeth are appropriate, request a separate written estimate. Do not multiply a package average to create a price the clinic has not offered. Equally, do not add restorations simply to obtain a lower average package cost. Ask the dentist to distinguish essential care from elective changes, and take time to consider the explanation. Your decision should follow a comprehensible treatment plan with clear alternatives and responsibilities for later care.",
    ],
    links: [{ text: "Request an individual veneer estimate", href: "/get-a-quote?treatment=Veneers#treatment-enquiry" }],
  },
  {
    title: "How much do the published veneer packages cost?",
    body: `The published 16-veneer package costs ${packagePrice(small)} and the 20-veneer package costs ${packagePrice(large)}. Both include five hotel nights and the specified airport and clinic transfers. These are totals for the stated packages, subject to clinical assessment and personal treatment planning; your written quote must confirm the treatment, materials and arrangements for your case.`,
    paragraphs: [
      `Dividing the complete totals by the restoration counts gives package averages of ${money(small.price / 16)} and ${money(large.price / 20)} per veneer. These figures include the package arrangements. They are not separately purchasable veneer fees, and they should not be presented as a quote for treating just one tooth. The calculation uses the owner-confirmed registry rather than a general market estimate.`,
      "Ask what the veneer material is and whether temporary restorations, diagnostic work and any preparatory care are included in your personal quote. Confirm the currency, payment stages and exclusions before paying. A headline price can be a starting point for discussion, but the complete specification is what lets you compare offers. Check the linked price page for the current published packages and obtain a dated written version of your own plan.",
    ],
    links: [{ text: "Check package prices and inclusions", href: "/prices#dental-treatment-packages" }],
  },
  {
    title: "What does the price difference between the packages mean?",
    body: `The 20-veneer package costs ${money(large.price - small.price)} more than the 16-veneer package, a ${percent((large.price / small.price - 1) * 100)} increase in the total for 25% more restorations. Its package-average cost per veneer is ${percent((1 - (large.price / 20) / (small.price / 16)) * 100)} lower. These are comparisons of published specifications, not reasons to treat additional healthy teeth.`,
    paragraphs: [
      `The package-average difference is ${money(small.price / 16 - large.price / 20)} per restoration. To calculate the percentage difference, subtract the larger package's average from the smaller package's average, divide by the smaller average and multiply by 100. Percentages are rounded to one decimal place where needed. No UK price benchmark, discount or future saving is implied by this comparison.`,
      "Use calculations to understand an offer, then return to the clinical question of what you actually need. Two proposals may differ in material, preparation, appointments or aftercare even if their totals are similar. Ask providers to clarify those differences in writing. If the scopes are not equivalent, mark the comparison as incomplete rather than deciding solely on a per-tooth number. A larger package can cost less per restoration while still costing more overall.",
    ],
    links: [{ text: "Use the written quote comparison checklist", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "How many appointments will I need in Antalya?",
    body: "The published veneer packages specify one trip with five hotel nights. One trip can contain several clinical appointments; it does not mean one treatment session. Confirm the sequence of assessment, preparation, laboratory work, fitting and reviews with the treating clinic before buying flights, including what happens if the plan needs to change.",
    paragraphs: [
      "The Oral Health Foundation describes preparation and impression-taking followed by a later fit and colour check before bonding. Your schedule depends on the chosen material and clinical findings. Ask when any temporary stage occurs, how you can raise concerns about shape and how much time is available for adjustments. Included hotel nights are accommodation arrangements rather than a clinical completion guarantee.",
      "Request a dated itinerary that distinguishes confirmed appointments from provisional arrangements. Ask who will coordinate changes, whether extra nights create charges and when the clinician expects you to be ready to travel. A laboratory deadline should not replace the checks your care requires. If additional treatment is identified during assessment, discuss its effect on both price and travel before proceeding. Keep the clinic's contact details and the latest written plan accessible throughout the visit.",
    ],
    sources: ["ohfVeneers"],
    links: [{ text: "Plan appointments and travel in Antalya", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "How can I discuss a natural shade and shape?",
    body: "Describe the appearance you want in terms of your own teeth, face and preferences, then ask how the clinical team will review it before final bonding. Reference images can help communicate a style, but cannot promise an identical result. Confirm when shade, shape and any proposed changes can be discussed during your appointments.",
    paragraphs: [
      "Bring examples of what you like and explain which features matter, such as an edge shape or a subtle colour change. Ask how the proposed restorations will relate to untreated teeth and existing crowns or bonding. If you prefer a natural rather than very bright appearance, state that clearly. Request an explanation of the review process rather than choosing from a photograph alone.",
      "Ask who records your preferences and how the dentist will check the final fit and bite as well as appearance. If something differs from what you expected, raise it before the final stage and ask what can be adjusted. A model image is illustrative, and another patient's photographs do not establish your likely result. For published cases, ask which procedures and treatment stage are shown and whether the example resembles the clinical issue you are considering.",
    ],
    links: [{ text: "See how to interpret published patient cases", href: "/before-and-after" }],
  },
  {
    title: "How long can porcelain veneers last?",
    body: "Porcelain veneer longevity varies, and a study's survival estimate is not a personal expiry date or warranty. Ask the dentist about the material proposed, your own risk factors and maintenance. Published research can frame that discussion, but it cannot establish the outcome for a particular clinic, technique or patient without matching evidence.",
    paragraphs: [
      "Beier and colleagues' 2012 retrospective study at Medical University Innsbruck evaluated 318 porcelain veneers in 84 patients. It estimated survival at 94.4% after five years, 93.5% after ten years and 82.93% after twenty years. These are historical estimates for that study population and restoration type, not independently audited Akdeniz Dental results or a promise about the packages on this page.",
      "The abstract reports an average observation time of 118 months, with variation between restorations. A study covering a long period does not mean every veneer was observed for that full period. Ask the treating dentist which findings are relevant to your existing teeth, material and proposed technique. The useful question is how to plan maintenance and possible replacement over time, rather than assuming a research percentage guarantees a trouble-free smile.",
    ],
    sources: ["veneerBeier"],
  },
  {
    title: "Does a veneer surviving mean it never needs attention?",
    body: "A veneer can remain present and still need maintenance or repair. Studies use different definitions of survival, success and clinical acceptability, so percentages are only meaningful alongside the outcome measured. Ask whether a quoted figure means the restoration stayed in place, avoided replacement or remained satisfactory without any intervention over the follow-up period.",
    paragraphs: [
      "A 2004 prospective trial by Peumans and colleagues studied 87 porcelain veneers in 25 patients. The proportion remaining clinically acceptable without intervention fell from an average 92% at five years to 64% at ten years. None were lost, and 93% of restorations were recalled at ten years. Porcelain fractures (11%) and large marginal defects (20%) were the main reasons for failure under the study criteria. These findings illustrate why remaining present and needing no intervention are different outcomes.",
      "It is not a forecast that the same proportion of this clinic's patients will need repairs, and it should not be compared directly with a different study's survival estimate. When you see a longevity claim, ask for the original publication, patient group, material, follow-up and definition of failure. Then discuss how the evidence informs your own aftercare and budget. A treatment guarantee must be assessed against its written conditions, separately from a published research result.",
    ],
    sources: ["veneerPeumans"],
  },
  {
    title: "How do grinding, cleaning and reviews affect my plan?",
    body: "Discuss grinding or clenching, daily cleaning and ongoing reviews before committing to veneers. Ask the dentist whether these factors alter the proposed treatment and what maintenance you will need at home. A restoration does not remove the need to care for the underlying tooth or arrange a practical route to professional follow-up.",
    paragraphs: [
      "The ADA advises brushing with fluoride toothpaste twice daily and cleaning between teeth daily; decay can still develop around a veneer. It also notes that grinding and a deep overbite may affect suitability. Ask the clinician whether a protective appliance is appropriate for you rather than assuming a generic night guard resolves every bite-related concern.",
      "In Beier's study, 50% of patients had diagnosed bruxism, which was associated with a 7.7-fold greater failure risk. This association in a selected historical sample does not predict an individual's risk or show that an appliance removes it. Ask how your bite will be reviewed, what instructions apply to your material and when you should report discomfort or damage. Before leaving Antalya, confirm where routine reviews will take place and whether a local dentist has agreed to provide them. Keep any maintenance requirements attached to the written guarantee so you understand both the clinical advice and the contract conditions.",
    ],
    sources: ["veneers", "veneerBeier"],
  },
  {
    title: "What should I budget for beyond the package price?",
    body: "Budget for the treatment scope actually quoted, personal travel spending and any costs excluded from the aftercare terms. Ask about flights, companions, extra nights, preparatory procedures and possible return visits. A package that includes a planned stay does not automatically cover the costs of future repairs, maintenance or travel if a problem occurs.",
    paragraphs: [
      "In the BDA's 2022 survey of 1,000 UK dentists, 65% of relevant respondents described repair costs of at least £500 after dental treatment abroad, while 51% reported more than £1,000. These were historical reports about cases dentists encountered across treatments. They are not a veneer-specific complication rate, a representative bill for all travellers or data about Akdeniz Dental.",
      "Ask the clinic who pays for assessment and remedial work, which problems the guarantee covers and whether transport or accommodation are included. Request a clear route for obtaining help after returning home. An estimate should distinguish confirmed inclusions from uncertain costs, with any revision explained before additional work begins. A complete budget makes the decision clearer even when the final treatment recommendation differs from the package that first interested you.",
    ],
    quotes: [{ text: "The cost of follow-up treatment needs to be factored in.", name: "Eddie Crouch", role: "Chair at the British Dental Association at the time of the statement", source: "bdaTourism", attributionDate: "14 July 2022" }],
    sources: ["bdaTourism"],
  },
  {
    title: "Can I explore finance for veneer treatment separately?",
    body: "You can request a written veneer estimate before deciding how to pay. The treatment enquiry is separate from a credit application and does not guarantee borrowing eligibility. Any finance remains subject to status, affordability and lender approval; the clinician decides treatment suitability independently of whether a payment option might be available.",
    paragraphs: [
      "Start by confirming the treatment scope, exclusions and total rather than choosing a monthly amount first. If you later consider credit, review the provider's actual documents for the rate, term, fees and total repayable. Ask how eligibility checks and a full application differ, including any effect on your credit record. The coordination team cannot promise a lender's decision.",
      "MoneyHelper explains that a representative APR only has to be offered, or bettered, to 51% of approved borrowers. It therefore cannot tell you your personal rate. A longer term can also mean more interest overall even when monthly payments are smaller. Keep room in your budget for essential spending and future dental care. No borrowing example on a general information page replaces an individual offer, and requesting an estimate does not require you to apply for credit.",
    ],
    sources: ["personalLoans"],
    links: [{ text: "Understand the separate finance process", href: "/dental-finance" }],
  },
  {
    title: "What if I already have crowns, bonding or missing teeth?",
    body: "Existing restorations and missing teeth need their own assessment rather than being included automatically in a veneer plan. Ask the dentist to identify what is already present and the treatment proposed for each position. A front-surface veneer, replacement crown and restoration replacing a missing tooth solve different problems and need clear specifications.",
    paragraphs: [
      "Tell the team which work you know about and when it was done, and ask whether existing records would help. If you are unsure of the material or restoration type, say so instead of guessing. Request a plan that distinguishes replacements from changes to untreated teeth, and ask how the appearance and bite will be considered across the whole mouth.",
      "Alternatives may include whitening, alignment or a smaller repair, depending on the concern. Ask what each option would change, what remains untreated and how ongoing care would be arranged. Veneers alter visible contours but do not move roots as orthodontic care does. A combined plan needs its own price and schedule, not a multiplication of the veneer package average. You can seek another opinion before deciding on extensive cosmetic changes or replacing existing work.",
    ],
    sources: ["nhs"],
    links: [{ text: "Discuss a broader smile makeover plan", href: "/smile-makeover-finance" }],
  },
  {
    title: "What should I send to request a personal veneer estimate?",
    body: "Describe the teeth that concern you, the change you want and any existing restorations you know about. Include your likely travel period and choose email or WhatsApp for replies. Photographs are optional through the enquiry form and can support an initial discussion; the dentist must still confirm suitability, treatment and final cost after assessment.",
    paragraphs: [
      "Ask for an itemised written estimate covering restoration type, material, tooth count, temporary work, appointments and aftercare. Check what could change following examination and what happens if you decide against a revised plan. If photographs are requested, use the agreed channel and review the privacy information before sending health details. The enquiry starts a planning conversation rather than booking treatment or applying for credit.",
      "Prices here come from the owner's confirmed package registry; averages and percentage differences are calculations from those totals. Research findings are attributed to the original studies, not presented as clinic outcomes. The coordination team prepared this general guide, and the quoted independent experts have not endorsed the service. Keep your dated personal estimate and seek advice from the treating dentist about the clinical questions that matter for your own teeth.",
    ],
    links: [{ text: "Get my free written veneer estimate", href: "/get-a-quote?treatment=Veneers#treatment-enquiry" }],
  },
];
