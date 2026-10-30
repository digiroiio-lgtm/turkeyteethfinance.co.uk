# Turkey Teeth Finance

A Next.js App Router implementation of the supplied homepage, Pay Monthly and How It Works visual references. Includes all 18 requested pages, plus privacy and website terms.

## Run

Requires Node.js 20.9+ and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open the local address reported by Next.js. `npm run build` and `npm start` run the production build. The project is compatible with a standard Vercel Next.js deployment.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

## What is implemented

- Shared Inter typography, lavender/cyan gradients, navy headings, yellow pill CTAs, portrait hero, rounded cards and responsive navigation.
- All brief routes, unique metadata and canonical URLs, crawlable FAQs, JSON-LD, OG image, breadcrumbs, sitemap and robots.
- A four-step treatment enquiry with email/WhatsApp preferences, optional dental photographs, explicit health-data consent and separate optional marketing consent.
- Server-side validation, bounded requests, same-origin checks, Turnstile verification, decoded/re-encoded photographs with metadata removed and a signed private webhook handoff. No patient data in application analytics or logs.
- A treatment budget explorer plus an independent repayment calculator using a user-entered annual nominal rate; neither supplies lender quotes or advertised APRs.
- Draft publication controls, search verification settings and an opt-in changed-URL IndexNow script.
- Automatically generated `/llms.txt` and `/llms-full.txt`, with a discovery `Link` response header.

## LLM text exports

`/llms.txt` is a short directory of all 20 canonical content pages, including privacy and terms. `/llms-full.txt` includes shared page copy, treatment descriptions, all FAQs, complete guide articles and the legal notices. Navigation, repeated UI and interactive form inputs are omitted.

Both UTF-8 Markdown text responses are generated during `next build` from the same content models used by the pages (`lib/content.ts`, `lib/legal-content.ts` and `lib/site.ts`). Content edits and public privacy/finance configuration are reflected on the next deployment; no separate text files need to be maintained. Only the explicitly public content fields are exported. Draft notices and approved finance links follow the website’s existing publication settings.

Every response advertises `/llms.txt` with a `Link` header. The index links to the full text. These optional agent resources do not replace sitemap.xml, robots.txt or normal search indexing.

## Before public launch

The website is accessible without a password in every environment. Production search indexing is enabled independently of finance application approval. Set `SITE_INDEXING_ENABLED=false` and rebuild for a deliberate search hold. Vercel preview/development builds and non-canonical deployment hosts remain blocked from indexing. The www/apex alias redirects permanently to `NEXT_PUBLIC_SITE_URL`.

Supply the genuine approved Ideal4Finance application URL and complete approved disclosure, then set `SITE_CONTENT_APPROVED=true` and rebuild. The application URL is restricted to HTTPS on the provider’s domain. Do not use an invented URL or copy a generic homepage link into this setting.

The sitemap uses the same route list as the public pages, plus privacy and terms. Its `lastmod` values come from each page’s `lastModified` content field, not the deployment clock. Update the affected page dates only when their primary content changes; for a shared FAQ edit, update each affected page. Legal notices also have a human-readable `updated` date to keep in sync. A CSS-only deployment must not change these dates.

The supplied Formspree endpoint enables the shared React enquiry form without legacy webhook activation flags. Required fields, explicit consents, server validation and photo processing remain in place. A custom Turnstile token is required only when its widget is configured. Set ENQUIRY_DELIVERY_ENABLED=false to pause delivery. See [Formspree setup](docs/formspree.md); the separately selected signed-webhook provider retains its existing configuration requirements.

Patient review and result pages intentionally do not invent patient names, testimonials, ratings or outcomes. Verified consented content must be supplied before populating these modules.

## Pages

`/`, `/pay-monthly`, `/dental-finance`, `/get-a-quote`, `/dental-implants-finance`, `/finance-eligibility`, `/veneers-finance`, `/prices`, `/smile-makeover-finance`, `/zirconia-crowns-finance`, `/all-on-4-finance`, `/before-and-after`, `/reviews`, `/how-it-works`, `/our-clinic`, `/finance-faq`, `/contact`, `/guides`.

Implementation notes and image provenance are in [visual references](docs/visual-references.md). Production deploys from main on Vercel at https://turkeyteethfinance.co.uk. Branch previews retain their indexing protection.

## Search regression checks

See [SEO validation](docs/seo-validation.md). Pull requests run a fresh production audit and build/test/HTTP smoke checks for both production and preview. `npm run seo:check` checks the live domain; `npm run seo:smoke` checks an existing local production build. Both HTTP check commands use Python 3.


## Formspree enquiries

The shared React enquiry form can deliver through Formspree endpoint xgaojavy using the existing server validation route. See [Formspree setup](docs/formspree.md) for matching CAPTCHA settings, optional attachments, the operational off switch and delivery verification.

## Repayment illustrations

`/finance-calculator` is a static canonical page included in sitemap and LLM exports. Package links carry only a known package ID; the calculator preselects the published price. No interest rate is preselected. Results use a user-entered annual nominal interest rate divided by 12, equal end-of-month payments and no fees. They are mathematical illustrations, not APR pricing, lender offers or eligibility decisions. The zero-interest branch and a contribution covering the whole cost are supported. No inputs are sent to analytics or a lender.

Finance publication remains controlled by the existing approved disclosure and application-link settings. This release does not assert new regulatory status, publish an unapproved rate or change those production settings.
