import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

/** Labeled form input with inline validation message. */
export function Input({ id, label, error, className = "", ...rest }: InputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-dark"
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-button border bg-surface px-4 py-2.5 text-dark placeholder:text-muted/70 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-200"
            : "border-muted/40 focus:border-primary focus:ring-primary/20"
        }`}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
