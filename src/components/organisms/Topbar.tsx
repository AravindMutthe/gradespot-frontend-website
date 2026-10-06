import { Time, Phone, Email } from "@carbon/icons-react";
import { CONTACT } from "@/lib/mock-data";

/** Top utility bar — hours, phone, email. */
export function Topbar() {
  return (
    <div className="bg-dark text-white">
      <div className="container-brand flex flex-wrap items-center justify-between gap-2 py-2 text-xs">
        <span className="inline-flex items-center gap-1.5">
          <Time size={14} />
          {CONTACT.hours}
        </span>
        <div className="flex items-center gap-4">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-1.5 hover:text-accent-light"
          >
            <Phone size={14} />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent-light"
          >
            <Email size={14} />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
