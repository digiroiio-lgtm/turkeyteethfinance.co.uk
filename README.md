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
- A treatment budget explorer that does not fabricate loan quotations, APRs or repayments.
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

Enquiry delivery stays unavailable until the private receiver, Turnstile, reviewed privacy notices and delivery verification are configured. See [deployment and enquiry integration](docs/deployment.md). No live CRM delivery has been verified in this implementation session.

Patient review and result pages intentionally do not invent patient names, testimonials, ratings or outcomes. Verified consented content must be supplied before populating these modules.

## Pages

`/`, `/pay-monthly`, `/dental-finance`, `/get-a-quote`, `/dental-implants-finance`, `/finance-eligibility`, `/veneers-finance`, `/prices`, `/smile-makeover-finance`, `/zirconia-crowns-finance`, `/all-on-4-finance`, `/before-and-after`, `/reviews`, `/how-it-works`, `/our-clinic`, `/finance-faq`, `/contact`, `/guides`.

Implementation notes and image provenance are in [visual references](docs/visual-references.md). Changes are provided on a review branch; no production domain or DNS is configured by this repository.
