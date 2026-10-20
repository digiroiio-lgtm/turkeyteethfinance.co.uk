import type { MetadataRoute } from "next";
import { SITE_URL, canonicalPaths, publicationApproved } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicationApproved()) return [];
  return [...canonicalPaths, "/privacy", "/terms"].map((path) => ({
    url: SITE_URL + (path === "/" ? "" : path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/pay-monthly" ? 0.95 : 0.8,
  }));
}
