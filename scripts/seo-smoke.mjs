import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { publicPages } from "../lib/public-pages.ts";
import { canonicalUrl, SITE_URL } from "../lib/site.ts";

const preview = process.argv.includes("--preview");
const listener = createServer();
await new Promise((resolve) => listener.listen(0, "127.0.0.1", resolve));
const port = listener.address().port;
await new Promise((resolve) => listener.close(resolve));
const directory = await mkdtemp(join(tmpdir(), "ttf-seo-"));
const expected = join(directory, "expected.json");
await writeFile(expected, JSON.stringify(publicPages().map((page) => canonicalUrl(page.path))));
const server = spawn(process.execPath, [
  "node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port),
], { stdio: ["ignore", "inherit", "inherit"], env: { ...process.env, NODE_ENV: "production" } });

try {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    if (server.exitCode !== null) throw new Error("Production server exited before the smoke check.");
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(500) });
      await response.body?.cancel();
      if (response.status === 200) { ready = true; break; }
    } catch { /* Startup may not yet have bound the port. */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  if (!ready) throw new Error("Production server did not become ready.");
  const args = [
    "scripts/check-seo.py", "--base", `http://127.0.0.1:${port}`,
    "--canonical", SITE_URL, "--host", new URL(SITE_URL).host,
    "--expected", expected,
  ];
  if (preview) args.push("--preview");
  const checker = spawn("python3", args, { stdio: "inherit" });
  const code = await new Promise((resolve, reject) => {
    checker.once("error", reject);
    checker.once("exit", (status) => resolve(status));
  });
  if (code !== 0) throw new Error(`SEO ${preview ? "preview" : "production"} smoke check failed.`);
} finally {
  if (server.exitCode === null) {
    await new Promise((resolve) => {
      const timer = setTimeout(() => { server.kill("SIGKILL"); resolve(); }, 5000);
      timer.unref();
      server.once("exit", () => { clearTimeout(timer); resolve(); });
      server.kill("SIGTERM");
    });
  }
  await rm(directory, { recursive: true, force: true });
}
