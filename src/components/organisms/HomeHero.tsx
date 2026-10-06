"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WhatsAppDemo } from "@/components/molecules/WhatsAppDemo";
import { CallbackButton } from "@/components/organisms/CallbackModal";
import { Button } from "@/components/atoms";

/* Home hero — split-audience hero: headline, audience pill switcher,
 * single repeated CTA, WhatsApp demo widget, trust grid.
 * TODO: replace all placeholder copy below with your own. */

type Audience = "students" | "businesses" | "institutes";

const COPY: Record<
  Audience,
  {
    tab: string;
    headline: React.ReactNode;
    sub: string;
    secondary: string;
    secondaryHref: string;
    note: string;
    demo: boolean;
  }
> = {
  students: {
    tab: "I'm a Student",
    headline: (
      <>
        Your headline here <span className="text-brand">with an accent</span>.
      </>
    ),
    sub: "Your description here — what students get, in one or two sentences.",
    secondary: "See Courses & Fees",
    secondaryHref: "/trainings",
    note: "TODO: supporting note for the student audience.",
    demo: true,
  },
  businesses: {
    tab: "I'm a Business",
    headline: (
      <>
        Your headline here <span className="text-brand">with an accent</span>.
      </>
    ),
    sub: "Your description here — what businesses get, in one or two sentences.",
    secondary: "See IT Services",
    secondaryHref: "/services",
    note: "TODO: supporting note for the business audience.",
    demo: false,
  },
  institutes: {
    tab: "I Run an Institute",
    headline: (
      <>
        Your headline here <span className="text-brand">with an accent</span>.
      </>
    ),
    sub: "Your description here — what institute owners get, in one or two sentences.",
    secondary: "See the Products",
    secondaryHref: "/institutes",
    note: "TODO: supporting note for the institute audience.",
    demo: true,
  },
};

const TRUST = [
  { b: "Your trust point here", s: "TODO: one-line supporting detail." },
  { b: "Your trust point here", s: "TODO: one-line supporting detail." },
  { b: "Your trust point here", s: "TODO: one-line supporting detail." },
  { b: "Your trust point here", s: "TODO: one-line supporting detail." },
];

export function HomeHero() {
  const [aud, setAud] = useState<Audience>("students");
  const c = COPY[aud];

  return (
    <section className="bg-[radial-gradient(900px_420px_at_85%_-10%,color-mix(in_srgb,var(--brand)_13%,transparent),transparent_60%),var(--bg)] pb-[50px] pt-[58px]">
      <div className="container-brand">
        {/* Status pill — landing-page pattern. TODO: your live status line. */}
        <p className="mb-6 inline-flex items-center gap-2 rounded-button border border-line bg-panel px-3 py-[7px] text-[13px] font-bold">
          <span aria-hidden className="h-2 w-2 rounded-full bg-[#22c55e]" />
          TODO: status line — e.g. admissions open, new batch, etc.
        </p>

        <div
          role="tablist"
          aria-label="Choose your audience"
          className="mb-[26px] inline-flex flex-wrap gap-1 rounded-button border border-line bg-bg2 p-1"
        >
          {(Object.keys(COPY) as Audience[]).map((a) => (
            <button
              key={a}
              role="tab"
              aria-selected={aud === a}
              type="button"
              onClick={() => setAud(a)}
              className={`rounded-button px-4 py-2 font-body text-sm font-bold ${
                aud === a
                  ? "bg-panel text-ink shadow-[0_2px_8px_rgba(16,24,40,0.12)]"
                  : "bg-transparent text-ink2"
              }`}
            >
              {COPY[a].tab}
            </button>
          ))}
        </div>

        <div className="grid items-start gap-11 lg:grid-cols-[1.25fr_0.85fr]">
          <motion.div
            key={aud}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="max-w-[820px]">{c.headline}</h1>
            <p className="mt-4 max-w-[640px] text-[18px] text-ink2">{c.sub}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <CallbackButton size="lg">Get a Callback</CallbackButton>
              <Link href={c.secondaryHref}>
                <Button size="lg" variant="ghost">
                  {c.secondary}
                </Button>
              </Link>
            </div>
            <p className="mt-3.5 text-[13px] text-ink3">{c.note}</p>
          </motion.div>
          {c.demo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <WhatsAppDemo />
            </motion.div>
          )}
        </div>

        <div className="mt-[38px] grid gap-4 border-t border-line pt-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t, i) => (
            <div key={i}>
              <b className="font-display block text-[15.5px]">{t.b}</b>
              <span className="text-[13px] text-ink3">{t.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
