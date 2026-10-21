import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Info, ExternalLink } from "lucide-react";
import { treatments, pages, guideArticles, informationSources } from "@/lib/content";
import { Icon, SectionTitle, Eyebrow } from "./ui";

export function TrustStrip() {
  return (
    <section
      className="trust-strip container"
      aria-label="Your treatment journey"
    >
      <div>
        <Icon name="users" />
        <p className="trust-label">UK patient support</p>
        <p>Here to help you plan</p>
      </div>
      <div>
        <Icon name="wallet" />
        <p className="trust-label">Payment options</p>
        <p>Subject to lender approval</p>
      </div>
      <div>
        <Icon name="file" />
        <p className="trust-label">A personal plan</p>
        <p>Clear, written information</p>
      </div>
      <div>
        <Icon name="tooth" />
        <p className="trust-label">Care in Antalya</p>
        <p>Clinical assessment first</p>
      </div>
    </section>
  );
}
export function TreatmentGrid({ compact = false, answerIntro = false }: { compact?: boolean; answerIntro?: boolean }) {
  return (
    <section className="section treatment-section">
      <div className="container">
        <SectionTitle
          label="FIND YOUR TREATMENT"
          title="Different smiles."
          accent="Personal plans."
          intro={answerIntro
            ? "Explore veneers, implants, crowns and full-arch options as different treatments with different indications. A clinical assessment establishes what your teeth need and whether a less invasive option is appropriate. Compare the proposed procedures and long-term care requirements before comparing prices or deciding how to pay."
            : "Explore the options, then find out what is right for you with a clinical assessment."}
        />
        <div className={`treatment-grid ${compact ? "compact" : ""}`}>
          {treatments.map((t, i) => (
            <Link className="treatment-card" href={`/${t.slug}`} key={t.slug}>
              <span className={`icon-tile tone-${i}`}>
                <Icon name={t.icon} size={32} />
              </span>
              <h3>{t.name}</h3>
              <p>{t.text}</p>
              <span className="text-link">
                Explore treatment <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
const journey = [
  {
    title: "Quote",
    label: "START ONLINE",
    description: "Tell us your goals by email or WhatsApp.",
    x: 20,
    y: 866,
    bullets: [
      "Choose your treatment interest",
      "Share your questions in writing",
      "No phone call required",
    ],
  },
  {
    title: "Plan",
    label: "MAKE IT PERSONAL",
    description: "Review your treatment plan and payment options.",
    x: 270,
    y: 866,
    bullets: [
      "Review the proposed treatment",
      "Understand costs and visit stages",
      "Explore finance separately",
    ],
  },
  {
    title: "Book",
    label: "WHEN YOU ARE READY",
    description: "Confirm your travel and clinic appointments.",
    x: 520,
    y: 866,
    bullets: [
      "Confirm clinical arrangements",
      "Check your payment schedule",
      "Plan travel and accommodation",
    ],
  },
  {
    title: "Smile",
    label: "YOUR CARE JOURNEY",
    description: "Meet your clinical team and begin your care.",
    x: 770,
    y: 866,
    bullets: [
      "Attend your clinical assessment",
      "Agree the final plan with your dentist",
      "Understand follow-up and aftercare",
    ],
  },
];
export function Journey({ detailed = false, intro }: { detailed?: boolean; intro?: string }) {
  return (
    <section
      className={`section journey-section ${detailed ? "detailed" : ""}`}
    >
      <div className="container">
        <SectionTitle
          label={detailed ? "THE PROCESS" : "HOW IT WORKS"}
          title="Four simple steps."
          accent="We help you plan."
          intro={intro ?? (
            detailed
              ? "From your first enquiry to your care in Antalya, with clear information along the way."
              : undefined
          )}
        />
        <ol className="journey-grid">
          {journey.map((s, i) => (
            <li key={s.title}>
              <div className="step-number">{i + 1}</div>
              {detailed && <p className="step-label">{s.label}</p>}
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              {detailed && (
                <div className="step-card">
                  <div className="reference-photo">
                    <Image
                      src="/images/journey-reference.webp"
                      alt={
                        [
                          "Illustrative patient coordinator",
                          "Illustrative digital treatment planning",
                          "Illustrative travel to Antalya",
                          "Illustrative dental visit",
                        ][i]
                      }
                      width={1024}
                      height={1536}
                      sizes="(max-width: 700px) 200vw, 110vw"
                      style={{
                        transform: `translate(-${(s.x / 1024) * 100}%, -${(s.y / 1536) * 100}%)`,
                      }}
                    />
                  </div>
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <Check size={17} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ol>
        {detailed && (
          <p className="image-note">
            Process photographs are illustrative, not patient or staff
            endorsements. Treatment timings depend on your clinical plan.
          </p>
        )}
      </div>
    </section>
  );
}
export function CarePanel({ answerIntro = false }: { answerIntro?: boolean }) {
  return (
    <section className="section care-section">
      <div className="container care-grid">
        <div className="care-visual">
          <div className="care-photo reference-photo">
            <Image
              src="/images/journey-reference.webp"
              width={1024}
              height={1536}
              alt="Illustrative dental care setting, not a verified clinic photograph"
              sizes="(max-width:700px) 200vw, 110vw"
              style={{ transform: "translate(-75.1953%, -56.3802%)" }}
            />
          </div>
          <div className="care-photo-label">
            <span>CARE IN ANTALYA</span>
            <p className="care-visual-title">
              A personal journey.
              <br />A considered plan.
            </p>
          </div>
        </div>
        <div className="care-info">
          <Eyebrow>HERE TO HELP YOU PLAN</Eyebrow>
          <h2>
            Clear information.
            <br />
            <span className="gradient-text">From the start.</span>
          </h2>
          <p>
            {answerIntro
              ? "Start by discussing your goals and requesting written information about the proposed treatment, alternatives and estimated cost. Akdeniz Dental Consultancy UK Ltd handles non-clinical coordination and administration. The clinical team at Akdeniz Dental in Antalya assesses suitability, plans treatment and provides dental care in Turkey."
              : "Discuss your goals, understand your options and receive a written estimate before making a decision."}
          </p>
          <ul className="check-list">
            <li>
              <Check />
              Email or WhatsApp, at your pace
            </li>
            <li>
              <Check />
              Clinical decisions with your treating dentist
            </li>
            <li>
              <Check />
              Treatment and finance clearly explained
            </li>
          </ul>
          <Link href="/our-clinic" className="text-link">
            Get to know the clinic <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function EligibilityPanel() {
  return (
    <section className="section">
      <div className="container eligibility-panel">
        <div>
          <Eyebrow>BEFORE YOU APPLY</Eyebrow>
          <h2>
            A few things
            <br />
            to <span className="gradient-text">think about.</span>
          </h2>
          <p>
            Finance is a separate decision. Take time to understand the
            requirements and your own budget.
          </p>
          <Link href="/finance-eligibility" className="text-link">
            Explore finance eligibility <ArrowRight size={16} />
          </Link>
        </div>
        <ul>
          {[
            [
              "UK residency",
              "Check the address and identity information required.",
            ],
            [
              "Affordable repayments",
              "Consider your income and existing commitments.",
            ],
            [
              "Lender assessment",
              "Credit is subject to status and individual approval.",
            ],
          ].map(([t, d]) => (
            <li key={t}>
              <span>
                <Check />
              </span>
              <div>
                <p className="eligibility-label">{t}</p>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function CostTable() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          label="UNDERSTAND YOUR ESTIMATE"
          title="The details behind"
          accent="your treatment price."
        />
        <div className="table-scroll">
          <table className="cost-table">
            <caption>
              What to confirm in your personalised treatment quote
            </caption>
            <thead>
              <tr>
                <th scope="col">Treatment</th>
                <th scope="col">What affects the cost</th>
                <th scope="col">What to ask</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Veneers",
                  "Number of teeth, material and preparation",
                  "Are temporary restorations and reviews included?",
                ],
                [
                  "Dental implants",
                  "Implants, abutments, final teeth and preparatory care",
                  "How many visits and which implant system?",
                ],
                [
                  "Zirconia crowns",
                  "Tooth condition, number of crowns and laboratory specification",
                  "Is additional restorative or root canal treatment needed?",
                ],
                [
                  "All-on-4",
                  "One or both arches, implant plan and restoration material",
                  "Are extractions, temporary and final teeth included?",
                ],
                [
                  "Smile makeover",
                  "The combination and sequence of recommended procedures",
                  "Which elements are essential and which are optional?",
                ],
              ].map((r) => (
                <tr key={r[0]}>
                  <th scope="row">{r[0]}</th>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="information-note">
          <Info size={18} />
          Listed packages give you a starting point for discussion. Your personal
          quote confirms the treatment scope, price and arrangements after clinical assessment.
        </p>
      </div>
    </section>
  );
}
export function RelatedLinks({ slugs }: { slugs: string[] }) {
  return (
    <section className="section related-section">
      <div className="container">
        <h2>Keep exploring.</h2>
        <div className="related-grid">
          {slugs.map((s) => (
            <Link key={s} href={`/${s}`}>
              <span>{pages[s]?.label || s}</span>
              <h3>{pages[s]?.title.split(" | ")[0]}</h3>
              <ArrowRight size={21} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Guides() {
  return (
    <section className="section">
      <div className="container">
        <div className="guide-grid">
          {guideArticles.map((a) => (
            <Link className="guide-card" id={a.id} href={a.path || `/guides#${a.id}-details`} key={a.id}>
              <span className="icon-tile">
                <Icon name="book" size={30} />
              </span>
              <span className="card-eyebrow">{a.category}</span>
              <h2>{a.title}</h2>
              <p>{a.summary}</p>
              <span className="text-link">
                Read the guide <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
        <div className="guide-articles narrow">
          {guideArticles.filter(a => !a.path).map((a) => (
            <article className="article" id={`${a.id}-details`} key={a.id}>
              <Eyebrow>{a.category}</Eyebrow>
              <h2>{a.title}</h2>
              {a.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <Link href="/get-a-quote" className="text-link">
                Ask about your treatment plan <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Sources() {
  return (
    <aside className="container sources">
      <h2>Further information</h2>
      <p>Read the provider’s own information before making a decision.</p>
      {informationSources.map((source) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {source.title} <ExternalLink size={13} />
        </a>
      ))}
      <p className="small">
        General information only. Your treating dentist and lender provide the
        information specific to your circumstances.
      </p>
    </aside>
  );
}
export function QuoteIntro() {
  return (
    <aside className="quote-aside">
      <Eyebrow>LET’S MAKE IT PERSONAL</Eyebrow>
      <h2>
        Good things start
        <br />
        with <span className="gradient-text">a clear plan.</span>
      </h2>
      <p>
        Share your goals and choose how you want us to respond. No obligation,
        and no need to phone.
      </p>
      <ul className="check-list">
        <li>
          <Check />
          Free initial treatment estimate
        </li>
        <li>
          <Check />
          Email or WhatsApp contact
        </li>
        <li>
          <Check />
          Finance explored separately
        </li>
      </ul>
      <div className="soft-note">
        <Icon name="shield" size={26} />
        <p>
          Your information is used to handle your enquiry. Health details need
          your explicit consent.
        </p>
      </div>
    </aside>
  );
}
