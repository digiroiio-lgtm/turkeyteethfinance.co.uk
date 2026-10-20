export const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/xgaojavy";

export type EnquiryDelivery =
  | { provider: "formspree"; url: string }
  | { provider: "webhook"; url: string };

/** Server-selected destinations only; never take a receiver URL from a submission. */
export function enquiryDelivery(
  env: Record<string, string | undefined> = process.env,
): EnquiryDelivery | undefined {
  const provider = env.ENQUIRY_DELIVERY_PROVIDER?.trim() || "formspree";
  const value = provider === "formspree"
    ? env.FORMSPREE_ENDPOINT?.trim() || DEFAULT_FORMSPREE_ENDPOINT
    : provider === "webhook" ? env.LEAD_WEBHOOK_URL?.trim() : undefined;
  if (!value) return;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) return;
    if (provider === "formspree") {
      if (url.hostname !== "formspree.io" || url.port ||
          !/^\/f\/[a-zA-Z0-9]+$/.test(url.pathname) || url.search || url.hash) return;
      return { provider, url: url.href };
    }
    if (provider === "webhook" && env.LEAD_WEBHOOK_SECRET?.trim()) {
      return { provider, url: url.href };
    }
  } catch { /* Invalid configuration keeps delivery unavailable. */ }
}
