# Validation — 29 October 2026

## Production baseline before edits

- Live `python3 scripts/check-seo.py --report-only`: PASS, 22 sitemap URLs. Evidence in live-indexability.json.
- Live supplemental inventory: 22/22 HTTP 200. See live-page-inventory.csv.
- Live HTTP/www/slash/unknown-page/preview samples: see url-variants.json.
- Baseline local production build and SEO smoke: PASS.

## Changed branch

- `npm run build`: PASS.
- `npm run lint`: PASS, zero warnings from ESLint.
- `npm test`: PASS, 67 tests, zero failures.
- `npm run typecheck`: PASS.
- `npm run seo:smoke`: PASS. All 22 canonical pages, unique titles/descriptions, one H1, public sitemap, schema/content parity, all internal anchor and fragment destinations, real 404s and consent-before-analytics checks.
- Fresh `VERCEL_ENV=preview npm run build` then `VERCEL_ENV=preview npm run seo:smoke -- --preview`: PASS. Preview robots blocks crawling, sitemap empty, HTTP and HTML noindex retained.
- `git diff --check`: PASS.
- CSV column consistency: PASS for page inventory, 16-cluster keyword map and weekly scorecard.

## Limitations

No deployment, Google indexing verification, current account-level Nightwatch export, measured CWV result, visual mobile QA, production form submission, finance application, CRM integration or conversion uplift is asserted. Public metadata/source checks do not establish Google-selected canonicals. PageSpeed returned HTTP 429 quota exhausted. All proposed finance activation, pricing claims, structural performance work and URL consolidation remain outside this change.

After deployment, rerun `npm run seo:check`, inspect the changed URLs in GSC and compare the fixed keyword cohort weekly. Review REPORT.md for the complete approval queue and measurement definitions.
