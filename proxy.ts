import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { publicationApproved } from "./lib/site";
function same(a: string, b: string) {
  const x = Buffer.from(a),
    y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const key = process.env.INDEXNOW_KEY;
  if (
    publicationApproved() &&
    key &&
    /^[a-zA-Z0-9_-]{8,128}$/.test(key) &&
    path === `/${key}.txt`
  )
    return NextResponse.rewrite(new URL("/api/indexnow-key", request.url));
  if (path === "/robots.txt" || path === "/sitemap.xml")
    return NextResponse.next();
  if (publicationApproved()) return NextResponse.next();
  const previewHeaders = {
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    "Cache-Control": "private, no-store",
  };
  if (process.env.NODE_ENV === "development") {
    const response = NextResponse.next();
    Object.entries(previewHeaders).forEach(([k, v]) =>
      response.headers.set(k, v),
    );
    return response;
  }
  const password = process.env.PREVIEW_PASSWORD;
  if (!password)
    return new NextResponse(
      "This website is being prepared. Please check back later.",
      { status: 503, headers: { ...previewHeaders, "Retry-After": "3600" } },
    );
  const header = request.headers.get("authorization");
  try {
    if (header?.startsWith("Basic ")) {
      const credentials = Buffer.from(header.slice(6), "base64").toString(
        "utf8",
      );
      const separator = credentials.indexOf(":");
      if (
        separator >= 0 &&
        same(credentials.slice(0, separator), "preview") &&
        same(credentials.slice(separator + 1), password)
      ) {
        const response = NextResponse.next();
        Object.entries(previewHeaders).forEach(([k, v]) =>
          response.headers.set(k, v),
        );
        return response;
      }
    }
  } catch {
    /* Authentication failures do not expose details. */
  }
  return new NextResponse(
    "Private design preview. Sign in with the preview credentials.",
    {
      status: 401,
      headers: {
        ...previewHeaders,
        "WWW-Authenticate": 'Basic realm="Design preview", charset="UTF-8"',
      },
    },
  );
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.svg|favicon.ico|images/).*)"],
};
