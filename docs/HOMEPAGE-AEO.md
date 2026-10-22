# Homepage AEO verification, 22 October 2026

The submitted 80/100 report is based on older extracted content: it lacks the live patient guide, updated date and package section. Rechecking the canonical homepage returned that old 80/100 extraction. A separate fresh fetch of the same canonical page using `?aeo-check=2026-10-22` returned 95/100, with one remaining issue: 14 statistical patterns in 3,986 checker-counted words, density 0.70 per 200 words. The query is solely for independent cache isolation, not a new indexable page; canonical remains the homepage. Do not report the canonical cached result as refreshed or claim the tool's cache was cleared.

## Changes

Added original numerical context to the written-quote, whole-budget and return-trip passages. Every treatment figure derives from the owner-confirmed `lib/packages.ts` registry, linked to the published Prices specifications. The original calculations are:

| Calculation | Result |
| --- | ---: |
| GBP2,800 / 20 crowns | GBP140 whole-package average |
| GBP3,000 / 24 crowns | GBP125 whole-package average |
| GBP3,500 / 16 veneers | GBP218.75 whole-package average |
| GBP4,200 / 20 veneers | GBP210 whole-package average |
| Crown package total difference | GBP200 |
| Veneer package total difference | GBP700 |
| Implant-and-crown package less 20-crown package | GBP3,040 difference between distinct treatment scopes |
| Implant package hotel nights | 3 + 5 = 8 across two visits |

The text explains that these averages allocate hotel and transfer costs as well as treatment and are not standalone tooth prices. Different procedures are not interchangeable; a lower average is not a reason to treat additional teeth. No hypothetical treatment prices, clinic outcomes, credit repayments, APRs, discounts or guarantees were introduced.

The meaningful content update advances the visible timestamp, Article dateModified and homepage registry date to 2026-10-22. Existing direct-answer paragraphs, three attributed blockquotes and head-only Article/FAQ markup remain in place. llms-full.txt and the Article body automatically follow the same guide source.

## Verification of all six requested checks

1. Statistics: original calculations add verifiable numerical context to the remaining deficient passages; measure the final density after deployment rather than promising a score from a local regex.
2. Freshness: visible date and head Article dateModified agree and follow this substantive edit, without changing older source publication dates.
3. Structure: each of the 12 patient-guide sections must remain 75–300 words; focused tests enforce this.
4. Length: pre-change live main content contained 3,475 whitespace-delimited words; the checker counted 3,986 across its wider extracted page. Both already exceeded 2,000. New content answers cost/scope questions rather than adding unrelated filler.
5. Answer-first: the first five H2 openings contained 52, 48, 45, 45 and 47 words. Tests retain the 40–60-word constraint.
6. Expert attribution: three short quotations have named attribution, source links and blockquote cite URLs. Eddie Crouch/BDA, Sarah Pritchard/FCA and Shamir B. Mehta/GDC roles retain publication context. No endorsement or clinical review is implied.

Primary sources rechecked: FCA Financial Lives May 2024 findings and 16 May 2025 release; GDC crowns learning article 10 September 2026; BDA transparency statement; NHS implant/grafting information from Guy's and St Thomas' and Leeds Teaching Hospitals. These statistics are general source findings, not clinic-specific outcome claims.

## Validation and limits

Unit tests check SSR word/section lengths, first-five opening paragraphs, visible/schema date agreement, attribution, Article body and llms consistency, confirmed arithmetic and scope qualifications. Run lint, full unit suite, production build, TypeScript and production/preview HTTP checks. Record final Context.dev result and deployment evidence in the PR after publication. A checker score is directional and does not guarantee citations, indexing or ranking.
