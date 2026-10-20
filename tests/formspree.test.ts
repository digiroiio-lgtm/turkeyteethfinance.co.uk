import test from "node:test";
import assert from "node:assert/strict";
import sharp from "sharp";
import { POST } from "../app/api/quote/route";
import { enquiryDelivery, DEFAULT_FORMSPREE_ENDPOINT } from "../lib/enquiry-config";
import { leadsConfigured, SITE_URL } from "../lib/site";

const fields = {
  treatment: "Veneers", teeth: "", concern: "Test enquiry only", notes: "",
  fullName: "Test Patient", email: "test@example.com", whatsapp: "",
  preferredContact: "email", timeframe: "Not sure yet", budget: "3500",
  dataConsent: true, healthConsent: true, marketingConsent: false, website: "",
};
const configured = {
  ENQUIRY_DELIVERY_PROVIDER: "formspree",
  FORMSPREE_ENDPOINT: DEFAULT_FORMSPREE_ENDPOINT,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: "test-public-widget-key",
  TURNSTILE_SECRET_KEY: undefined,
  LEAD_WEBHOOK_URL: undefined,
  LEAD_WEBHOOK_SECRET: undefined,
  LEADS_DELIVERY_VERIFIED: "true",
  PRIVACY_CONTACT_EMAIL: "privacy@example.test",
  PRIVACY_RETENTION_NOTICE: "Reviewed test retention notice",
  PRIVACY_PROCESSORS_NOTICE: "Reviewed test processor notice",
  PRIVACY_TRANSFER_NOTICE: "Reviewed test transfer notice",
};
async function withConfig(
  overrides: Record<string, string | undefined>,
  fn: () => Promise<void>,
) {
  const values: Record<string, string | undefined> = { ...configured, ...overrides };
  const previous = Object.fromEntries(Object.keys(values).map((key) => [key, process.env[key]]));
  const originalFetch = globalThis.fetch;
  try {
    for (const [key, value] of Object.entries(values)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    await fn();
  } finally {
    globalThis.fetch = originalFetch;
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}
function request(values = fields, photos: File[] = [], token = "test-captcha-token") {
  const data = new FormData();
  data.set("fields", JSON.stringify(values));
  data.set("captchaToken", token);
  for (const photo of photos) data.append("photos", photo);
  return new Request(SITE_URL + "/api/quote", {
    method: "POST", headers: { origin: new URL(SITE_URL).origin }, body: data,
  });
}

test("Formspree is the default, invalid destinations fail closed, and the signed webhook remains explicit", () => {
  assert.deepEqual(enquiryDelivery({}), { provider: "formspree", url: DEFAULT_FORMSPREE_ENDPOINT });
  for (const url of [
    "http://formspree.io/f/xgaojavy", "https://formspree.io.evil.test/f/xgaojavy",
    "https://user:password@formspree.io/f/xgaojavy", "https://formspree.io/f/xgaojavy?next=evil",
    "https://formspree.io/f/xgaojavy#fragment", "https://formspree.io:8443/f/xgaojavy", "not a URL",
  ]) assert.equal(enquiryDelivery({ FORMSPREE_ENDPOINT: url }), undefined);
  assert.equal(enquiryDelivery({ ENQUIRY_DELIVERY_PROVIDER: "unknown" }), undefined);
  assert.equal(enquiryDelivery({ ENQUIRY_DELIVERY_PROVIDER: "webhook", LEAD_WEBHOOK_URL: "https://crm.example.test" }), undefined);
});

test("named multipart fields go to the supplied endpoint, with one CAPTCHA verifier and separate marketing opt-in", async () => {
  await withConfig({}, async () => {
    assert.equal(leadsConfigured(), true);
    let calls = 0;
    globalThis.fetch = (async (input, init) => {
      calls++;
      assert.equal(String(input), DEFAULT_FORMSPREE_ENDPOINT);
      assert.equal(new Headers(init?.headers).get("Accept"), "application/json");
      assert.equal(new Headers(init?.headers).get("Referer"), new URL(SITE_URL).origin + "/get-a-quote");
      assert.equal(init?.redirect, "error");
      const data = init?.body as FormData;
      assert.ok(data instanceof FormData);
      assert.equal(data.get("email"), fields.email);
      assert.equal(data.get("name"), fields.fullName);
      assert.equal(data.get("treatment"), fields.treatment);
      assert.equal(data.get("message"), fields.concern);
      assert.equal(data.get("budget"), fields.budget);
      assert.equal(data.get("dataConsent"), "true");
      assert.equal(data.get("healthConsent"), "true");
      assert.equal(data.get("marketingConsent"), "false");
      assert.equal(data.has("_optin"), false);
      assert.equal(data.has("website"), false);
      assert.equal(data.has("fields"), false);
      assert.equal(data.get("cf-turnstile-response"), "test-captcha-token");
      assert.match(String(data.get("reference")), /^[0-9a-f-]{36}$/);
      return Response.json({ next: "https://formspree.io/thanks" });
    }) as typeof fetch;
    const response = await POST(request());
    assert.equal(response.status, 201);
    assert.equal((await response.json()).ok, true);
    assert.equal(calls, 1);
  });
});

test("unchecked privacy consents, honeypot values and missing CAPTCHA never reach Formspree", async () => {
  await withConfig({}, async () => {
    let calls = 0;
    globalThis.fetch = (async () => { calls++; throw new Error("Unexpected external request"); }) as typeof fetch;
    for (const value of [
      { ...fields, dataConsent: false }, { ...fields, healthConsent: false }, { ...fields, website: "bot" },
    ]) assert.equal((await POST(request(value))).status, 400);
    assert.equal((await POST(request(fields, [], ""))).status, 400);
    assert.equal(calls, 0);
  });
});

test("delivery verification, privacy notices and public widget configuration still gate collection", async () => {
  for (const key of [
    "LEADS_DELIVERY_VERIFIED", "PRIVACY_CONTACT_EMAIL", "PRIVACY_RETENTION_NOTICE",
    "PRIVACY_PROCESSORS_NOTICE", "PRIVACY_TRANSFER_NOTICE", "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  ]) await withConfig({ [key]: "" }, async () => {
    assert.equal(leadsConfigured(), false);
    globalThis.fetch = (async () => { throw new Error("Unexpected external request"); }) as typeof fetch;
    assert.equal((await POST(request())).status, 503);
  });
});

test("quotas, inactive forms, CAPTCHA errors, HTML replies and ambiguous successes cannot report delivery", async () => {
  await withConfig({}, async () => {
    const cases: [() => Response, number][] = [
      [() => Response.json({ error: "limit" }, { status: 429 }), 429],
      [() => Response.json({ errors: [{ code: "INACTIVE", message: "inactive" }] }, { status: 400 }), 502],
      [() => Response.json({ errors: [{ code: "BLOCKED", message: "captcha" }] }, { status: 422 }), 502],
      [() => Response.json({ next: "/thanks", errors: [{ message: "not delivered" }] }), 502],
      [() => new Response("<html>not a JSON acknowledgement</html>"), 502],
      [() => Response.json({}), 502],
      [() => Response.json({ errors: [{ code: "NO_FILE_UPLOADS", message: "plan" }] }, { status: 422 }), 422],
    ];
    for (const [reply, expectedStatus] of cases) {
      globalThis.fetch = (async () => reply()) as typeof fetch;
      const response = await POST(request());
      assert.equal(response.status, expectedStatus);
      assert.equal((await response.json()).ok, undefined);
    }
    let calls = 0;
    globalThis.fetch = (async () => { calls++; throw new Error("network unavailable"); }) as typeof fetch;
    assert.equal((await POST(request())).status, 502);
    assert.equal(calls, 1);
  });
});

test("optional photos are converted to metadata-free WebP attachments and opt-in is sent only when chosen", async () => {
  await withConfig({}, async () => {
    const bytes = await sharp({ create: { width: 8, height: 8, channels: 3, background: "#ffffff" } })
      .jpeg().withMetadata().toBuffer();
    const photo = new File([new Uint8Array(bytes)], "private-original-name.jpg", { type: "image/jpeg" });
    globalThis.fetch = (async (_input, init) => {
      const data = init?.body as FormData;
      const attachments = data.getAll("attachment") as File[];
      assert.equal(attachments.length, 1);
      assert.equal(attachments[0].name, "photo-1.webp");
      assert.equal(attachments[0].type, "image/webp");
      const metadata = await sharp(Buffer.from(await attachments[0].arrayBuffer())).metadata();
      assert.equal(metadata.format, "webp");
      assert.equal(metadata.exif, undefined);
      assert.equal(data.get("_optin"), "true");
      return Response.json({ next: "/thanks" });
    }) as typeof fetch;
    assert.equal((await POST(request({ ...fields, marketingConsent: true }, [photo]))).status, 201);
  });
});

test("photos exceeding the Vercel-safe total are rejected before any receiver request", async () => {
  await withConfig({}, async () => {
    globalThis.fetch = (async () => { throw new Error("Unexpected external request"); }) as typeof fetch;
    const photos = [1, 2].map((index) =>
      new File([new Uint8Array(2 * 1024 * 1024 + 100)], "test-" + index + ".jpg", { type: "image/jpeg" }),
    );
    const response = await POST(request(fields, photos));
    assert.equal(response.status, 413);
    assert.match((await response.json()).error, /4 MB in total/);
  });
});
