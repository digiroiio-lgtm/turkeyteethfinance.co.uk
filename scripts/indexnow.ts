import { canonicalPaths, SITE_URL, indexingEnabled } from "../lib/site";
async function main() {
  if (!indexingEnabled())
    throw new Error("Search indexing is disabled in this environment.");
  const key = process.env.INDEXNOW_KEY;
  if (!key || !/^[a-zA-Z0-9_-]{8,128}$/.test(key))
    throw new Error(
      "Set a site-specific INDEXNOW_KEY (8–128 letters, numbers, underscores or hyphens).",
    );
  const paths = [...new Set(process.argv.slice(2))];
  const allowed = new Set([...canonicalPaths, "/privacy", "/terms"]);
  if (paths.length === 0 || paths.some((p) => !allowed.has(p)))
    throw new Error(
      "Pass only changed canonical paths, for example: npm run indexnow -- / /pay-monthly",
    );
  const origin = new URL(SITE_URL);
  if (origin.protocol !== "https:")
    throw new Error("Production site URL must use HTTPS.");
  const keyLocation = `${origin.origin}/${key}.txt`;
  const proof = await fetch(keyLocation, { signal: AbortSignal.timeout(8000) });
  if (!proof.ok || (await proof.text()).trim() !== key)
    throw new Error("The live site is not serving the matching key file.");
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: origin.hostname,
      key,
      keyLocation,
      urlList: paths.map((p) => origin.origin + (p === "/" ? "" : p)),
    }),
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok)
    throw new Error(`IndexNow returned HTTP ${response.status}.`);
  console.log(
    `Submitted ${paths.length} changed canonical URL(s) to IndexNow (HTTP ${response.status}).`,
  );
}
main().catch((e) => {
  console.error(e instanceof Error ? e.message : "IndexNow submission failed.");
  process.exitCode = 1;
});
