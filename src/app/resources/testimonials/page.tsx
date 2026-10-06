import type { Metadata } from "next";
import { Topbar, Navbar, Footer } from "@/components/organisms";
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

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Resources · Testimonials
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">
            Learner stories
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            [Pending: replace with real, permissioned testimonials before launch.]
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand grid gap-6 py-14 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-card border border-muted/20 bg-surface p-8"
            >
              <blockquote className="text-muted">“{t.quote}”</blockquote>
              <figcaption className="mt-4">
                <p className="font-semibold text-dark">{t.name}</p>
                <p className="text-xs text-muted">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
