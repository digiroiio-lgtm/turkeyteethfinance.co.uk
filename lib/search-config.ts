/** Canonical public origin, never a preview/development deployment URL. */
export const DEFAULT_SITE_URL = "https://turkeyteethfinance.co.uk";

export function temporaryHostname(value: string): boolean {
  const host = value.toLowerCase().replace(/^\[|\]$/g, "");
  return host === "localhost" || host.endsWith(".localhost") ||
    host === "127.0.0.1" || host === "::1" || host.endsWith(".vercel.app");
}

export function canonicalOrigin(value?: string): string {
  try {
    const url = new URL(value?.trim() || DEFAULT_SITE_URL);
    if (url.protocol !== "https:" || url.username || url.password || url.port ||
        temporaryHostname(url.hostname) || url.pathname !== "/" || url.search || url.hash) {
      return DEFAULT_SITE_URL;
    }
    if (url.hostname === "www.turkeyteethfinance.co.uk") {
      url.hostname = "turkeyteethfinance.co.uk";
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function searchIndexingEnabled(
  env: Record<string, string | undefined> = process.env,
): boolean {
  if (env.SITE_INDEXING_ENABLED?.trim().toLowerCase() === "false") return false;
  const vercel = env.VERCEL_ENV?.trim().toLowerCase();
  if (vercel) return vercel === "production";
  return env.NODE_ENV !== "development";
}

export function hostname(value: string): string {
  try {
    return new URL("https://" + value.trim()).hostname.toLowerCase();
  } catch {
    return "";
  }
}
