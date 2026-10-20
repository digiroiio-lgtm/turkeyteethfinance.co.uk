import { NextRequest, NextResponse } from "next/server";
import { publicationApproved } from "./lib/site";
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
  const response = NextResponse.next();
  if (!publicationApproved()) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    response.headers.set("Cache-Control", "private, no-store");
  }
  return response;
}
export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.svg|favicon.ico|images/).*)"],
};
