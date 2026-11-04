# AI visibility and entity evidence plan

Date: 4 November 2026  
Scope: ChatGPT search/citations, Perplexity answers and Google AI Overviews. This work improves machine-readable identity, source traceability and answer extraction; it cannot guarantee citations or inclusion.

## Canonical entity map

| Entity | Canonical identity | Role that must remain consistent |
|---|---|---|
| Website / publisher | https://turkeyteethfinance.co.uk/ | Turkey Teeth Finance is the public information and enquiry website |
| UK operator | Akdeniz Dental Consultancy UK Ltd | Non-clinical healthcare consultancy, patient coordination and administration; not a dental provider, lender or credit decision-maker |
| Treating clinic | Akdeniz Dental, https://akdenizdental.com/ | Clinical provider in Antalya, Turkey; clinical team handles examination, diagnosis, treatment planning, treatment and clinical aftercare |
| Credit broker | Ideal4Finance, https://ideal4finance.com/ | Broker, not lender |
| Lender | Named in the individual credit offer | Makes its own decision and sets the agreement terms; do not infer identity or terms when unknown |

The clinic address, telephone and clinician profile details are attributed to clinic-published sources. Independent verification of clinician registration or credentials is not claimed. The UK coordination company and the Turkish treating clinic are separate entities and must never be conflated.

## Implemented

1. Added a stable Schema.org entity graph to the global head: UK operator Organization, treating clinic Dentist and credit broker Organization, each with a distinct canonical `@id`.
2. Linked the WebSite publisher to the UK operator and connected relevant WebPage entities to the treating clinic with `about`; privacy and terms pages are excluded from that clinic relationship.
3. Connected the homepage patient guide to the canonical clinic and broker entities, without implying endorsement or ownership.
4. Expanded `/llms.txt` and `/llms-full.txt` with a concise entity and responsibility directory, direct primary-source URLs and explicit evidence limitations.
5. Added automated assertions that both AI text exports preserve the operator, clinic, broker and lender roles and the source links.
6. Kept existing human-readable citations, source registry, canonical sitemap, robots policy, `ai.txt`, `llms.txt` and `llms-full.txt` architecture. No unsupported bot-specific allowlist or ranking promise was added.

## Answer-engine retrieval principles

- Lead each answer with a direct, self-contained response, then explain conditions, evidence and next steps.
- Cite primary clinical guidance (GDC, NHS, NHS Trusts, FDA / university sources where relevant) and identify the publication or organisation, not merely an unlabelled link.
- Use clinic-published material only for facts about the clinic, its location, its clinicians and its own packages; do not present it as independent clinical evidence.
- Keep finance explanations separate from clinical suitability. The treatment enquiry is not a credit application; finance is subject to status, affordability and lender approval.
- Distinguish clinic stage payments from monthly loan repayments. Do not invent APRs, fees, rates, monthly amounts, approval likelihood or lender identity.
- Keep named clinician education and roles attributed to official clinic profiles unless independently verified.
- Use visible page copy as the source of truth for structured data and LLM exports. FAQPage must mirror visible FAQs; no hidden keyword blocks or fabricated reviews.
- Maintain one primary URL per search intent and link related answers contextually to reduce cannibalisation.

## Validation and release gates

On this branch, run lint, tests, production build, typecheck and SEO smoke. Inspect generated JSON-LD for unique stable IDs, correct Organization/Dentist separation, publisher/about relationships and canonical URLs. Check both LLM text endpoints for source links and privacy-safe content; crawl the rendered homepage, finance pages and clinic page for matching visible answers and metadata. Verify mobile layout and production/preview robots, sitemap, canonical and HTTP headers.

Do not merge this branch. It is intentionally based on PR #36's head and should be reviewed as a stacked follow-up. Merge PR #36 first only after its owner approves; then rebase or retarget this follow-up to main and rerun all checks. No PR in this sequence is to be merged without explicit approval.
