import type { z } from "zod";
import type { leadSchema } from "./lead-validation";

export type EnquiryPhoto = { filename: string; type: string; data: string };
export type FormspreeLead = Omit<z.infer<typeof leadSchema>, "website"> & {
  reference: string;
  submittedAt: string;
  source: string;
  privacyNoticeVersion: string;
};

/** Flatten named fields and attach sanitized files using Formspree's multipart API. */
export function formspreeSubmission(
  lead: FormspreeLead,
  photos: EnquiryPhoto[],
  captchaToken: string,
): FormData {
  const data = new FormData();
  for (const [name, value] of Object.entries(lead)) data.set(name, String(value));
  data.set("name", lead.fullName);
  data.set("subject", "Turkey Teeth Finance: treatment enquiry");
  data.set("message", [lead.concern, lead.notes].filter(Boolean).join("\n\n") || lead.treatment);
  if (lead.whatsapp) data.set("phone", lead.whatsapp);
  // Newsletter plugins treat the presence of _optin as consent, even for "false".
  if (lead.marketingConsent) data.set("_optin", "true");
  data.set("_gotcha", "");
  data.set("cf-turnstile-response", captchaToken);
  for (const photo of photos) {
    data.append("attachment", new Blob([new Uint8Array(Buffer.from(photo.data, "base64"))], { type: photo.type }), photo.filename);
  }
  return data;
}
