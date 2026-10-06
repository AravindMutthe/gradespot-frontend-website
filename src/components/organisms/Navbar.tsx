"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Close, ChevronDown } from "@carbon/icons-react";
import { NavItem } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { COURSES, SERVICES } from "@/lib/mock-data";

function Dropdown({
  label,
  items,
  basePath,
}: {
  label: string;
  items: { slug: string; title: string }[];
  basePath: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark hover:text-primary"
      >
        {label}
        <ChevronDown size={16} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-64 rounded-card border border-muted/20 bg-surface py-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className="block px-4 py-2 text-sm text-dark hover:bg-surface-light hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/** Main navigation header — logo, dropdowns, CTA, mobile drawer. */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-muted/20 bg-surface">
      <div className="container-brand flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-bold text-dark">
          Grade<span className="text-primary">Spot</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.slice(0, 2).map((l) => (
            <NavItem key={l.href} href={l.href} label={l.label} active={pathname === l.href} />
          ))}
          <Dropdown label="Trainings" items={COURSES} basePath="/trainings" />
          <NavItem
            href="/batches"
            label="Batches"
            active={pathname === "/batches"}
          />
          <Dropdown label="Services" items={SERVICES} basePath="/services" />
          <NavItem
            href="/institutes"
            label="For Institutes"
            active={pathname === "/institutes"}
          />
          <Dropdown
            label="Resources"
            items={[
              { slug: "blog", title: "Blog" },
              { slug: "testimonials", title: "Testimonials" },
              { slug: "faqs", title: "FAQs" },
            ]}
            basePath="/resources"
          />
          {links.slice(2).map((l) => (
            <NavItem key={l.href} href={l.href} label={l.label} active={pathname === l.href} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact">
            <Button size="sm">Start Now</Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <Close size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-muted/20 bg-surface lg:hidden">
          <div className="container-brand flex flex-col py-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/trainings", label: "Trainings" },
              { href: "/batches", label: "Batches" },
              { href: "/services", label: "Services" },
              { href: "/institutes", label: "For Institutes" },
              { href: "/resources", label: "Resources" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-muted/10 py-3 text-sm font-medium text-dark last:border-0 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-3">
              <Button size="sm" className="w-full">
                Start Now
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
