import Link from "next/link";
import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar, CallbackButton } from "@/components/organisms";
import { Badge } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { BATCHES, COURSES, CATEGORY_LABELS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Upcoming Batches — GradeSpot IT Solutions",
  description:
    "Upcoming GradeSpot course batches in Hyderabad and online — schedules, timings, and admissions.",
};

function courseTitle(slug: string): { title: string; category: string } {
  const c = COURSES.find((x) => x.slug === slug);
  return {
    title: c?.title ?? slug,
    category: c ? CATEGORY_LABELS[c.category] : "",
  };
}

export default function BatchesPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-bg2">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
            Admissions
          </p>
          <h1 className="mt-2 text-4xl font-bold text-ink">
            Upcoming batches
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-ink3">
            Classroom batches in Dilsukhnagar, Hyderabad and live-online
            batches. [Pending: confirm dates and timings with the team before
            publishing.]
          </p>
        </div>
      </section>

      <section className="bg-panel">
        <div className="container-brand py-14">
          <div className="overflow-x-auto rounded-card border border-line/20">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="bg-bg2 text-xs uppercase tracking-wide text-ink3">
                  <th className="px-6 py-4 font-semibold">Course</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Starts</th>
                  <th className="px-6 py-4 font-semibold">Timing</th>
                  <th className="px-6 py-4 font-semibold">Mode</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {BATCHES.map((b) => {
                  const c = courseTitle(b.courseSlug);
                  return (
                    <tr
                      key={b.courseSlug}
                      className="border-t border-line/10 hover:bg-bg2"
                    >
                      <td className="px-6 py-4">
                        <Link
                          href={`/trainings/${b.courseSlug}`}
                          className="font-semibold text-brand-ink hover:underline"
                        >
                          {c.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-ink3">{c.category}</td>
                      <td className="px-6 py-4 text-ink">{b.startDate}</td>
                      <td className="px-6 py-4 text-ink">{b.timing}</td>
                      <td className="px-6 py-4 text-ink">{b.mode}</td>
                      <td className="px-6 py-4">
                        <Badge tone="accent">{b.status}</Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-10 rounded-card bg-brand p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Reserve your seat
            </h2>
            <p className="mt-2 text-white/80">
              Batch dates are confirmed on enquiry — talk to a counsellor for
              the exact schedule.
            </p>
            <div className="mt-6 inline-block">
              <CallbackButton
                size="lg"
                className="border border-white bg-transparent text-white hover:bg-white hover:text-brand-ink"
              >
                Get a Callback
              </CallbackButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
