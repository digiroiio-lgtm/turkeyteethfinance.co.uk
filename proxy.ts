import { NextRequest, NextResponse } from "next/server";
import { SITE_URL, indexingEnabled } from "./lib/site";
import { hostname, temporaryHostname } from "./lib/search-config";
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const canonical = new URL(SITE_URL);
  const host = hostname(request.headers.get("host") || request.nextUrl.host);
  const alias = canonical.hostname.startsWith("www.")
    ? canonical.hostname.slice(4)
    : `www.${canonical.hostname}`;
  // Only recognize our own public forwarded hosts; never redirect to a supplied host.
  const forwarded = hostname(request.headers.get("x-forwarded-host")?.split(",")[0] || "");
  const publicHost = forwarded === canonical.hostname || forwarded === alias ? forwarded : host;
  if (publicHost === alias) {
    const destination = new URL(SITE_URL);
    destination.pathname = path;
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }

  // Explicit environment settings decide preview status. An internal reverse-proxy
  // hostname must not silently turn a real production response into noindex.
  const indexable = indexingEnabled() && !temporaryHostname(publicHost);
  if (path === "/robots.txt" && !indexable) {
    return new NextResponse("User-agent: *\nDisallow: /\n", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
        "Cache-Control": "private, no-store",
      },
    });
  }
  const key = process.env.INDEXNOW_KEY;
  if (
    indexable &&
    key &&
    /^[a-zA-Z0-9_-]{8,128}$/.test(key) &&
    path === `/${key}.txt`
  )
    return NextResponse.rewrite(new URL("/api/indexnow-key", request.url));
  const response = NextResponse.next();
  if (!indexable || path.startsWith("/api/")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    response.headers.set("Cache-Control", "private, no-store");
  }
  return response;
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.svg|favicon.ico|images/).*)"],
};
