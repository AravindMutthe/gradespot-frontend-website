import type { ReactNode } from "react";

/* Chip — pill label. */

export interface ChipProps {
  children: ReactNode;
  tone?: "default" | "brand";
  className?: string;
}

export function Chip({ children, tone = "default", className = "" }: ChipProps) {
  const tones = {
    default: "bg-bg2 border-line text-ink2",
    brand: "bg-brand-soft border-brand/30 text-brand-ink",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-button border px-2.5 py-1 text-xs font-bold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
