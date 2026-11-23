import { packageForId } from "./packages";
export const GA_MEASUREMENT_ID = "G-BS3FP40Z46";
export const ANALYTICS_CONSENT_KEY = "ttf-analytics-consent-v1";
const LIFETIME = 180 * 86400000;
type Consent = { choice: "granted" | "denied"; savedAt: number };
type TagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; "ga-disable-G-BS3FP40Z46"?: boolean };
let memory: Consent | undefined;
let enabled = false, active = false, initialised = false, lastPage = "";
let paths = new Set(["/"]);
const listeners = new Set<() => void>();
export const ctaLocations = ["header", "hero", "conversion_upper", "conversion_lower", "conversion_banner", "budget_planner", "package_card", "packages_preview", "floating_chat", "content", "guide", "footer", "form_fallback"] as const;
export type CTALocation = typeof ctaLocations[number];
const events = ["quote_cta_click", "whatsapp_click", "finance_cta_click", "packages_cta_click", "package_list_view", "budget_interaction", "faq_open", "form_start", "form_step_complete", "form_submit_attempt", "form_validation_error", "form_submit_error", "form_abandon", "generate_lead", "form_view", "form_step_view", "form_field_focus", "form_field_complete", "form_option_select", "form_photo_add", "form_back_click", "whatsapp_cta_view", "quote_cta_view"] as const;
export type AnalyticsEvent = typeof events[number];
export const formFields = ["treatment", "package", "teeth", "concern", "notes", "photos", "name", "email", "whatsapp", "preferred_contact", "timeframe", "consent_data", "consent_health", "consent_marketing", "security_check"] as const;
export type FormField = typeof formFields[number];
export const durationBuckets = ["under_60s", "60_180s", "180_600s", "over_600s"] as const;
export type DurationBucket = typeof durationBuckets[number];
export const timestamp = () => Date.now();
export const secondsSince = (start: number) => (timestamp() - start) / 1000;
export function durationBucket(seconds: number): DurationBucket { return seconds < 60 ? "under_60s" : seconds < 180 ? "60_180s" : seconds < 600 ? "180_600s" : "over_600s"; }
type Params = { cta_location?: CTALocation; package_id?: string; form_step?: number; faq_position?: number; list_id?: "packages_full" | "packages_preview"; field_name?: FormField; contact_method?: "email" | "whatsapp"; duration_bucket?: DurationBucket };
export function consentRecord(value: unknown, now = Date.now()): Consent | undefined {
  if (!value || typeof value !== "object") return;
  const v = value as Partial<Consent>;
  if ((v.choice === "granted" || v.choice === "denied") && typeof v.savedAt === "number" && Number.isFinite(v.savedAt) && v.savedAt <= now && now - v.savedAt < LIFETIME) return v as Consent;
}
export function analyticsConsent(): "granted" | "denied" | "unknown" {
  if (typeof window === "undefined") return "unknown";
  try { const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY); return value ? consentRecord(JSON.parse(value))?.choice || "unknown" : "unknown"; }
  catch { return consentRecord(memory)?.choice || "unknown"; }
}
export function subscribeAnalytics(listener: () => void) {
  listeners.add(listener);
  const storage = (event: StorageEvent) => { if (event.key === ANALYTICS_CONSENT_KEY || event.key === null) { applyAnalyticsConsent(); listeners.forEach(fn => fn()); } };
  window.addEventListener("storage", storage);
  return () => { listeners.delete(listener); window.removeEventListener("storage", storage); };
}
export function configureAnalytics(available: boolean, publicPaths: readonly string[]) { enabled = available && typeof window !== "undefined" && window.location.hostname === "turkeyteethfinance.co.uk"; paths = new Set(publicPaths); }
export function saveAnalyticsConsent(choice: "granted" | "denied") {
  memory = { choice, savedAt: Date.now() };
  try { window.localStorage.setItem(ANALYTICS_CONSENT_KEY, JSON.stringify(memory)); } catch { /* Page-scoped fallback if storage is unavailable. */ }
  applyAnalyticsConsent(); listeners.forEach(fn => fn());
}
export function safeAnalyticsContext(location: string, referrer = "") {
  let path = "/", safeRef = "";
  try { const url = new URL(location, "https://turkeyteethfinance.co.uk"); if (url.origin === "https://turkeyteethfinance.co.uk" && paths.has(url.pathname)) path = url.pathname; } catch { /* Never copy unknown URLs. */ }
  try { const ref = new URL(referrer); if (/^https?:$/.test(ref.protocol) && !ref.username && !ref.password) safeRef = ref.origin === "https://turkeyteethfinance.co.uk" && paths.has(ref.pathname) ? ref.origin + (ref.pathname === "/" ? "" : ref.pathname) : ref.origin; } catch { /* Direct visit. */ }
  const pageType = path === "/" ? "home" : path === "/prices" ? "packages" : ["/get-a-quote", "/contact"].includes(path) ? "enquiry" : path.startsWith("/guides") ? "guide" : path.endsWith("-finance") ? "treatment_information" : "site_information";
  return { page_location: "https://turkeyteethfinance.co.uk" + (path === "/" ? "" : path), page_referrer: safeRef, page_title: "Turkey Teeth Finance | " + pageType.replaceAll("_", " "), page_type: pageType };
}
function clearCookies() {
  for (const item of document.cookie.split(";")) { const name = item.split("=")[0].trim(); if (/^_ga(?:_|$)/.test(name)) for (const domain of ["", window.location.hostname, "." + window.location.hostname]) document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? "; Domain=" + domain : ""}`; }
}
export function applyAnalyticsConsent() {
  if (typeof window === "undefined") return;
  const w = window as TagWindow;
  const grant = enabled && analyticsConsent() === "granted";
  w["ga-disable-G-BS3FP40Z46"] = !grant;
  if (!grant) { if (active) w.gtag?.("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }); active = false; lastPage = ""; clearCookies(); return; }
  if (active) return;
  w.dataLayer ||= [];
  // Match Google's gtag adapter: commands are Arguments objects, not plain arrays.
  w.gtag ||= function () {
    // eslint-disable-next-line prefer-rest-params -- gtag.js expects the documented Arguments command shape.
    w.dataLayer!.push(arguments);
  };
  if (!initialised) { w.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }); w.gtag("js", new Date()); }
  w.gtag("consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  const context = safeAnalyticsContext(window.location.href, document.referrer); w.gtag("set", context);
  if (!initialised) {
    w.gtag("config", GA_MEASUREMENT_ID, { ...context, send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, cookie_expires: LIFETIME / 1000, cookie_update: false, cookie_flags: "SameSite=Lax;Secure" });
    const script = document.createElement("script"); script.id = "ttf-google-analytics"; script.async = true; script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID; document.head.appendChild(script); initialised = true;
  }
  active = true;
}
export function trackPageView() {
  if (!active || analyticsConsent() !== "granted") return;
  const context = safeAnalyticsContext(window.location.href, lastPage || document.referrer);
  if (lastPage === context.page_location) return;
  const w = window as TagWindow; w.gtag?.("set", context); w.gtag?.("event", "page_view", { ...context, send_to: GA_MEASUREMENT_ID }); lastPage = context.page_location;
}
/** Fixed UI metadata only: never entered values, raw destinations, error text or identifiers. */
export function trackEvent(event: AnalyticsEvent, params: Params = {}) {
  if (!events.includes(event) || !enabled || !active || typeof window === "undefined" || analyticsConsent() !== "granted") return false;
  const safe: Record<string, string | number> = {};
  if (params.cta_location && ctaLocations.includes(params.cta_location)) safe.cta_location = params.cta_location;
  if (packageForId(params.package_id)) safe.package_id = params.package_id!;
  if (Number.isInteger(params.form_step) && params.form_step! >= 1 && params.form_step! <= 4) safe.form_step = params.form_step!;
  if (Number.isInteger(params.faq_position) && params.faq_position! >= 1 && params.faq_position! <= 50) safe.faq_position = params.faq_position!;
  if (["packages_full", "packages_preview"].includes(params.list_id || "")) safe.list_id = params.list_id!;
  if (formFields.includes(params.field_name as FormField)) safe.field_name = params.field_name!;
  if (params.contact_method === "email" || params.contact_method === "whatsapp") safe.contact_method = params.contact_method;
  if (durationBuckets.includes(params.duration_bucket as DurationBucket)) safe.duration_bucket = params.duration_bucket!;
  if (/^form_|^generate_lead$/.test(event)) safe.form_id = "treatment_enquiry";
  (window as TagWindow).gtag?.("event", event, { ...safeAnalyticsContext(window.location.href, document.referrer), ...safe, send_to: GA_MEASUREMENT_ID, transport_type: "beacon" }); return true;
}
/** Which tracked call-to-action an anchor is, inferred from fixed data attributes or the destination. */
export function ctaDescriptor(anchor: HTMLAnchorElement): { click: AnalyticsEvent; view?: AnalyticsEvent; cta_location: CTALocation; package_id?: string } | undefined {
  let action = anchor.dataset.analyticsAction;
  try { const url = new URL(anchor.href); if (!action && url.origin === window.location.origin && url.pathname === "/get-a-quote") action = "quote"; if (!action && url.hostname === "wa.me" && url.pathname === "/905353998999") action = "whatsapp"; } catch { return; }
  const names: Record<string, { click: AnalyticsEvent; view?: AnalyticsEvent }> = { quote: { click: "quote_cta_click", view: "quote_cta_view" }, whatsapp: { click: "whatsapp_click", view: "whatsapp_cta_view" }, finance: { click: "finance_cta_click" }, packages: { click: "packages_cta_click" } };
  if (!action || !names[action]) return;
  const inferred = anchor.closest("header") ? "header" : anchor.closest("footer") ? "footer" : anchor.classList.contains("floating-contact") ? "floating_chat" : "content";
  return { ...names[action], cta_location: ctaLocations.includes(anchor.dataset.analyticsLocation as CTALocation) ? anchor.dataset.analyticsLocation as CTALocation : inferred, package_id: anchor.dataset.analyticsPackage };
}
export function trackCTAClick(anchor: HTMLAnchorElement) {
  const cta = ctaDescriptor(anchor);
  if (cta) trackEvent(cta.click, { cta_location: cta.cta_location, package_id: cta.package_id });
}
