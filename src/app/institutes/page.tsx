import Link from "next/link";
import type { Metadata } from "next";
import { CheckmarkFilled } from "@carbon/icons-react";
import { Topbar, Navbar, Footer } from "@/components/organisms";
import { Button } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

export const metadata: Metadata = {
  title: "For Institutes — GradeSpot Automation",
  description:
    "GradeSpot builds automation products for training institutes — lead management, WhatsApp follow-ups, and admissions funnels.",
};

const OFFERINGS = [
  {
    title: "Lead capture & management",
    description:
      "Website lead forms wired to a single dashboard — no more lost enquiries in WhatsApp chats. [Pending: confirm product scope]",
  },
  {
    title: "WhatsApp automation",
    description:
      "Instant follow-ups, batch reminders, and counsellor alerts over the WhatsApp Cloud API. [Pending: confirm product scope]",
  },
  {
    title: "Admissions funnel websites",
    description:
      "High-converting institute websites with course catalogs, batch schedules, and online enquiry. [Pending: confirm product scope]",
  },
  {
    title: "Batch & certificate operations",
    description:
      "Batch scheduling and verifiable student certificates in one place. [Pending: confirm product scope]",
  },
];

export default function InstitutesPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            B2B · For Institutes
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">
            Automation products for training institutes
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            GradeSpot doesn&apos;t just train students — we build the software
            that runs institutes: admissions, follow-ups, and operations on
            autopilot. [Pending: finalize positioning with the team.]
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg">Talk to Us</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand py-14">
          <h2 className="text-3xl font-bold text-dark">What we build for you</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {OFFERINGS.map((o) => (
              <div
                key={o.title}
                className="rounded-card border border-muted/20 bg-surface p-8"
              >
                <CheckmarkFilled size={24} className="text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-dark">
                  {o.title}
                </h3>
                <p className="mt-2 text-muted">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <h2 className="text-3xl font-bold text-dark">How it works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Discovery call",
                text: "[Pending: describe the onboarding process.]",
              },
              {
                step: "2",
                title: "Setup & branding",
                text: "[Pending: describe setup — domain, branding, data import.]",
              },
              {
                step: "3",
                title: "Go live & support",
                text: "[Pending: describe launch and ongoing support.]",
              },
            ].map((s) => (
              <li
                key={s.step}
                className="rounded-card border border-muted/20 bg-surface p-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-button bg-accent text-lg font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link href="/contact">
              <Button size="lg">Request a Demo</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
