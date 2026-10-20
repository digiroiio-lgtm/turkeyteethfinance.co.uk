# Formspree enquiry delivery

The site uses Next.js App Router, React and Vercel. The existing four-step React form keeps its state, validation, error and success UI. It posts to /api/quote; that route sends multipart FormData to https://formspree.io/f/xgaojavy with Accept: application/json. No client SDK or extra CDN script is needed.

## Delivery behavior

- The server validates required fields, explicit consents, the honeypot, body size and photo signatures before forwarding.
- Formspree gets named fields including email, name, treatment, contact preference, budget, privacy/health consent, separate marketing consent, reference, submittedAt and privacyNoticeVersion. _optin is absent unless marketing consent was checked.
- Optional photographs remain optional. They are decoded, resized, stripped of metadata, renamed and sent as WebP attachment files. Limits: 3 files, 3 MiB each, 4 MiB total. The request limit leaves multipart headroom below Vercel's 4.5 MB function limit.
- A success response requires a successful HTTP status and the JSON next acknowledgement used by Formspree's client. The supplied next URL is never followed. It acknowledges provider acceptance, not delivery to an inbox.
- Quota errors, unavailable photo support, provider validation, invalid JSON, timeouts and network errors never show success. No automatic retries or fallback to a different recipient.
- The browser guards duplicate submissions and refreshes the CAPTCHA after every attempt, including failures. Nothing is stored in browser storage or logged.
- The existing signed-webhook path remains available through explicit ENQUIRY_DELIVERY_PROVIDER=webhook. There is no automatic receiver switch.

## Required Formspree settings

1. Open the xgaojavy form. Confirm its recipient address and activate it.
2. Match the site's security widget to the actual Formspree configuration. On 20 October 2026, xgaojavy was enabled, Formshield was on and CAPTCHA was disabled. This fix does not change those provider settings. The supplied form can receive submissions without a custom Turnstile key.
3. To add custom Turnstile later, enable it in Formspree, configure the widget secret there and matching NEXT_PUBLIC_TURNSTILE_SITE_KEY in Vercel. A configured widget requires a token in the browser and API; cf-turnstile-response is then verified once by Formspree. In webhook mode the existing application-side secret/action/hostname verification remains required.
4. Restrict the Formspree project to turkeyteethfinance.co.uk. The server sets a fixed canonical Referer, with no enquiry data in the URL.
5. Native file uploads require a Formspree plan supporting uploads. If uploads are unavailable, a clear error allows the visitor to remove optional photographs and retry. Files are never silently omitted.

## Vercel configuration and activation

Set ENQUIRY_DELIVERY_PROVIDER=formspree and FORMSPREE_ENDPOINT=https://formspree.io/f/xgaojavy. This endpoint is also the code default. It is public, not an API secret. Unknown providers or invalid Formspree origins keep collection unavailable.

The enabled, valid Formspree destination is sufficient to make the form available. Legacy webhook activation flags do not block this provider. ENQUIRY_DELIVERY_ENABLED=false is an explicit operational off switch for either provider. A configured NEXT_PUBLIC_TURNSTILE_SITE_KEY still makes its token mandatory. Privacy notice overrides remain supported, but do not act as technical delivery switches. The notice identifies Formspree and the existing WhatsApp coordination contact without claiming a retention period or approved transfer mechanism.

For Formspree mode, LEAD_WEBHOOK_URL, LEAD_WEBHOOK_SECRET and TURNSTILE_SECRET_KEY are not required by Vercel. The Turnstile secret belongs in Formspree. In webhook mode the original secret requirements remain.

For the explicit webhook provider, the existing TURNSTILE_SECRET_KEY, NEXT_PUBLIC_TURNSTILE_SITE_KEY, PRIVACY_* notices and LEADS_DELIVERY_VERIFIED=true requirements remain. Check a clearly labeled synthetic enquiry in Formspree after deployment. Never use real patient information for testing. Automated tests mock the receiver and do not send emails or real submissions.

Redeploy after changing public/build-time environment variables. Both /get-a-quote and /contact use the shared React component and configuration.

## Validation

Run npm run lint, npm test, npm run build and npm run typecheck. The CI workflow runs them without production secrets. Integration tests cover multipart mapping, consent and CAPTCHA rejection, opt-in behavior, metadata-free attachments, receiver errors, retries, duplicate prevention and the existing webhook. Finance disclosures are unchanged. The privacy notice describes the enabled Formspree flow and uses the existing WhatsApp contact.

Official references:
- https://help.formspree.io/articles/working-with-react/the-formspree-react-library
- https://help.formspree.io/articles/form-and-project-settings/protecting-your-forms-with-cloudflare-turnstile
- https://help.formspree.io/articles/building-your-form/file-uploads
- https://vercel.com/docs/functions/limitations
