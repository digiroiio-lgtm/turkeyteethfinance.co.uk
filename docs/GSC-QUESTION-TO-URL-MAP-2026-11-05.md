# GSC question-to-page map and targeted content update

Date: 5 November 2026  
Property: https://turkeyteethfinance.co.uk/  
Scope: strengthen existing commercial pages only; no new URLs.

## Search Console evidence available

The latest user-provided Search Console summary (4 November 2026) reported:
- 122 impressions and 0 clicks across the reported snapshot.
- 74 impressions attributed to the UK.
- 26 reported queries and 26 reported pages.
- Query `finance turkey teeth`: 5 impressions, average position 18.40.
- Query `turkey teeth finance`: 9 impressions.
- Query `smile makeover finance`: 11 impressions.
- Top reported landing page: `/how-it-works`, 23 impressions, average position 33.04.

This is a very small, early-stage dataset. It is directional only; do not infer stable rankings, demand, or conversion potential from these counts.

### Data limitation

The current accessible evidence is a summary, not the full Search Console query-by-page matrix or complete query and page CSV exports with date, country and device filters. Therefore, exact query ownership by landing page, page-query overlap and cannibalisation cannot be calculated from the available rows. Do not claim that a particular query was served by a particular page until the full GSC matrix is exported.

## Query-to-page ownership (strategic mapping, not measured attribution)

| Observed query / question family | Intended owner | Existing coverage and action |
|---|---|---|
| `finance turkey teeth`; `turkey teeth finance`; how does finance work for UK patients? | `/` | Homepage title and direct answer already target the head topic. Added a visible FAQ with the exact natural-language question and clarified clinic, coordinator, broker and lender roles. |
| pay monthly / instalments / bad credit / monthly payments | `/pay-monthly` | Existing page already distinguishes monthly borrowing from clinic stage payments and links the calculator. Added a cautious bad-credit FAQ; no eligibility promise or credit threshold. |
| dental finance for UK residents / APR / fees / total repayable / alternatives | `/dental-finance` | Existing page already explains provider roles, application stages, APR and total cost. Added concise FAQs on comparing a real offer and alternatives such as a personal loan or savings. |
| monthly repayment calculations and assumptions | `/finance-calculator` | Existing calculator already explains nominal-rate assumptions, APR distinction, zero-interest scenario and excluded fees. No rewrite needed; preserve its calculation caveats. |
| `smile makeover finance` | `/smile-makeover-finance` | Query observed, but no page-query matrix or sufficient evidence to justify a new page or broad rewrite. Existing treatment page remains the owner; validate its actual GSC page row before editing. |
| Highest reported landing-page visibility | `/how-it-works` | 23 impressions, average position 33.04. Preserve the existing page and its journey intent; link to the three commercial owners rather than turning it into a duplicate finance landing page. |

## Missing questions identified and addressed

1. Homepage: “How does Turkey teeth finance work for UK patients?” Added as a visible FAQ. The answer separates treatment enquiry, clinical care, coordination, broker and lender responsibilities.
2. Pay Monthly: “Can I get Turkey teeth finance with bad credit?” Added as a visible FAQ. It explains that criteria are lender-specific and approval is not guaranteed.
3. Dental Finance: “What should I compare before choosing dental finance for treatment in Turkey?” Added as a visible FAQ covering APR, interest, fees, term, monthly amount, total repayable, early repayment, treatment scope and aftercare.
4. Dental Finance: “Can I use a personal loan or savings instead of dental finance?” Added as a neutral alternatives answer; it does not recommend a product and points to independent MoneyHelper background.

## No new URLs and no unnecessary rewrites

- No new landing pages created.
- Existing canonical owners retained.
- No redirect, canonical, robots, sitemap or indexability changes.
- No invented search volumes, APRs, lender rates, repayment examples, approval claims, clinical outcomes or review claims.
- The calculator was left unchanged because its current content already answers the relevant calculation questions accurately.
- The /how-it-works page was left as the journey page; its visibility does not justify duplicating the commercial pages.

## Validation required

Run lint, tests, TypeScript, production build and SEO smoke on this branch. Verify visible FAQ and FAQPage parity, canonical/indexability for the three edited pages, sitemap stability and mobile rendering. This branch must not be merged until all checks pass and the owner approves.

## Next data pull needed for full attribution

Export Search Console Performance data for the same date window with:
- Dimensions: query + page (combined), then query and page separately.
- Filter: country = United Kingdom; compare all countries separately.
- Device: mobile, desktop and tablet.
- Metrics: clicks, impressions, CTR and average position.
- Include at least 28 days and compare with the preceding 28 days.

Use the combined query+page rows to determine whether the head terms are already owned by `/`, `/pay-monthly`, `/dental-finance`, `/finance-calculator` or `/how-it-works`. Only then decide whether any page needs a larger rewrite.
