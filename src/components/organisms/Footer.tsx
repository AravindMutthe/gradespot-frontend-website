import Link from "next/link";
import { LogoLinkedin, LogoInstagram, LogoFacebook } from "@carbon/icons-react";
import { CONTACT, SERVICES, BRAND } from "@/lib/mock-data";

/* Site footer — 4-column layout + legal sub-bar. */

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg2">
      <div className="container-brand grid gap-7 py-11 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label="GradeSpot home">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[9px] bg-brand font-display text-[17px] font-extrabold text-white">
              G
            </span>
            <span className="font-display text-[21px] font-extrabold text-ink">
              {BRAND.short}
            </span>
          </Link>
          <p className="mt-3 text-sm text-ink2">
            Training institute, IT services company, and institute-automation
            products — one brand, three audiences. {CONTACT.locality}.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="text-ink2 hover:text-brand-ink">
              <LogoLinkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-ink2 hover:text-brand-ink">
              <LogoInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-ink2 hover:text-brand-ink">
              <LogoFacebook size={20} />
            </a>
          </div>
        </div>
        <nav aria-label="Students">
          <p className="text-sm font-bold uppercase tracking-wide text-ink">
            Students
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {[
              { href: "/trainings", label: "Courses & Fees" },
              { href: "/pricing", label: "Pricing" },
              { href: "/verify", label: "Verify a Certificate" },
              { href: "/batches", label: "Batches" },
              { href: "/about", label: "About Us" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-[3px] text-ink2 hover:text-brand-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Businesses">
          <p className="text-sm font-bold uppercase tracking-wide text-ink">
            Businesses
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block py-[3px] text-ink2 hover:text-brand-ink"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="For Institutes">
          <p className="text-sm font-bold uppercase tracking-wide text-ink">
            For Institutes
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {[
              { href: "/institutes", label: "For Institutes" },
              { href: "/sitemap", label: "Site Map" },
            ].map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="block py-[3px] text-ink2 hover:text-brand-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-brand grid gap-4 py-6 text-sm text-ink2 md:grid-cols-2">
          <div>
            <p className="font-bold text-ink">Get in touch</p>
            <ul className="mt-2 space-y-1">
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                {" · "}
                <a href={CONTACT.phone2Href}>{CONTACT.phone2}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                {" · "}
                <a href={`mailto:${CONTACT.email2}`}>{CONTACT.email2}</a>
              </li>
              <li>{CONTACT.address}</li>
              <li>Office hours {CONTACT.hours}</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-3 md:items-end">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-button bg-wa px-5 py-2.5 text-[15px] font-bold text-white hover:brightness-95"
            >
              Chat on WhatsApp
            </a>
            <p className="text-[13px] text-ink3">
              © 2026 GradeSpot IT Solutions. All rights reserved. [Pending:
              privacy policy &amp; terms links]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
