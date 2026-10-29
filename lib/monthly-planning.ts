import type { Section } from "./content";

/** Editorial planning information, not lender terms or a clinic price list. */
export const monthlyPlanning = {
  title: "Planning dental treatment and monthly payments in Turkey",
  answer: "Paying monthly or in instalments for dental treatment in Turkey is a separate credit decision from your treatment estimate. Any finance is arranged through a credit broker such as Ideal4Finance, which is a broker and not a lender, and the lender decides on your application subject to status. Start with a written estimate, then compare the APR, term, fees and total amount repayable in the lender’s own documents.",
  intro: "Start with a written treatment estimate, a realistic travel budget and a separate decision about how to pay. This guide helps UK patients organise those decisions before booking dental care in Antalya. It explains what to ask and record, without supplying clinic prices, repayment examples or a promise of credit.",
  sections: [
    {
      title: "What should I arrange before considering monthly payments?",
      body: "Before thinking about repayments, understand what your teeth need. Your written quote sets out the proposed treatment, estimated cost and expected visits. The dentist confirms the final plan after a clinical assessment. Keep the treatment decision separate from the question of how you will pay for it.",
      paragraphs: [
        "Begin with your priorities: comfort, chewing, replacing a missing tooth or changing appearance. Explain any existing symptoms and what you hope treatment will achieve. Ask the clinical team which concerns require an examination and which information can only be provisional when photographs are used. A budget selected on this website does not decide which procedures are appropriate. Ask whether gum health needs assessment as part of your plan; NIDCR explains how dental professionals check for gum disease.",
        "Keep a dated copy of the estimate and note what still needs confirmation. If the plan changes after examination, ask for an updated description and cost before agreeing to additional work. Read the treatment pages for clinical distinctions rather than choosing a procedure solely because it appears to fit a monthly budget.",
      ],
      sources: ["gdc", "gumAssessment"],
      links: [{ text: "Compare the scope of written dental quotes", href: "/guides/compare-dental-quotes" }],
    },
    {
      title: "Can I pay in instalments, and how is a treatment quote different from a finance offer?",
      body: "You can then review available finance options through Ideal4Finance. It is a credit broker, not a lender. Compare the APR, term, fees and total amount repayable before deciding whether an offer suits your budget. A treatment estimate describes dental care; it does not set the terms of a credit agreement.",
      paragraphs: [
        "Organise the information into separate records: the proposed care and its cost, your travel arrangements, and any lender documents you receive. This makes it easier to see which organisation should answer a question. A change to an appointment or restoration belongs with the clinic; a question about the wording of a credit offer belongs with the broker or lender.",
        "MoneyHelper explains that the rate a borrower receives can differ from the rate advertised. Its personal-loans guide also explains why the full borrowing cost matters. Use the actual documents supplied for your circumstances, rather than interpreting the website’s budget slider or a treatment estimate as a repayment illustration.",
      ],
      sources: ["personalLoans"],
      links: [{ text: "Read the existing finance process information", href: "/dental-finance" }],
    },
    {
      title: "How can I understand the whole cost of the trip?",
      body: "Check whether your quote includes scans, temporary restorations, accommodation, transfers and follow-up. Budget for flights, insurance and any return visits separately unless your quote explicitly includes them. A useful trip budget identifies what is included, what you must arrange independently and which costs remain uncertain before you book.",
      paragraphs: [
        "Write down each item with its provider, currency, expected payment date and the document confirming it. An item described as included still needs a scope: which airport journeys, which hotel nights and which room arrangements? If someone travels with you, ask whether their accommodation and transport are covered or charged separately.",
        "Leave room in your plan for changes rather than treating a headline package as a cap on every expense. In the FCA’s May 2024 survey, one in ten adults had no cash savings and another 21% had less than £1,000 for emergencies. These are national context figures, not treatment prices or a suggested reserve. Choose a personal contingency using your own commitments and written arrangements.",
      ],
      sources: ["fcaSavings"],
      links: [{ text: "Check treatment inclusions and exclusions", href: "/prices" }],
    },
    {
      title: "Why should my household budget come before booking?",
      body: "Your travel and treatment plans need to fit alongside rent or mortgage payments, household bills and existing commitments. Assess what you could manage if costs change or income falls. A budget that works only when everything goes exactly as expected leaves little room for an unplanned expense or a delayed visit.",
      paragraphs: [
        "The FCA’s Financial Lives survey estimated that 13.1 million UK adults, or 24%, had low financial resilience in May 2024. The May 2022 figures were 12.9 million and 24%. The regulator describes the proportions as not statistically different. This is a two-year comparison, not evidence of a year-on-year change or a forecast about dental patients.",
        "Write your own essential outgoings down before discussing a treatment budget. Consider whether time away from work would affect income and whether someone at home would need additional support. A national survey cannot tell you what is affordable for your household. Take time to review the figures and ask for independent help if you find the decision difficult.",
      ],
      quotes: [{ text: "Our data shows that finances are stretched for many", name: "Sarah Pritchard", role: "Executive Director of Consumers and Competition at the Financial Conduct Authority", source: "fcaSavings", attributionDate: "16 May 2025" }],
      sources: ["fcaSurvey"],
    },
    {
      title: "When should I seek independent money guidance?",
      body: "Seek independent guidance if planning treatment leaves you uncertain about essential bills, existing borrowing or a financial buffer. A patient coordinator can explain the enquiry process, but cannot decide what is affordable for you. MoneyHelper provides a separate place to explore money questions before you make a commitment to treatment or travel.",
      paragraphs: [
        "The FCA reported that 1.7 million people had used a debt advice or debt management service in the 12 months covered by its May 2024 survey. Among those users, 61% said their debts were more manageable as a result. That finding concerns respondents’ experiences of support, not the outcome of any particular service or a benefit of borrowing for dental care.",
        "You can pause an enquiry while you seek help or decide to save before revisiting treatment. If you are already struggling with bills, read independent guidance before adding a new commitment. You do not need to share bank statements, a credit report or account passwords with the patient coordination team to ask how a dental enquiry works.",
      ],
      quotes: [{ text: "People who experience individual financial wellbeing are less stressed about money", name: "Oliver Morley", role: "Chief Executive at the Money and Pensions Service", source: "fcaSavings", attributionDate: "16 May 2025" }],
      sources: ["personalLoans", "fcaSavings"],
    },
    {
      title: "What if financial documents are difficult to understand?",
      body: "Ask the organisation that issued a document to explain anything you cannot understand before accepting it. Keep your questions specific: which figure is the treatment estimate, which is a travel cost and which describes credit? Request an explanation in a format you can review at your own pace rather than guessing.",
      paragraphs: [
        "In May 2024, the FCA estimated that 10.3 million adults, or 19%, had low confidence working with numbers. It also estimated that 9.8 million, or 18%, had poor financial numeracy. Those are separate survey measures and should not be added together. Difficulty interpreting a document is a reason to ask for clarity, not to rush a decision.",
        "A practical approach is to list the document name, the question and who will answer it. Save the written response alongside the version you were reading. If someone helps you review information, keep control of the decision and any account access. Our existing finance FAQ explains the roles involved; it does not replace the documents supplied for an individual application.",
      ],
      sources: ["fcaSurvey"],
      links: [{ text: "Check the existing finance questions", href: "/finance-faq" }],
    },
    {
      title: "Who handles clinical care, coordination and credit questions?",
      body: "Akdeniz Dental in Antalya, Turkey provides clinical assessments, treatment planning and dental treatment through its clinical team. Akdeniz Dental Consultancy UK Ltd provides non-clinical patient coordination and administrative support. Ideal4Finance is a credit broker, not a lender. Address each question to the organisation responsible for that part of the process.",
      paragraphs: [
        "Ask the clinic to identify the dentist responsible for assessment and the professional who would perform the proposed procedure. Confirm their current role and qualifications directly. A UK coordinator can help organise communication and appointments, but that contact is not a substitute for an examination or a clinical explanation from the treating team.",
        "For travel arrangements, record who is making the booking and who can change it. For credit questions, use the broker or lender’s own contact channel. Keep clinical, administrative and financial correspondence distinguishable so an unanswered question does not disappear between organisations. The clinic page links the provider’s published team profiles and contact details, with their source attribution.",
      ],
      sources: ["team", "contact"],
      links: [{ text: "See the treating clinic and its published team", href: "/our-clinic" }],
    },
    {
      title: "How should I coordinate separate treatment visits?",
      body: "Use a written clinical schedule to plan each visit and the time between visits. Ask which appointments involve assessment, treatment, temporary restorations and the final restoration. Do not assume a holiday length or a payment arrangement determines the clinical timetable. The treating team must explain the sequence appropriate to your proposed care.",
      paragraphs: [
        "Some implant plans involve separate surgical and restorative stages, with healing and review between them. Additional procedures can change the sequence. Ask what happens if a review shows that the next stage should be delayed and whether your travel bookings can be moved. A provisional return date is different from confirmation that the next procedure can go ahead.",
        "Put appointment dates, accommodation nights, time away from work and any companion arrangements on the same calendar. Check which bookings you control and which are arranged by the clinic. Keep the clinical schedule separate from payment paperwork so each organisation can explain its own dates. Our visit-planning guide covers the travel checklist in more detail without promising a fixed treatment duration.",
      ],
      sources: ["stages", "universityImplants"],
      links: [{ text: "Plan dental visits to Antalya", href: "/guides/plan-dental-visit-antalya" }],
    },
    {
      title: "What should I ask if the estimate changes after assessment?",
      body: "Ask for the revised treatment description, the reason for the change and an updated itemised estimate before agreeing to additional care. An initial online estimate cannot confirm everything a dentist may find during examination. Make sure you understand which parts remain optional and which questions need further clinical discussion before you decide.",
      paragraphs: [
        "For example, a proposal involving a temporary restoration and a later final restoration should identify both stages. If another procedure is suggested, ask how it affects visits, recovery and the overall plan. This is a planning example, not a claim that you need a particular procedure or that an extra treatment has a fixed price.",
        "Keep the original estimate and the revised version so you can see what changed. Clarify any effect on accommodation, transport or time away from work with the relevant provider. Do not assume that a revised clinical estimate automatically changes any separate agreement. Ask the organisations involved to explain their own documents and record the answers before committing to a new plan.",
      ],
      links: [{ text: "Understand personalised treatment estimates", href: "/prices" }],
    },
    {
      title: "What aftercare questions belong in my original budget?",
      body: "Ask how reviews, routine maintenance and unexpected concerns will be handled after you return to the UK. Request the clinic’s written aftercare arrangements and clarify responsibility for appointments and travel costs. A treatment estimate, a warranty and a plan for reporting a problem answer different questions and should be read separately.",
      paragraphs: [
        "Record the clinic’s contact channel and the information it wants if a concern arises. Ask which records you will receive when treatment is completed and keep them where you can find them. For implant care, the system used and the restoration fitted can be important information for a dentist assessing a later concern.",
        "Discuss ongoing cleaning and review needs with your treating clinician. If you expect a UK dentist to provide follow-up, speak to that practice before travelling rather than assuming it has agreed to do so. Ask who would assess an issue and what a return visit could involve. No fixed guarantee period, free UK remedial care or unlimited travel cover is promised by this planning guide.",
      ],
      sources: ["implantRecords"],
      links: [{ text: "Read the patient journey and preparation information", href: "/how-it-works" }],
    },
    {
      title: "How do I enquire without making a credit application?",
      body: "Use the treatment enquiry form to explain your goals and choose email or WhatsApp for a response. A treatment enquiry is not a credit application. The purpose is to help the team understand what you want to discuss and arrange the next appropriate step towards a written estimate and clinical assessment.",
      paragraphs: [
        "Select the treatment you are interested in, or explain that you are unsure. Describe the practical outcome you hope for, such as replacing a missing tooth or discussing the appearance of existing teeth. If you use the budget planner, its selected amount is a discussion preference, not a clinic price, an approval limit or a monthly repayment.",
        "Use the form’s consent information to decide what you wish to submit. Enquiry photographs are handled for the assessment process and are not permission to publish a patient story. Do not send lender login details or financial account information. You can ask for an explanation of the process before deciding whether to provide photographs or progress with an estimate.",
      ],
      links: [{ text: "Start a treatment enquiry", href: "/get-a-quote#treatment-enquiry" }, { text: "Read how enquiry information is handled", href: "/privacy" }],
    },
    {
      title: "How were the information and statistics on this page checked?",
      body: "The patient coordination team checked this guide and its linked public sources on 21 October 2026. The financial statistics describe the FCA’s May 2024 survey, published in May 2025. They are background about UK adults, not a new survey of this site’s visitors, clinical outcomes or lender acceptance rates.",
      paragraphs: [
        "The FCA survey included 17,950 respondents. Population estimates, percentages and comparison years are retained so readers can distinguish sample size from the estimated number of UK adults. Related measures are not interchangeable: financial resilience, confidence with numbers and use of debt advice describe different questions. Older research remains labelled with its original period rather than being presented as current patient data.",
        "The quotations are short extracts from the FCA’s published release, with the speakers’ roles as attributed there. They do not imply that either speaker endorses this website or has reviewed your circumstances. This guide contains no clinic price list, personalised financial recommendation or credit offer. Follow the linked sources for their methodology and ask the treating dentist or lender about the information specific to your case.",
      ],
      sources: ["fcaSurvey", "fcaSavings"],
    },
  ] satisfies Section[],
};
