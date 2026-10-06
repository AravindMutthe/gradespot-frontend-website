import Link from "next/link";

export interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
}

/** Single navigation link with active-state underline. */
export function NavItem({ href, label, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        active ? "text-brand-ink" : "text-ink hover:text-brand-ink"
      }`}
    >
      {label}
      {active && (
        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-button bg-brand" />
      )}
    </Link>
  );
}
