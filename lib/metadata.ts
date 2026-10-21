import type { Metadata } from "next";
import { SITE_NAME, canonicalUrl, indexingEnabled } from "./site";
import { publicPages } from "./public-pages";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(path) },
    robots: indexingEnabled() && publicPages().some((page) => page.path === path)
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: canonicalUrl(path),
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Turkey Teeth Finance: your treatment journey in Antalya",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
