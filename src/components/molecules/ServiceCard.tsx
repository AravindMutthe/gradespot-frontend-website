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
      className="group flex flex-col rounded-card border border-muted/20 bg-surface p-6 transition-shadow hover:shadow-lg"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-button bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-dark">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Learn more
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
