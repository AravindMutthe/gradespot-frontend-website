import Link from "next/link";
import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar, CallbackButton } from "@/components/organisms";
import { Chip } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { COURSES } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Pricing — GradeSpot IT Solutions",
  description:
    "GradeSpot pricing in the open: published course fees for students, project quotes for businesses, setup + monthly for institutes.",
};

const TIERS = [
  {
    chip: "Students",
    title: "Course fees",
    body: "Every course page carries its fee and installment options. The pattern that works globally: OffSec publishes $2,749/yr for individuals while gating enterprise pricing.",
    points: [
      "Fee per course — on the course page",
      "Installments available",
      "No charges beyond the published fee",
    ],
    cta: { label: "Browse Courses", href: "/trainings" as const },
  },
  {
    chip: "Businesses",
    title: "Project quotes",
    body: "IT services are scoped per project, so pricing is a conversation — the same gate OffSec puts on “Learn Enterprise” (“Connect with sales”).",
    points: [
      "Scope call first, quote second",
      "Fixed scope, fixed price in writing",
      "Corporate training quoted per batch",
    ],
    cta: { label: "Request a Quote" },
  },
  {
    chip: "Institutes",
    title: "Setup + monthly",
    body: "Small paid pilot, then a monthly that only continues while it earns. Draft tiers discussed start in the same ballpark as software-only LMS pricing — final numbers to be confirmed.",
    points: [
      "One-time setup & installation",
      "Monthly per product, bundle discount",
      "Cancel when it stops paying for itself",
    ],
    cta: { label: "See the Products", href: "/institutes" as const },
  },
];

export default function PricingPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link> / Pricing
        </p>
        <h1>Pricing, in the open</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">
          The researched pricing split: course fees published for students,
          project quotes for businesses, setup + monthly for institutes.
          Amounts land here the moment they are confirmed — nothing invented.
        </p>
      </div>

      <section className="py-[26px]">
        <div className="container-brand">
          <div className="grid gap-[18px] md:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.title}
                className="rounded-card border border-line bg-panel p-[22px]"
              >
                <Chip tone="brand">{t.chip}</Chip>
                <h3 className="mt-3 text-[19px] font-bold">{t.title}</h3>
                <p className="mt-2 text-[15px] text-ink2">{t.body}</p>
                <ul className="mt-3.5">
                  {t.points.map((p) => (
                    <li
                      key={p}
                      className="relative border-b border-dashed border-line py-1.5 pl-[26px] text-[14.5px] text-ink2 last:border-0"
                    >
                      <span
                        aria-hidden
                        className="absolute left-[2px] top-[12px] h-[7px] w-3 -rotate-45 border-b-[2.5px] border-l-[2.5px] border-ok"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  {"href" in t.cta && t.cta.href ? (
                    <Link href={t.cta.href}>
                      <span className="inline-flex items-center justify-center gap-2 rounded-button border-[1.5px] border-line bg-transparent px-[15px] py-2 text-[13.5px] font-bold text-ink hover:border-ink3">
                        {t.cta.label}
                      </span>
                    </Link>
                  ) : (
                    <CallbackButton size="sm" variant="ghost">
                      {t.cta.label}
                    </CallbackButton>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Student course fee table — slots ready for launch amounts */}
          <h2 className="mt-12 text-[26px]">Student course fees</h2>
          <p className="mt-2 max-w-[720px] text-[15px] text-ink3">
            The fee list every course page links to. Amounts slot in at launch.
          </p>
          <div className="mt-5 overflow-x-auto rounded-card">
            <table className="w-full border-collapse bg-panel text-sm">
              <thead>
                <tr className="bg-bg2 text-left">
                  <th className="border-b border-line px-3.5 py-3 font-display text-[13px]">
                    Course
                  </th>
                  <th className="border-b border-line px-3.5 py-3 font-display text-[13px]">
                    Fee
                  </th>
                  <th className="border-b border-line px-3.5 py-3 font-display text-[13px]">
                    Installments
                  </th>
                </tr>
              </thead>
              <tbody>
                {COURSES.map((c) => (
                  <tr key={c.slug}>
                    <td className="border-b border-line px-3.5 py-3 font-semibold text-ink">
                      <Link href={`/trainings/${c.slug}`}>{c.title}</Link>
                    </td>
                    <td className="border-b border-line px-3.5 py-3 text-ink2">
                      <span className="mono rounded-lg border border-dashed border-line bg-bg2 px-2.5 py-1.5 text-xs text-ink3">
                        To be confirmed
                      </span>
                    </td>
                    <td className="border-b border-line px-3.5 py-3 text-ink2">
                      To be confirmed
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-[22px] rounded-card border border-line bg-brand-soft p-[18px] text-[14.5px] text-ink2">
            <b className="text-ink">Open item:</b> final course fees,
            installment terms, and institute tier amounts are confirmed before
            launch. This page is structured so they drop straight in — the
            sitemap doesn&apos;t change when the numbers do.
          </div>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
