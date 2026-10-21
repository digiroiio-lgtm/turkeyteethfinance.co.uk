"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { analyticsConsent, applyAnalyticsConsent, configureAnalytics, saveAnalyticsConsent, subscribeAnalytics, trackCTAClick, trackEvent, trackPageView } from "@/lib/analytics";
export function Analytics({ enabled, paths }: { enabled: boolean; paths: string[] }) {
  const choice = useSyncExternalStore(subscribeAnalytics, analyticsConsent, () => "unknown" as const);
  const pathname = usePathname();
  const [preferences, setPreferences] = useState(false);
  useEffect(() => { configureAnalytics(enabled, paths); applyAnalyticsConsent(); trackPageView(); }, [enabled, paths, pathname, choice]);
  useEffect(() => {
    function click(event: MouseEvent) { const target = event.target instanceof Element ? event.target : null; if (target?.closest("[data-cookie-settings]")) { setPreferences(true); return; } const anchor = target?.closest("a"); if (anchor instanceof HTMLAnchorElement) trackCTAClick(anchor); }
    function toggle(event: Event) { const item = event.target; if (item instanceof HTMLDetailsElement && item.open && item.closest(".faq-list")) trackEvent("faq_open", { faq_position: [...item.parentElement!.children].indexOf(item) + 1 }); }
    document.addEventListener("click", click, true); document.addEventListener("toggle", toggle, true);
    return () => { document.removeEventListener("click", click, true); document.removeEventListener("toggle", toggle, true); };
  }, []);
  useEffect(() => {
    if (!enabled || choice !== "granted" || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) { const id = (entry.target as HTMLElement).dataset.packageList; if (id === "packages_full" || id === "packages_preview") trackEvent("package_list_view", { list_id: id }); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    document.querySelectorAll("[data-package-list]").forEach(item => observer.observe(item)); return () => observer.disconnect();
  }, [enabled, pathname, choice]);
  function choose(value: "granted" | "denied") { saveAnalyticsConsent(value); setPreferences(false); }
  if (!(enabled && choice === "unknown") && !preferences) return null;
  return <section className="cookie-banner" role="region" aria-label="Analytics cookie choices"><div><h2>Your analytics choice</h2><p>Optional Google Analytics cookies help us understand page visits, public package clicks and enquiry-form progress. We do not send your entered contact details, dental information or photographs to Analytics. Your enquiry works with either choice. <Link href="/privacy#cookies">Privacy & cookies</Link></p></div><div className="cookie-actions"><button type="button" onClick={() => choose("denied")}>Reject analytics</button><button type="button" onClick={() => choose("granted")}>Accept analytics</button>{choice !== "unknown" && <button type="button" onClick={() => setPreferences(false)}>Keep current choice</button>}</div></section>;
}
