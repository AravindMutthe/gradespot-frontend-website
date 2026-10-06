import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { TESTIMONIALS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Testimonials — GradeSpot IT Solutions",
  description: "What GradeSpot learners and clients say.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-bg2">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
            Resources · Testimonials
          </p>
          <h1 className="mt-2 text-4xl font-bold text-ink">
            Learner stories
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-ink3">
            [Pending: replace with real, permissioned testimonials before launch.]
          </p>
        </div>
      </section>

      <section className="bg-panel">
        <div className="container-brand grid gap-6 py-14 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-card border border-line/20 bg-panel p-8"
            >
              <blockquote className="text-ink3">“{t.quote}”</blockquote>
              <figcaption className="mt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink3">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
