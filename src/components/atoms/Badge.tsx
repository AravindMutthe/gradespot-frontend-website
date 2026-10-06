import type { ReactNode } from "react";

type BadgeTone = "primary" | "accent" | "muted";

const TONES: Record<BadgeTone, string> = {
  primary: "bg-brand/10 text-brand-ink",
  accent: "bg-brand/10 text-brand-ink",
  muted: "bg-ink3/10 text-ink3",
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
