import Link from "next/link";
import type { Metadata } from "next";
import {
  Topbar,
  Navbar,
  Hero,
  ServicesSection,
  TrustBlock,
  StatsRibbon,
  Footer,
} from "@/components/organisms";
import { FaqAccordion, ServiceCard } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { FAQS, TESTIMONIALS, COURSES } from "@/lib/mock-data";
import { Code } from "@carbon/icons-react";

export const metadata: Metadata = {
  title: "GradeSpot IT Solutions — Cybersecurity Training & IT Services, Hyderabad",
  description:
    "GradeSpot IT Solutions: practical cybersecurity, web development, cloud and data-science training plus IT services for businesses in Hyderabad.",
};

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero
        eyebrow="Hyderabad · Classroom & Live Online"
        headline="Build a career in tech — or a tech backbone for your business"
        subcopy="Practical, career-focused training in cybersecurity, web development, cloud and AI — plus web, security and marketing services for companies."
      />
      <ServicesSection />
      <TrustBlock />
      <StatsRibbon />

      {/* Popular courses preview */}
      <section className="bg-surface">
        <div className="container-brand py-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Trainings
              </p>
              <h2 className="mt-2 text-3xl font-bold text-dark">
                Popular courses
              </h2>
            </div>
            <Link href="/trainings">
              <Button variant="ghost">View all courses</Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {COURSES.slice(0, 3).map((c) => (
              <ServiceCard
                key={c.slug}
                icon={<Code size={24} />}
                title={c.title}
                description={c.tagline}
                href={`/trainings/${c.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="bg-surface-light">
        <div className="container-brand py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dark">
            What learners say
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-card border border-muted/20 bg-surface p-6"
              >
                <blockquote className="text-sm text-muted">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold text-dark">{t.name}</p>
                  <p className="text-xs text-muted">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-surface">
        <div className="container-brand max-w-3xl py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            FAQs
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dark">
            Common questions
          </h2>
          <div className="mt-6">
            <FaqAccordion items={FAQS.slice(0, 4)} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/resources/faqs">
              <Button variant="outline">All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary">
        <div className="container-brand flex flex-col items-center gap-6 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">
            Not sure where to start? Talk to a counsellor.
          </h2>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get Free Counselling
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
