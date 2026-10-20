import sharp from "sharp";
import { createHmac, randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import {
  leadSchema,
  imageType,
  MAX_UPLOAD_SIZE,
  readBoundedBody,
} from "@/lib/lead-validation";
import { leadsConfigured, SITE_URL } from "@/lib/site";
export const runtime = "nodejs";
export const maxDuration = 30;
const json = (body: unknown, status: number) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const expectedOrigin = new URL(SITE_URL).origin;
  const localDev =
    process.env.NODE_ENV === "development" &&
    !!origin &&
    /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
  if (!origin || (origin !== expectedOrigin && !localDev))
    return json({ error: "This request could not be verified." }, 403);
  if (!request.headers.get("content-type")?.startsWith("multipart/form-data"))
    return json(
      { error: "Use the treatment enquiry form to submit your request." },
      415,
    );
  let form: FormData;
  try {
    const bytes = await readBoundedBody(request);
    form = await new Response(bytes as BodyInit, {
      headers: { "Content-Type": request.headers.get("content-type")! },
    }).formData();
  } catch (e) {
    return json(
      {
        error:
          e instanceof Error && e.message === "TOO_LARGE"
            ? "The enquiry is too large. Please use up to 3 photos, no larger than 3 MB each."
            : "The form could not be read.",
      },
      e instanceof Error && e.message === "TOO_LARGE" ? 413 : 400,
    );
  }
  let raw: unknown;
  try {
    raw = JSON.parse(String(form.get("fields") || ""));
  } catch {
    return json({ error: "Please check your enquiry details." }, 400);
  }
  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success)
    return json(
      { error: "Please check your details and the required privacy consents." },
      400,
    );
  const files = form.getAll("photos");
  if (
    files.length > 3 ||
    files.some(
      (f) => !(f instanceof File) || f.size > MAX_UPLOAD_SIZE || f.size === 0,
    )
  )
    return json(
      { error: "Use up to 3 photographs, no larger than 3 MB each." },
      400,
    );
  const photos: { filename: string; type: string; data: string }[] = [];
  for (let i = 0; i < files.length; i++) {
    const f = files[i] as File;
    const bytes = new Uint8Array(await f.arrayBuffer());
    const type = imageType(bytes);
    if (!type || type !== f.type)
      return json(
        { error: "Photographs must be valid JPEG, PNG or WebP images." },
        400,
      );
    photos.push({
      filename: `photo-${i + 1}.${type === "image/jpeg" ? "jpg" : type.split("/")[1]}`,
      type,
      data: Buffer.from(bytes).toString("base64"),
    });
  }
  if (!leadsConfigured())
    return json(
      {
        error:
          "Enquiry delivery is not available yet. No information has been sent. Please try again later.",
      },
      503,
    );
  const captchaToken = form.get("captchaToken");
  if (
    typeof captchaToken !== "string" ||
    captchaToken.length < 1 ||
    captchaToken.length > 2048
  )
    return json({ error: "Please complete the security check." }, 400);
  try {
    const verification = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: captchaToken,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );
    const result = await verification.json();
    if (
      !result.success ||
      result.action !== "treatment-enquiry" ||
      result.hostname !== new URL(SITE_URL).hostname
    )
      return json(
        {
          error:
            "The security check expired or could not be verified. Please try again.",
        },
        400,
      );
    for (const photo of photos) {
      try {
        const bytes = await sharp(Buffer.from(photo.data, "base64"), {
          limitInputPixels: 40_000_000,
          failOn: "error",
        })
          .rotate()
          .resize({
            width: 1800,
            height: 1800,
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({ quality: 85 })
          .toBuffer();
        photo.filename = photo.filename.replace(/\.[a-z]+$/, ".webp");
        photo.type = "image/webp";
        photo.data = bytes.toString("base64");
      } catch {
        return json(
          {
            error:
              "A photograph could not be read. Please upload a valid JPEG, PNG or WebP image.",
          },
          400,
        );
      }
    }
    const webhook = new URL(process.env.LEAD_WEBHOOK_URL!);
    if (webhook.protocol !== "https:" || webhook.username || webhook.password)
      return json(
        { error: "Enquiry delivery is temporarily unavailable." },
        503,
      );
    const { website: _website, ...lead } = parsed.data;
    void _website;
    const reference = randomUUID();
    const submittedAt = new Date().toISOString();
    const payload = JSON.stringify({
      schemaVersion: 1,
      reference,
      submittedAt,
      source: "turkeyteethfinance.co.uk",
      privacyNoticeVersion: "2026-10-20",
      ...lead,
      photos,
    });
    const signature = createHmac("sha256", process.env.LEAD_WEBHOOK_SECRET!)
      .update(payload)
      .digest("hex");
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Lead-Signature": `sha256=${signature}`,
        "X-Lead-Reference": reference,
      },
      body: payload,
      signal: AbortSignal.timeout(12000),
      redirect: "error",
      cache: "no-store",
    });
    if (!response.ok)
      return json(
        { error: "We could not deliver your enquiry. Please try again later." },
        502,
      );
    return json({ ok: true, reference }, 201);
  } catch {
    return json(
      { error: "We could not deliver your enquiry. Please try again later." },
      502,
    );
  }
}
