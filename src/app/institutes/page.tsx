import Link from "next/link";
import type { Metadata } from "next";
import {
  Topbar,
  Navbar,
  Footer,
  MobileTabBar,
} from "@/components/organisms";
import { CtaBand } from "@/components/molecules";
import { Chip } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { PRODUCTS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "For Institutes — GradeSpot Automation",
  description:
    "Automation products for training institutes: WhatsApp lead automation, watermarked video LMS, crash-proof PXE labs. Setup + monthly, pilot first.",
};

export default function InstitutesPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link> / For Institutes
        </p>
        <h1>Automation Products for Training Institutes</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">
          Designed for our own institute first; first pilots are planned with
          institutes across Hyderabad&apos;s training hubs — Ameerpet,
          Dilsukhnagar, Kukatpally. Setup fee + monthly, installed for you.
        </p>
      </div>

      <section className="py-[26px]">
        <div className="container-brand">
          <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div
                key={p.slug}
                className="rounded-card border border-line bg-panel p-[22px]"
              >
                <Chip tone="brand">{p.tag}</Chip>
                <h3 className="mt-3 text-[19px] font-bold">{p.name}</h3>
                <p className="mt-2 text-[15px] text-ink2">{p.description}</p>
                <ul className="mt-3.5">
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

          <div className="mt-[18px] grid gap-[18px] md:grid-cols-2">
            <div className="rounded-card border border-line bg-panel p-[22px]">
              <h3 className="text-[19px] font-bold">How a pilot works</h3>
              <ul className="mt-3.5">
                {[
                  "We install Product 1 on your existing WhatsApp number",
                  "Enquiries get answered in seconds, day or night, with counsellor handoff",
                  "You measure enquiry-to-admission lift for one batch cycle",
                  "Happy? Add the LMS and labs. Not happy? You've risked one small pilot fee",
                ].map((t) => (
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
              <h3 className="text-[19px] font-bold">Why buy it from an institute?</h3>
              <p className="mt-2 text-[15px] text-ink2">
                Generic vendors (Interakt, WATI, AiSensy nationally; BotSense
                and ManageMyLeads here in Hyderabad) sell one piece of
                software. LMS platforms like Classplus sell software alone at
                around ₹30k/year. Nobody local sells the bundle — lead engine
                + course platform + labs — installed by someone who runs an
                institute and uses it daily. That gap is the product.
              </p>
              <p className="mt-2.5 text-[12.5px] text-ink3">
                Competitor notes from the business research; pricing figures
                as discussed, to be re-verified before launch.
              </p>
            </div>
          </div>

          <div className="mt-[30px]">
            <CtaBand
              title="See it before you buy it"
              text="The chat on our home page is a prototype of Product 1's answers. Book a walkthrough on your own enquiry flow."
              ctaLabel="Book a Walkthrough"
            />
          </div>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
