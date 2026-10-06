import Link from "next/link";
import type { Metadata } from "next";
import { Topbar, Navbar, Footer } from "@/components/organisms";
import { ServiceCard } from "@/components/molecules";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { COURSES } from "@/lib/mock-data";
import { Education } from "@carbon/icons-react";

export const metadata: Metadata = {
  title: "Trainings — GradeSpot IT Solutions",
  description:
    "Career-focused IT training: cybersecurity, web development, cloud & DevOps, data science, Python. Classroom and live-online batches in Hyderabad.",
};

export default function TrainingsPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Trainings / Academic
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">
            Courses that get you hired
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            Hands-on batches with labs, projects, and counsellor guidance —
            in our Hyderabad classroom or live online.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand grid gap-6 py-14 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <ServiceCard
              key={c.slug}
              icon={<Education size={24} />}
              title={c.title}
              description={`${c.tagline} · ${c.duration} · ${c.level}`}
              href={`/trainings/${c.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-surface-light">
        <div className="container-brand py-10 text-center">
          <p className="text-muted">
            Completed a course?{" "}
            <Link href="/verify" className="font-semibold text-primary hover:underline">
              Verify your certificate
            </Link>
          </p>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
