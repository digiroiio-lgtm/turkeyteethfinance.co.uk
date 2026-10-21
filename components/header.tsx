"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { PRIMARY_CTA } from "@/lib/public-copy";
import { treatments } from "@/lib/treatments";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Turkey Teeth Finance homepage">
      <span>turkeyteeth</span>
      <span>finance.co.uk</span>
    </Link>
  );
}
const links = [
  ["Prices", "/prices"],
  ["Pay Monthly", "/pay-monthly"],
  ["How It Works", "/how-it-works"],
  ["Our Clinic", "/our-clinic"],
  ["Patients", "/before-and-after"],
  ["FAQ", "/finance-faq"],
  ["Guides", "/guides"],
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Primary navigation"
        >
          <details className="treatment-menu">
            <summary>
              Treatments <ChevronDown size={13} />
            </summary>
            <div className="treatment-dropdown">
              {treatments.map((t) => (
                <Link
                  key={t.slug}
                  href={`/${t.slug}`}
                  onClick={() => setOpen(false)}
                >
                  {t.name}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </details>
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Link
            className="button button-small header-cta"
            href="/get-a-quote#treatment-enquiry" data-analytics-action="quote" data-analytics-location="header"
            onClick={() => setOpen(false)}
          >
            {PRIMARY_CTA}
            <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
