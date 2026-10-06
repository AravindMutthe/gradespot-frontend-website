import type { Metadata } from "next";
import { Topbar, Navbar, Footer } from "@/components/organisms";
import { TeamCard } from "@/components/molecules";
import { Badge } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { TEAM, ABOUT, WHY_CHOOSE } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "About Us — GradeSpot IT Solutions",
  description:
    "About GradeSpot IT Solutions: cybersecurity training institute and IT services company in Hyderabad.",
};

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            About us
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">
            Practical tech education, built for careers
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">{ABOUT.story}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>ISO 9001:2015 Certified</Badge>
            <Badge tone="accent">AICTE Internship Approved</Badge>
            <Badge tone="muted">9+ Years of Experience</Badge>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand grid gap-6 py-14 md:grid-cols-2">
          <div className="rounded-card border border-muted/20 p-8">
            <h2 className="text-2xl font-bold text-dark">Our mission</h2>
            <p className="mt-3 text-muted">{ABOUT.mission}</p>
          </div>
          <div className="rounded-card border border-muted/20 p-8">
            <h2 className="text-2xl font-bold text-dark">Our vision</h2>
            <p className="mt-3 text-muted">{ABOUT.vision}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Leadership
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dark">Meet the team</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <TeamCard key={m.role} name={m.name} role={m.role} bio={m.bio} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Why choose us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dark">
            The GradeSpot advantage
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <li
                key={w}
                className="rounded-card border border-muted/20 bg-surface-light p-5 text-dark"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
