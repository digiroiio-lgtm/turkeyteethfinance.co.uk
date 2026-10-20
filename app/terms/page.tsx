import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site";
import { Eyebrow } from "@/components/ui";
export const metadata = pageMetadata(
  "Website Terms",
  "Important information about treatment estimates, clinical responsibility and third-party finance on Turkey Teeth Finance.",
  "/terms",
);
export default function Terms() {
  return (
    <article className="container narrow legal-page">
      <Eyebrow>WEBSITE INFORMATION</Eyebrow>
      <h1>Website terms</h1>
      <p className="small">Last updated: 20 October 2026</p>
      <h2>Our role</h2>
      <p>
        {COMPANY} provides healthcare consultancy and patient coordination.
        Clinical diagnosis, consent, treatment and clinical aftercare advice are
        the responsibility of the treating professionals in Turkey.
      </p>
      <h2>General information</h2>
      <p>
        This website provides general information to help you ask questions and
        compare options. It is not a clinical diagnosis, personalised financial
        advice or an emergency dental service. Model imagery is illustrative and
        is not evidence of a patient outcome.
      </p>
      <h2>Treatment estimates</h2>
      <p>
        An online treatment estimate is provisional. A qualified treating
        dentist must assess your needs before confirming suitability, the
        treatment plan and final price. Obtain the clinic’s treatment terms,
        payment schedule, cancellation policy and aftercare arrangements before
        paying or booking travel.
      </p>
      <h2>Third-party finance</h2>
      <p>
        A treatment enquiry is not a credit application. Finance is subject to
        status, affordability and lender approval. Ideal4Finance is a credit
        broker, not a lender. Your credit agreement, if accepted, is with the
        lender you choose. Read all applicable terms, charges and the total
        amount repayable before deciding.
      </p>
      <h2>Budget explorer</h2>
      <p>
        The interactive budget explorer records a budget you would like to
        discuss. It does not calculate repayments, assess eligibility, quote a
        treatment price or offer credit.
      </p>
      <h2>External websites</h2>
      <p>
        External services have their own terms and privacy notices. Read them
        before submitting information or entering an agreement.
      </p>
      <h2>Questions</h2>
      <p>
        Use the <Link href="/contact">contact page</Link> for general enquiries.
        Do not send urgent clinical concerns through a website enquiry form.
      </p>
    </article>
  );
}
