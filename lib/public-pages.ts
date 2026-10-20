import type { MetadataRoute } from "next";
import { homeContent, pages } from "./content";
import { privacyContent, termsContent } from "./legal-content";
import { canonicalUrl, routeSlugs } from "./site";

export type PublicPage = {
  path: string;
  title: string;
  description: string;
  lastModified?: string;
};

export function trustedContentDate(value: unknown): string | undefined {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return;
  const date = new Date(value);
  if (!Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value) return value;
}

/** Page data only; no query URLs, redirects, external applications or API routes. */
export function publicPages(): PublicPage[] {
  const content = [
    { ...homeContent, path: "/" },
    ...routeSlugs
      .filter((slug) => pages[slug].indexable !== false)
      .map((slug) => ({ ...pages[slug], path: `/${slug}` })),
    privacyContent(),
    termsContent(),
  ];
  return content.map(({ path, title, description, lastModified }) => ({
    path, title, description, lastModified: trustedContentDate(lastModified),
  }));
}

export function publicSitemapEntries(content: PublicPage[]): MetadataRoute.Sitemap {
  if (!content.length) throw new Error("An indexable production sitemap must not be empty.");
  return content.map(({ path, lastModified }) => ({
    url: canonicalUrl(path),
    ...(lastModified ? { lastModified } : {}),
  }));
}
