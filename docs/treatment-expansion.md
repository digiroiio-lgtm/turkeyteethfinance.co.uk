# UK treatment discovery

Added on 31 October 2026: full-mouth implant comparison, All-on-6 and composite bonding pages. The existing /veneers-finance canonical URL now explicitly explains E.max and porcelain veneers. No old treatment URL was removed.

The clinic publishes All-on-6 and E.max information at https://akdenizdental.com/all-on-6 and https://akdenizdental.com/e-max. These publications do not establish individual suitability, independent outcomes or guaranteed appointment availability. Composite bonding service availability must be confirmed by the clinic before travel; no package or price is published here.

Published veneer packages are not automatically E.max-specific. The four-implant/24-crown package is not an All-on-4, All-on-6 or full-mouth fixed-bridge price. New treatment pages request individual estimates rather than deriving new prices from unrelated packages.

Treatment discovery, server enquiry validation and form choices share lib/treatments.ts, retaining legacy treatment values for existing package links. The homepage has eight treatment cards; bonding starts the second desktop row. Each added page has treatment-specific quote links and a contextual WhatsApp enquiry link.

Article JSON-LD, WebPage, breadcrumbs and visible FAQs are generated from the same content models. The canonical registry drives sitemap.xml and the generated Markdown exports at llms.txt and llms-full.txt. No invented clinical reviewer, rating, offer or product APR is used.

Validation should use a clean build when changing the route registry: previously cached prerenders can otherwise leave sitemap output stale. Run the normal test/build/SEO workflow and verify all new route URLs in the sitemap.
