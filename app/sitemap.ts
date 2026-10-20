import type { MetadataRoute } from "next";
import { indexingEnabled } from "@/lib/site";
import { publicPages, publicSitemapEntries } from "@/lib/public-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexingEnabled() ? publicSitemapEntries(publicPages()) : [];
}
