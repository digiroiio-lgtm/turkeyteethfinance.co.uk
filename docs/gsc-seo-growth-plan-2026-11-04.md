# Google Search Console growth plan — 4 November 2026

Property: https://turkeyteethfinance.co.uk  
Export filter: Web search, last 3 months. The supplied daily chart contains data only for 19 October–2 November 2026; interpret the CSV as an early, low-volume snapshot, not a full mature three-month performance baseline.

## Observed data

- 122 impressions, 0 clicks, 0% CTR in the device export: desktop 87, mobile 31, tablet 4.
- United Kingdom: 74 impressions (60.7% of the 122 device-export total), average position 58.35.
- United States: 12 impressions, average position 24.08. Other countries account for the remaining 36 impressions; do not treat them as the primary market.
- The query export contains 26 rows and no clicks. The page export contains 26 rows and no clicks. These are top-row exports, not proof that only 26 queries or pages received impressions.
- The daily chart sums to 118 impressions for 21 October–2 November; 19–20 October show zero. The device export totals 122. Different report aggregation / privacy thresholds may explain the small discrepancy; use the individual exports as reported and do not force them to reconcile.

## Highest-value query signals

| Query | Impressions | Avg. position | Interpretation |
|---|---:|---:|---|
| smile makeover finance | 11 | 78.64 | Clear treatment + finance intent; currently weak visibility |
| turkey teeth finance | 9 | 71.22 | Core commercial head term; homepage/topic authority opportunity |
| finance turkey teeth | 5 | 18.40 | Best observed head-term opportunity; improve relevant supporting content and internal links |
| all on 4 finance | 4 | 66.75 | Treatment-specific finance cluster |
| composite bonding cost turkey | 4 | 80.75 | Cost intent; needs verified treatment scope/pricing evidence before expansion |
| composite bonding turkey price | 4 | 93.50 | Cost intent; low visibility |
| teeth on finance turkey | 3 | 42.00 | Monthly payment intent |
| turkey teeth before and after | 3 | 88.33 | Visual / evidence intent |
| turkey teeth on finance no credit check | 2 | 39.50 | Sensitive credit claim; do not promise no credit check or imply guaranteed approval |
| turkey teeth on finance | 2 | 65.00 | Monthly payment intent |
| dental finance calculator | 2 | 79.00 | Calculator intent |
| turkey teeth payment plan | 1 | 97.00 | Payment-plan intent |

## Highest-impression pages

| Page | Impressions | Avg. position | Action |
|---|---:|---:|---|
| /how-it-works | 23 | 33.04 | Strengthen page purpose, journey explanation and contextual links to estimate, prices and finance |
| /smile-makeover-finance | 22 | 62.00 | Review its treatment-specific query ownership and clinical evidence before rewriting |
| /reviews | 21 | 32.43 | Preserve cautious review language; improve source prominence only with verified source links |
| /composite-bonding-turkey | 21 | 76.76 | Validate actual treatment availability, material scope and price before expanding claims |
| / | 19 | 27.79 | Retain primary Turkey teeth finance ownership; support with focused pages |
| /before-and-after | 19 | 54.11 | Use consented, attributable case evidence only |
| /all-on-4-finance | 18 | 46.00 | Clarify treatment scope and finance separation; no unverified price claims |
| /is-turkey-teeth-finance-legit | 13 | 24.62 | Keep entity, broker and lender roles explicit |
| /dental-finance | 13 | 43.69 | Maintain distinct broad finance explainer intent |
| /guides/dental-finance-for-treatment-abroad-uk | 12 | 22.75 | Refocus title and introduction on Turkey + UK patient intent |

## Implemented in this branch

1. Repositioned /how-it-works around the actual UK patient journey, with five descriptive sections and crawlable links to written estimates, prices, clinic information, dental finance, pay-monthly guidance, calculator and travel planning.
2. Refocused the UK dental-finance guide title and introduction on dental finance for treatment in Turkey, without promising finance availability or approval.
3. Updated content last-modified dates where copy changed.

## Priority backlog

### P0 — verify eligibility and discoverability
- In Search Console, inspect Page indexing, Manual actions, Security issues and URL Inspection for the homepage, /how-it-works, /dental-finance, /pay-monthly, /finance-calculator, /smile-makeover-finance and /all-on-4-finance.
- Confirm canonical selected by Google matches the declared canonical; sitemap presence alone does not prove indexing.
- Confirm the public finance disclosures, company role, broker relationship and any application CTA have been approved by the responsible compliance owner. Do not remove the site's publication/compliance gate or invent lender terms.

### P1 — query ownership and internal links
- Homepage owns broad "Turkey teeth finance" intent.
- /pay-monthly owns "pay monthly", "Turkey teeth on finance" and payment-plan intent.
- /dental-finance owns the broad UK dental-finance explainer.
- /guides/dental-finance-for-treatment-abroad-uk owns comparison education for UK patients considering treatment in Turkey.
- Treatment pages own their own procedure + finance/cost intent.
- Review Search Console query-to-page data after another 28 days before consolidating pages or changing multiple titles.

### P1 — improve click-through only after impressions grow
- Record title and snippet experiments against the exact query/page pair. Do not change titles solely to chase a high average position from one or two impressions.
- Preserve factual, cautious language around credit checks, APR, eligibility and approval. Never target "no credit check" with a misleading promise.
- Do not invent review counts, clinic ratings, treatment prices, patient outcomes, materials or clinician credentials.

### P2 — authority and conversion measurement
- Request a Search Console Links export and validate genuine referring domains; no backlink deficit can be quantified from these CSVs.
- Reconcile accepted enquiries with staff-qualified leads and booked cases. Search clicks alone are not the commercial outcome.
- Add real, consented, attributable patient case evidence only when the underlying records and permissions exist.

## Measurement protocol

Use fixed UK / Web / mobile + desktop filters and compare rolling 28-day periods. Track clicks, impressions, CTR, average position and query-to-page ownership. Segment branded vs non-branded queries and treatment vs payment vs trust intent. Keep a record of each page change and avoid interpreting a one- or two-impression position as a stable ranking.


## UK keyword cluster implementation — 4 November 2026

The cluster is deliberately mapped to distinct intent owners to reduce cannibalisation:

| Search intent / query family | Primary URL | Supporting pages |
|---|---|---|
| turkey teeth finance; finance turkey teeth | / | /dental-finance, /how-it-works |
| pay monthly for Turkey teeth; Turkey teeth on finance; Turkey teeth payment plan | /pay-monthly | /finance-calculator, /finance-eligibility, /guides/turkey-teeth-deposits-and-payment-plans |
| dental finance Turkey; dental finance for treatment in Turkey UK | /dental-finance | /finance-faq, /is-turkey-teeth-finance-legit |
| dental finance calculator; monthly repayment estimate | /finance-calculator | /pay-monthly, /prices |
| smile makeover finance Turkey | /smile-makeover-finance | /prices, /pay-monthly |
| All-on-4 dental implants finance Turkey | /all-on-4-finance | /dental-implants-finance, /prices |

Implementation: descriptive contextual HTML links connect the finance topic pages; pay-monthly metadata and FAQs explicitly distinguish monthly borrowing from clinic stage payments. Treatment page metadata clarifies UK/Turkey scope without making unsupported treatment or finance claims. The query "without a credit check" is answered cautiously and is not used as a promise or sales claim.

Measurement: use UK-only Search Console query/page exports and verify the intended URL owns each query family. Compare fixed rolling 28-day periods; monitor impressions, clicks, CTR and average position. Do not create extra near-duplicate pages or repeat exact-match phrases unnaturally.


## 5 November refresh (Search Console, Web, last 3 months)

Facts from the supplied device, country and page exports, plus query x page rows from the Search Console API for 5 Aug - 5 Nov 2026. Volumes are very small; treat everything below as an early signal, not a trend.

- Totals: 148 impressions, 1 click. United Kingdom 96 impressions (65%), average position 61.6; United States 15 (position 23.8); Turkey 9.
- The only click is /all-on-6-finance (8 impressions, position 19.1). The clicking query is not visible in the export.
- /prices and /pay-monthly do not appear in the page export (no impressions in the period). Whether they are indexed, or whether Google selected another URL as canonical, is not known from these files.
- The parameterised URL /get-a-quote?treatment=Veneers&budget=3500 had 10 impressions (position 31.5), while /get-a-quote had none. The only internal link producing exactly that URL is the budget planner default (veneers, 3,500).
- Head queries are spread across many URLs: "turkey teeth finance" appears on 15+ pages (positions 53-97) and "teeth on finance turkey" on 14 pages (positions 42-50). For "finance turkey teeth" the best row is /how-it-works (6 impressions, position 17.2). This is not proof of cannibalisation at this volume.
- "turkey teeth on finance no credit check" appears on 12 pages (positions 38-50). Do not target it or imply any credit-check promise.

Changes made on this basis: the budget planner CTA is marked rel="nofollow" (the link, prefill and enquiry flow are unchanged); /reviews, /before-and-after, /our-clinic and /all-on-6-finance now show the existing finance cluster links.

Open checks for the Search Console owner: URL Inspection for /prices, /pay-monthly, /get-a-quote and the parameterised URL above (indexed? Google-selected canonical?); a Links export. If Google selected the parameterised URL as canonical, plan a separate fix to the budget link.
