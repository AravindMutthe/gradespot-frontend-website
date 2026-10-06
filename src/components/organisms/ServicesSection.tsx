import {
  Education,
  Code,
  Security,
  Analytics,
} from "@carbon/icons-react";
import type { ReactNode } from "react";
import { ServiceCard } from "@/components/molecules";
import { SERVICES } from "@/lib/mock-data";

const ICONS: Record<string, ReactNode> = {
  "corporate-trainings": <Education size={24} />,
  "web-development": <Code size={24} />,
  "cyber-security": <Security size={24} />,
  "digital-marketing": <Analytics size={24} />,
};

/** Featured services grid — 4 columns desktop, 2 tablet, 1 mobile. */
export function ServicesSection() {
  return (
    <section className="bg-surface">
      <div className="container-brand py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          What we do
        </p>
        <h2 className="mt-2 text-3xl font-bold text-dark">
          Services built for careers and companies
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}
