import test, { afterEach } from "node:test";
import assert from "node:assert/strict";
import React from "react";
import { JSDOM } from "jsdom";
import {
  PathnameContext,
  SearchParamsContext,
} from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Header } from "../components/header";
import { BudgetExplorer } from "../components/budget-explorer";
import { QuoteForm } from "../components/quote-form";

// In-memory component tests: no browser automation, external requests or patient data.
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost/",
});
Object.assign(globalThis, {
  self: dom.window,
  window: dom.window,
  document: dom.window.document,
  HTMLElement: dom.window.HTMLElement,
  HTMLInputElement: dom.window.HTMLInputElement,
  MutationObserver: dom.window.MutationObserver,
});
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
});
(
  globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;
let testing: typeof import("@testing-library/react");
test.before(async () => {
  testing = await import("@testing-library/react");
});
afterEach(() => testing.cleanup());

test("navigation opens, closes and closes when a destination is selected", () => {
  const { render, fireEvent } = testing;
  const view = render(
    <PathnameContext.Provider value="/">
      <Header />
    </PathnameContext.Provider>,
  );
  fireEvent.click(view.getByRole("button", { name: "Open menu" }));
  assert.equal(
    view
      .getByRole("button", { name: "Close menu" })
      .getAttribute("aria-expanded"),
    "true",
  );
  fireEvent.click(view.getByRole("link", { name: "Pay Monthly" }));
  assert.equal(
    view
      .getByRole("button", { name: "Open menu" })
      .getAttribute("aria-expanded"),
    "false",
  );
});

test("budget selection updates the amount and carries the chosen interest into the quote link", () => {
  const { render, fireEvent } = testing;
  const view = render(<BudgetExplorer />);
  fireEvent.click(
    view.getByRole("button", { name: "Dental implants" }),
  );
  assert.equal(
    view
      .getByRole("button", { name: "Dental implants" })
      .getAttribute("aria-pressed"),
    "true",
  );
  fireEvent.change(view.getByLabelText("Budget to discuss"), {
    target: { value: "4700" },
  });
  assert.equal(view.container.querySelector("output")?.textContent, "£4,700");
  const link = view
    .getByRole("link", { name: "Get My Free Treatment Quote" })
    .getAttribute("href");
  assert.ok(link?.includes("treatment=Dental%20implants"));
  assert.ok(link?.includes("budget=4700"));
});

test("the enquiry requires interest and contact details, supports WhatsApp and keeps marketing optional", async () => {
  const { render, fireEvent } = testing;
  const view = render(
    <SearchParamsContext.Provider value={new URLSearchParams()}>
      <QuoteForm available={false} />
    </SearchParamsContext.Provider>,
  );
  fireEvent.click(view.getByRole("button", { name: "Continue" }));
  assert.match(view.getByRole("alert").textContent || "", /choose a treatment/);
  fireEvent.click(
    view.getByRole("radio", { name: "Dental implants" }),
  );
  fireEvent.click(view.getByRole("button", { name: "Continue" }));
  assert.ok(view.getByRole("heading", { name: "A little about your smile." }));
  fireEvent.click(view.getByRole("button", { name: "Continue" }));
  assert.ok(view.getByRole("heading", { name: "How should we get in touch?" }));
  fireEvent.change(view.getByLabelText(/Full name/), {
    target: { value: "Test Patient" },
  });
  fireEvent.change(view.getByLabelText(/Email address/), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(view.getByLabelText("Preferred communication method"), {
    target: { value: "whatsapp" },
  });
  fireEvent.click(view.getByRole("button", { name: "Continue" }));
  assert.match(view.getByRole("alert").textContent || "", /WhatsApp number/);
  fireEvent.change(view.getByLabelText(/WhatsApp number/), {
    target: { value: "+44 7700 900000" },
  });
  fireEvent.click(view.getByRole("button", { name: "Continue" }));
  assert.ok(view.getByRole("heading", { name: "Check your enquiry." }));
  assert.equal(
    (view.getByLabelText(/occasional treatment news/) as HTMLInputElement)
      .checked,
    false,
  );
  assert.equal(
    (view.getByRole("button", { name: "Send my enquiry" }) as HTMLButtonElement)
      .disabled,
    true,
  );
  assert.ok(view.getByText("Dental implants"));
});

test("enquiry delivery disables duplicate submissions, refreshes CAPTCHA on failure and confirms only an accepted reference", async () => {
  const { render, fireEvent, waitFor, act } = testing;
  const originalFetch = globalThis.fetch;
  const originalTurnstile = window.turnstile;
  let widgetCount = 0;
  let calls = 0;
  let resolveSubmission: (response: Response) => void = () => {};
  window.turnstile = {
    render: (_container, options) => {
      widgetCount++;
      (options.callback as (token: string) => void)("test-token-" + widgetCount);
      return "test-widget-" + widgetCount;
    },
    remove: () => {},
  };
  try {
    globalThis.fetch = (async (input, init) => {
      calls++;
      assert.equal(input, "/api/quote");
      const data = init?.body as FormData;
      assert.equal(data.get("captchaToken"), "test-token-" + calls);
      assert.equal(JSON.parse(String(data.get("fields"))).marketingConsent, false);
      if (calls === 1) return new Promise<Response>((resolve) => { resolveSubmission = resolve; });
      return Response.json({ ok: true, reference: "test-accepted-reference" }, { status: 201 });
    }) as typeof fetch;
    const view = render(
      <SearchParamsContext.Provider value={new URLSearchParams()}>
        <QuoteForm available={true} turnstileSiteKey="test-public-key" />
      </SearchParamsContext.Provider>,
    );
    fireEvent.click(view.getByRole("radio", { name: "Veneers" }));
    fireEvent.click(view.getByRole("button", { name: "Continue" }));
    fireEvent.click(view.getByRole("button", { name: "Continue" }));
    fireEvent.change(view.getByLabelText(/Full name/), { target: { value: "Test Patient" } });
    fireEvent.change(view.getByLabelText(/Email address/), { target: { value: "test@example.com" } });
    fireEvent.click(view.getByRole("button", { name: "Continue" }));
    fireEvent.click(view.getByLabelText(/I have read the/));
    fireEvent.click(view.getByLabelText(/I explicitly consent/));
    await waitFor(() => assert.equal(widgetCount, 1));
    fireEvent.click(view.getByRole("button", { name: "Send my enquiry" }));
    assert.equal((view.getByRole("button", { name: /Sending/ }) as HTMLButtonElement).disabled, true);
    fireEvent.submit(view.container.querySelector("form")!);
    assert.equal(calls, 1);
    await act(async () => resolveSubmission(Response.json({ error: "Test delivery failure" }, { status: 502 })));
    await waitFor(() => assert.match(view.getByRole("alert").textContent || "", /Test delivery failure/));
    await waitFor(() => assert.equal(widgetCount, 2));
    fireEvent.click(view.getByRole("button", { name: "Send my enquiry" }));
    await waitFor(() => assert.ok(view.getByRole("status")));
    assert.ok(view.getByText("Reference: test-accepted-reference"));
    assert.equal(calls, 2);
  } finally {
    globalThis.fetch = originalFetch;
    window.turnstile = originalTurnstile;
  }
});

test("photo totals are limited before entering contact details", () => {
  const { render, fireEvent } = testing;
  const view = render(
    <SearchParamsContext.Provider value={new URLSearchParams()}>
      <QuoteForm available={false} />
    </SearchParamsContext.Provider>,
  );
  fireEvent.click(view.getByRole("radio", { name: "Veneers" }));
  fireEvent.click(view.getByRole("button", { name: "Continue" }));
  const photos = [
    new dom.window.File([new Uint8Array(3 * 1024 * 1024)], "test-a.jpg", { type: "image/jpeg" }),
    new dom.window.File([new Uint8Array(2 * 1024 * 1024)], "test-b.jpg", { type: "image/jpeg" }),
  ];
  fireEvent.change(view.container.querySelector('input[type="file"]')!, { target: { files: photos } });
  assert.match(view.getByRole("alert").textContent || "", /4 MB in total/);
});


test("the enabled Formspree form submits without an unconfigured CAPTCHA and still requires consent", async () => {
  const { render, fireEvent, waitFor } = testing;
  const originalFetch = globalThis.fetch;
  let calls = 0;
  try {
    globalThis.fetch = (async (input, init) => {
      calls++;
      assert.equal(input, "/api/quote");
      const data = init?.body as FormData;
      const fields = JSON.parse(String(data.get("fields")));
      assert.equal(fields.dataConsent, true);
      assert.equal(fields.healthConsent, true);
      assert.equal(fields.marketingConsent, false);
      assert.equal(data.get("captchaToken"), "");
      return Response.json({ ok: true, reference: "no-custom-captcha-reference" }, { status: 201 });
    }) as typeof fetch;
    const view = render(
      <SearchParamsContext.Provider value={new URLSearchParams()}>
        <QuoteForm available={true} />
      </SearchParamsContext.Provider>,
    );
    fireEvent.click(view.getByRole("radio", { name: "Not sure yet" }));
    fireEvent.click(view.getByRole("button", { name: "Continue" }));
    fireEvent.click(view.getByRole("button", { name: "Continue" }));
    fireEvent.change(view.getByLabelText(/Full name/), { target: { value: "Test Patient" } });
    fireEvent.change(view.getByLabelText(/Email address/), { target: { value: "test@example.com" } });
    fireEvent.click(view.getByRole("button", { name: "Continue" }));
    assert.equal((view.getByRole("button", { name: "Send my enquiry" }) as HTMLButtonElement).disabled, false);
    fireEvent.click(view.getByRole("button", { name: "Send my enquiry" }));
    assert.match(view.getByRole("alert").textContent || "", /required privacy/);
    assert.equal(calls, 0);
    fireEvent.click(view.getByLabelText(/I have read the/));
    fireEvent.click(view.getByLabelText(/I explicitly consent/));
    fireEvent.click(view.getByRole("button", { name: "Send my enquiry" }));
    await waitFor(() => assert.ok(view.getByRole("status")));
    assert.ok(view.getByText("Reference: no-custom-captcha-reference"));
    assert.equal(calls, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
