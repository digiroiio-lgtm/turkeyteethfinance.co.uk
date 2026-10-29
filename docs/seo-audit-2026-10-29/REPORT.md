# Technical and commercial SEO audit — 29 October 2026

Site: https://turkeyteethfinance.co.uk • Repository baseline: c914506 • Market: UK, English.

## Executive assessment

The current public site is crawlable in the tested responses. No present site-wide robots, canonical or noindex blocker was found. This is NOT confirmation of Google indexing. The supplied baseline is 49 tracked keywords, no Top 100 rankings, 0% Search Visibility and 0 Click Potential; no authenticated Nightwatch export was available to verify the keyword list, search locations, devices or volumes.

The next constraint to resolve is Google's actual discovery/indexing/canonical status, followed by page intent, credible clinic/finance evidence and authority. Adding more long generic content is not the first priority: the homepage already has approximately 4,003 main-content words and treatment pages roughly 3,500–3,800 including reusable elements. Word count is not a quality or ranking threshold.

The repository was created on 20 October 2026. That is not evidence of the domain's age, launch date or Google's discovery date. Earlier repository documentation describes robots/noindex defects already repaired before this audit; they must not be presented as newly discovered live defects.

## Evidence and method

- Read the current GitHub main branch and applicable AGENTS.md; installed locked dependencies; built a production version.
- Fetched robots.txt, sitemap.xml and every one of its 22 public URLs. Captured raw statuses, canonical/meta robots and HTTP directives using `scripts/check-seo.py`.
- Independently inspected page titles/descriptions, approximate main-content word counts and uncompressed HTML sizes. See `live-page-inventory.csv`.
- Tested HTTP, www, trailing slash, unknown routes, a tracking query and the public Vercel alias. See `url-variants.json`.
- Read the four requested competitors' public pages and sampled search results. This is an observed content gap assessment, not a complete backlink, traffic or UK-localised rank study.
- PageSpeed mobile API attempted: HTTP 429 quota exhausted. No usable Lighthouse score or CrUX data returned. No measured CWV pass/fail, simulated mobile score or field result is claimed.
- Browser hydration, real-device layout, interactive performance and end-to-end production lead delivery were not tested. No live patient enquiry was submitted.

## Prioritised issue register

| ID | Priority | Evidence / affected URLs | Action / owner | Status |
|---|---|---|---|---|
| T01 | P0 | Google index status unknown across all 22 URLs despite successful public crawl | SEO owner: inspect Search Console Page indexing, Manual actions, Security issues and URL Inspection; submit sitemap | Requires authenticated GSC data |
| C01 | P0 | Live banner states finance content awaits compliance approval; finance CTA is gated in source | Principal/broker/legal: confirm permitted role, named entity, any IAR relationship, disclosure and application destination | No approval gate changed |
| M01 | P0 | 49-keyword baseline is user-supplied; UK/device/volume settings unseen | SEO owner: export original cohort, verify Google UK and device/location; keep cohort fixed | Scorecard and keyword map supplied |
| O01 | P1 | Homepage H1 was “Your new smile in Turkey. Flexible payment options.”; /pay-monthly H1 was “Same smile. More possibilities.” | Clarify page subjects without promising a finance product | Implemented on branch |
| O02 | P1 | Five treatment pages need a more direct route to the existing payment/cost decision pages | Add visible server-rendered cost planning links | Implemented on branch |
| T02 | P1 | Existing smoke checks omitted duplicate titles/descriptions and some navigation/fragment destinations | Extend rendered HTTP smoke coverage | Implemented on branch |
| P01 | P1 | Homepage HTML 425,575 bytes uncompressed; inline style text 57,427 characters; inline non-JSON-LD scripts 264,752 characters; JSON-LD blocks total 22,708 characters | Run valid mobile Lighthouse and CrUX checks; investigate inline CSS, RSC payload and full articleBody duplication before changing architecture | Experiment required; deferred |
| C02 | P1 | Similar homepage, /dental-finance and /pay-monthly commercial topics | Assign distinct cluster ownership; inspect GSC query-to-page results before any consolidation | Mapping supplied; cannibalisation not proven |
| C03 | P1 | Competitors surface clinic identity, clinicians and patient evidence earlier | Clinic owner: verify named treating entity, assigned clinician, registrations, aftercare, complaints and cancellation responsibilities | Evidence requests; no identities invented |
| O03 | P1 | /prices has five owner-confirmed packages, but no separate verified UK comparison dataset or standalone All-on-4 quote | Strengthen scope/exclusions and publish dated comparable figures only with evidence | Existing prices preserved |
| A01 | P1 | Referring domains and links were not available in this audit | Obtain GSC Links/backlink export; seek genuine links from the treating clinic and relevant partners to the matching pages | Authority gap is a hypothesis, not a measured deficit |
| C04 | P2 | /reviews and /before-and-after rely on external clinic evidence plus planning text | Add consented, procedure-specific cases and attributable experiences when available | No fabricated reviews or schema |
| O04 | P2 | Broad “dental finance” intent competes with UK clinics and credit firms | Prioritise Turkey + treatment + payment long tails; expand cost comparisons only after evidence | Editorial backlog |
| M02 | P1 | Existing GA4 has consent gating and accepted-enquiry event, but CRM-qualified outcomes unavailable | Reconcile accepted enquiries with staff-qualified leads and booked cases | Definition and scorecard supplied |

P0 means resolve immediately because it gates diagnosis or compliant commercial operation; it does not mean a technical outage was observed.

## Phase 1 — Technical diagnostics

| Check | Observed result | Interpretation |
|---|---|---|
| robots.txt | 200 text/plain; `Allow: /`, `Disallow: /api/`, canonical sitemap declaration | Public crawling allowed; API exclusion appropriate |
| sitemap.xml | 200 XML, 22 canonical URLs, no duplicate entries | Keep shared registry; do not add fragments or tracking URLs |
| Sitemap pages | 22/22 direct 200, matching self-canonicals, index/follow, no blocking HTTP directive | Technically eligible in sampled responses; Google indexing unknown |
| HTTP /prices | 308 to HTTPS /prices | Correct tested hop |
| www /prices?seo-check=1 | 308 to apex preserving path and query | Correct tested hop |
| /prices/ | 308 to /prices | Correct slash normalisation |
| Unknown page and unknown guide | Real 404 | No soft-404 fallback found in these samples |
| Tracking query /prices?utm_source=audit | 200 | Canonical generation is query-free in source; confirm live query canonical after deployment |
| Vercel alias homepage | 200 with HTTP noindex/nofollow/noarchive | Alias has protection; no request to expose previews |
| Metadata and H1 | Present in initial HTML; one H1 per public page in production smoke test | Main content does not depend on client-side execution |
| Internal links | Crawl found no internal page destination outside registry; extended branch smoke validates all anchors and fragment IDs | No broken internal destination found in tested rendered build |
| Duplicates | No duplicate title/description found by branch smoke; each URL self-canonical | Does not establish absence of external or semantically duplicated copy |
| Thin content | Contact/terms naturally short; eligibility and process pages less extensive than treatment pages | Evaluate utility, not word count; do not bulk-expand or noindex utility pages |

Only individual redirect hops above were sampled; every possible host/protocol/path combination was not exhaustively traced. Do not redesign routing or merge URLs without query/canonical data.

### Performance and mobile review

Source includes responsive image sizes, explicit portrait dimensions, eager/high-priority hero loading, local variable font with swap, and viewport metadata. Consent-gated analytics avoids loading Google scripts before consent. These are favourable implementation details, not proof of good field performance.

The large inline payload warrants measurement. RSC scripts are not equivalent to an independently downloaded client JavaScript bundle; the byte breakdown does not prove main-thread cost or poor INP. Some article text is repeated in structured data. Trial external CSS and narrower JSON-LD in a preview, compare cold/warm mobile loads, and preserve visible content/schema parity. Do not simply remove useful content to reduce HTML size.

Measure homepage, /pay-monthly, /prices, /dental-implants-finance and /get-a-quote, three cold-cache lab runs each. Review image transfer, render blocking, unused JS/CSS, long tasks, font shifts and form interaction at 360/390/430px widths. Field targets at the 75th percentile: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. Use CrUX/GSC if sufficient traffic exists; otherwise label the field sample unavailable. Lab TBT is not field INP.

## Phase 2 — Competitor and keyword gap

| Competitor | Public evidence observed | Practical response |
|---|---|---|
| uksmiles.co.uk | Homepage has treatment/case architecture. A finance URL describes funding while a newer quote guide says finance is not offered | Benchmark clear quote scope and case navigation. Conflicting finance copy is not evidence of an available product |
| losmiles.uk | Homepage presents named clinicians, UK/Turkey journey, materials and prices. /finance describes a broker introduction and names the entity involved | Match clarity about who coordinates, who treats and who provides credit information. Their authorisation statements do not establish this site's status |
| kandoo.co.uk | Dedicated Turkey treatment funding guide by a named author distinguishes routes and criteria | Answer funding questions precisely; compete with treatment-specific planning rather than generic loan claims |
| turkeyteethfinance.com | Exact-topic architecture includes payment plans, veneers, implants, costs and FAQ pages plus clinic referral CTAs | Match clear intent routing; differentiate with owner-confirmed package scope and genuine clinical accountability. Do not reproduce ratings, guarantee or savings claims without verification |

The analysis does not establish competitors' traffic, backlinks, authority scores, live approvals or ranking positions. No invented volume or difficulty numbers are used.

The accompanying `keyword-map.csv` assigns 16 clusters to existing URLs or evidence-dependent proposals. Relative attainability is an editorial judgement. First focus: Turkey payment plans, veneers/implant finance with Turkey modifiers, zirconia package scope and quote comparisons. Generic dental finance and broad UK veneers finance are later targets. No new landing pages are needed for the initial clusters; avoid near-duplicate exact-match doorway pages.

### Intent boundaries

- Homepage: overview of Turkey teeth finance planning for UK patients, with paths to treatment, cost and process.
- /pay-monthly: payment timing, questions, affordability and distinction between staged clinic payment and a credit agreement. Do not imply an available monthly product without approval.
- /dental-finance: how the treatment estimate differs from a finance application; roles and decision process.
- Treatment pages: procedure-specific scope, existing owner-approved packages, visits and links to finance planning.
- /prices: complete package comparisons, inclusions/exclusions and personalised quote conditions.
- /finance-eligibility and /finance-faq: specific residual questions; no acceptance or credit-score promises.

Validate queries using GSC and a UK keyword export. Keep the current 49 as a fixed reporting cohort; track new long tails in a separate cohort so changes cannot artificially improve headline metrics.

## Phase 3 — On-page implementation and backlog

| Affected URL(s) | Branch change | Validation |
|---|---|---|
| / | Title becomes “Turkey Teeth Finance: UK Patient Planning”; H1 becomes “Turkey teeth finance. Plan your treatment.” | Production build and rendered metadata checks; no duplicated brand suffix |
| /pay-monthly | Title becomes “Turkey Dental Payment Plans: UK Patient Guide” with existing site suffix; H1 becomes “Turkey dental payment plans. Know what to ask.” | One H1, unique metadata, schema parity and working links |
| /dental-implants-finance, /veneers-finance, /zirconia-crowns-finance, /all-on-4-finance, /smile-makeover-finance | New visible cost-planning section linking to /prices, /pay-monthly, /dental-finance and /guides/compare-dental-quotes | Rendered HTTP smoke validates page and fragment destinations |
| All public routes | Metadata helper prevents a repeated site-name suffix when supplied title already contains it | Production smoke validates non-empty unique titles/descriptions |
| Build checks | Check navigation/footer and contextual links, fragment IDs, duplicate/missing title/description | Extended `npm run seo:smoke` |

URLs, canonical paths, pricing registry, enquiry form, WhatsApp destinations and finance approval gates are retained. Changed page content dates updated only for affected content entries. Homepage and payment-plan descriptions now describe planning without implying approval. Other useful descriptions and recently updated treatment titles were retained to avoid unnecessary churn.

Existing structured data covers Organization, WebSite, WebPage, BreadcrumbList, visible FAQs, articles and the price catalog. Validation checks FAQ answers and package prices against rendered content. No fabricated Review, AggregateRating, authorisation, treatment guarantee or LoanOrCredit offer was added. No additional schema type is needed for these limited changes. FAQ markup eligibility and rich-result display are not guaranteed, and schema does not directly create rankings.

Further content work should add evidence and decision utility: an actual anonymised itemised estimate, package exclusions confirmed by the clinic, staged-visit cost checklist, and procedure-specific aftercare responsibilities. The current combined four-implant/24-crown package must not be presented as an All-on-4 per-arch offer or divided into an invented single-implant price. Do not invent market averages, response-time promises or a clinical reviewer.

## Phase 4 — Trust and compliance review queue

The source identifies Akdeniz Dental Consultancy UK Ltd as the patient coordinator and states it does not provide clinical care. Clinic profiles and external evidence links are present. This audit has not independently verified company registration, current clinician registration, contractual responsibility or an appointed-representative relationship.

Before any finance activation or stronger promotional copy, obtain broker/legal approval for:

1. Exact legal entity, trading name, role, principal, permissions and any required register references.
2. Application URLs, commission/introducer disclosures and wording around approval, eligibility and credit checks.
3. Any APR, repayment figure, 0%, “from £/month”, incentive, urgency or bad-credit statement; required representative examples and prominence must be reviewed.
4. Disclosure placement throughout landing pages, metadata, ads and conversion screens, not just a footer disclaimer.
5. Clinic contracting entity, clinical responsibility, cancellation/refund terms, complaints, aftercare, emergency contacts and who pays for a return trip.
6. Clinical sign-off of treatment claims; separate patient permission and provenance for photographs/testimonials.

The visible draft/compliance banner can undermine conversion confidence. Removing it without resolving its underlying approval condition would hide uncertainty. Its replacement, finance activation and any assurance claims are deliberately deferred for approval. This is an operational review queue, not a legal conclusion about the site's regulatory status.

## Phase 5 — Weekly measurement and decision rules

Use `weekly-scorecard.csv` every Monday, comparing the last complete Monday–Sunday with the previous complete week and a rolling 28-day period. No automation has been created or existing radar changed.

| Measure | Source / configuration | Baseline / definition |
|---|---|---|
| Keywords and Top 100/20/10/3 | Nightwatch, fixed original 49, Google UK; record city and device exactly | 49 / 0 Top 100 supplied; Top 20 not independently exported |
| Search Visibility | Nightwatch same cohort/settings | 0% supplied; official docs say zero for positions >20 or zero search volume |
| Click Potential | Nightwatch same cohort/settings | 0 supplied; estimated local search volume × position CTR, not actual visits |
| Impressions/clicks/CTR/position | GSC Search results, Web, country UK; split mobile/desktop, page and non-brand query | Unknown; never substitute zero for missing data |
| Index coverage | GSC Page indexing and URL Inspection | Unknown; record Google-selected canonical and exclusion reason |
| Accepted enquiries | Existing consent-observed GA4 generate_lead plus backend delivery counts | An accepted enquiry is not a clinically/financially qualified lead |
| Qualified organic leads | Deduplicated CRM staff review: genuine relevant enquiry, serviceable market, treatment intent and usable contact/permission | Unknown; no creditworthiness assumption. Keep patient details outside analytics |
| Qualified lead rate | Qualified organic leads / organic sessions for a clearly matched cohort | Compare consent-observed cohort or report attribution limitations; do not mix incompatible populations |
| Booked patients | CRM, matched to lawful first-touch organic attribution | Track count and actual collected revenue separately |
| Mobile CWV | CrUX/GSC, 28-day field window with sample availability | Unavailable; do not infer from lab metrics |

The existing analytics sanitises page context and excludes entered dental/contact values. Consent gating and referrer sanitisation limit attribution: WhatsApp clicks are intent signals, not leads, and absent observed events do not mean no enquiries. Do not enable advertising identifiers or send clinical detail to improve reporting. A qualified-lead event needs a separately reviewed, privacy-preserving implementation if desired; it was not added here.

Nightwatch's Top 100 can improve while Visibility remains zero. Track first entry, then Top 20 on relevant non-zero-volume terms; validate actual clicks in GSC. Do not promise a deadline, a numeric traffic uplift or a particular rank from these fixes.

### Execution sequence

- Days 1–3: obtain GSC inspection and original Nightwatch export; confirm commercial/legal facts; review branch and deploy approved safe changes; rerun live checks after deployment.
- Weeks 1–2: valid mobile performance runs; genuine clinic/entity links; package scope and quote evidence; monitor URL/query ownership.
- Weeks 3–6: improve pages receiving relevant impressions; compare Top 100 and Top 20 cohorts, snippets and lead quality; avoid changing all titles weekly.
- If discovery/indexing remains absent: diagnose the specific GSC exclusion or fetch result before adding pages. If indexed but no relevant impressions, review content differentiation, demand and authority. If impressions rise without enquiries, review intent match, quote friction and trust.

## Approval and release boundary

Safe changes are implemented in a branch for review; they are not a claim of deployment. Approval-dependent work: finance activation and disclosures, removal of the draft banner, clinical/price/guarantee claims, URL consolidation or redirects, new comparison pages requiring evidence, and CSS/schema architecture experiments. A deployment's live responses must be rechecked after merge. Rankings and conversions require subsequent measurement.

## Sources checked 29 October 2026

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://web.dev/articles/vitals
- https://www.fca.org.uk/firms/financial-promotions-adverts
- https://docs.nightwatch.io/en/articles/4874335-all-nightwatch-metrics-definitions
- https://www.uksmiles.co.uk/turkey-teeth-on-finance
- https://www.uksmiles.co.uk/blog/turkey-teeth-quote-explained
- https://uksmiles.co.uk/
- https://losmiles.uk/ and https://losmiles.uk/finance/
- https://www.kandoo.co.uk/guides/can-i-finance-dental-treatment-in-turkey
- https://turkeyteethfinance.com/ and https://turkeyteethfinance.com/dental-payment-plans/

Competitor descriptions are summaries of their public claims, not independent endorsements or evidence of their current regulatory permissions.
