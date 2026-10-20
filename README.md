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

## Before public launch

The website is accessible without a password in every environment. Draft pages display a preview notice, remain marked noindex and are excluded from the sitemap until finance publication is configured. There is no site-wide authentication or HTTP 503 preview gate.

Supply the genuine approved Ideal4Finance application URL and complete approved disclosure, then set `SITE_CONTENT_APPROVED=true` and rebuild. The application URL is restricted to HTTPS on the provider’s domain. Do not use an invented URL or copy a generic homepage link into this setting.

Enquiry delivery stays unavailable until the private receiver, Turnstile, reviewed privacy notices and delivery verification are configured. See [deployment and enquiry integration](docs/deployment.md). No live CRM delivery has been verified in this implementation session.

Patient review and result pages intentionally do not invent patient names, testimonials, ratings or outcomes. Verified consented content must be supplied before populating these modules.

## Pages

`/`, `/pay-monthly`, `/dental-finance`, `/get-a-quote`, `/dental-implants-finance`, `/finance-eligibility`, `/veneers-finance`, `/prices`, `/smile-makeover-finance`, `/zirconia-crowns-finance`, `/all-on-4-finance`, `/before-and-after`, `/reviews`, `/how-it-works`, `/our-clinic`, `/finance-faq`, `/contact`, `/guides`.

Implementation notes and image provenance are in [visual references](docs/visual-references.md). Changes are provided on a review branch; no production domain or DNS is configured by this repository.
