import type { Section } from "./content";
import { clinicProfile } from "./evidence";
import { packageForId, packagePrice } from "./packages";
const price = (id: string) => packagePrice(packageForId(id)!);

/** Clinic-specific decision support; external research is not a clinic outcome audit. */
export const clinicPlanningSections: Section[] = [
  {
    title: "Where is Akdeniz Dental, and how do I confirm my appointment?",
    body: "Akdeniz Dental’s published contact information places the clinic in Muratpaşa, Antalya. Confirm your appointment address, treating professional and arrival instructions directly before travelling. The Turkish clinic provides clinical assessment and treatment; Akdeniz Dental Consultancy UK Ltd provides non-clinical coordination and administrative support, so the organisations have different responsibilities in your journey.",
    paragraphs: [
      `The official clinic address is ${clinicProfile.streetAddress}, ${clinicProfile.locality}. Its published contact number is ${clinicProfile.telephone}. Use the official contact page to check the current details, then keep the appointment confirmation with your itinerary. A general directory entry does not establish which location or clinician applies to a particular appointment.`,
      "Tell the coordination team your proposed travel period and ask what must be established before a schedule can be confirmed. An enquiry may help organise an estimate, but it is not a completed clinical assessment. Ask what remains provisional, which appointments are planned and who will answer clinical questions. Keep changes in writing rather than relying on a package description or a conversation about possible dates. This makes the next step clearer without treating travel availability as a reason to rush a treatment decision.",
    ],
    sources: ["contact"],
    links: [{ text: "Ask the coordination team about an appointment", href: "/contact" }],
  },
  {
    title: "Who will examine me and carry out each procedure?",
    body: "Ask Akdeniz Dental to name the professional expected to assess you and carry out each stage of care. The published team profiles show the clinic’s stated roles and education, but do not confirm appointment availability or independently verify registration. Request the qualifications and experience relevant to your own proposed procedure before consenting to treatment.",
    paragraphs: [
      "The source-linked profiles above identify Dr. Mustafa Akça, Dr. Mehmet Onur Merey and Dr. Duygu Kolay Toklu. Their education and roles are attributed to the clinic’s own publications, checked on 22 October 2026. This is a selection of published profiles, not a claim that the clinic has only those practitioners. No clinician is presented as the author or independent reviewer of this website’s planning information.",
      "Ask who is responsible if a case needs assessment by another discipline, and how the team explains that referral. A title or university name alone does not decide which treatment is appropriate. Discuss the examination, diagnosis and alternatives with the assigned professional. The coordination team can help request that conversation, while clinical decisions and individual consent remain with the treating team in Turkey. Keep the named contact with your written plan so responsibilities are clear.",
    ],
    sources: ["team", "gdc"],
  },
  {
    title: "What do clinic and laboratory photographs actually show?",
    body: "Use Akdeniz Dental’s official clinic and laboratory galleries to see photographs it publishes of its setting and facilities. Those images answer questions about the environment, not whether a particular material or procedure is suitable for your teeth. Ask how the clinical and laboratory stages apply to the restoration proposed in your individual treatment plan.",
    paragraphs: [
      "Ask the team to identify the restoration type, material specification, temporary work and any trial or adjustment appointments. Request an explanation of how the dentist checks the fit and bite before finalising the work. A photograph of equipment cannot establish the result you will receive, and a laboratory gallery is not an audit of complication rates or a substitute for discussion with the treating dentist.",
      "The model and care-setting images used in this website’s design are labelled as illustrative. They are not represented as photographs of your assigned practitioner, the actual clinic interior or a patient’s treatment result. Follow the official source links for clinic imagery and use the patient-results page for the separate question of published cases. Ask about the procedure and treatment stage shown rather than inferring clinical quality from a polished photograph alone.",
    ],
    sources: ["gallery", "lab"],
    links: [{ text: "Understand how to evaluate patient photographs", href: "/before-and-after" }],
  },
  {
    title: "How should I evaluate dental tourism research when choosing a clinic?",
    body: "Use research to identify questions about care, not to assign a personal risk from an isolated percentage. Check who was surveyed, when the work was published and what the number measures. A UK dentist survey cannot establish Akdeniz Dental’s outcomes, compare individual clinics or replace an assessment of your condition and proposed treatment.",
    paragraphs: [
      "The BDA’s July 2022 survey involved 1,000 UK dentists. Of all respondents, 94% had examined patients who travelled abroad; among those dentists, 86% reported treating cases with problems. These percentages describe dentist responses, not the proportion of travelling patients who had complications.",
      "Ask what examination is needed, which alternatives are available and how concerns are handled. Request information relevant to the actual procedures proposed for your teeth. A broad survey is useful for preparing a conversation, but it does not supply a clinic-specific denominator, follow-up period or outcome definition. Do not interpret its findings as an Akdeniz Dental success or failure rate. The linked original source lets you inspect the population and wording before repeating a statistic as a fact about an individual provider.",
    ],
    sources: ["bdaTourism", "gdc"],
    quotes: [{ text: "Patients need to provide informed consent for any treatment they have and be wary of a hard-sell", name: "Eddie Crouch", role: "Chair of the British Dental Association at publication", source: "bdaTourism", attributionDate: "14 July 2022" }],
  },
  {
    title: "What should a crown or veneer assessment establish?",
    body: "The dentist should establish the health of your teeth and gums, the problem to be addressed and the alternatives before recommending crowns or veneers. These restorations differ in their preparation and purpose. Ask which teeth are involved, what changes are irreversible and why the proposed option is appropriate instead of choosing care from a package photograph.",
    paragraphs: [
      "In a September 2026 GDC article, Shamir B. Mehta reports that 27% of 1,619 adults examined in the 2023 oral health survey had at least one crowned tooth. Among those over 65, the proportion was 58%. These describe the survey sample, not the number of people who should receive crowns or results achieved by this clinic.",
      "The same article emphasises the principles behind successful restorative care. Discuss existing fillings, tooth structure, gum health and the likely maintenance of any restoration with your dentist. If your aim is appearance, ask which alternatives could meet that aim and what happens if you leave things as they are. General patient information supports those questions but cannot select a restoration or determine how much preparation your own teeth require. You can request time to consider the explanation before consenting.",
    ],
    sources: ["gdcCrowns", "crowns", "veneers"],
    quotes: [{ text: "Crown treatments are still a valuable aspect of restorative dentistry and can offer excellent long-term outcomes.", name: "Shamir B. Mehta", role: "Lead Clinical Adviser, Fitness to Practise, at the General Dental Council at publication", source: "gdcCrowns", attributionDate: "10 September 2026" }],
    links: [{ text: "Understand crown planning", href: "/zirconia-crowns-finance" }, { text: "Compare veneer considerations", href: "/veneers-finance" }],
  },
  {
    title: "Can a published implant survival rate predict my result?",
    body: "An implant survival statistic concerns implants remaining present over a stated period; it does not guarantee every aspect of a patient’s result. Ask about the study population, follow-up and definition before applying a figure to your treatment. The dentist must explain the risks and maintenance needs relevant to your health, proposed surgery and final restoration.",
    paragraphs: [
      "Leeds Teaching Hospitals’ patient information states that about 90% of implants placed 10 years earlier remain present and functional. This is external general information, not an audited Akdeniz Dental survival rate, a warranty or a prediction for you. A surviving implant can still need attention to its attached restoration or surrounding tissues.",
      "Ask the clinic which evidence is relevant to the procedure proposed and what factors affect the interpretation. Discuss cleaning, smoking, gum health and clinical reviews with the dentist rather than relying on a headline percentage. Keep the distinction between an implant fixture, the connecting component and the final tooth or bridge: they may have different maintenance needs. The clinic’s assessment and your written aftercare plan should explain what to monitor and how to obtain help, without promising that a general research finding will describe your own experience.",
    ],
    sources: ["leedsImplants", "implantRecords"],
    links: [{ text: "Review implant treatment questions", href: "/dental-implants-finance" }],
  },
  {
    title: "How do I compare the clinic’s treatment proposal and package total?",
    body: "Compare the procedures, teeth, materials, stages and written inclusions before comparing the total. Package names do not establish that two plans offer equivalent care or that the larger plan is clinically preferable. Request a personalised treatment proposal and ask which details can change after examination, rather than treating a published package as your diagnosis or final quote.",
    paragraphs: [
      `The shared owner-confirmed package totals are ${price("zirconium-20")} for 20 zirconium crowns, ${price("zirconium-24")} for 24 zirconium crowns, ${price("veneers-16")} for 16 veneers and ${price("veneers-20")} for 20 veneers. The 4 Osstem implant plus 24 zirconium crown package totals ${price("osstem-4-crowns-24")}. These are complete specified package totals, not standalone prices for individual components. All are subject to clinical assessment and personalised treatment planning.`,
      "Read the Prices page for the current inclusions and request the scope relevant to your case. Identify excluded procedures, temporary restorations, accommodation arrangements and any uncertainty about additional work. Ask the clinic to explain a different clinical recommendation rather than simply matching a cheaper headline. Treatment payments, travel bookings and any credit agreement remain separate commitments. Neither selecting a package nor requesting a quote requires you to apply for finance, and a borrowing decision cannot establish clinical suitability.",
    ],
    links: [{ text: "Check current packages and written inclusions", href: "/prices" }, { text: "Use the detailed quote comparison checklist", href: "/guides/compare-dental-quotes" }],
  },
  {
    title: "What should I confirm about clinical stages and travel?",
    body: "Arrange travel around the clinical schedule confirmed for your case, including the appointments and reviews the dentist recommends. Included hotel nights are accommodation arrangements, not a promise about healing time or completion of every procedure. Ask whether care is staged, what remains provisional and how a changed plan would affect your visits before booking travel.",
    paragraphs: [
      "Confirmed crown and veneer packages include 5 hotel nights. The implant package includes 3 + 5 nights across two visits. Those figures do not establish the interval between visits, the point when you can fly or whether further care will be needed. Confirm the actual dates, room arrangements and airport and clinic transfers in your written quote.",
      "Discuss the stages directly with the clinical team, especially if your plan includes surgery, possible grafting or a final restoration fitted after healing. Tell the team if you cannot return during a proposed period. Do not assume a coordinator can shorten a clinical interval to fit flight availability. The visit planning guide provides a detailed checklist for organising documents and appointments; use it alongside the dentist’s individual advice rather than as a standard timetable for every patient.",
    ],
    sources: ["stages"],
    links: [{ text: "Prepare for your Antalya appointments", href: "/guides/plan-dental-visit-antalya" }],
  },
  {
    title: "How will concerns and aftercare be handled after I return home?",
    body: "Obtain the clinical contact route, review schedule and written aftercare instructions before leaving Turkey. Ask how the clinic assesses a concern from the UK, when a return visit might be required and who pays associated costs. Coordination support can organise communication, but it does not replace a dentist’s examination or establish that ongoing clinical care is already arranged locally.",
    paragraphs: [
      "In the BDA’s 2022 survey, 93% of all dentist respondents raised continuity-of-care concerns, 77% raised redress concerns and 66% raised communication concerns. These are reported concerns in a national dentist survey, not measured patient complication rates or an audit of this clinic.",
      "Turn those themes into a practical handover: name the clinical contact, keep the agreed review arrangements and retain the treatment summary and component details. Ask about symptoms that need prompt attention and where to seek urgent help. Read the actual warranty conditions instead of assuming every concern or return journey is covered. A promise about a product or restoration is different from an assurance about biological healing. The clinician should explain the limits of each and the steps for a complaint if the agreed process does not resolve a concern.",
    ],
    sources: ["bdaTourism", "gdc", "implantRecords"],
    links: [{ text: "Ask about the clinical follow-up route", href: "/contact" }],
  },
  {
    title: "What should I know about possible follow-up expenses?",
    body: "Ask which review, repair and return-visit expenses are covered by the written agreement and which remain your responsibility. There is no single contingency figure that guarantees protection. Check travel, accommodation, treatment and insurance separately before paying, and request clarification if a package total appears to promise more than the actual terms describe.",
    paragraphs: [
      "Among relevant respondents in the BDA’s 2022 survey, 65% reported remedial costs of at least £500 after treatment abroad and 51% reported more than £1,000. These historical dentist reports are not a current repair tariff, a forecast for your case or charges quoted by Akdeniz Dental.",
      "Keep a copy of the original proposal and any revisions so that the agreed scope can be checked later. If a concern requires assessment, ask who provides that assessment and how any proposed work would be priced. Check insurance coverage directly rather than assuming planned dental care and complications are included. If another trip would be difficult to arrange or afford, discuss that before committing. You can delay a decision while you obtain clearer written information; a lower advertised total does not remove the need to understand continuing responsibilities.",
    ],
    sources: ["bdaTourism", "gdc"],
    links: [{ text: "Review the treatment estimate checklist", href: "/guides/compare-dental-quotes" }],
  },
];
