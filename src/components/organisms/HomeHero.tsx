"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WhatsAppDemo } from "@/components/molecules/WhatsAppDemo";
import { CallbackButton } from "@/components/organisms/CallbackModal";
import { Button } from "@/components/atoms";

/* Home hero — researched split-audience hero: one headline, audience pill
 * switcher, single repeated CTA, WhatsApp demo as the "live demo", trust grid.
 * Copy swaps per audience; the demo shows for students/institutes only. */

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
        Get job-ready in <span className="text-brand">cybersecurity &amp; IT</span>,
        trained in Hyderabad.
      </>
    ),
    sub: "Live trainer-led batches, hands-on labs, and a certificate anyone can verify online — with every course fee printed on its page at launch, never hidden behind a phone call.",
    secondary: "See Courses & Fees",
    secondaryHref: "/trainings",
    note: "One button, everywhere on this site — the research says a single repeated CTA converts better than five competing ones.",
    demo: true,
  },
  businesses: {
    tab: "I'm a Business",
    headline: (
      <>
        Web, security &amp; marketing that <span className="text-brand">brings enquiries</span> —
        built by practitioners.
      </>
    ),
    sub: "The IT solutions side of GradeSpot: websites, security services and digital marketing for businesses that live on leads.",
    secondary: "See IT Services",
    secondaryHref: "/services",
    note: "Services sit inside the Businesses tab — the OffSec pattern: products in the main nav, services in the business track.",
    demo: false,
  },
  institutes: {
    tab: "I Run an Institute",
    headline: (
      <>
        Your enquiries answered in <span className="text-brand">~4 seconds</span>, even at
        midnight.
      </>
    ),
    sub: "WhatsApp lead automation, a piracy-resistant video LMS and crash-proof labs — designed for our own institute first, now being readied for institutes like yours.",
    secondary: "See the Products",
    secondaryHref: "/institutes",
    note: "This hero is the pattern the research calls “website as live demo” — the chat beside you is a prototype of Product 1's answers.",
    demo: true,
  },
};

const TRUST = [
  {
    b: "Fees in the open",
    s: "Course fees print on the page at launch — no callback hostage pricing",
  },
  {
    b: "Replies in seconds",
    s: "The planned WhatsApp engine answers enquiries ~4 seconds in",
  },
  {
    b: "Verifiable certificates",
    s: "Every certificate checks out on the Verify page",
  },
  {
    b: "Pilot #1 is us",
    s: "GradeSpot is the first pilot for every product, before it's sold to anyone",
  },
];

export function HomeHero() {
  const [aud, setAud] = useState<Audience>("students");
  const c = COPY[aud];

  return (
    <section className="bg-[radial-gradient(900px_420px_at_85%_-10%,color-mix(in_srgb,var(--brand)_13%,transparent),transparent_60%),var(--bg)] pb-[50px] pt-[58px]">
      <div className="container-brand">
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
          {TRUST.map((t) => (
            <div key={t.b}>
              <b className="font-display block text-[15.5px]">{t.b}</b>
              <span className="text-[13px] text-ink3">{t.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
