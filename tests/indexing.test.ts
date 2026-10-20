import test from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import {
  canonicalPaths,
  indexingEnabled,
  publicationApproved,
  SITE_URL,
  canonicalUrl,
} from "../lib/site";
import { pageMetadata } from "../lib/metadata";
import { pages } from "../lib/content";
import { proxy } from "../proxy";
import sitemap from "../app/sitemap";
import robots from "../app/robots";
import { canonicalOrigin, DEFAULT_SITE_URL, searchIndexingEnabled } from "../lib/search-config";
import { publicPages, publicSitemapEntries, trustedContentDate } from "../lib/public-pages";
import { llmsIndex, llmsFull } from "../lib/llms";
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
    { NODE_ENV: "development", VERCEL_ENV: undefined },
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

test("missing or temporary site URL settings cannot replace the public canonical origin", () => {
  for (const value of [
    undefined, "", " ", "http://turkeyteethfinance.co.uk", "not a URL",
    "https://localhost", "https://127.0.0.1", "https://branch.vercel.app",
    "https://user:password@turkeyteethfinance.co.uk",
    "https://turkeyteethfinance.co.uk/path", "https://turkeyteethfinance.co.uk?x=1",
  ]) assert.equal(canonicalOrigin(value), DEFAULT_SITE_URL);
  assert.equal(canonicalOrigin(" https://www.turkeyteethfinance.co.uk/ "), DEFAULT_SITE_URL);
  assert.equal(canonicalOrigin("https://turkeyteethfinance.co.uk/"), DEFAULT_SITE_URL);
});

test("explicit Vercel production is authoritative and missing environment flags default safely", () => {
  assert.equal(searchIndexingEnabled({ VERCEL_ENV: "production", NODE_ENV: "development" }), true);
  assert.equal(searchIndexingEnabled({ NODE_ENV: "production" }), true);
  assert.equal(searchIndexingEnabled({}), true);
  assert.equal(searchIndexingEnabled({ VERCEL_ENV: "preview", NODE_ENV: "production" }), false);
  assert.equal(searchIndexingEnabled({ VERCEL_ENV: "production", SITE_INDEXING_ENABLED: " FALSE " }), false);
});

test("an internal production hostname does not trigger preview-only noindex headers", () => {
  withEnv(production, () => {
    for (const host of ["origin.internal:3000", "upstream.example.test"]) {
      const response = proxy(new NextRequest(SITE_URL + "/prices", { headers: { host } }));
      assert.equal(response.headers.has("X-Robots-Tag"), false);
    }
  });
});

test("a canonical forwarded hostname works behind a proxy but never bypasses a preview environment", () => {
  const request = new NextRequest(SITE_URL + "/prices", {
    headers: { host: "localhost:3000", "x-forwarded-host": new URL(SITE_URL).hostname },
  });
  withEnv(production, () => assert.equal(proxy(request).headers.has("X-Robots-Tag"), false));
  withEnv({ ...production, VERCEL_ENV: "preview" }, () =>
    assert.match(proxy(request).headers.get("X-Robots-Tag") || "", /noindex/),
  );
});

test("canonical page URLs reject external, parameterized and fragment destinations", () => {
  for (const path of ["https://other.test", "//other.test", "/prices?budget=1", "/guides#article", "/bad\\path"]) {
    assert.throws(() => canonicalUrl(path), /Canonical page paths/);
  }
});

test("the public registry is shared by sitemap and LLM discovery and excludes noindex pages", () => {
  withEnv(production, () => {
    const page = pages["veneers-finance"];
    const previous = page.indexable;
    try {
      page.indexable = false;
      assert.equal(publicPages().some((entry) => entry.path === "/veneers-finance"), false);
      assert.equal(sitemap().some((entry) => entry.url.endsWith("/veneers-finance")), false);
      assert.deepEqual(pageMetadata(page.title, page.description, "/veneers-finance").robots, {
        index: false, follow: false,
      });
      assert.equal(llmsIndex().includes("(" + canonicalUrl("/veneers-finance") + ")"), false);
      assert.equal(llmsFull().includes("Source: " + canonicalUrl("/veneers-finance") + "\n"), false);
    } finally {
      if (previous === undefined) delete page.indexable;
      else page.indexable = previous;
    }
  });
});

test("empty production sitemaps fail instead of silently publishing an empty urlset", () => {
  assert.throws(() => publicSitemapEntries([]), /must not be empty/);
});

test("unknown content dates are omitted and valid explicit dates are preserved", () => {
  for (const value of [undefined, "", "yesterday", "2026-02-30", "2026-13-01"]) {
    assert.equal(trustedContentDate(value), undefined);
  }
  assert.equal(trustedContentDate("2026-10-20"), "2026-10-20");
  const entry = publicSitemapEntries([{ path: "/", title: "Home", description: "Home" }])[0];
  assert.equal("lastModified" in entry, false);
});
