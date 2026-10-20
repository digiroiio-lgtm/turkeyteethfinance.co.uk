import type { MetadataRoute } from "next";
import { SITE_URL, indexingEnabled } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return indexingEnabled()
    ? {
        rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
