# Guides hub AEO update: 22 October 2026

## Baseline
Context.dev returned 85/100 (B) for the canonical /guides URL before editing, matching the supplied report: 727 words, zero statistics and no expert quotations. Structure 25/30, schema 20/20, quality 15/25, technical 15/15, freshness 10/10.

## Changes
- Added eleven hub-specific decision support sections, with direct answers, contextual links and primary-source citations. Detailed quote and visit checklists retain their existing canonical URLs.
- Uses shared owner-confirmed package prices, dated BDA survey data and FCA savings data. Dentist survey responses are explicitly distinguished from patient complication rates and clinic outcomes. No invented outcomes, finance examples or approval claims.
- Two short quotations attributed to Eddie Crouch (BDA, 2022) and Sarah Pritchard (FCA, 2025), with source links and roles at publication. Neither is represented as endorsing the clinic or reviewing this page.
- Guide directory headings now follow H2/H3 hierarchy. Existing inline checklist anchor remains functional. Three visible directory entries produce matching ItemList JSON-LD in the head; this directory is not mislabelled as an Article.
- Content and meaningful modification date are shared with the existing LLM text generator. Server-rendered copy does not introduce client-side content payloads.

## Validation
61 tests passed, including substantial visible copy, first-five H2 answer lengths, section lengths, quote attribution, shared package totals, LLM synchronization and head-slot directory schema. Production HTTP smoke checks additionally verify actual initial HTML content and head schema. Production and preview indexing protections remain covered by CI.

Context.dev is a third-party heuristic. A higher score is not a guarantee of citations, indexing or rankings. Historical research and prices must be reviewed when their source facts change; publication dates are retained for context.
