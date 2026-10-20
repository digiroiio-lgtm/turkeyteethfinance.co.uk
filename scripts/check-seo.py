#!/usr/bin/env python3
"""Check public SEO responses without following redirects or changing the site."""
import argparse
import concurrent.futures
import datetime
import json
import os
from pathlib import Path
import re
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

CANONICAL = "https://turkeyteethfinance.co.uk"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}


class PageMetadata(HTMLParser):
    def __init__(self):
        super().__init__()
        self.robots = []
        self.canonical = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta" and attrs.get("name", "").lower() in ("robots", "googlebot", "bingbot"):
            self.robots.append(attrs.get("content", ""))
        if tag == "link" and "canonical" in attrs.get("rel", "").lower().split():
            self.canonical.append(attrs.get("href", ""))


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


def normalized(url):
    p = urllib.parse.urlsplit(url)
    return urllib.parse.urlunsplit((p.scheme.lower(), p.netloc.lower(), p.path or "/", p.query, p.fragment))


def blocked(value):
    return bool(re.search(r"\b(noindex|nofollow|none)\b", value or "", re.I))


def parse_robots(text):
    groups = []
    agents, rules = [], []
    for raw in text.splitlines():
        line = raw.split("#", 1)[0].strip()
        if ":" not in line:
            continue
        name, value = (part.strip() for part in line.split(":", 1))
        if name.lower() == "user-agent":
            if rules:
                groups.append((agents, rules))
                agents, rules = [], []
            agents.append(value.lower())
        elif name.lower() in ("allow", "disallow") and agents:
            rules.append((name.lower(), value))
    if agents:
        groups.append((agents, rules))
    return groups


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", default=CANONICAL)
    parser.add_argument("--canonical", default=CANONICAL)
    parser.add_argument("--host", help="Host header for a local production server")
    parser.add_argument("--expected", help="JSON array of canonical URLs from the page registry")
    parser.add_argument("--output")
    parser.add_argument("--report-only", action="store_true")
    parser.add_argument("--preview", action="store_true")
    args = parser.parse_args()
    origin = args.base.rstrip("/")
    canonical = args.canonical.rstrip("/")
    canonical_parts = urllib.parse.urlsplit(canonical)
    base_parts = urllib.parse.urlsplit(origin)
    if canonical_parts.scheme != "https" or canonical_parts.query or canonical_parts.fragment:
        parser.error("canonical must be an HTTPS origin")
    if base_parts.scheme != "https" and not (
        base_parts.scheme == "http" and base_parts.hostname in ("127.0.0.1", "localhost", "::1")
    ):
        parser.error("base must use HTTPS, except for a local test server")

    def request(path, host=None, alternate_origin=None):
        url = (alternate_origin or origin) + path
        headers = {"User-Agent": "TurkeyTeethFinanceSEOCheck/1.0", "Cache-Control": "no-cache"}
        if host or args.host:
            headers["Host"] = host or args.host
        try:
            try:
                response = urllib.request.build_opener(NoRedirect()).open(
                    urllib.request.Request(url, headers=headers), timeout=12
                )
            except urllib.error.HTTPError as error:
                response = error
            data = response.read(2 * 1024 * 1024 + 1)
            if len(data) > 2 * 1024 * 1024:
                raise ValueError("Response exceeds the audit size limit")
            return {
                "status": response.status,
                "content_type": response.headers.get("Content-Type", ""),
                "x_robots_tag": ", ".join(response.headers.get_all("X-Robots-Tag") or []),
                "location": response.headers.get("Location"),
                "body": data.decode("utf-8", errors="replace"),
            }
        except Exception as error:
            return {"status": None, "error": str(error), "body": "", "x_robots_tag": "", "content_type": ""}

    report = {
        "base": origin, "canonical": canonical, "mode": "preview" if args.preview else "production",
        "checked_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "sitemap_url_count": 0, "errors": [],
    }
    errors = report["errors"]
    robot = request("/robots.txt")
    homepage = request("/")
    sitemap = request("/sitemap.xml")
    meta = PageMetadata()
    meta.feed(homepage["body"])
    report["robots"] = {k: robot[k] for k in ("status", "content_type", "x_robots_tag")}
    report["robots"]["text"] = robot["body"][:2000]
    report["homepage"] = {k: homepage[k] for k in ("status", "x_robots_tag")}
    report["homepage"].update({"html_robots": meta.robots, "canonical": meta.canonical})
    report["sitemap"] = {k: sitemap[k] for k in ("status", "content_type", "x_robots_tag")}
    for name, response in (("robots.txt", robot), ("homepage", homepage), ("sitemap.xml", sitemap)):
        if response["status"] != 200:
            errors.append(name + ": HTTP " + str(response["status"]) + " " + response.get("error", ""))

    if sitemap["status"] == 200 and sitemap["content_type"].split(";", 1)[0].strip().lower() not in ("application/xml", "text/xml"):
        errors.append("Sitemap has an incorrect XML content type")
    if robot["status"] == 200 and not robot["content_type"].lower().startswith("text/plain"):
        errors.append("robots.txt is not served as plain text")

    locations = []
    if sitemap["status"] == 200:
        try:
            root = ET.fromstring(sitemap["body"])
            if root.tag != "{" + NS["s"] + "}urlset":
                raise ValueError("Not a sitemap urlset")
            for entry in root.findall("s:url", NS):
                location = entry.findtext("s:loc", default="", namespaces=NS)
                p = urllib.parse.urlsplit(location)
                if (p.scheme != "https" or p.netloc != canonical_parts.netloc or p.query or p.fragment
                        or p.username or p.password or p.path.startswith("/api/")):
                    errors.append("Non-canonical or private sitemap URL: " + location)
                    continue
                lastmod = entry.findtext("s:lastmod", namespaces=NS)
                if lastmod:
                    try:
                        datetime.datetime.fromisoformat(lastmod.replace("Z", "+00:00"))
                    except ValueError:
                        errors.append("Invalid lastmod: " + location + " " + lastmod)
                locations.append(location)
        except (ET.ParseError, ValueError) as error:
            errors.append("Invalid sitemap XML: " + str(error))
    report["sitemap_url_count"] = len(locations)

    groups = parse_robots(robot["body"])
    root_block = any(
        any(agent in ("*", "googlebot", "bingbot") for agent in agents)
        and ("disallow", "/") in rules and ("allow", "/") not in rules
        for agents, rules in groups
    )

    if args.preview:
        if not root_block:
            errors.append("Preview robots.txt does not block public crawling")
        if not (blocked(homepage["x_robots_tag"]) and any(blocked(v) for v in meta.robots)):
            errors.append("Preview needs both HTTP and HTML noindex")
        if locations:
            errors.append("Preview sitemap must not publish indexable URLs")
    else:
        if root_block:
            errors.append("Public production is blocked by robots.txt")
        if not re.search(r"^sitemap:\s*" + re.escape(canonical + "/sitemap.xml") + r"\s*$",
                         robot["body"], re.I | re.M):
            errors.append("Canonical sitemap declaration is missing from robots.txt")
        if not locations:
            errors.append("Production sitemap is empty")
        if len(set(map(normalized, locations))) != len(locations):
            errors.append("Duplicate sitemap URLs")
        if args.expected:
            expected = json.loads(Path(args.expected).read_text())
            if set(map(normalized, expected)) != set(map(normalized, locations)):
                errors.append("Sitemap differs from the shared public page registry")
        if blocked(homepage["x_robots_tag"]) or any(blocked(v) for v in meta.robots):
            errors.append("Homepage still has noindex/nofollow")
        if len(meta.canonical) != 1 or normalized(meta.canonical[0]) != normalized(canonical):
            errors.append("Homepage canonical does not match the production origin")
        if blocked(sitemap["x_robots_tag"]):
            errors.append("Production sitemap has a blocking X-Robots-Tag")

        def check_page(location):
            response = request(urllib.parse.urlsplit(location).path or "/")
            parsed = PageMetadata()
            parsed.feed(response["body"])
            item = {
                "url": location, "status": response["status"],
                "html_robots": parsed.robots, "x_robots_tag": response["x_robots_tag"],
                "canonical": parsed.canonical,
            }
            issues = []
            if response["status"] != 200:
                issues.append("HTTP " + str(response["status"]))
            if blocked(response["x_robots_tag"]) or any(blocked(v) for v in parsed.robots):
                issues.append("noindex/nofollow")
            if len(parsed.canonical) != 1 or normalized(parsed.canonical[0]) != normalized(location):
                issues.append("canonical mismatch")
            return item, issues

        with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
            checked = list(pool.map(check_page, locations))
        report["pages"] = [item for item, _ in checked]
        for item, issues in checked:
            if issues:
                errors.append(item["url"] + ": " + ", ".join(issues))

        alias = canonical_parts.hostname
        alias = alias[4:] if alias.startswith("www.") else "www." + alias
        alternate = canonical_parts.scheme + "://" + alias
        redirection = request("/prices?seo-check=1", host=alias if args.host else None,
                              alternate_origin=None if args.host else alternate)
        report["www_redirect"] = {k: redirection[k] for k in ("status", "location")}
        if redirection["status"] not in (301, 308) or normalized(
            redirection["location"] or ""
        ) != normalized(canonical + "/prices?seo-check=1"):
            errors.append("www/apex redirect does not preserve the canonical path and query")

        full_index = request("/llms.txt")
        full_text = request("/llms-full.txt")
        report["llms"] = {"index_status": full_index["status"], "full_status": full_text["status"]}
        if full_index["status"] != 200 or full_text["status"] != 200:
            errors.append("LLM text exports are unavailable")
        else:
            if not all(r["content_type"].lower().startswith("text/plain") for r in (full_index, full_text)):
                errors.append("LLM exports are not served as plain text")
            for location in locations:
                p = urllib.parse.urlsplit(location).path or "/"
                equivalents = [canonical + ("" if p == "/" else p), canonical + p]
                if not any("(" + url + ")" in full_index["body"] for url in equivalents):
                    errors.append("LLM index is missing a sitemap URL: " + location)
                if not any("Source: " + url + "\n" in full_text["body"] for url in equivalents):
                    errors.append("LLM full text is missing a sitemap URL: " + location)

    report["valid"] = not errors
    output = json.dumps(report, indent=2, ensure_ascii=False) + "\n"
    print(output, end="")
    if args.output:
        Path(args.output).write_text(output)
    if os.environ.get("GITHUB_STEP_SUMMARY"):
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as summary:
            summary.write("\n### SEO " + report["mode"] + " check\n\n")
            summary.write("- Site: " + origin + "\n")
            summary.write("- Sitemap URLs: " + str(report["sitemap_url_count"]) + "\n")
            summary.write("- Result: " + ("PASS" if report["valid"] else "FAIL") + "\n")
            for error in errors:
                summary.write("- " + error.replace("\n", " ") + "\n")
    return 0 if report["valid"] or args.report_only else 1


if __name__ == "__main__":
    raise SystemExit(main())
