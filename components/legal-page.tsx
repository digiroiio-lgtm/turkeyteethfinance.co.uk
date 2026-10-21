import { Fragment } from "react";
import Link from "next/link";
import { Eyebrow } from "./ui";
import { paragraphParts, type LegalContent } from "@/lib/legal-content";

export function LegalPage({ content }: { content: LegalContent }) {
  return (
    <article className="container narrow legal-page">
      <Eyebrow>{content.label}</Eyebrow>
      <h1>{content.heading}</h1>
      <p className="small">Last updated: {content.updated}</p>
      {content.notice && <p className="legal-note">{content.notice}</p>}
      {content.sections.map((section) => (
        <Fragment key={section.heading}>
          <h2 id={section.heading === "Cookies and browser storage" ? "cookies" : undefined}>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                typeof paragraph !== "string" && paragraph.note
                  ? "legal-note"
                  : undefined
              }
            >
              {paragraphParts(paragraph).map((part, partIndex) =>
                typeof part === "string" ? (
                  <Fragment key={partIndex}>{part}</Fragment>
                ) : part.href.startsWith("/") ? (
                  <Link key={partIndex} href={part.href}>
                    {part.text}
                  </Link>
                ) : (
                  <a
                    key={partIndex}
                    href={part.href}
                    target={part.href.startsWith("https:") ? "_blank" : undefined}
                    rel={
                      part.href.startsWith("https:")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {part.text}
                  </a>
                ),
              )}
            </p>
          ))}
        </Fragment>
      ))}
    </article>
  );
}
