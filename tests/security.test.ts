import test from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { createHmac } from "node:crypto";
import {
  leadSchema,
  imageType,
  readBoundedBody,
  MAX_REQUEST_SIZE,
} from "../lib/lead-validation";
import {
  publicationApproved,
  financeApplicationUrl,
  leadsConfigured,
} from "../lib/site";
import { proxy } from "../proxy";
import { POST } from "../app/api/quote/route";
import { canonicalPaths } from "../lib/site";
import { pages } from "../lib/content";

const enquiry = {
  treatment: "Veneers",
  teeth: "",
  concern: "",
  notes: "",
  fullName: "Test Patient",
  email: "test@example.com",
  whatsapp: "",
  preferredContact: "email",
  timeframe: "Not sure yet",
  budget: "3500",
  dataConsent: true,
  healthConsent: true,
  marketingConsent: false,
  website: "",
};
function withEnv(values: Record<string, string | undefined>, fn: () => void) {
  const previous = Object.fromEntries(
    Object.keys(values).map((k) => [k, process.env[k]]),
  );
  try {
    for (const [k, v] of Object.entries(values)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
    fn();
  } finally {
    for (const [k, v] of Object.entries(previous)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  }
}
function request(
  fields: unknown = enquiry,
  origin = "https://turkeyteethfinance.co.uk",
) {
  const data = new FormData();
  data.set("fields", JSON.stringify(fields));
  data.set("captchaToken", "test-token");
  return new Request("https://turkeyteethfinance.co.uk/api/quote", {
    method: "POST",
    headers: { origin },
    body: data,
  });
}

test("each brief route has distinct metadata and working related links", () => {
  assert.equal(canonicalPaths.length, 18);
  assert.equal(new Set(Object.values(pages).map((p) => p.title)).size, 17);
  assert.equal(
    new Set(Object.values(pages).map((p) => p.description)).size,
    17,
  );
  for (const p of Object.values(pages))
    for (const related of p.related) assert.ok(pages[related]);
});
test("explicit consent and honeypot restrictions are enforced", () => {
  assert.ok(leadSchema.safeParse(enquiry).success);
  assert.equal(
    leadSchema.safeParse({ ...enquiry, healthConsent: false }).success,
    false,
  );
  assert.equal(
    leadSchema.safeParse({ ...enquiry, dataConsent: false }).success,
    false,
  );
  assert.equal(
    leadSchema.safeParse({ ...enquiry, website: "spam" }).success,
    false,
  );
  assert.equal(
    leadSchema.safeParse({ ...enquiry, preferredContact: "whatsapp" }).success,
    false,
  );
  assert.equal(
    leadSchema.safeParse({ ...enquiry, teeth: "2.5" }).success,
    false,
  );
});
test("image signatures must agree with an allowed format", () => {
  assert.equal(
    imageType(new TextEncoder().encode("<svg>unsafe</svg>")),
    undefined,
  );
  assert.equal(
    imageType(new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])),
    "image/png",
  );
});
test("streamed bodies are bounded even without content-length", async () => {
  const stream = new ReadableStream({
    start(c) {
      c.enqueue(new Uint8Array(MAX_REQUEST_SIZE + 1));
      c.close();
    },
  });
  const req = new Request("http://localhost", {
    method: "POST",
    body: stream,
    duplex: "half",
  } as RequestInit);
  await assert.rejects(() => readBoundedBody(req), /TOO_LARGE/);
});
test("finance application approval requires the approved disclosure and link", () => {
  withEnv({ SITE_CONTENT_APPROVED: "false" }, () => {
    assert.equal(publicationApproved(), false);
  });
  withEnv(
    {
      SITE_CONTENT_APPROVED: "true",
      APPROVED_FINANCE_DISCLOSURE: "",
      FINANCE_APPLICATION_URL: "https://ideal4finance.com/apply",
    },
    () => assert.equal(publicationApproved(), false),
  );
});
test("finance application rejects foreign domains, insecure links and credentials", () => {
  for (const value of [
    "https://ideal4finance.com.evil.example/apply",
    "http://ideal4finance.com/apply",
    "https://user:password@ideal4finance.com/apply",
    "javascript:alert(1)",
  ])
    withEnv({ FINANCE_APPLICATION_URL: value }, () =>
      assert.equal(financeApplicationUrl(), undefined),
    );
});
test("a verified CRM and privacy configuration are required to enable submissions", () => {
  withEnv({ LEADS_DELIVERY_VERIFIED: "false" }, () =>
    assert.equal(leadsConfigured(), false),
  );
});
test("non-canonical preview URLs open without credentials and retain noindex", () => {
  for (const password of [undefined, "legacy-preview-password"]) {
    withEnv(
      {
        NODE_ENV: "production",
        SITE_CONTENT_APPROVED: "false",
        PREVIEW_PASSWORD: password,
      },
      () => {
        for (const path of ["/", "/pay-monthly", "/get-a-quote"]) {
          const response = proxy(new NextRequest(`https://preview.vercel.app${path}`));
          assert.equal(response.status, 200);
          assert.equal(response.headers.get("x-middleware-next"), "1");
          assert.equal(response.headers.has("WWW-Authenticate"), false);
          assert.match(response.headers.get("X-Robots-Tag") || "", /noindex/);
        }
      },
    );
  }
});
test("cross-site requests and invalid consents are rejected", async () => {
  assert.equal(
    (await POST(request(enquiry, "https://untrusted.example"))).status,
    403,
  );
  assert.equal(
    (await POST(request({ ...enquiry, dataConsent: false }))).status,
    400,
  );
});
test("a missing CRM never reports successful lead delivery", async () => {
  delete process.env.LEAD_WEBHOOK_URL;
  const response = await POST(request());
  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /No information has been sent/);
});
test("successful webhook handoff is signed and upstream failure is not success", async () => {
  const keys = [
    "ENQUIRY_DELIVERY_PROVIDER",
    "LEAD_WEBHOOK_URL",
    "LEAD_WEBHOOK_SECRET",
    "TURNSTILE_SECRET_KEY",
    "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
    "PRIVACY_CONTACT_EMAIL",
    "PRIVACY_RETENTION_NOTICE",
    "PRIVACY_PROCESSORS_NOTICE",
    "PRIVACY_TRANSFER_NOTICE",
    "LEADS_DELIVERY_VERIFIED",
  ];
  const previous = keys.map((k) => process.env[k]);
  const originalFetch = fetch;
  let delivered = "";
  let signature = "";
  let fail = false;
  try {
    for (const k of keys) process.env[k] = "test";
    process.env.ENQUIRY_DELIVERY_PROVIDER = "webhook";
    process.env.LEADS_DELIVERY_VERIFIED = "true";
    process.env.LEAD_WEBHOOK_URL = "https://crm.example.test/lead";
    process.env.LEAD_WEBHOOK_SECRET = "test-only-signing-key";
    globalThis.fetch = (async (
      input: string | URL | Request,
      init?: RequestInit,
    ) => {
      if (String(input).includes("siteverify"))
        return Response.json({
          success: true,
          action: "treatment-enquiry",
          hostname: "turkeyteethfinance.co.uk",
        });
      delivered = String(init?.body);
      signature = new Headers(init?.headers).get("X-Lead-Signature") || "";
      return new Response(null, { status: fail ? 500 : 204 });
    }) as typeof fetch;
    const response = await POST(request());
    assert.equal(response.status, 201);
    assert.equal(
      signature,
      `sha256=${createHmac("sha256", "test-only-signing-key").update(delivered).digest("hex")}`,
    );
    const payload = JSON.parse(delivered);
    assert.equal(payload.marketingConsent, false);
    assert.equal("website" in payload, false);
    assert.ok(payload.reference);
    assert.equal("email" in (await response.json()), false);
    fail = true;
    assert.equal((await POST(request())).status, 502);
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((k, i) => {
      if (previous[i] === undefined) delete process.env[k];
      else process.env[k] = previous[i];
    });
  }
});
