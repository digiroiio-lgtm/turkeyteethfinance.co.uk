# Trust evidence needed from the owner

AI answers and Google both favour pages that cite verifiable third parties. None of the items below can be written by us; each needs the owner or the named party to supply and approve it. Nothing here should be filled in with assumed details.

| # | Evidence | Who supplies | Where it plugs in | Status |
|---|---|---|---|---|
| 1 | Verified legal identity of the treating clinic and the UK coordination company (registered names, numbers, addresses) | Owner / clinic | `lib/evidence.ts` `clinicProfile`, `/our-clinic`, `/is-turkey-teeth-finance-legit` | Needed |
| 2 | Named clinicians and their current professional registrations | Clinic | `lib/clinic-planning.ts`, `/our-clinic` | Needed |
| 3 | One anonymised, real itemised quote (patient consent and redaction confirmed) | Owner / clinic | `/prices` or `/guides/compare-dental-quotes` | Needed |
| 4 | Written aftercare, warranty and complaint responsibilities | Clinic | `/our-clinic`, `/prices` | Needed |
| 5 | A link from the clinic's own site to the matching page (`/prices`, `/veneers-finance`, `/dental-implants-finance`) | Clinic | Off-site | Needed |
| 6 | Independent review pages (for example a Trustpilot profile for the coordination company, if one exists) | Owner | `lib/evidence.ts`, `/reviews` | Needed |
| 7 | Broker confirmation of the exact name, role and permissions to quote on finance pages, and whether the operator itself holds any FCA permission | Owner / legal | `components/footer.tsx`, finance copy | Internal check; do not publish an assumption |

Existing sources already in `lib/evidence.ts`: the clinic's team, laboratory, gallery, contact and patient-case pages, and the clinic's Trustpilot profile. These describe the clinic, not the coordination company.
