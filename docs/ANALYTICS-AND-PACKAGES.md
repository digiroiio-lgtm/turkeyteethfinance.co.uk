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

## Event expansion, 23 November 2026

Goal: measure user experience and raise form and WhatsApp conversion. Enhanced measurement stays off, so nothing here double counts GA4 automatic events. Every parameter comes from a fixed list in `lib/analytics.ts`; entered values, treatment names, error text, URLs with queries and identifiers are never sent.

| Event | Trigger | Parameters |
| --- | --- | --- |
| form_view | Form 30% visible, or first interaction | form_id |
| form_step_view | Step 2, 3 or 4 shown, once per step | form_id, form_step |
| form_field_focus | First focus of a field | form_id, form_step, field_name |
| form_field_complete | Field left with a value (flag only, no value) | form_id, form_step, field_name |
| form_option_select | Preferred contact, package or treatment chosen (treatment name is not sent) | form_id, field_name, contact_method, package_id |
| form_photo_add | Photographs added | form_id, field_name |
| form_back_click | Back button | form_id, form_step |
| form_validation_error | Existing, now with the field that failed | form_id, form_step, field_name |
| form_abandon | Existing, now with the last field touched | form_id, form_step, field_name |
| generate_lead | Existing, now with segments | form_id, form_step, contact_method, duration_bucket, package_id |
| whatsapp_cta_view / quote_cta_view | CTA 50% visible, once per type, location and package per page | cta_location, package_id |
| contact_click | mailto or tel link | contact_method |
| content_link_click | Internal link to a public page | link_group, link_target |
| outbound_click | External link (not WhatsApp) | link_domain |
| scroll_depth | 25, 50, 75, 100% (pages that fit the screen are skipped) | scroll_percent |
| engaged_time | 15, 30, 60, 120 s visible and focused | engaged_seconds |
| calculator_start / calculator_result_view | First calculator change; estimate shown | none (amounts are never sent) |
| web_vital | Latest LCP, INP and CLS sent when the page is hidden (CLS x 1000) | metric_name, metric_rating, metric_value |

Calculator quote links use `cta_location = calculator`.

### Ratios to watch

| Ratio | Formula |
| --- | --- |
| Form start rate | form_start / form_view |
| Step reach | form_step_view (step n) / form_view |
| Field friction | form_field_focus without form_field_complete, and form_validation_error by field_name |
| Where people leave | form_abandon by form_step and field_name |
| Form completion | generate_lead / form_start |
| WhatsApp click-through | whatsapp_click / whatsapp_cta_view, by cta_location |
| Quote click-through | quote_cta_click / quote_cta_view, by cta_location |
| Reading | scroll_depth 75 and engaged_time 30 per landing page |

### GA4 administration (not possible from code)

1. Key events: keep `generate_lead`; add `whatsapp_click` (and optionally `quote_cta_click`).
2. Event-scoped custom dimensions: `cta_location`, `form_step`, `field_name`, `contact_method`, `duration_bucket`, `scroll_percent`, `engaged_seconds`, `link_group`, `link_target`, `link_domain`, `metric_name`, `metric_rating`, `package_id`, `page_type`. Custom metric: `metric_value`.
3. Internal-traffic filter for the clinic team (Turkey) and a review of the "(direct)", country "(not set)", zero-engagement sessions on /pay-monthly.
4. Funnel exploration: form_view, form_start, form_step_view (2, 3, 4), form_submit_attempt, generate_lead.

The consent banner and the privacy page now list scroll, time on page, contact and link clicks and page speed. The wording needs approval from the compliance owner before release.
