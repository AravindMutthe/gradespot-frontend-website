"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "@carbon/icons-react";
import { Button } from "@/components/atoms";
import { CONTACT } from "@/lib/mock-data";

export interface HeroProps {
  eyebrow: string;
  headline: string;
  subcopy: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/** Hero banner — eyebrow, headline, sub-copy, CTAs, quick-call badge. */
export function Hero({
  eyebrow,
  headline,
  subcopy,
  primaryCta = { label: "Start a Project", href: "/contact" },
  secondaryCta = { label: "Explore Courses", href: "/trainings" },
}: HeroProps) {
  return (
    <section className="bg-surface-light">
      <div className="container-brand grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-dark md:text-5xl">
            {headline}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{subcopy}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryCta.href}>
              <Button size="lg">{primaryCta.label}</Button>
            </Link>
            <Link href={secondaryCta.href}>
              <Button size="lg" variant="outline">
                {secondaryCta.label}
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="rounded-card border border-muted/20 bg-surface p-8 text-center shadow-sm">
            <p className="text-sm text-muted">[Pending: hero visual / image]</p>
            <a
              href={CONTACT.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-button bg-accent px-5 py-3 font-semibold text-white hover:bg-accent-light"
            >
              <Phone size={18} />
              {CONTACT.phone}
            </a>
            <p className="mt-2 text-xs text-muted">Talk to a counsellor now</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
