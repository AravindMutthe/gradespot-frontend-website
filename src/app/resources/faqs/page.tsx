import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { FaqAccordion } from "@/components/molecules";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { FAQS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "FAQs — GradeSpot IT Solutions",
  description:
    "Frequently asked questions: admissions, batches, placements, certificates.",
};

export default function FaqsPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-bg2">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
            Resources · FAQs
          </p>
          <h1 className="mt-2 text-4xl font-bold text-ink">
            Frequently asked questions
          </h1>
        </div>
      </section>

      <section className="bg-panel">
        <div className="container-brand max-w-3xl py-14">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
