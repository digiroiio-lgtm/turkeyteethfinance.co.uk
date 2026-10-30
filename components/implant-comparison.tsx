import Link from "next/link";
import { implantComparison } from "@/lib/expanded-treatments";
export function ImplantComparison() {
  return <section className="section" aria-labelledby="implant-options-heading"><div className="container narrow">
    <h2 id="implant-options-heading">Compare full-arch implant options</h2>
    <p>Discuss one arch or both jaws with the dentist. These options need different clinical plans; implant count alone does not establish suitability, cost or a better outcome.</p>
    <div className="table-scroll"><table className="cost-table"><caption>Fixed and removable implant-supported designs</caption><thead><tr><th scope="col">Option</th><th scope="col">Support</th><th scope="col">Removal</th><th scope="col">Cost scope</th></tr></thead><tbody>{implantComparison.map(row => <tr key={row.option}><th scope="row"><Link href={row.href}>{row.option}</Link></th><td>{row.support}</td><td>{row.removal}</td><td>{row.cost}</td></tr>)}</tbody></table></div>
    <p className="small">General comparison; ask the clinician to confirm your proposed design. <a href="https://www.cuh.nhs.uk/patient-information/dental-implants-in-restorative-dentistry/">Cambridge University Hospitals implant guidance</a>.</p>
    <Link className="button button-small" href="/get-a-quote?treatment=Full%20mouth%20dental%20implants#treatment-enquiry">Request a full-mouth treatment estimate</Link>
  </div></section>;
}
