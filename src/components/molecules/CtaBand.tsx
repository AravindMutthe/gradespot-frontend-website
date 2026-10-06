"use client";

import type { ReactNode } from "react";
import { CallbackButton } from "@/components/organisms/CallbackModal";

/* CTA band — dark rounded panel. One CTA everywhere:
 * "Get a Callback". */

export interface CtaBandProps {
  title: string;
  text: string;
  ctaLabel?: string;
  children?: ReactNode;
}

export function CtaBand({ title, text, ctaLabel = "Get a Callback" }: CtaBandProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-ink p-9 text-white dark:border dark:border-line">
      <div>
        <h3 className="max-w-2xl text-[clamp(21px,3vw,28px)] font-extrabold text-white">
          {title}
        </h3>
        <p className="mt-1.5 max-w-xl text-[15px] text-white/75">{text}</p>
      </div>
      <CallbackButton size="lg">{ctaLabel}</CallbackButton>
    </div>
  );
}
