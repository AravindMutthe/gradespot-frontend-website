import type { Metadata } from "next";
import { Topbar, Navbar, Footer } from "@/components/organisms";
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

      <section className="bg-surface-light">
        <div className="container-brand py-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-bold text-dark">Get in touch</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            Course enquiry or a project for your business — drop your details
            and we&apos;ll call you back.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-brand grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-card border border-muted/20 p-8">
              <LeadForm />
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-card border border-muted/20 bg-surface-light p-8">
              <h2 className="text-lg font-semibold text-dark">
                Reach us directly
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="text-muted">Phone / WhatsApp</span>
                  <p>
                    <a
                      href={CONTACT.phoneHref}
                      className="font-semibold text-primary hover:underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </p>
                </li>
                <li>
                  <span className="text-muted">Email</span>
                  <p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      {CONTACT.email}
                    </a>
                  </p>
                </li>
                <li>
                  <span className="text-muted">Hours</span>
                  <p className="font-medium text-dark">{CONTACT.hours}</p>
                </li>
                <li>
                  <span className="text-muted">Address</span>
                  <p className="font-medium text-dark">{CONTACT.address}</p>
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
      <ChatWidget />
    </>
  );
}
