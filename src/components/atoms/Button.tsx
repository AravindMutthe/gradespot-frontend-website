import type { ButtonHTMLAttributes, ReactNode } from "react";

/* ---------------------------------------------------------------------------
 * Base Button — researched spec (Static_Website.html):
 *   pill (999px), weight 700, primary = orange #e85d0c / white text,
 *   hover #c24e08 + soft brand shadow, ghost = transparent + 1.5px border.
 *   sizes: sm 13.5px/8px 15px · md 15px/11px 20px · lg 16px/14px 26px.
 * whatsapp variant: #25d366.
 * ------------------------------------------------------------------------- */

export type ButtonVariant = "primary" | "ghost" | "outline" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-ink hover:shadow-[0_6px_18px_color-mix(in_srgb,var(--brand)_40%,transparent)]",
  ghost:
    "bg-transparent text-ink border-[1.5px] border-line hover:border-ink3",
  outline: "border border-brand text-brand-ink hover:bg-brand hover:text-white",
  whatsapp: "bg-wa text-white hover:brightness-95",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-[15px] py-2 text-[13.5px]",
  md: "px-5 py-[11px] text-[15px]",
  lg: "px-[26px] py-[14px] text-base",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

/** Base Button — Primary / Ghost / Outline / WhatsApp × SM / MD / LG. */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-button font-bold transition-all duration-150 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
