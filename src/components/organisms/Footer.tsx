import Link from "next/link";
import { LogoLinkedin, LogoInstagram, LogoFacebook } from "@carbon/icons-react";
import { CONTACT, SERVICES } from "@/lib/mock-data";

/** Site footer — 4 columns + legal sub-bar. */
export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-brand grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-bold">
            Grade<span className="text-accent-light">Spot</span>
          </p>
          <p className="mt-3 text-sm text-white/70">
            Cybersecurity training institute and IT solutions company in
            Hyderabad.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="hover:text-accent-light">
              <LogoLinkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-accent-light">
              <LogoInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-accent-light">
              <LogoFacebook size={20} />
            </a>
          </div>
        </div>
        <nav aria-label="Company">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Company
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              { href: "/about", label: "About Us" },
              { href: "/trainings", label: "Trainings" },
              { href: "/batches", label: "Batches" },
              { href: "/institutes", label: "For Institutes" },
              { href: "/resources/blog", label: "Blog" },
              { href: "/resources/testimonials", label: "Testimonials" },
              { href: "/resources/faqs", label: "FAQs" },
              { href: "/verify", label: "Certificate Verification" },
              { href: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 hover:text-accent-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Services
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/80 hover:text-accent-light"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>{CONTACT.address}</li>
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-accent-light">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-accent-light"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-brand flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-white/60">
          <p>© 2026 GradeSpot IT Solutions. All rights reserved.</p>
          <p>[Pending: privacy policy & terms links]</p>
        </div>
      </div>
    </footer>
  );
}
