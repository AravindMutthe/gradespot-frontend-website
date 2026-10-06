import type { Metadata } from "next";
import Link from "next/link";
import { Topbar, Navbar, Footer, MobileTabBar, CallbackButton } from "@/components/organisms";
import { CtaBand } from "@/components/molecules";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { SERVICES } from "@/lib/mock-data";
import { Code, Security, Analytics, Education } from "@carbon/icons-react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "IT Services — GradeSpot IT Solutions",
  description:
    "GradeSpot IT services for businesses: web development, cybersecurity services, digital marketing, corporate training. Project-based, quote-gated.",
};

const ICONS: Record<string, ReactNode> = {
  "web-development": <Code size={24} />,
  "cyber-security": <Security size={24} />,
  "digital-marketing": <Analytics size={24} />,
  "corporate-training": <Education size={24} />,
};

export default function ServicesPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link> / Businesses / IT Services
        </p>
        <h1>IT Services for Businesses</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">
          The software &amp; IT solutions side of the company. Project-based,
          quote-gated — the standard pattern: publish training prices, gate
          services quotes.
        </p>
      </div>

      <section className="py-[26px]">
        <div className="container-brand grid gap-[18px] md:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              className="rounded-card border border-line bg-panel p-[22px]"
            >
              <span className="text-brand">{ICONS[s.slug]}</span>
              <h3 className="mt-3 text-[19px] font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] text-ink2">{s.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <CallbackButton size="sm" variant="ghost">
                  Request a Quote
                </CallbackButton>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center px-1 py-2 text-[14.5px] font-bold"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="container-brand mt-[30px]">
          <CtaBand
            title="Have a project in mind?"
            text="Tell us what you're building or fixing. We'll call back with scope and a quote — no obligation."
            ctaLabel="Request a Quote Call"
          />
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
