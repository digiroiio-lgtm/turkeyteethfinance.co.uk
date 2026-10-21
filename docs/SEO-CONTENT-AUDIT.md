# SEO, SERP, GEO and patient enquiry audit

Date: 21 October 2026. Baseline source: main `b9c87fea06a0f259ff87729bc1804f918974eb41`.

## What the scores mean

These are internal implementation-readiness scores, **not Google ranking scores, medical-quality ratings, Lighthouse scores or Context.dev GEO scores**. Ten binary checks carry ten points each: unique title; a unique single H1; indexable self-canonical; matching WebPage URL in JSON-LD; FAQ/schema parity; at least 350 words of page-owned editorial copy; at least three FAQ questions appearing on no more than two pages; contextual external sources; two contextual internal links; and a visible content date with attributable preparation. The word threshold deliberately flags short pages but is not a Google minimum or a reason to pad transactional pages. Scores do not establish source reliability, independent credential verification, conversion uplift, indexing or citations.

Baseline HTML came from the production build of the baseline commit. After HTML comes from the amended production build. Header, footer, shared promotion panels and FAQ text are excluded from owned editorial word counts. Nested sections are counted once. Legal pages are inspected but excluded from the scope average.

| Metric | Before | After |
| --- | ---: | ---: |
| Readiness, same 18 scoped URLs | 52/100 | 87/100 |
| Readiness, all 20 scoped URLs after adding guides | 52/100 across 18 | 89/100 across 20 |
| Public canonical URLs including legal notices | 20 | 22 |
| Matching WebPage URL, title/H1/canonical/index and FAQ checks, all public pages | 97/100 | 100/100 |
| Repeated FAQ instances beyond the first occurrence | 34 | 14 |
| Treatment-owned editorial copy per treatment page | 125–143 words | 557–565 words |
| Substantial standalone guides | 0 | 2 |

The five treatment pages pass all ten mechanical checks after the change. This does not claim that their clinical content has received independent medical review.

## Page-by-page intent and audit

| URL | Search intent / role | Before | After |
| --- | --- | ---: | ---: |
| `/` | UK patient overview: treatment enquiry and separate payment decisions | 70 | 90 |
| `/pay-monthly` | Monthly payment overview; lender-dependent terms | 50 | 80 |
| `/dental-finance` | Broker/lender process and distinction from a clinical estimate | 50 | 80 |
| `/get-a-quote` | Conversion: consented treatment enquiry | 50 | 60 |
| `/dental-implants-finance` | Implant components, alternatives, stages and maintenance | 50 | 100 |
| `/finance-eligibility` | Application limitations; no personal eligibility assessment | 50 | 70 |
| `/veneers-finance` | Veneer materials, tooth preparation and alternatives | 50 | 100 |
| `/prices` | Itemised clinic estimate and exclusions; no unverified public rates | 50 | 100 |
| `/smile-makeover-finance` | Combined procedures and tooth-by-tooth planning | 50 | 100 |
| `/zirconia-crowns-finance` | Full-coverage crowns, materials, preparation and fit | 50 | 100 |
| `/all-on-4-finance` | Full-arch restoration, arches, temporary/final teeth | 50 | 100 |
| `/before-and-after` | Source-linked clinic cases and realistic case interpretation | 50 | 90 |
| `/reviews` | Independent review source and treatment context | 50 | 90 |
| `/how-it-works` | Enquiry-to-visit coordination workflow | 50 | 80 |
| `/our-clinic` | Clinical provider identity, official address and source-linked clinicians | 50 | 100 |
| `/finance-faq` | Central finance questions; existing restrictions retained | 60 | 70 |
| `/contact` | Administrative questions and contact preference | 50 | 80 |
| `/guides` | Discovery hub with permanent article links | 50 | 80 |
| `/guides/compare-dental-quotes` | Detailed checklist for comparing complete clinical scopes | New | 100 |
| `/guides/plan-dental-visit-antalya` | Appointments, travel stages and continuity of care | New | 100 |
| `/privacy` | Privacy notice; text unchanged | 40 | 50 |
| `/terms` | Website terms; text unchanged | 40 | 50 |

## Implemented

- Distinctive treatment information and five specific FAQs for each treatment, covering alternatives, preparation, limitations, appointment stages, quote scope and maintenance. Generic finance FAQs were removed from these treatment pages. Existing finance hub FAQs were reduced where the central FAQ already answers the question.
- Treatment-first titles/descriptions and contextual cross-links. Existing treatment URLs are preserved to avoid migration or competing duplicate treatment landing pages.
- Two approximately 700-word guide pages with distinct informational intents. The hub contains short discovery cards rather than another complete copy. Legacy hub fragment IDs still lead to the appropriate cards. The short existing finance explainer remains on the hub and was not expanded into a new financial-promotion page.
- Article, WebPage, breadcrumb and FAQ JSON-LD in the head, generated from the same content used by the page. Visible dates use explicit content dates. The homepage WebPage URL and Open Graph URL now use the canonical helper.
- Clinic address/contact and three named clinicians with source-linked education and roles attributed to official clinic profiles. No UK clinical-provider status, independent registration verification or clinician authorship/review is invented.
- Patient-result and review pages now lead to the clinic’s published gallery and the independent Trustpilot profile linked by the clinic. No copied patient identity, aggregate rating, success-rate claim or assumed publication permission.
- Prices page expanded into an itemised estimate/inclusion checklist. No unverified amount, package price, competitor rate, repayment or APR was introduced. Earlier hypothetical monetary examples were removed from the homepage. The functioning budget planner remains explicitly a budget to discuss, not a price or credit calculator.
- Primary and lower-page CTAs scroll directly to the enquiry section instead of repeating the quote page’s hero; treatment-specific links also preserve the selected treatment. Marketing consent, health-data consent, optional photographs, same-origin validation, Formspree delivery and finance-approval gates are preserved.
- Sitemap, LLM directory and full export share the same 22-page registry. Guide text, citations and clinic facts are exported from the current data sources. Query quote links stay out of the canonical registry.

## SERP observations and content ownership

A search sample on 21 October 2026 for veneers, implants and full-arch treatment with UK/finance terms returned clinic price/component pages and travel/payment explainers. Examples include Dental Centre Turkey’s treatment price page, Dr Cem Baysal’s UK-patient veneer explainer and Mavidenta’s payment-plan explainer. These are examples of competing search intents, not a rank-tracking dataset or independent validation of their claims. No competitor prices or percentage savings were copied into this site.

- https://dentalcentreturkey.com/dental-treatment-prices-in-turkey
- https://drcembaysal.com/natural-looking-dental-veneers-in-turkey-what-uk-patients-need-to-know/
- https://mavidenta.com/dental-centre-turkey-payment-plan/

The pricing intent remains constrained until a current clinic-approved price sheet is available. The commercial treatment pages own procedure-specific decisions; the quote-comparison guide owns a cross-treatment checklist, and the visit guide owns scheduling and records. No separate competing “cheap veneers”, “Turkey veneers cost” or near-duplicate location pages were created. Actual cannibalisation requires Search Console query-to-page data to verify.

## Verification and limits

Local ESLint, all 50 tests, production build, TypeScript and HTTP production smoke passed. The expanded HTTP smoke checks all public pages for a single H1, one head WebPage entity, matching visible/structured FAQ answers and valid contextual destinations. It also checks both guide Article bodies against their content source, unknown guide 404s, sitemap/canonical parity, the www redirect, LLM endpoints, robots and HTTP headers. Separate preview validation is run by CI. No new dependencies or client-side data collection were added. A build inspection caught the expanded content registry being pulled into browser JavaScript by shared imports. Public button labels and treatment navigation data were isolated from the server content registry; the HTTP smoke also rejects bundling the expanded article text into static client JavaScript.

Core Web Vitals: the previous live mobile lab report recorded performance 98, accessibility/best practices/SEO 100, LCP 2.4s, TBT 20ms, CLS 0. This is a pre-change lab baseline, not post-change field data. A fresh production PageSpeed report is required after deployment; absence of CrUX data is not a field CWV pass. The optimized responsive hero and eager/high priority attributes remain intact.

Reproduce after a production build:

```sh
npm run lint
npm test
VERCEL_ENV=production npm run build
npm run typecheck
VERCEL_ENV=production npm run seo:smoke
NODE_ENV=production VERCEL_ENV=production npm run seo:audit -- --output docs/audit-after.json
```

## Evidence and approval queue

1. **Clinic prices and packages:** supply a current clinic-approved GBP price sheet with procedure/component scope, validity, inclusions, exclusions, deposits/refunds and visit terms. No private conversation, historical package, or competitor price is treated as approved publication evidence.
2. **Finance compliance:** existing promotional wording, disclosure, broker status, eligibility and approved application URL still need the owner/broker’s formal sign-off wherever required. This change adds no APR, repayment example, guaranteed acceptance, 0% offer, credit threshold or new finance application destination. Do not enable `SITE_CONTENT_APPROVED` or alter the compliance gates as part of SEO work. Any future financial promotion must be reviewed before publication.
3. **Clinical review and credentials:** an appropriately qualified treating clinician should approve the educational copy and confirm registration, qualifications and current appointment roles before being named as a medical reviewer. Current profile details are explicitly attributed, not independently certified.
4. **Authentic photography and patient cases:** official facility/patient galleries are linked. The attempted original facility asset download returned HTTP 403; it was not bypassed or replaced with a generated clinical image. Supply licensed originals, verified case facts and separate publication consent before republishing photographs or patient identities on this domain. Enquiry photo consent is not marketing publication consent.
5. **Aftercare/warranties:** no fixed crown/implant warranty periods, guaranteed outcome, free return travel or UK clinical aftercare commitment is invented. Supply current written terms for any future specific claims.
6. **Measurement:** no Search Console performance dataset, independent rank tracker, attributable conversion dataset or post-deployment AI citation study was available in this audit. Submit the updated sitemap in Search Console, inspect the two guide URLs, and monitor UK query/page impressions and consent-respecting qualified-enquiry counts. Do not claim ranking, citation or lead-volume improvement from the readiness score.

Public source registry: `lib/evidence.ts`. Official clinician profiles:

- https://akdenizdental.com/mustafa-akca
- https://akdenizdental.com/mehmet-onur-merey
- https://akdenizdental.com/duygu-kolay-toklu

Detailed before/after evidence: `docs/audit-before.json`, `docs/audit-after.json`. These contain every title, H1, owned word count, source/link counts and individual rubric result.

## Changed files

- `app/@structuredHead/[...path]/page.tsx`
- `app/[slug]/page.tsx`
- `app/globals.css`
- `app/guides/[guide]/page.tsx`
- `components/budget-explorer.tsx`
- `components/editorial.tsx`
- `components/header.tsx`
- `components/hero.tsx`
- `components/home-guide.tsx`
- `components/sections.tsx`
- `components/structured-data.tsx`
- `components/ui.tsx`
- `docs/SEO-CONTENT-AUDIT.md`
- `docs/audit-after.json`
- `docs/audit-before.json`
- `lib/content.ts`
- `lib/evidence.ts`
- `lib/guide-schema.ts`
- `lib/guides.ts`
- `lib/home-guide.ts`
- `lib/llms.ts`
- `lib/metadata.ts`
- `lib/public-copy.ts`
- `lib/public-pages.ts`
- `lib/site.ts`
- `lib/treatments.ts`
- `package.json`
- `scripts/audit-content.ts`
- `scripts/seo-smoke.mjs`
- `tests/content-integrity.test.ts`
- `tests/indexing.test.ts`
- `tests/llms.test.ts`
- `tests/security.test.ts`
- `tests/ui.test.tsx`
