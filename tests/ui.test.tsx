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
