import Link from "next/link";
import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { COURSES, CATEGORY_LABELS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Courses & Fees — GradeSpot IT Solutions",
  description:
    "GradeSpot courses: syllabus, trainer and fee on every page — Hyderabad classroom + live online.",
};

export default function TrainingsPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link> / Courses
        </p>
        <h1>Courses &amp; Fees</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">
          TODO: one or two sentences introducing your courses. Each course
          gets its own page with syllabus, trainer and price.
        </p>
      </div>

      <section className="py-[26px]">
        <div className="container-brand">
          {/* Category filter chips — landing-page pattern. TODO: wire to real filtering. */}
          <div className="mb-[18px] flex flex-wrap gap-2">
            {["All", ...Object.values(CATEGORY_LABELS)].map((label, i) => (
              <span
                key={label}
                className={`inline-flex items-center rounded-button border px-3.5 py-2 text-[13.5px] font-bold ${
                  i === 0
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-panel text-ink2"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="container-brand grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <div
              key={c.slug}
              className="rounded-card border border-line bg-panel p-[22px]"
            >
              <div className="flex items-start justify-between gap-2.5">
                <h3 className="text-[19px] font-bold">{c.title}</h3>
              </div>
              <p className="mono mt-2 text-[11px] uppercase tracking-[0.06em] text-ink3">
                {CATEGORY_LABELS[c.category]} · {c.level}
              </p>
              <p className="mt-2 text-[15px] text-ink2">
                {c.who.split("—")[0].trim()}
              </p>
              <div className="mt-3.5">
                <span className="mono rounded-lg border border-dashed border-line bg-bg2 px-2.5 py-1.5 text-xs text-ink3">
                  Fee: to be confirmed
                </span>
              </div>
              <Link
                href={`/trainings/${c.slug}`}
                className="mt-3.5 inline-flex items-center gap-1.5 text-[14.5px] font-bold"
              >
                Syllabus &amp; details →
              </Link>
            </div>
          ))}
        </div>
        <div className="container-brand py-10 text-center">
          <p className="text-ink2">
            Completed a course?{" "}
            <Link href="/verify" className="font-bold hover:underline">
              Verify your certificate
            </Link>
          </p>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
