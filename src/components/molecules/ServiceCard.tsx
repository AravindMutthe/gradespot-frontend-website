import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@carbon/icons-react";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}

/** Service tile used in the services grid. */
export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-card border border-line/20 bg-panel p-6 transition-shadow hover:shadow-lg"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-button bg-brand/10 text-brand-ink">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink3">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-ink">
        Learn more
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
