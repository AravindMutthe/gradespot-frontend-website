import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
}

/** Icon-only button (accessible name via aria-label). */
export function IconButton({
  children,
  label,
  className = "",
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-button text-dark transition-colors hover:bg-dark/5 disabled:opacity-50 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
