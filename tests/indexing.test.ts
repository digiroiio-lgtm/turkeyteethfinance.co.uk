import test from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import {
  canonicalPaths,
  indexingEnabled,
  publicationApproved,
  SITE_URL,
} from "../lib/site";
import { pageMetadata } from "../lib/metadata";
import { pages } from "../lib/content";
import { proxy } from "../proxy";
import sitemap from "../app/sitemap";
import robots from "../app/robots";
import { GET as indexNowKey } from "../app/api/indexnow-key/route";

function withEnv<T>(values: Record<string, string | undefined>, fn: () => T): T {
  const previous = Object.fromEntries(
    Object.keys(values).map((key) => [key, process.env[key]]),
  );
  try {
    for (const [key, value] of Object.entries(values)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    return fn();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

const production = {
  NODE_ENV: "production",
  VERCEL_ENV: "production",
  SITE_INDEXING_ENABLED: undefined,
  SITE_CONTENT_APPROVED: "false",
};

test("production indexing opens independently of finance approval at every layer", () => {
  withEnv(production, () => {
    assert.equal(indexingEnabled(), true);
    assert.equal(publicationApproved(), false);
    assert.deepEqual(pageMetadata("Title", "Description", "/").robots, {
      index: true,
      follow: true,
    });
    assert.deepEqual(robots().rules, {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    });
    assert.equal(robots().sitemap, `${SITE_URL}/sitemap.xml`);
    assert.deepEqual(
      sitemap().map((entry) => entry.url),
      [...canonicalPaths, "/privacy", "/terms"].map(
        (path) => SITE_URL + (path === "/" ? "" : path),
      ),
    );
    for (const path of canonicalPaths) {
      const response = proxy(new NextRequest(SITE_URL + path));
      assert.equal(response.status, 200);
      assert.equal(response.headers.has("X-Robots-Tag"), false);
    }
    assert.match(
      proxy(new NextRequest(`${SITE_URL}/api/quote`)).headers.get("X-Robots-Tag") || "",
      /noindex/,
    );
  });
});

test("explicit search holds and development/preview builds stay closed to indexing", () => {
  for (const overrides of [
    { SITE_INDEXING_ENABLED: "false" },
    { VERCEL_ENV: "preview" },
    { VERCEL_ENV: "development" },
    { NODE_ENV: "development" },
  ]) {
    withEnv({ ...production, ...overrides }, () => {
      assert.equal(indexingEnabled(), false);
      assert.deepEqual(sitemap(), []);
      assert.deepEqual(robots().rules, { userAgent: "*", disallow: "/" });
      assert.deepEqual(pageMetadata("Title", "Description", "/").robots, {
        index: false,
        follow: false,
      });
      assert.match(
        proxy(new NextRequest(SITE_URL)).headers.get("X-Robots-Tag") || "",
        /noindex/,
      );
    });
  }
});

test("deployment aliases get noindex and their own blocking robots response", async () => {
  const response = withEnv(production, () => {
    const page = proxy(new NextRequest("https://preview.vercel.app/prices"));
    assert.match(page.headers.get("X-Robots-Tag") || "", /noindex/);
    return proxy(new NextRequest("https://preview.vercel.app/robots.txt"));
  });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "User-agent: *\nDisallow: /\n");
});

test("www/apex alias redirects permanently to the canonical URL without losing the path or query", () => {
  const alias = new URL(SITE_URL);
  alias.hostname = alias.hostname.startsWith("www.")
    ? alias.hostname.slice(4)
    : `www.${alias.hostname}`;
  alias.pathname = "/prices";
  alias.search = "?treatment=veneers";
  const response = proxy(new NextRequest(alias));
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("Location"), `${SITE_URL}/prices?treatment=veneers`);
});

test("lastmod follows the edited page's explicit content date, leaving other pages unchanged", () => {
  withEnv(production, () => {
    const baseline = sitemap();
    assert.equal(baseline.length, 20);
    for (const entry of baseline) assert.match(String(entry.lastModified), /^\d{4}-\d{2}-\d{2}$/);
    const previous = pages["our-clinic"].lastModified;
    try {
      pages["our-clinic"].lastModified = "2026-10-21";
      const after = sitemap();
      assert.equal(after.find((entry) => entry.url.endsWith("/our-clinic"))?.lastModified, "2026-10-21");
      assert.deepEqual(
        after.filter((entry) => !entry.url.endsWith("/our-clinic")),
        baseline.filter((entry) => !entry.url.endsWith("/our-clinic")),
      );
    } finally {
      pages["our-clinic"].lastModified = previous;
    }
  });
});

test("IndexNow key delivery follows search configuration rather than finance approval", async () => {
  const response = withEnv({ ...production, INDEXNOW_KEY: "test-site-specific-key" }, () => {
    assert.equal(publicationApproved(), false);
    const rewrite = proxy(new NextRequest(`${SITE_URL}/test-site-specific-key.txt`));
    assert.equal(new URL(rewrite.headers.get("X-Middleware-Rewrite")!).pathname, "/api/indexnow-key");
    return indexNowKey();
  });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "test-site-specific-key");
});
