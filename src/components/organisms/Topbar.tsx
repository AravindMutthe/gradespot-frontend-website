import Link from "next/link";
import { CONTACT } from "@/lib/mock-data";

/* Utility bar — dark strip above the header:
 * location + quick links left, audience note right. */

export function Topbar() {
  return (
    <div className="bg-ink text-[13px] text-white dark:bg-[#05080b]">
      <div className="container-brand flex items-center justify-between gap-[18px] py-[7px]">
        <div className="flex flex-wrap items-center gap-[18px]">
          <span className="hidden opacity-75 sm:inline">
            Hyderabad · {CONTACT.locality.split(",")[0]}
          </span>
          <Link href="/about" className="font-semibold text-white">
            Contact
          </Link>
          <Link href="/verify" className="font-semibold text-white">
            Verify a Certificate
          </Link>
        </div>
        <div className="flex items-center gap-[18px]">
          <Link href="/institutes" className="font-semibold text-white">
            For Institutes
          </Link>
          <span className="hidden opacity-75 lg:inline">
            Training · IT Services · Institute Automation
          </span>
        </div>
      </div>
    </div>
  );
}
