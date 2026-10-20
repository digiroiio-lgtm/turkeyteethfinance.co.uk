import { enquiryDelivery } from "./enquiry-config";

export const SITE_NAME = "Turkey Teeth Finance";
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://turkeyteethfinance.co.uk").replace(/\/+$/, "");
export const COMPANY = "Akdeniz Dental Consultancy UK Ltd";
export const PRIMARY_CTA = "Get My Free Treatment Quote";
export const draftNotice =
  "Design preview · Finance content awaiting compliance approval · Not a live finance offer";

/** Public search visibility is independent of finance application approval. */
export function indexingEnabled() {
  return (
    process.env.SITE_INDEXING_ENABLED !== "false" &&
    process.env.VERCEL_ENV !== "preview" &&
    process.env.VERCEL_ENV !== "development" &&
    process.env.NODE_ENV !== "development"
  );
}

export function financeApplicationUrl(): string | undefined {
  const value = process.env.FINANCE_APPLICATION_URL;
  if (!value) return;
  try {
    const url = new URL(value);
    if (
      url.protocol === "https:" &&
      (url.hostname === "ideal4finance.com" ||
        url.hostname.endsWith(".ideal4finance.com")) &&
      !url.username &&
      !url.password
    )
      return url.href;
  } catch {
    /* Invalid configuration remains unavailable. */
  }
}

export function publicationApproved() {
  return (
    process.env.SITE_CONTENT_APPROVED === "true" &&
    !!process.env.APPROVED_FINANCE_DISCLOSURE?.trim() &&
    !!financeApplicationUrl()
  );
}

export function leadsConfigured() {
  const delivery = enquiryDelivery();
  return (
    !!delivery &&
    (delivery.provider === "formspree" || !!process.env.TURNSTILE_SECRET_KEY) &&
    !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
    !!process.env.PRIVACY_CONTACT_EMAIL &&
    !!process.env.PRIVACY_RETENTION_NOTICE &&
    !!process.env.PRIVACY_PROCESSORS_NOTICE &&
    !!process.env.PRIVACY_TRANSFER_NOTICE &&
    process.env.LEADS_DELIVERY_VERIFIED === "true"
  );
}

export const financeNotice =
  "Credit is subject to status, affordability and lender approval. Rates, terms and available options depend on your circumstances. A treatment enquiry is not a credit application.";

export const routeSlugs = [
  "pay-monthly",
  "dental-finance",
  "get-a-quote",
  "dental-implants-finance",
  "finance-eligibility",
  "veneers-finance",
  "prices",
  "smile-makeover-finance",
  "zirconia-crowns-finance",
  "all-on-4-finance",
  "before-and-after",
  "reviews",
  "how-it-works",
  "our-clinic",
  "finance-faq",
  "contact",
  "guides",
] as const;
export const canonicalPaths = ["/", ...routeSlugs.map((s) => `/${s}`)];
