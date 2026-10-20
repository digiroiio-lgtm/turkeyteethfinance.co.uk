# Validation

## Consolidated release checks

The consolidated release includes the indexing work from PR #2 and the React/Formspree integration from PR #3. Their individual checks passed before consolidation. The combined tree must pass the single SEO validation workflow before main is updated.

The workflow runs lint, all unit/component/route tests, a production build, typecheck, and HTTP smoke checks for every canonical sitemap URL. It then builds preview configuration and verifies blocking robots, HTML and HTTP directives.

The form tests mock Formspree and the existing signed webhook. They cover consent, honeypot and CAPTCHA presence, multipart fields, marketing opt-in, upload totals, metadata-free attachments, receiver failures, duplicate prevention and retries. No real enquiries or email notifications are sent by CI.

## Production evidence and ownership

A fresh live check on 20 October 2026, before this consolidation, confirmed 20 public sitemap URLs, 200 responses, matching canonicals, open robots, no blocking HTML/HTTP directives, the www-to-apex 308 redirect and consistent LLM exports.

Search Console ownership was verified using the existing public HTML tag. The sitemap was submitted and processed with 20 discovered pages. Google's live homepage test confirmed crawl allowed, successful fetch and indexing allowed; the indexing request was accepted. That does not establish indexed status or ranking.

After merging, verify the Vercel Production/Current deployment points to the resulting main commit, then repeat the live audit after that deployment is ready. A preview build alone is not production deployment evidence.

## Earlier visual validation

The initial build was reviewed at desktop and 390 px iframe sizes, with no horizontal overflow. Menu, budget and form interactions are also tested in an in-memory React DOM. No claim is made that these checks replace a full browser review of every route.

Finance promotion approval and live enquiry-delivery verification remain independent configuration requirements. Reviews and patient outcome modules require verified source content and publication consent. See formspree.md and seo-validation.md for setup and executable checks.
