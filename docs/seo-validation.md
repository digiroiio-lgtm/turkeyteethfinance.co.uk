# Search indexing validation

The public production origin is https://turkeyteethfinance.co.uk.

## Root cause and current baseline

The original empty sitemap, Disallow: /, HTML noindex/nofollow and X-Robots-Tag came from one finance-publication condition being reused by search controls. That coupling was removed on main before this PR. The current live baseline must be measured again rather than inferred from the old report.

A remaining proxy condition treated every hostname other than the canonical hostname as a preview. That can incorrectly noindex production requests behind a reverse proxy. Environment classification now takes precedence; missing optional Vercel flags do not turn production into a preview. Known development/deployment aliases remain protected, and a canonical forwarded host can be recognized without allowing redirects to arbitrary supplied hosts.

## Page and URL sources

The keys of lib/content.ts drive the actual static route list. lib/public-pages.ts combines that page data with the home and legal-page metadata for sitemap and LLM discovery. Entries explicitly marked indexable: false are excluded and receive noindex metadata. This setting concerns search discovery, not authentication.

Guide articles currently live at anchors under /guides, not independent routes. /guides is included; fragment URLs are not separate sitemap entries. API handlers and external finance applications are never sitemap pages. The existing /api/ robots rule corresponds to real handlers and remains in place.

Canonical origins must be HTTPS origins without credentials, ports, query strings or content paths. Empty, invalid or temporary development/Vercel URLs fall back to the known production origin. The site's www alias normalizes to the primary domain.

lastmod uses valid explicit page content dates. Unknown or invalid dates are omitted. Builds and HTTP requests do not replace page dates with the current clock. priority and changefreq are not used as validation signals.

## Executable checks

GitHub Actions runs:
- A fresh, read-only production audit, logging exact statuses, metadata and headers.
- npm run lint, npm test, npm run build and npm run typecheck.
- npm run seo:smoke against a locally served production build. Every sitemap URL must return 200 directly, be indexable and match its canonical. The sitemap must equal the shared public registry.
- A second build with VERCEL_ENV=preview and a preview HTTP smoke check proving the crawl protections remain active.

The production audit records baseline failures without claiming they are fixed. The build and smoke job fails on regressions. Both execute without production secrets, finance approval or patient data.

Manual production verification (requires Python 3):
```sh
npm run seo:check
```

A successful check requires valid non-empty XML, the canonical robots sitemap declaration, no blocking HTML/HTTP directive, correct www redirect, and consistent llms.txt/llms-full.txt page URLs. Explicit SITE_INDEXING_ENABLED=false remains an operator-controlled search hold and is reported as a production audit failure.

There is no vercel.json in the repository. next.config.ts does not set a global noindex header. Vercel dashboard settings and deployment protection cannot be inferred from repository code. A remote block must be reported from actual HTTP evidence, without guessing the value of a private environment variable.

## Search Console

Ownership verification and URL Inspection require the owner's authenticated browser session. Adding the existing public Google verification tag alone does not complete verification. If the session is unavailable, verify the property at https://search.google.com/search-console, submit sitemap.xml, inspect the homepage, run a live URL test and request indexing.
