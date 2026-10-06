import type { ReactNode } from "react";

type BadgeTone = "primary" | "accent" | "muted";

const TONES: Record<BadgeTone, string> = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
  muted: "bg-muted/10 text-muted",
};

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

/** Small pill tag — e.g. "ISO Certified", "AICTE Approved". */
export function Badge({ children, tone = "primary", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-button px-2.5 py-1 text-xs font-semibold ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
