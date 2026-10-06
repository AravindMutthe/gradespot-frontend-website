import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckmarkFilled } from "@carbon/icons-react";
import { Topbar, Navbar, Footer } from "@/components/organisms";
import { Button, Badge } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { COURSES } from "@/lib/mock-data";

export function generateStaticParams() {
  return COURSES.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const { course } = await params;
  const found = COURSES.find((c) => c.slug === course);
  return {
    title: found ? `${found.title} — GradeSpot Trainings` : "Course — GradeSpot",
    description: found?.tagline,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const found = COURSES.find((c) => c.slug === course);
  if (!found) notFound();

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <div className="flex flex-wrap gap-2">
            <Badge>{found.level}</Badge>
            <Badge tone="accent">{found.duration}</Badge>
            <Badge tone="muted">{found.mode}</Badge>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-dark">{found.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">{found.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Enquire Now</Button>
            </Link>
            <Link href="/trainings">
              <Button size="lg" variant="outline">
                All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-dark">What you&apos;ll learn</h2>
            <ul className="mt-6 space-y-3">
              {found.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckmarkFilled size={20} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-dark">{h}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-bold text-dark">Curriculum</h2>
            <p className="mt-3 text-muted">
              [Pending: full module-by-module syllabus for {found.title}.]
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-card border border-muted/20 bg-surface-light p-8">
              <h3 className="text-lg font-semibold text-dark">Course facts</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">Duration</dt>
                  <dd className="font-medium text-dark">{found.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Mode</dt>
                  <dd className="font-medium text-dark">{found.mode}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Level</dt>
                  <dd className="font-medium text-dark">{found.level}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Certification</dt>
                  <dd className="font-medium text-dark">[Pending]</dd>
                </div>
              </dl>
              <Link href="/contact" className="mt-6 block">
                <Button className="w-full">Get Course Details</Button>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
