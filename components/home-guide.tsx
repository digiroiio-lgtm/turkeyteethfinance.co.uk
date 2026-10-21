import { homeContent } from "@/lib/content";
import Link from "next/link";
import { guideSource, homeGuide, homeGuideSections } from "@/lib/home-guide";

export function HomeUpdated() {
  return (
    <div className="container home-updated">
      <p>Last updated: <time dateTime={homeContent.lastModified}>{homeGuide.updatedLabel}</time></p>
      <p>Prepared by {homeGuide.author}. General planning information.</p>
      <a href="#patient-guide">Read the patient planning guide</a>
    </div>
  );
}

export function HomeGuide() {
  return (
    <article id="patient-guide" className="section home-guide" aria-label={homeGuide.title}>
      <div className="container narrow">
        <p className="eyebrow">YOUR PATIENT PLANNING GUIDE</p>
        <p className="home-guide-intro">{homeGuide.title}. Clinical decisions belong with your treating dentist; credit decisions belong with the lender.</p>
        <nav aria-label="Patient guide topics" className="guide-topics">
          {homeGuideSections.map((section) => (
            <a key={section.id} href={"#" + section.id}>{section.title}</a>
          ))}
        </nav>
        {homeGuideSections.map((section) => (
          <section className="home-answer" key={section.id} id={section.id}>
            <h2>{section.title}</h2>
            <p className="direct-answer">{section.answer}</p>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.quote && (
              <figure className="expert-quote">
                <blockquote cite={guideSource(section.quote.sourceId).url}>
                  <p>“{section.quote.text}”</p>
                </blockquote>
                <figcaption>{section.quote.name}, {section.quote.role}.{" "}
                  <a href={guideSource(section.quote.sourceId).url}>Read the original statement</a>
                </figcaption>
              </figure>
            )}
            {!!section.sourceIds.length && (
              <p className="guide-citations">Sources:{" "}
                {section.sourceIds.map((id, index) => (
                  <span key={id}>{index > 0 && "; "}<a href={guideSource(id).url}>{guideSource(id).title}</a></span>
                ))}
              </p>
            )}
            {section.calculation && <p className="guide-citations">{section.calculation}</p>}
            {section.links?.length ? <ul className="context-links">{section.links.map(link => <li key={link.href}><Link href={link.href}>{link.text}</Link></li>)}</ul> : null}
          </section>
        ))}
      </div>
    </article>
  );
}
