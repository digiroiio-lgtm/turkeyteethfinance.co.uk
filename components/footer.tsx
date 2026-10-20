import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { COMPANY, financeNotice, publicationApproved } from "@/lib/site";
import { treatments } from "@/lib/content";
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link className="logo" href="/">
                <span>turkeyteeth</span>
                <span>finance.co.uk</span>
              </Link>
              <p>
                Your treatment journey in Antalya.
                <br />
                Clear information, personal coordination.
              </p>
              <p className="small">
                Operated by {COMPANY}.<br />
                UK consultancy and patient coordination.
              </p>
            </div>
            <div>
              <h2>Treatments</h2>
              {treatments.map((t) => (
                <Link href={`/${t.slug}`} key={t.slug}>
                  {t.name}
                </Link>
              ))}
            </div>
            <div>
              <h2>Payment options</h2>
              {[
                ["Pay monthly", "pay-monthly"],
                ["Dental finance", "dental-finance"],
                ["Finance eligibility", "finance-eligibility"],
                ["Prices & inclusions", "prices"],
                ["Finance questions", "finance-faq"],
              ].map(([t, s]) => (
                <Link key={s} href={`/${s}`}>
                  {t}
                </Link>
              ))}
            </div>
            <div>
              <h2>Your journey</h2>
              {[
                ["How it works", "how-it-works"],
                ["Our clinic", "our-clinic"],
                ["Patient results", "before-and-after"],
                ["Patient reviews", "reviews"],
                ["Guides", "guides"],
                ["Contact", "contact"],
              ].map(([t, s]) => (
                <Link key={s} href={`/${s}`}>
                  {t}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-disclosure">
            <p>{financeNotice}</p>
            <p>
              Dental treatment is provided by the treating clinic in Turkey.{" "}
              {COMPANY} does not provide clinical treatment. Ideal Sales
              Solutions Ltd, trading as Ideal4Finance, is a credit broker, not a
              lender. Read the{" "}
              <a
                href="https://ideal4finance.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                broker’s information <ArrowUpRight size={12} />
              </a>{" "}
              before applying.
            </p>
            {publicationApproved() && (
              <p>{process.env.APPROVED_FINANCE_DISCLOSURE}</p>
            )}
            <p className="small">
              Model and process imagery is illustrative. Individual outcomes
              vary.
            </p>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} {COMPANY}
            </p>
            <div>
              <Link href="/privacy">Privacy & cookies</Link>
              <Link href="/terms">Website terms</Link>
            </div>
          </div>
        </div>
      </footer>
      <Link
        className="floating-contact"
        href="/contact"
        aria-label="Contact the patient coordination team"
      >
        <MessageCircle size={27} />
      </Link>
    </>
  );
}
