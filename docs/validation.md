# Validation

Completed on 20 October 2026:

- `npm run lint`: passed with no warnings.
- `npm run typecheck`: passed.
- `npm test`: 18 tests passed. Covers consent and honeypot validation, image signatures, streaming upload bounds, password-free draft access, broker URL validation, missing integration behaviour, signed mocked webhook delivery, menu state, budget selection, all four enquiry steps and LLM exports.
- `npm run build`: passed. All 18 brief pages and both legal pages are statically generated, with server route handlers for enquiries and the IndexNow key.
- Inspected the generated HTML for all 20 content pages: one H1, unique title and description, one canonical, valid JSON-LD and valid internal link destinations.
- `/llms.txt` and `/llms-full.txt` are generated at build time from shared public page data. Tests cover all 20 canonical pages, current FAQs, complete guides, content edits, public configuration and exclusion of private settings. Production HTTP checks confirmed UTF-8 plain text, the discovery `Link` header and matching generated response bodies. Privacy and terms retain their prior visible wording after moving their content into the shared model.
- Browser visual review: desktop and 390 px iframe layout. The narrow layout reported equal content/client widths of 375 px after the scrollbar, with no horizontal overflow.

Browser interaction QA was not completed: the managed development preview encountered development-runtime restrictions and then an explicit browser URL security rejection. No browser workaround was attempted after that rejection. The menu, budget and form interactions were independently validated in an in-memory React DOM using synthetic data. A production-hosted browser smoke test is still required before public launch.

No genuine credit application, live CRM submission, third-party notification, DNS change, search ownership verification or financial-promotion approval was performed. Pages are accessible without a password. Finance application links, indexing and enquiry delivery retain their independent configuration requirements. Reviews and patient outcome modules require verified source content and publication consent.
