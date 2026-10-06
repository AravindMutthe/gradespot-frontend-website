import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { Badge } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { LeadForm } from "./lead-form";
import { CONTACT } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Contact — GradeSpot IT Solutions",
  description:
    "Enquire about GradeSpot courses or request an IT services quote.",
};

export default function ContactPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="bg-bg2">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-bold text-ink">Get in touch</h1>
          <p className="mt-4 max-w-3xl text-lg text-ink3">
            Course enquiry or a project for your business — drop your details
            and we&apos;ll call you back.
          </p>
        </div>
      </section>

      <section className="bg-panel">
        <div className="container-brand grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-card border border-line/20 p-8">
              <LeadForm />
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-card border border-line/20 bg-bg2 p-8">
              <h2 className="text-lg font-semibold text-ink">
                Reach us directly
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="text-ink3">Phone / WhatsApp</span>
                  <p>
                    <a
                      href={CONTACT.phoneHref}
                      className="font-semibold text-brand-ink hover:underline"
                    >
                      {CONTACT.phone}
                    </a>
                    {" · "}
                    <a
                      href={CONTACT.phone2Href}
                      className="font-semibold text-brand-ink hover:underline"
                    >
                      {CONTACT.phone2}
                    </a>
                  </p>
                </li>
                <li>
                  <span className="text-ink3">Email</span>
                  <p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-semibold text-brand-ink hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                    {" · "}
                    <a
                      href={`mailto:${CONTACT.email2}`}
                      className="font-semibold text-brand-ink hover:underline"
                    >
                      {CONTACT.email2}
                    </a>
                  </p>
                </li>
                <li>
                  <span className="text-ink3">Hours</span>
                  <p className="font-medium text-ink">{CONTACT.hours}</p>
                </li>
                <li>
                  <span className="text-ink3">Address</span>
                  <p className="font-medium text-ink">{CONTACT.address}</p>
                </li>
              </ul>
              <div className="mt-6">
                <Badge tone="accent">Dilsukhnagar, Hyderabad</Badge>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
