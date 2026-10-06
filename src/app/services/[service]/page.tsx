import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckmarkFilled } from "@carbon/icons-react";
import {
  Topbar,
  Navbar,
  Footer,
  MobileTabBar,
  CallbackButton,
} from "@/components/organisms";
import { CtaBand } from "@/components/molecules";
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

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link>
          {" / "}
          <Link href="/services" className="text-ink3">IT Services</Link>
          {" / "}
          {found.title}
        </p>
        <h1>{found.title}</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">{found.summary}</p>
        <div className="mt-7">
          <CallbackButton size="lg">Request a Quote</CallbackButton>
        </div>
      </div>

      <section className="py-[30px]">
        <div className="container-brand grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl">What&apos;s included</h2>
            <ul className="mt-6 space-y-3">
              {found.offerings.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckmarkFilled size={20} className="mt-0.5 shrink-0 text-ok" />
                  <span className="text-ink">{o}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl">How we work</h2>
            <p className="mt-3 text-ink2">
              Scope call first, quote second — fixed scope, fixed price in
              writing. [Pending: engagement process details to be finalized
              with the team.]
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-card border border-line bg-bg2 p-8">
              <h3 className="text-lg font-bold">
                Talk to us about {found.title.toLowerCase()}
              </h3>
              <p className="mt-2 text-sm text-ink2">
                Services are quoted per project — tell us the scope and
                we&apos;ll call back with a fixed quote.
              </p>
              <div className="mt-6">
                <CallbackButton className="w-full justify-center">
                  Request a Quote
                </CallbackButton>
              </div>
            </div>
          </aside>
        </div>
        <div className="container-brand mt-[30px]">
          <CtaBand
            title="Have a project in mind?"
            text="Tell us what you're building or fixing. We'll call back with scope and a quote — no obligation."
            ctaLabel="Request a Quote Call"
          />
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
