import type { MetadataRoute } from "next";
import { SITE_URL, routeSlugs, indexingEnabled } from "@/lib/site";
import { homeContent, pages } from "@/lib/content";
import { privacyContent, termsContent } from "@/lib/legal-content";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled()) return [];
  const content = [
    { path: "/", lastModified: homeContent.lastModified },
    ...routeSlugs.map((slug) => ({
      path: `/${slug}`,
      lastModified: pages[slug].lastModified,
    })),
    privacyContent(),
    termsContent(),
  ];
  return content.map(({ path, lastModified }) => ({
    url: SITE_URL + (path === "/" ? "" : path),
    lastModified,
  }));
}
