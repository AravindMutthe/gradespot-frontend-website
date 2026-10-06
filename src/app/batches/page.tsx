import Link from "next/link";
import type { Metadata } from "next";
import { Topbar, Navbar, Footer } from "@/components/organisms";
import { Button, Badge } from "@/components/atoms";
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

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Admissions
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">
            Upcoming batches
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            Classroom batches in Dilsukhnagar, Hyderabad and live-online
            batches. [Pending: confirm dates and timings with the team before
            publishing.]
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand py-14">
          <div className="overflow-x-auto rounded-card border border-muted/20">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="bg-surface-light text-xs uppercase tracking-wide text-muted">
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
                      className="border-t border-muted/10 hover:bg-surface-light"
                    >
                      <td className="px-6 py-4">
                        <Link
                          href={`/trainings/${b.courseSlug}`}
                          className="font-semibold text-primary hover:underline"
                        >
                          {c.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-muted">{c.category}</td>
                      <td className="px-6 py-4 text-dark">{b.startDate}</td>
                      <td className="px-6 py-4 text-dark">{b.timing}</td>
                      <td className="px-6 py-4 text-dark">{b.mode}</td>
                      <td className="px-6 py-4">
                        <Badge tone="accent">{b.status}</Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-10 rounded-card bg-primary p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Reserve your seat
            </h2>
            <p className="mt-2 text-white/80">
              Batch dates are confirmed on enquiry — talk to a counsellor for
              the exact schedule.
            </p>
            <Link href="/contact" className="mt-6 inline-block">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
