import Link from "next/link";
import type { Section } from "@/lib/content";
import { evidence, clinicProfile } from "@/lib/evidence";
import { COMPANY } from "@/lib/site";

export function ContentAttribution({ date }: { date: string }) {
  return <div className="container content-attribution">
    <p>Last updated: <time dateTime={date}>{new Date(date + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time></p>
    <p>Information prepared by {COMPANY} patient coordination team. General planning information; individual clinical advice comes from your treating dentist.</p>
  </div>;
}

export function EditorialSections({ sections, article = false }: { sections: Section[]; article?: boolean }) {
  return <div className={article ? "guide-sections" : "editorial-grid"}>
    {sections.map((section, index) => <section className={article ? "guide-answer" : "editorial-card"} key={section.title} id={`section-${index + 1}`}>
      {!article && <span className="article-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
      <h2>{section.title}</h2>
      <p>{section.body}</p>
      {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets && <ul className="check-list">{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
      {section.sources?.length ? <p className="guide-citations">Sources: {section.sources.map((id, i) => <span key={id}>{i > 0 && "; "}<a href={evidence[id].url}>{evidence[id].title}</a></span>)}</p> : null}
      {section.links?.length ? <ul className="context-links">{section.links.map(link => <li key={link.href}><Link href={link.href}>{link.text}</Link></li>)}</ul> : null}
    </section>)}
  </div>;
}

export function ClinicEvidence() {
  return <section className="section">
    <div className="container clinic-evidence">
      <h2>Clinicians listed by Akdeniz Dental</h2>
      <p>Source checked: <time dateTime={clinicProfile.checked}>21 October 2026</time>. Names, roles and education below are attributed to the clinic’s own profiles. Confirm your assigned clinician and current registration directly with the clinic.</p>
      <div className="editorial-grid">
        {clinicProfile.clinicians.map(clinician => <article className="editorial-card" key={clinician.url}>
          <h3>{clinician.name}</h3><p>{clinician.role}</p><p>{clinician.education}</p>
          <a className="text-link" href={clinician.url}>Read the clinic’s profile for {clinician.name}</a>
        </article>)}
      </div>
      <address>
        {clinicProfile.name}<br />{clinicProfile.streetAddress}<br />{clinicProfile.locality}, Turkey<br />
        <a href={`tel:${clinicProfile.telephone.replaceAll(" ", "")}`}>{clinicProfile.telephone}</a>
      </address>
      <p><a href={evidence.contact.url}>Official clinic contact details</a> · <a href={evidence.gallery.url}>View clinic photographs</a> · <a href={evidence.lab.url}>View laboratory photographs</a></p>
    </div>
  </section>;
}

export function PatientEvidence({ kind }: { kind: "results" | "reviews" }) {
  const source = evidence[kind === "results" ? "results" : "reviews"];
  return <section className="section"><div className="container narrow proof-placeholder">
    <h2>{kind === "results" ? "View cases on the treating clinic’s website" : "Read independent patient experiences"}</h2>
    <p>{kind === "results" ? "Explore photographs published by Akdeniz Dental and ask the clinical team about the procedures and treatment stage shown. Individual results do not predict your outcome." : "Read current reviews on the profile linked by Akdeniz Dental. Consider recent, positive and less positive experiences and the treatment context."}</p>
    <a className="button button-small" href={source.url}>{kind === "results" ? "View the clinic’s patient gallery" : "Read Akdeniz Dental reviews on Trustpilot"}</a>
    <p className="small">{kind === "results" ? "This site’s model photographs are illustrative. Enquiry photographs are not published as patient cases without separate permission." : "No review score, invented testimonial or clinical success percentage is reproduced here."}</p>
  </div></section>;
}
