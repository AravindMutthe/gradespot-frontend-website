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
  description: "Automation products for training institutes — GradeSpot.",
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
          TODO: one or two sentences introducing your institute products.
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
                  "TODO: pilot step one",
                  "TODO: pilot step two",
                  "TODO: pilot step three",
                  "TODO: pilot step four",
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
              <h3 className="text-[19px] font-bold">Why buy it from us?</h3>
              <p className="mt-2 text-[15px] text-ink2">
                TODO: one or two sentences on why institutes should buy
                these products from you.
              </p>
              <p className="mt-2.5 text-[12.5px] text-ink3">
                TODO: supporting detail.
              </p>
            </div>
          </div>

          <div className="mt-[30px]">
            <CtaBand
              title="Your call-to-action headline here"
              text="TODO: one supporting sentence for the call to action."
              ctaLabel="Get a Callback"
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
