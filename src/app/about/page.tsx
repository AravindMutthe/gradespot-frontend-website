import Link from "next/link";
import type { Metadata } from "next";
import {
  Topbar,
  Navbar,
  Footer,
  MobileTabBar,
  CallbackButton,
} from "@/components/organisms";
import { TeamCard } from "@/components/molecules";
import { Button } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { TEAM, CONTACT, WHY_CHOOSE, ABOUT } from "@/lib/mock-data";
import { CheckmarkFilled } from "@carbon/icons-react";

export const metadata: Metadata = {
  title: "About Us — GradeSpot IT Solutions",
  description:
    "About GradeSpot IT Solutions: cybersecurity & IT training institute and IT services company in Dilsukhnagar, Hyderabad.",
};

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link> / About
        </p>
        <h1>About GradeSpot</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">
          GradeSpot IT Solutions is a cybersecurity &amp; IT training institute
          and IT services company in Dilsukhnagar, Hyderabad — with 9 years of
          experience helping businesses grow and learners build careers.
        </p>
      </div>

      <section className="py-[26px]">
        <div className="container-brand">
          <div className="grid gap-[18px] md:grid-cols-3">
            <div className="rounded-card border border-line bg-panel p-[22px]">
              <h3 className="text-[19px] font-bold">Why choose us</h3>
              <ul className="mt-3.5">
                {WHY_CHOOSE.slice(0, 6).map((t) => (
                  <li
                    key={t}
                    className="relative border-b border-dashed border-line py-1.5 pl-[26px] text-[14.5px] text-ink2 last:border-0"
                  >
                    <span
                      aria-hidden
                      className="absolute left-[2px] top-[12px] h-[7px] w-3 -rotate-45 border-b-[2.5px] border-l-[2.5px] border-ok"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-line bg-panel p-[22px]">
              <h3 className="text-[19px] font-bold">Student certifications</h3>
              <p className="mt-2 text-[15px] text-ink2">
                Every course prepares you for a recognized certification —
                Cisco CCNA/CCNP, CompTIA, EC-Council CEH, Microsoft Azure —
                with a &lsquo;Pay after you Pass&rsquo; support methodology.
                Verify any GradeSpot certificate by its serial number.
              </p>
              <div className="mt-4">
                <Link href="/verify">
                  <Button size="sm" variant="ghost">
                    Verify a Certificate
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-card border border-line bg-panel p-[22px]">
              <h3 className="text-[19px] font-bold">Team</h3>
              <p className="mt-2 text-[15px] text-ink2">
                Led by founder Nikhil Duth D, our trainers are working
                security engineers and cloud professionals who teach from
                real-world experience — not just slides.
              </p>
            </div>
          </div>

          <h2 className="mt-12 text-[26px]">Meet the team</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <TeamCard key={m.role} name={m.name} role={m.role} bio={m.bio} />
            ))}
          </div>

          <h2 className="mt-12 text-[26px]">Our story</h2>
          <p className="mt-4 max-w-[800px] text-[16px] text-ink2">
            {ABOUT.story}
          </p>

          <div className="mt-[18px] grid gap-[18px] md:grid-cols-2">
            <div className="rounded-card border border-line bg-panel p-[22px]">
              <h3 className="text-[19px] font-bold">Contact</h3>
              <p className="mt-2 text-[15px] text-ink2">{CONTACT.address}</p>
              <p className="mt-1 text-[15px] text-ink2">
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                {" · "}
                <a href={CONTACT.phone2Href}>{CONTACT.phone2}</a>
              </p>
              <p className="mt-1 text-[15px] text-ink2">
                Office hours {CONTACT.hours}
              </p>
              <div className="mt-4">
                <CallbackButton size="sm">Get a Callback</CallbackButton>
              </div>
            </div>
            <div className="rounded-card border border-line bg-panel p-[22px]">
              <h3 className="text-[19px] font-bold">Testimonials</h3>
              <p className="mt-2 text-[15px] text-ink2">
                1,500+ happy learners and 1,200+ certified professionals trained
                — read their stories on our testimonials page.
              </p>
              <div className="mt-4">
                <Link href="/resources/testimonials">
                  <Button size="sm" variant="ghost">
                    Read Testimonials
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
