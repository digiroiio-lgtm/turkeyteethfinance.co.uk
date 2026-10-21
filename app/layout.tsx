import { Analytics } from "@/components/analytics";
import { publicPages } from "@/lib/public-pages";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SiteSchema } from "@/components/structured-data";
import { SITE_URL, draftNotice, publicationApproved } from "@/lib/site";
import "./globals.css";
const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dental Finance Turkey | Turkey Teeth Finance",
    template: "%s | Turkey Teeth Finance",
  },
  description:
    "Explore dental treatment in Antalya and payment options for eligible UK patients. Start with a free written treatment estimate.",
  verification: {
    google: [
      // Public verification tag for the owner's canonical Search Console property.
      "ZSUB8TeusumW1WrwVBQZfcMyGvvfDs3jI_a8P3eMGBo",
      ...(process.env.GOOGLE_SITE_VERIFICATION
        ? [process.env.GOOGLE_SITE_VERIFICATION]
        : []),
    ],
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};
export default function RootLayout({
  children,
  structuredHead,
}: Readonly<{ children: React.ReactNode; structuredHead: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <SiteSchema />
        {structuredHead}
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {!publicationApproved() && (
          <div className="draft-banner" role="status">
            {draftNotice}
          </div>
        )}
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics enabled={process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : process.env.NODE_ENV === "production"} paths={publicPages().map(page => page.path)} />
      </body>
    </html>
  );
}
