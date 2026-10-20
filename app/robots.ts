import type { MetadataRoute } from "next";
import { SITE_URL, publicationApproved } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return publicationApproved()
    ? {
        rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
