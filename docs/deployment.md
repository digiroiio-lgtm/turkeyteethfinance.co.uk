# Deployment and enquiry integration

## Production / Vercel

1. Import this repository as a Next.js project; use `npm ci` and `npm run build` with the default Next.js output.
2. Configure the environment variables from `.env.example`. Keep all secrets in the hosting environment, never in Git.
3. For review, leave `SITE_CONTENT_APPROVED=false`. Pages are accessible without credentials, with a draft notice and noindex metadata. Review all pages, legal copy, fees and the application journey in the deployment.
4. Obtain the actual approved bespoke Ideal4Finance link and the complete approved wording identifying all relevant entities, permissions, fees and any required examples. Populate `FINANCE_APPLICATION_URL` and `APPROVED_FINANCE_DISCLOSURE` only with that approved content.
5. Confirm clinic identity, clinical descriptions, privacy notices, data processors, retention and UK-to-Turkey transfer safeguards with the operator. No invented clinician credentials or author endorsements are present.
6. After written financial-promotion approval, set `SITE_CONTENT_APPROVED=true` and rebuild. This enables indexable metadata, a populated sitemap and the external application CTA. Changing runtime variables without rebuilding is insufficient for statically generated metadata and forms.
7. Connect the production domain using the hosting provider’s verified domain workflow. This task has not changed DNS, created a Vercel project or published financial promotions.

The application has no site-wide password or preview-access gate. `PREVIEW_PASSWORD` is no longer used and can be removed from existing hosting settings. Draft indexing controls and the independent finance/lead integration settings continue to apply.

## Private lead receiver

Configure an HTTPS `LEAD_WEBHOOK_URL` and a random, private `LEAD_WEBHOOK_SECRET`. The receiver must validate the exact raw request body against:

```text
X-Lead-Signature: sha256=<HMAC-SHA256 of raw body with LEAD_WEBHOOK_SECRET>
X-Lead-Reference: <UUID>
```

Reject invalid signatures using constant-time comparison. Deduplicate by `reference` before sending notifications. Return 2xx only after durable acceptance, and ensure the receiver does not log request bodies or expose records publicly. The form reports success only after this receiver responds with 2xx. There is no automatic retry that could duplicate a submitted enquiry.

Payload fields: `schemaVersion`, `reference`, `submittedAt`, `source`, `privacyNoticeVersion`, `treatment`, `teeth`, `concern`, `notes`, `fullName`, `email`, `whatsapp`, `preferredContact`, `timeframe`, `budget`, `dataConsent`, `healthConsent`, `marketingConsent`, `photos`.

Each photo contains a generated `filename`, `type` and base64 `data`. Up to three JPEG/PNG/WebP inputs are accepted, each up to 3 MB; the whole request is capped at 10 MB while streaming. Magic bytes are checked, and Sharp decodes, rotates, downsizes to at most 1800 × 1800 and re-encodes as WebP without original EXIF/GPS metadata. Original filenames are discarded. Images exceeding the decoder’s pixel limit or failing to decode are rejected.

The application does not store leads on its filesystem, serve uploads publicly, include health details in query strings or send advertising events. The receiver is responsible for encrypted storage, access controls, access auditing, deletion, retention, lawful international transfer handling and restricted staff notifications. Do not use ordinary unauthenticated email as the photo-storage backend.

Configure Cloudflare Turnstile for the production hostname. Supply the site key and server secret; the server verifies token success, hostname and the `treatment-enquiry` action. Set reviewed `PRIVACY_CONTACT_EMAIL`, `PRIVACY_RETENTION_NOTICE`, `PRIVACY_PROCESSORS_NOTICE` and `PRIVACY_TRANSFER_NOTICE`. The notices render on `/privacy`.

Use a test-only deployment and synthetic information to verify end-to-end delivery, access control, receiver signature verification, photo handling and notifications. Set `LEADS_DELIVERY_VERIFIED=true` only after those checks, then rebuild. The form remains unavailable unless every required setting is present. Configure additional rate limits at the deployment edge if required by traffic levels.

Tested here: missing integration returns 503, cross-site requests return 403, invalid consents are rejected, streaming size is bounded, honeypot is enforced, and a mocked receiver is signed correctly with failures never reported as success. Tests use synthetic data and do not contact real patients, lenders or the CRM.

## Search and IndexNow

Google and Bing verification meta tags are driven by `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION`. Verification with the search platforms itself requires the owner’s account and is not completed by adding these variables.

Generate one site-specific `INDEXNOW_KEY` with 8–128 allowed characters. After the approved build is live, the application serves `/<key>.txt`. Submit only canonical paths that actually changed, from an environment with the same production configuration:

```sh
npm run indexnow -- / /pay-monthly
```

The script refuses unapproved builds, unknown paths and a mismatched live key file. It does not submit the whole sitemap automatically. Search visibility and indexing depend on the search services; this project does not represent a ranking guarantee.
