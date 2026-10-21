# Analytics and packages, 21 October 2026

`lib/packages.ts` is the shared source for cards, Prices head OfferCatalog/Service offers, llms-full.txt, enquiry preselection and server-derived delivery details. The owner confirmed the five prices: 20 Zirconium Crowns (10+10) GBP2800, 24 (12+12) GBP3000, 16 Veneers GBP3500, 20 Veneers GBP4200, 4 Osstem Implants +24 Zirconium Crowns GBP5840. Only 24 crowns carries Popular Choice. Specified treatment, hotel accommodation, airport and clinic transfers are included. Crowns/veneers include five nights; the implant package includes 3+5 nights across two visits. Clinical assessment and personalised treatment planning remain required. No additional inclusions, discounts, guarantees, credit claims or repayment examples were added. Existing finance publication gate is preserved.

Five responsive SSR cards appear on Prices, three previews on the homepage. Quote links preselect a whitelisted package and matching treatment. Changing treatment clears incompatible packages; the API rejects unknown or mismatched IDs and derives price/name/stay on the server. WhatsApp prefilled text contains public package information only.

GA4 G-BS3FP40Z46 loads only after affirmative analytics consent on canonical production. Reject and Accept have equal prominence. Consent expires after 180 days. Footer Cookie settings permits withdrawal, disables future collection and removes accessible _ga cookies. It does not delete data previously received by Google. Advertising permissions and Google Signals are disabled. The privacy notice describes collection and Google processing.

One manual page_view is sent per canonical route. Page URLs lose query strings/fragments; referrers are reduced to origins or known public same-site paths. Generic titles avoid entered data. No entered names, email, phone, dental answers, budgets, concern text, photos, filenames, enquiry references or raw errors are sent to Analytics. Public package IDs are sent only on public card CTA clicks.

| Event | Trigger |
| --- | --- |
| page_view | Initial consented page or canonical route change |
| quote_cta_click | Quote link, bounded CTA placement |
| whatsapp_click | WhatsApp link, bounded CTA placement |
| finance_cta_click | Approved application CTA when existing gate permits |
| packages_cta_click | Link to full catalog |
| package_list_view | Package section enters viewport |
| budget_interaction | First planner interaction, no amount or treatment |
| faq_open | FAQ ordinal position only |
| form_start | First meaningful interaction |
| form_step_complete | Valid step advancement once per step |
| form_validation_error | Local validation failure |
| form_submit_attempt | Valid submission starts |
| form_submit_error | Failed delivery or invalid acknowledgement |
| generate_lead | Accepted API acknowledgement with reference |

Form events contain a fixed form ID and step 1–4 only. Neither quote/WhatsApp clicks nor form steps are counted as accepted leads. No monetary conversion value is assumed. Clinical qualification remains a clinical process.

GA4 administration was verified in the connected browser: Tortilla Supplier property559843576, stream16168382704, exact measurement ID. Enhanced measurement was disabled and verified off to avoid automatic duplicate page/form/outbound collection. generate_lead was saved as a key event counted per event with no default monetary value. CTA location (cta_location) and Package ID (package_id) event-scoped dimensions were saved. Form step (form_step) was saved and verified in Custom definitions on 22 October 2026. Event parameters are still collected without registered dimensions.

57 synthetic unit/component tests cover privacy gating, expiry, withdrawal across tabs, preview exclusion, script/page deduplication, sanitisation, successful-only lead events, form retries, package changes and server-derived delivery prices. External receiver calls are mocked. HTTP smoke checks cover 22 canonical URLs, robots, sitemap, headers, head schemas, all package prices/inclusions and llms responses. CI moves production build artifacts aside before preview build to prevent static output reuse across environments.

After deployment, visually verify desktop/mobile cards, follow a quote link without submission and verify page/CTA events in GA4 Realtime after opting in. Reject through Cookie settings and verify persistence. Never create a fake patient lead for a conversion test. Local checks do not establish live deployment, actual GA event receipt or improved conversion rates. Standard reports/custom dimensions may process later than Realtime.

Live follow-up on 22 October: package preselection and Continue worked in the browser. At 390px, all five cards fit without horizontal overflow. The Google library loaded after consent. The tag adapter was corrected to use Google's documented Arguments command shape; a regression assertion covers the queue format. Realtime receipt must be checked after this correction is deployed.
