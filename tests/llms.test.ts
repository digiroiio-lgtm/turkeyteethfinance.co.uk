import test from "node:test";
import assert from "node:assert/strict";
import { llmsFull, llmsIndex } from "../lib/llms";
import { canonicalPaths, SITE_URL, draftNotice } from "../lib/site";
import { commonFAQs, guideArticles, pages } from "../lib/content";
import { GET as getIndex } from "../app/llms.txt/route";
import { GET as getFull } from "../app/llms-full.txt/route";

function withEnv(values: Record<string, string | undefined>, fn: () => void) {
  const previous = Object.fromEntries(
    Object.keys(values).map((key) => [key, process.env[key]]),
  );
  try {
    for (const [key, value] of Object.entries(values)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    fn();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test("LLM directory covers every canonical page once, including both legal notices", () => {
  const section = llmsIndex().split("## Site pages\n\n")[1].split("\n\n## ")[0];
  const urls = [...section.matchAll(/^- \[.*\]\(([^\n]+)\): /gm)].map(
    (match) => match[1],
  );
  const expected = [...canonicalPaths, "/privacy", "/terms"].map(
    (path) => new URL(path, SITE_URL).href,
  );
  assert.deepEqual(urls, expected);
  assert.equal(new Set(urls).size, expected.length);
  assert.ok(llmsIndex().includes(new URL("/llms-full.txt", SITE_URL).href));
  const full = llmsFull();
  for (const url of expected) assert.ok(full.includes(`Source: ${url}\n`), url);
});

test("full export includes the current FAQ answers, complete guides and later content edits", () => {
  const originalIntro = pages["our-clinic"].intro;
  const originalAnswer = commonFAQs[0].answer;
  try {
    pages["our-clinic"].intro = "Updated clinic copy: source-of-truth check.";
    commonFAQs[0].answer = "Updated FAQ answer: source-of-truth check.";
    const full = llmsFull();
    assert.ok(full.includes(pages["our-clinic"].intro));
    assert.ok(llmsIndex().includes(pages["our-clinic"].intro));
    for (const faq of [...commonFAQs, ...Object.values(pages).flatMap((p) => p.faqs)]) {
      assert.ok(full.includes(`#### ${faq.question}\n\n${faq.answer}`), faq.question);
    }
    for (const article of guideArticles)
      for (const paragraph of article.paragraphs)
        assert.ok(full.includes(paragraph), article.title);
    assert.ok(full.includes("## Privacy & cookies"));
    assert.ok(full.includes("## Website terms"));
  } finally {
    pages["our-clinic"].intro = originalIntro;
    commonFAQs[0].answer = originalAnswer;
  }
});

test("exports follow public finance/privacy configuration without leaking private settings", () => {
  withEnv(
    {
      SITE_CONTENT_APPROVED: "false",
      APPROVED_FINANCE_DISCLOSURE: "Approved public disclosure fixture.",
      FINANCE_APPLICATION_URL: "https://ideal4finance.com/test-application",
      PRIVACY_CONTACT_EMAIL: "privacy@example.test",
      PRIVACY_RETENTION_NOTICE: "Reviewed public retention fixture.",
      LEAD_WEBHOOK_SECRET: "private-webhook-value-never-export",
      TURNSTILE_SECRET_KEY: "private-turnstile-value-never-export",
    },
    () => {
      for (const output of [llmsIndex(), llmsFull()]) {
        assert.ok(output.includes(draftNotice));
        assert.equal(output.includes("Approved public disclosure fixture."), false);
        assert.equal(output.includes("/test-application"), false);
        assert.equal(output.includes("private-webhook-value-never-export"), false);
        assert.equal(output.includes("private-turnstile-value-never-export"), false);
      }
      assert.ok(llmsFull().includes("mailto:privacy@example.test"));
      assert.ok(llmsFull().includes("Reviewed public retention fixture."));
      process.env.SITE_CONTENT_APPROVED = "true";
      for (const output of [llmsIndex(), llmsFull()]) {
        assert.equal(output.includes(draftNotice), false);
        assert.ok(output.includes("Approved public disclosure fixture."));
        assert.ok(output.includes("https://ideal4finance.com/test-application"));
      }
    },
  );
});

test("both text endpoints serve UTF-8 Markdown rather than an HTML page", async () => {
  for (const [get, generate] of [[getIndex, llmsIndex], [getFull, llmsFull]] as const) {
    const response = get();
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("Content-Type"), "text/plain; charset=utf-8");
    const output = await response.text();
    assert.equal(output, generate());
    assert.match(output, /^# Turkey Teeth Finance\n\n> /);
    assert.equal(output.includes("<script"), false);
    assert.equal(output.includes("<!DOCTYPE"), false);
  }
});
