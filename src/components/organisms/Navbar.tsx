"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/lib/mock-data";
import { CallbackButton } from "./CallbackModal";

/* Sticky blurred header — researched: pill nav tabs, single "Get a Callback"
 * CTA. Desktop tabs are the audience split; everything else lives in the
 * footer + mobile "More" sheet. No desktop hamburger. */

const TABS = [
  { href: "/trainings", label: "Students" },
  { href: "/services", label: "Businesses" },
  { href: "/institutes", label: "For Institutes" },
  { href: "/pricing", label: "Pricing" },
  { href: "/sitemap", label: "Site Map" },
  { href: "/research", label: "Research" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[60] border-b border-line bg-bg/92 backdrop-blur-[10px]">
      <div className="container-brand flex items-center gap-[26px] py-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label="GradeSpot home">
          <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-[9px] bg-brand font-display text-[17px] font-extrabold text-white">
            G
          </span>
          <span className="font-display text-[21px] font-extrabold leading-none text-ink">
            {BRAND.short}
            <small className="mt-0.5 block font-body text-[10.5px] font-semibold uppercase tracking-[0.04em] text-ink3">
              {BRAND.tagline}
            </small>
          </span>
        </Link>

        <nav aria-label="Audiences" className="ml-1.5 hidden items-center gap-1 lg:flex">
          {TABS.map((t) => {
            const on = isActive(pathname, t.href);
            return (
              <Link
                key={t.href}
                href={t.href}
                aria-current={on ? "page" : undefined}
                className={`rounded-button border border-transparent px-[13px] py-2 text-[14.5px] font-semibold ${
                  on
                    ? "border-brand/35 bg-brand-soft text-brand-ink"
                    : "text-ink2 hover:bg-bg2 hover:text-ink"
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />

        <CallbackButton size="sm" className="hidden sm:inline-flex">
          Get a Callback
        </CallbackButton>
        {/* Mobile: the bottom tab bar carries navigation; keep a compact CTA */}
        <CallbackButton size="sm" className="sm:hidden">
          Callback
        </CallbackButton>
      </div>
    </header>
  );
}
