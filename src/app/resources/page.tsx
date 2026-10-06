import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { ServiceCard } from "@/components/molecules";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { Blog, Star, Help } from "@carbon/icons-react";

export const metadata: Metadata = {
  title: "Resources — GradeSpot IT Solutions",
  description:
    "GradeSpot resources: blog articles, student testimonials, and frequently asked questions.",
};

const HUB = [
  {
    icon: <Blog size={24} />,
    title: "Blog",
    description: "Career roadmaps, tech explainers, and industry notes from our trainers.",
    href: "/resources/blog",
  },
  {
    icon: <Star size={24} />,
    title: "Testimonials",
    description: "What our learners and corporate clients say about GradeSpot.",
    href: "/resources/testimonials",
  },
  {
    icon: <Help size={24} />,
    title: "FAQs",
    description: "Admissions, batches, placements, and certificates — answered.",
    href: "/resources/faqs",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-bg2">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
            Resources
          </p>
          <h1 className="mt-2 text-4xl font-bold text-ink">
            Learn, decide, verify
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-ink3">
            Everything around the classroom: reading material, social proof,
            and answers.
          </p>
        </div>
      </section>

      <section className="bg-panel">
        <div className="container-brand grid gap-6 py-14 md:grid-cols-3">
          {HUB.map((h) => (
            <ServiceCard
              key={h.href}
              icon={h.icon}
              title={h.title}
              description={h.description}
              href={h.href}
            />
          ))}
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
