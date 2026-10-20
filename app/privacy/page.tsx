import { pageMetadata } from "@/lib/metadata";
import { COMPANY, publicationApproved } from "@/lib/site";
import { Eyebrow } from "@/components/ui";
export const metadata = pageMetadata(
  "Privacy & Cookies",
  "How treatment enquiries, optional dental photographs and privacy choices are handled on Turkey Teeth Finance.",
  "/privacy",
);
export default function Privacy() {
  return (
    <article className="container narrow legal-page">
      <Eyebrow>YOUR INFORMATION</Eyebrow>
      <h1>Privacy & cookies</h1>
      <p className="small">Last updated: 20 October 2026</p>
      {!publicationApproved() && (
        <p className="legal-note">
          Draft notice for review. The enquiry service must not be enabled until
          the privacy contact, processors, retention schedule and international
          transfer arrangements are approved.
        </p>
      )}
      <h2>Who handles your enquiry</h2>
      <p>
        {COMPANY} operates this website for healthcare consultancy and patient
        coordination. Dental care is delivered by the treating clinic in
        Antalya, Turkey. The UK company does not provide clinical treatment.
      </p>
      <h2>Information you choose to provide</h2>
      <p>
        The enquiry form asks for your name, email address, treatment interests
        and preferred contact method. A WhatsApp number is optional unless you
        choose WhatsApp for your reply. Dental concerns, photographs and
        additional notes are optional.
      </p>
      <h2>Purpose and consent</h2>
      <p>
        We use submitted information to respond to your treatment enquiry and
        coordinate a proposed plan. We ask for explicit consent before
        processing optional dental information or photographs and sharing them
        with the treating clinical team in Turkey. Marketing consent is separate
        and optional. You can withdraw consent; this does not affect the
        lawfulness of earlier processing.
      </p>
      <h2>Sharing and international processing</h2>
      <p>
        Your enquiry may need to be reviewed by the treating clinical team in
        Turkey. Turkey is outside the UK. Credit applications are handled
        separately by the broker and lender under their own privacy notices.
      </p>
      <p>
        {process.env.PRIVACY_PROCESSORS_NOTICE ||
          "Processor information will be confirmed before enquiry delivery is enabled."}
      </p>
      <p>
        {process.env.PRIVACY_TRANSFER_NOTICE ||
          "International transfer safeguards will be confirmed before enquiry delivery is enabled."}
      </p>
      <h2>Security and retention</h2>
      <p>
        Submitted data is sent over HTTPS to the configured private enquiry
        service. Uploaded photographs are restricted by number, size and file
        format. Enquiry details are not placed in public URLs, browser storage,
        advertising events or application logs by this website.{" "}
      </p>
      <p>
        {process.env.PRIVACY_RETENTION_NOTICE ||
          "The approved retention schedule will be confirmed before enquiry delivery is enabled."}
      </p>
      <h2>Your rights and contact</h2>
      <p>
        You may request access, correction or deletion of your information,
        object to certain processing and ask about withdrawing consent. Rights
        depend on the circumstances and applicable law.
      </p>
      {process.env.PRIVACY_CONTACT_EMAIL ? (
        <p>
          For privacy requests, email{" "}
          <a href={`mailto:${process.env.PRIVACY_CONTACT_EMAIL}`}>
            {process.env.PRIVACY_CONTACT_EMAIL}
          </a>
          . You may also raise a concern with the UK Information Commissioner’s
          Office at{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>
          .
        </p>
      ) : (
        <p className="legal-note">
          The operator’s privacy contact is pending configuration. Do not submit
          personal or dental information while the enquiry service is
          unavailable.
        </p>
      )}
      <h2>Cookies and browser storage</h2>
      <p>
        This build does not include advertising tags or analytics cookies. When
        enquiry delivery is enabled, Cloudflare Turnstile is loaded for the
        security check on the final form step; see{" "}
        <a
          href="https://www.cloudflare.com/privacypolicy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloudflare’s privacy information
        </a>
        . If non-essential tracking is added later, it must remain disabled
        until the appropriate consent choice is made.
      </p>
    </article>
  );
}
