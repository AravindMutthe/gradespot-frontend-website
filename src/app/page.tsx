import Link from "next/link";
import type { Metadata } from "next";
import {
  Topbar,
  Navbar,
  HomeHero,
  Footer,
  MobileTabBar,
  CallbackButton,
} from "@/components/organisms";
import {
  FaqAccordion,
  CtaBand,
  WhatsAppDemo,
} from "@/components/molecules";
import { Button, Chip } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { FAQS, COURSES, SERVICES, PRODUCTS } from "@/lib/mock-data";
import { CheckmarkFilled } from "@carbon/icons-react";

export const metadata: Metadata = {
  title: "GradeSpot IT Solutions — Cybersecurity Training & IT Services, Hyderabad",
  description:
    "GradeSpot IT Solutions: job-ready cybersecurity & IT courses, IT services for businesses, and automation products for institutes — Dilsukhnagar, Hyderabad.",
};

/* JSON-LD: EducationalOrganization + Course list + Breadcrumb (researched schema stack). */
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "GradeSpot IT Solutions",
        description:
          "Cybersecurity and IT training institute with IT services and institute-automation products, Hyderabad.",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "16-126 2nd Floor, Road No.1, Sri Krishna Nagar, Dilsukhnagar",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500060",
          addressCountry: "IN",
        },
      },
      {
        "@type": "ItemList",
        name: "Courses",
        itemListElement: COURSES.map((c) => ({
          "@type": "Course",
          name: c.title,
          provider: {
            "@type": "EducationalOrganization",
            name: "GradeSpot IT Solutions",
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home" }],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Topbar />
      <Navbar />
      <HomeHero />

      {/* Courses */}
      <section className="py-14">
        <div className="container-brand">
          <p className="kicker">For Students</p>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)]">
            Six courses, one price list
          </h2>
          <p className="mt-3 max-w-[720px] text-[17px] text-ink2">
            The approved course lineup. Each course gets its own page with
            syllabus, trainer, fee and EMI options — the amounts slot in at
            launch, into a structure search engines and AI answers can
            actually read.
          </p>
          <div className="mt-7 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <div
                key={c.slug}
                className="rounded-card border border-line bg-panel p-[22px]"
              >
                <div className="flex items-start justify-between gap-2.5">
                  <h3 className="text-[19px] font-bold">{c.title}</h3>
                </div>
                <p className="mt-2 text-[15px] text-ink2">
                  {c.who.split("—")[0].trim()}
                </p>
                <div className="mt-3.5">
                  <span className="mono rounded-lg border border-dashed border-line bg-bg2 px-2.5 py-1.5 text-xs text-ink3">
                    Fee: to be confirmed
                  </span>
                </div>
                <Link
                  href={`/trainings/${c.slug}`}
                  className="mt-3.5 inline-flex items-center gap-1.5 text-[14.5px] font-bold"
                >
                  Syllabus &amp; details →
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-3.5 text-[12.5px] text-ink3">
            Fee slots are marked “to be confirmed” — no invented prices.
            Structure follows the researched pattern: publish consumer course
            pricing, gate B2B quotes (
            <Link href="/research" className="underline underline-offset-2">
              see evidence
            </Link>
            ).
          </p>
        </div>
      </section>

      {/* Businesses */}
      <section className="bg-bg2 py-14">
        <div className="container-brand">
          <p className="kicker">For Businesses</p>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)]">
            IT services, inside the business track
          </h2>
          <p className="mt-3 max-w-[720px] text-[17px] text-ink2">
            The Pvt Ltd side — sold to companies, quoted per project. Research
            pattern (OffSec, verified live): services live inside the business
            audience track, not as a competing top-level brand.
          </p>
          <div className="mt-7 grid gap-[18px] md:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="rounded-card border border-line bg-panel p-[22px]"
              >
                <h3 className="text-[19px] font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] text-ink2">{s.summary}</p>
                <div className="mt-4">
                  <CallbackButton size="sm" variant="ghost">
                    Request a Quote
                  </CallbackButton>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[22px]">
            <Link href="/services">
              <Button variant="ghost">See IT Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Institutes */}
      <section className="py-14">
        <div className="container-brand">
          <p className="kicker">For Institutes</p>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)]">
            Built for our own institute first, then for institutes like yours
          </h2>
          <p className="mt-3 max-w-[720px] text-[17px] text-ink2">
            Three planned products — a bundle nobody in Hyderabad offers
            today: lead engine + course platform + lab infrastructure,
            installed by people who run an institute.
          </p>
          <div className="mt-7 grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div
                key={p.slug}
                className="rounded-card border border-line bg-panel p-[22px]"
              >
                <Chip tone="brand">{p.tag}</Chip>
                <h3 className="mt-3 text-[19px] font-bold">{p.name}</h3>
                <p className="mt-2 text-[15px] text-ink2">{p.description}</p>
                <ul className="mt-3.5 space-y-0">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative border-b border-dashed border-line py-1.5 pl-[26px] text-[14.5px] text-ink2 last:border-0"
                    >
                      <span
                        aria-hidden
                        className="absolute left-[2px] top-[12px] h-[7px] w-3 -rotate-45 border-b-[2.5px] border-l-[2.5px] border-ok"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-[22px]">
            <Link href="/institutes">
              <Button variant="ghost">See For Institutes</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Flywheel */}
      <section className="bg-bg2 py-14">
        <div className="container-brand">
          <p className="kicker">How the model works</p>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)]">
            Three legs, one flywheel
          </h2>
          <div className="mt-7 grid gap-[18px] md:grid-cols-3">
            {[
              {
                chip: "Leg 1 · B2C",
                t: "Training fees",
                d: "Per-course fees with installments. GradeSpot is the proof kitchen — the plan is to run each product here before selling it to anyone.",
              },
              {
                chip: "Leg 2 · B2B",
                t: "IT services",
                d: "Selective, high-margin project work for businesses — web, security, marketing, corporate training.",
              },
              {
                chip: "Leg 3 · B2B recurring",
                t: "Institute automation",
                d: "Setup fee + monthly. The only leg that grows without your hours — and the one the site is built to sell.",
              },
            ].map((l) => (
              <div
                key={l.t}
                className="rounded-card border border-line bg-panel p-[22px]"
              >
                <Chip tone="brand">{l.chip}</Chip>
                <h3 className="mt-3 text-[19px] font-bold">{l.t}</h3>
                <p className="mt-2 text-[15px] text-ink2">{l.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-[30px]">
            <CtaBand
              title="Not sure which door is yours?"
              text="Tell us who you are — student, business, or institute — and we'll call you back with the right next step."
            />
          </div>
        </div>
      </section>

      {/* WhatsApp demo band */}
      <section className="py-14">
        <div className="container-brand grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">Product 1 · Live demo</p>
            <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)]">
              The website itself is the demo
            </h2>
            <p className="mt-3 max-w-[560px] text-[17px] text-ink2">
              This chat is a prototype of the WhatsApp lead engine&apos;s
              answers — enquiries answered in seconds, 24×7, with counsellor
              handoff. Directors: ask us to brand this demo with your courses.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "No app to install, no account to create",
                "The same flow we deploy for institutes",
                "Counsellor handoff with full chat context",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-ink2">
                  <CheckmarkFilled size={20} className="mt-0.5 shrink-0 text-ok" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CallbackButton>Book a Walkthrough</CallbackButton>
            </div>
          </div>
          <WhatsAppDemo />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg2 py-14">
        <div className="container-brand max-w-[820px]">
          <p className="kicker">Questions</p>
          <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)]">
            Asked often, answered straight
          </h2>
          <div className="mt-6">
            <FaqAccordion items={FAQS.slice(0, 5)} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/resources/faqs">
              <Button variant="ghost">All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
