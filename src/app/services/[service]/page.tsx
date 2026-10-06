import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckmarkFilled } from "@carbon/icons-react";
import { Topbar, Navbar, Footer } from "@/components/organisms";
import { Button } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { SERVICES } from "@/lib/mock-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const found = SERVICES.find((s) => s.slug === service);
  return {
    title: found ? `${found.title} — GradeSpot Services` : "Service — GradeSpot",
    description: found?.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const found = SERVICES.find((s) => s.slug === service);
  if (!found) notFound();

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Services
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">{found.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">{found.summary}</p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg">Request a Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-dark">What&apos;s included</h2>
            <ul className="mt-6 space-y-3">
              {found.offerings.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckmarkFilled size={20} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-dark">{o}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-bold text-dark">How we work</h2>
            <p className="mt-3 text-muted">
              [Pending: engagement process — discovery, proposal, delivery,
              support — to be finalized with the team.]
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-card border border-muted/20 bg-surface-light p-8">
              <h3 className="text-lg font-semibold text-dark">
                Talk to us about {found.title.toLowerCase()}
              </h3>
              <p className="mt-2 text-sm text-muted">
                [Pending: service-specific pitch paragraph.]
              </p>
              <Link href="/contact" className="mt-6 block">
                <Button className="w-full">Contact Sales</Button>
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
