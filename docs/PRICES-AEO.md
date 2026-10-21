# Prices page evidence refresh

Updated 21 October 2026. Scope: `/prices` editorial content only.

Context.dev baseline, checked directly: **90/100, A**. Content Quality 15/25;
Structure 30/30, Schema 20/20, Technical 15/15, Freshness 10/10.

## Content and evidence

- Twelve standalone answers explain package arithmetic, clinical scope, implant
  components, two-visit travel, full-trip budgeting, changes, aftercare, household
  resilience and the distinction between treatment prices and credit costs.
- Original calculations derive from `lib/packages.ts`, the owner's confirmed
  21 October 2026 prices. Whole-package averages include accommodation and transfers;
  they are not standalone tooth fees or a reason to treat additional healthy teeth.
- BDA survey figures and Eddie Crouch's statement link to the original release of
  14 July 2022. The population is UK dentists reporting experiences or concerns,
  not a sample establishing overseas-patient complication rates.
- FCA figures identify the May 2024 survey and May 2025 publication. The 2022/2024
  comparison is explicitly two-year and not statistically different. Statements by
  Sarah Pritchard and Oliver Morley use their roles at publication and link to the
  original 16 May 2025 release. These quotations do not imply endorsement.
- Sources appear beside their claims. All editorial paragraphs and quotations
  automatically appear in the existing `llms-full.txt` export.
- Existing WebPage, FAQPage and OfferCatalog JSON-LD remains in `<head>`. Visible
  FAQs and package prices continue to share the same data as their schemas.
- No new credit offers, repayment illustrations, approval claims or clinical
  outcomes were added. Package prices, finance-publication settings, enquiry
  processing, consent, indexability and canonical URLs were not changed.

## Validation

- ESLint, 57 tests, production build and TypeScript passed locally.
- Production SEO smoke checks passed across all public routes, including head-only
  JSON-LD, five matching package cards/offers, FAQ parity and contextual links.
- Rendered `/prices` main content: approximately 2,950 words, three cited
  blockquotes and 14 explicit percentage data points, plus sourced monetary and
  package figures. Editorial answers are approximately 144–178 words before their
  quotations, source labels and links.
- Live Context.dev verification must be recorded after production deployment.

Checker scores are implementation heuristics, not measured citation frequency or
a promise of ranking or AI recommendations.
