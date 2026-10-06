import type { Metadata } from "next";
import { Topbar, Navbar, Footer } from "@/components/organisms";
import { ServiceCard } from "@/components/molecules";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { SERVICES } from "@/lib/mock-data";
import {
  Education,
  Code,
  Security,
  Analytics,
} from "@carbon/icons-react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Digital Services — GradeSpot IT Solutions",
  description:
    "GradeSpot IT services: corporate trainings, web development, cyber security, digital marketing.",
};

const ICONS: Record<string, ReactNode> = {
  "corporate-trainings": <Education size={24} />,
  "web-development": <Code size={24} />,
  "cyber-security": <Security size={24} />,
  "digital-marketing": <Analytics size={24} />,
};

export default function ServicesPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Digital Services
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">
            IT services for growing businesses
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            Training, building, securing, and marketing — one partner for
            your company&apos;s tech needs.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand grid gap-6 py-14 md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              icon={ICONS[s.slug]}
              title={s.title}
              description={s.summary}
              href={`/services/${s.slug}`}
            />
          ))}
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
