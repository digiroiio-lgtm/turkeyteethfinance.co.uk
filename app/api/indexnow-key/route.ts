import { publicationApproved } from "@/lib/site";
export function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!publicationApproved() || !key || !/^[a-zA-Z0-9_-]{8,128}$/.test(key))
    return new Response("Not found", { status: 404 });
  return new Response(key, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
