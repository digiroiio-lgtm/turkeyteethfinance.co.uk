import { z } from "zod";
export const MAX_UPLOAD_SIZE = 3 * 1024 * 1024;
export const MAX_REQUEST_SIZE = 10 * 1024 * 1024;
export const leadSchema = z
  .object({
    treatment: z.enum([
      "Veneers",
      "Dental implants",
      "Zirconia crowns",
      "All-on-4",
      "Smile makeover",
      "Not sure yet",
    ]),
    teeth: z
      .string()
      .max(2)
      .refine(
        (v) =>
          v === "" ||
          (Number.isInteger(Number(v)) && Number(v) >= 1 && Number(v) <= 32),
      ),
    concern: z.string().trim().max(1200),
    notes: z.string().trim().max(1200),
    fullName: z.string().trim().min(2).max(100),
    email: z.email().max(200),
    whatsapp: z
      .string()
      .max(25)
      .refine((v) => v === "" || /^\+?[\d\s()-]{7,24}$/.test(v)),
    preferredContact: z.enum(["email", "whatsapp"]),
    timeframe: z.enum([
      "Not sure yet",
      "Within 1 month",
      "1–3 months",
      "3–6 months",
      "More than 6 months",
    ]),
    budget: z
      .string()
      .max(5)
      .refine(
        (v) =>
          v === "" ||
          (/^\d+$/.test(v) && Number(v) >= 1000 && Number(v) <= 10000),
      ),
    dataConsent: z.literal(true),
    healthConsent: z.literal(true),
    marketingConsent: z.boolean(),
    website: z.literal(""),
  })
  .refine((v) => v.preferredContact !== "whatsapp" || v.whatsapp.length >= 7, {
    message: "WhatsApp number is required for WhatsApp contact.",
  });
export function imageType(
  bytes: Uint8Array,
): "image/jpeg" | "image/png" | "image/webp" | undefined {
  if (
    bytes.length >= 12 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  )
    return "image/jpeg";
  if (
    bytes.length >= 8 &&
    [137, 80, 78, 71, 13, 10, 26, 10].every((n, i) => bytes[i] === n)
  )
    return "image/png";
  if (
    bytes.length >= 12 &&
    String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" &&
    String.fromCharCode(...bytes.slice(8, 12)) === "WEBP"
  )
    return "image/webp";
}
export async function readBoundedBody(request: Request): Promise<Uint8Array> {
  if (Number(request.headers.get("content-length")) > MAX_REQUEST_SIZE)
    throw new Error("TOO_LARGE");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("EMPTY_BODY");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_REQUEST_SIZE) {
        await reader.cancel();
        throw new Error("TOO_LARGE");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}
