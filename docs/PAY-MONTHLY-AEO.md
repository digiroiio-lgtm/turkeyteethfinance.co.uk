# Pay monthly: source-backed planning content

Updated 21 October 2026. Scope: `/pay-monthly`, its structured data and shared text export.

## Baseline and measurement

The user-supplied Context.dev result was 82/100. Re-running the exact URL reproduced 82, but its extracted text was an older version, without the current attribution and reduced FAQ list. A fresh crawl of `https://turkeyteethfinance.co.uk/pay-monthly?aeo=20261021-before` returned **87/100** before this change: structure 27/30, schema 20/20, quality 15/25, technical 15/15, freshness 10/10. Thus the existing WebPage modification date already passed on a current crawl. Do not attribute the first five points to this PR.

The fresh baseline extracted 890 words, versus the older report's 983, and reported three numerical facts. The cache-busting query does not alter content; the canonical remains the unparameterised HTTPS URL. Final checker results must be recorded after deployment. The checker is a third-party heuristic, not a measurement or guarantee of citations, ranking or patient conversion. The percentages and citation multipliers in its suggested fix prompt are not promises made by this website.

## Changes

- Replace three brief editorial cards with a substantial visible planning article, about 2,200 words including headings and attributions. Its 12 answer sections contain 156–176 words each, excluding source/link labels. Opening answers contain 47–52 words. The introduction also leads with a direct answer.
- Keep the budget planner near the top and preserve treatment navigation, quote buttons, Formspree and WhatsApp. Remove the repeated four-step journey from this page; it remains on the dedicated journey page and elsewhere.
- Explain estimates, total trip costs, household budgeting, independent guidance, document clarity, responsible organisations, separate visits, revised estimates, aftercare and privacy. Link to the existing detailed guides rather than creating competing URLs.
- Add dated FCA statistics about savings, resilience, debt advice and confidence with numbers, with the original survey population and limitations. No clinic outcome statistics, prices, interest rates, repayment examples or acceptance probabilities are invented. The resilience comparison is explicitly a two-year comparison, with no statistically significant difference claimed.
- Include two short quotations, 23 quoted words in total, from the FCA's 16 May 2025 release. Attribute Sarah Pritchard and Oliver Morley using the roles recorded in that publication. State that no endorsement or personal review is implied.
- Add an Article describing the visible planning article, once in `<head>`, with `dateModified: 2026-10-21`, source citations and the actual organisation as author. Preserve the separate WebPage, BreadcrumbList and matching FAQPage. Do not fabricate a clinical reviewer or publication date.
- Use the same page sections for SSR, Article text and `llms-full.txt`, including quotations and dates. No new client dependency or tracker.

## Source ledger

Checked on 21 October 2026:

| Facts or context | Primary source |
| --- | --- |
| One in ten with no cash savings; another 21% with less than £1,000; 1.7m debt-advice/debt-management users, 61% reporting more manageable debts; both named quotations | [FCA release, 16 May 2025](https://www.fca.org.uk/news/press-releases/more-people-have-bank-accounts-one-ten-have-no-cash-savings) |
| Low resilience: 13.1m / 24% in May 2024 versus 12.9m / 24% in May 2022; not statistically different | [FCA Financial Lives 2024, printed pp. 10 and 54](https://www.fca.org.uk/publication/financial-lives/financial-lives-survey-2024-key-findings.pdf) |
| Confidence with numbers: 10.3m / 19%; poor financial numeracy: 9.8m / 18%; main survey sample 17,950 | [Same FCA survey, printed pp. 67 and 84–85; methodology and chart bases](https://www.fca.org.uk/publication/financial-lives/financial-lives-survey-2024-key-findings.pdf) |
| Actual versus advertised borrowing terms and full costs, without quoting a rate or offering credit | [MoneyHelper: personal loans](https://www.moneyhelper.org.uk/en/everyday-money/credit/personal-loans) |
| Clinical assessment, qualifications and questions before travelling | [General Dental Council](https://www.gdc-uk.org/standards-guidance/information-for-patients-public/going-abroad-for-dental-treatment) |
| Implant stages, healing and separate visits | [Guy's and St Thomas' NHS Foundation Trust](https://www.guysandstthomas.nhs.uk/health-information/dental-implants) |
| Implant records and follow-up | [U.S. FDA patient information](https://www.fda.gov/medical-devices/dental-devices/dental-implants-what-you-should-know) |
| Clinic roles and contact information | [Akdeniz Dental team](https://akdenizdental.com/our-team) and [contact](https://akdenizdental.com/contact-us) |

The financial survey results describe UK adults, not dental patients or this site's audience. Statistics are secondary research, not new proprietary research. These sources do not endorse the clinic or the website.

## Compliance-sensitive boundaries

The three original core paragraphs about planning, finance and total costs are retained verbatim within the new answers. The existing eligibility and lender-approval qualifications, FAQ answers, finance notice, publication approval gates and application-link configuration are unchanged. No new credit product or promotional repayment example is published.

For the next compliance review, review the complete `/pay-monthly` page, particularly the existing offer introduction, the treatment-versus-credit section and the new household-budget/guidance context. These changes are consumer planning information, not evidence of financial-promotion approval. Enabling the finance publication gate still requires the separately approved disclosure, approved application destination and explicit site approval. AEO work does not provide that approval.

## Validation

- 51 tests pass, including a new integrity check for dated context, quotations, source parity and absence of invented credit illustrations or clinical review.
- ESLint, TypeScript and production build pass.
- Production HTTP smoke passes all 22 canonical URLs, robots, sitemap, indexing headers, FAQ parity, head schemas and LLM endpoints.
- Added HTTP assertions for the monthly Article in head, its body/date matching the source, visible quotation markup and no expanded planning copy bundled into browser JavaScript.
- Preview build and indexing smoke pass separately, including blocking robots, an empty preview sitemap and noindex metadata/headers. The smoke command uses `--preview` for that build. Deployment and final external checker verification are recorded in the PR once available.

## First deployment and citation follow-up

PR #11 merged as `b371fea61462ea4a7c73a1efe827dc0ce0437f7e`. Vercel did not initially create a deployment automatically, so the tested main commit was deployed through the existing project's Create Deployment action. [Production deployment](https://vercel.com/tortilla/turkeyteethfinance-co-uk/EUL2Tq8k14Ta1KBiJDq29SRFodAp) reached Ready. Main CI also passed. The live 22-URL SEO audit passed; the monthly Article body matched its source, with two visible quotations and index/follow metadata.

A fresh Context.dev crawl of `?aeo=20261021-after` returned **90/100 (A)**: structure 30/30, schema 20/20, quality 15/25, technical 15/15, freshness 10/10. It detected 3,098 words, 16 numerical facts (1.03/200 words), the byline, modification date and two quotations. All five originally requested checks passed.

Once the page contained a real article, the checker enabled its previously inapplicable authoritative-citation check. It counted only one of the existing primary-source links despite the FCA, NHS and GDC references. The follow-up therefore adds two relevant patient-information sources: [NIH NIDCR on gum assessment](https://www.nidcr.nih.gov/health-info/gum-disease), checked in its August 2026 version, and [Columbia University on implant stages](https://www.dental.columbia.edu/patient-care/columbiadoctors-dentistry/our-services/dental-implants). These support the assessment and visit-planning sections alongside the existing UK sources. They are not clinic endorsements, and their general information is not presented as an individual treatment plan. No loan or pricing copy changes in this follow-up. Final external results are recorded in the follow-up PR after deployment.
