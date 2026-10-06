"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/atoms";

/* Mobile bottom tab bar — researched (India is 80%+ mobile traffic).
 * Home · Courses · Pricing · Institutes · More. Desktop: hidden.
 * "More" opens a bottom sheet with every page. */

const TABS = [
  {
    href: "/",
    label: "Home",
    match: (p: string) => p === "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[21px] w-[21px]">
        <path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    href: "/trainings",
    label: "Courses",
    match: (p: string) => p.startsWith("/trainings"),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[21px] w-[21px]">
        <path d="M22 9L12 4 2 9l10 5 10-5z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      </svg>
    ),
  },
  {
    href: "/pricing",
    label: "Pricing",
    match: (p: string) => p === "/pricing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[21px] w-[21px]">
        <path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a4.5 4.5 0 0 0 0-9" />
      </svg>
    ),
  },
  {
    href: "/institutes",
    label: "Institutes",
    match: (p: string) => p.startsWith("/institutes"),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[21px] w-[21px]">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
  },
];

const SHEET_LINKS: { href: string; label: string; url: string }[] = [
  { href: "/", label: "Home", url: "/" },
  { href: "/trainings", label: "Courses & Fees", url: "/trainings" },
  { href: "/pricing", label: "Pricing", url: "/pricing" },
  { href: "/services", label: "IT Services", url: "/services" },
  { href: "/institutes", label: "For Institutes", url: "/institutes" },
  { href: "/verify", label: "Verify a Certificate", url: "/verify" },
  { href: "/about", label: "About & Contact", url: "/about" },
  { href: "/batches", label: "Batches", url: "/batches" },
  { href: "/resources/blog", label: "Blog", url: "/resources/blog" },
  { href: "/resources/faqs", label: "FAQs", url: "/resources/faqs" },
  { href: "/sitemap", label: "Site Map", url: "/sitemap" },
  { href: "/research", label: "Research", url: "/research" },
];

export function MobileTabBar() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Mobile"
        className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-5 border-t border-line bg-panel/95 px-1 pb-[calc(6px+env(safe-area-inset-bottom))] pt-1.5 backdrop-blur-[10px] md:hidden"
      >
        {TABS.map((t) => {
          const on = t.match(pathname);
          return (
            <Link
              key={t.href}
              href={t.href}
              aria-current={on ? "page" : undefined}
              className={`flex flex-col items-center gap-[3px] px-0.5 py-[5px] font-body text-[11px] font-bold ${on ? "text-brand-ink" : "text-ink3"}`}
            >
              {t.icon}
              {t.label}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className={`flex flex-col items-center gap-[3px] px-0.5 py-[5px] font-body text-[11px] font-bold ${sheetOpen ? "text-brand-ink" : "text-ink3"}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[21px] w-[21px]">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          More
        </button>
      </nav>

      {sheetOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All pages"
          className="fixed inset-0 z-[90] flex items-end justify-center bg-[rgba(8,10,14,0.5)] md:hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSheetOpen(false);
          }}
        >
          <div className="max-h-[82vh] w-full max-w-[560px] overflow-auto rounded-t-[18px] bg-panel p-5">
            <h3 className="mb-2.5 text-[17px]">All pages</h3>
            <nav>
              {SHEET_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setSheetOpen(false)}
                  className="flex items-center justify-between border-b border-line py-3 font-semibold text-ink last:border-0"
                >
                  {l.label}
                  <span className="mono text-xs font-normal text-ink3">{l.url}</span>
                </Link>
              ))}
            </nav>
            <Button
              variant="ghost"
              className="mt-4 w-full justify-center"
              onClick={() => setSheetOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
