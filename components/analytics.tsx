"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import Link from "next/link";
import { analyticsConsent, applyAnalyticsConsent, configureAnalytics, ctaDescriptor, engagedThresholds, saveAnalyticsConsent, scrollThresholds, subscribeAnalytics, trackCTAClick, trackEvent, trackLinkClick, trackPageView, webVitalNames, webVitalRatings } from "@/lib/analytics";
const noopSubscribe = () => () => {};
export function Analytics({ enabled, paths }: { enabled: boolean; paths: string[] }) {
  const choice = useSyncExternalStore(subscribeAnalytics, analyticsConsent, () => "unknown" as const);
  // Render the banner only after hydration: a server-rendered, bottom-anchored banner shifts when the web font swaps in.
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const pathname = usePathname();
  const [preferences, setPreferences] = useState(false);
  const latestVitals = useRef(new Map<string, { value: number; rating: string }>());
  useReportWebVitals(metric => { if ((webVitalNames as readonly string[]).includes(metric.name) && (webVitalRatings as readonly string[]).includes(metric.rating)) latestVitals.current.set(metric.name, { value: metric.value, rating: metric.rating }); });
  useEffect(() => { configureAnalytics(enabled, paths); applyAnalyticsConsent(); trackPageView(); }, [enabled, paths, pathname, choice]);
  useEffect(() => {
    function click(event: MouseEvent) { const target = event.target instanceof Element ? event.target : null; if (target?.closest("[data-cookie-settings]")) { setPreferences(true); return; } const anchor = target?.closest("a"); if (anchor instanceof HTMLAnchorElement) { trackCTAClick(anchor); trackLinkClick(anchor); } }
    function toggle(event: Event) { const item = event.target; if (item instanceof HTMLDetailsElement && item.open && item.closest(".faq-list")) trackEvent("faq_open", { faq_position: [...item.parentElement!.children].indexOf(item) + 1 }); }
    document.addEventListener("click", click, true); document.addEventListener("toggle", toggle, true);
    return () => { document.removeEventListener("click", click, true); document.removeEventListener("toggle", toggle, true); };
  }, []);
  useEffect(() => {
    if (!enabled || choice !== "granted" || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) { const id = (entry.target as HTMLElement).dataset.packageList; if (id === "packages_full" || id === "packages_preview") trackEvent("package_list_view", { list_id: id }); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    document.querySelectorAll("[data-package-list]").forEach(item => observer.observe(item)); return () => observer.disconnect();
  }, [enabled, pathname, choice]);
  useEffect(() => {
    // One view per call-to-action type, location and package per page: the denominator for click-through rates.
    if (!enabled || choice !== "granted" || typeof IntersectionObserver === "undefined") return;
    const seen = new Set<string>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLAnchorElement)) continue;
        const cta = ctaDescriptor(entry.target);
        if (cta?.view) { const key = [cta.view, cta.cta_location, cta.package_id || ""].join("|"); if (!seen.has(key) && trackEvent(cta.view, { cta_location: cta.cta_location, package_id: cta.package_id })) seen.add(key); }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 });
    document.querySelectorAll("a").forEach(anchor => { if (ctaDescriptor(anchor)?.view) observer.observe(anchor); });
    return () => observer.disconnect();
  }, [enabled, pathname, choice]);
  useEffect(() => {
    // Scroll depth, once per threshold per page; pages that fit the screen are not counted.
    if (!enabled || choice !== "granted") return;
    const sent = new Set<number>();
    let waiting = false;
    function measure() {
      waiting = false;
      const total = document.documentElement.scrollHeight;
      if (total <= window.innerHeight * 1.2) return;
      const percent = ((window.scrollY + window.innerHeight) / total) * 100;
      for (const threshold of scrollThresholds) if (percent >= threshold - 2 && !sent.has(threshold) && trackEvent("scroll_depth", { scroll_percent: threshold })) sent.add(threshold);
    }
    function onScroll() { if (!waiting) { waiting = true; requestAnimationFrame(measure); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled, pathname, choice]);
  useEffect(() => {
    // Seconds spent on the page while the tab is visible and focused.
    if (!enabled || choice !== "granted") return;
    const sent = new Set<number>();
    let seconds = 0;
    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible" || !document.hasFocus()) return;
      seconds += 1;
      for (const threshold of engagedThresholds) if (seconds >= threshold && !sent.has(threshold) && trackEvent("engaged_time", { engaged_seconds: threshold })) sent.add(threshold);
      if (sent.size === engagedThresholds.length) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [enabled, pathname, choice]);
  useEffect(() => {
    // Real-user performance: the latest LCP, INP and CLS values are sent once when the page is hidden.
    if (!enabled || choice !== "granted") return;
    function flush() {
      if (document.visibilityState !== "hidden") return;
      for (const [name, metric] of latestVitals.current) trackEvent("web_vital", { metric_name: name as never, metric_rating: metric.rating as never, metric_value: name === "CLS" ? metric.value * 1000 : metric.value });
      latestVitals.current.clear();
    }
    document.addEventListener("visibilitychange", flush);
    return () => document.removeEventListener("visibilitychange", flush);
  }, [enabled, pathname, choice]);
  function choose(value: "granted" | "denied") { saveAnalyticsConsent(value); setPreferences(false); }
  if (!hydrated || (!(enabled && choice === "unknown") && !preferences)) return null;
  return <section className="cookie-banner" role="region" aria-label="Analytics cookie choices"><div><h2>Your analytics choice</h2><p>Optional Google Analytics cookies help us understand page visits, how far pages are read, public package and contact-button clicks, page speed and enquiry-form progress. We do not send your entered contact details, dental information or photographs to Analytics. Your enquiry works with either choice. <Link href="/privacy#cookies">Privacy & cookies</Link></p></div><div className="cookie-actions"><button type="button" onClick={() => choose("denied")}>Reject analytics</button><button type="button" onClick={() => choose("granted")}>Accept analytics</button>{choice !== "unknown" && <button type="button" onClick={() => setPreferences(false)}>Keep current choice</button>}</div></section>;
}
