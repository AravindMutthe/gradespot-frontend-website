import Link from "next/link";
import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { COURSES } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Site Map — GradeSpot IT Solutions",
  description: "Every GradeSpot page and its URL.",
};

const TREE: {
  name: string;
  url: string;
  href: string;
  desc?: string;
  kids?: { name: string; url: string; href: string; desc?: string }[];
}[] = [
  { name: "Home", url: "/", href: "/", desc: "TODO: one-line description of the home page." },
  {
    name: "Students", url: "audience tab", href: "/trainings",
    kids: [
      { name: "Courses & Fees", url: "/trainings", href: "/trainings", desc: "TODO: one-line description." },
      ...COURSES.map((c) => ({
        name: c.title, url: `/trainings/${c.slug}`, href: `/trainings/${c.slug}`,
        desc: `TODO: one-line description of the ${c.short} course page.`,
      })),
      { name: "Pricing", url: "/pricing", href: "/pricing", desc: "TODO: one-line description." },
      { name: "Certificate Verification", url: "/verify", href: "/verify", desc: "TODO: one-line description." },
      { name: "Batches", url: "/batches", href: "/batches", desc: "TODO: one-line description." },
    ],
  },
  {
    name: "Businesses", url: "audience tab", href: "/services",
    kids: [
      { name: "IT Services", url: "/services", href: "/services", desc: "TODO: one-line description." },
    ],
  },
  {
    name: "For Institutes", url: "audience tab", href: "/institutes",
    kids: [
      { name: "Institute Automation", url: "/institutes", href: "/institutes", desc: "TODO: one-line description." },
    ],
  },
  {
    name: "Company", url: "footer + utility bar", href: "/about",
    kids: [
      { name: "About Us", url: "/about", href: "/about", desc: "TODO: one-line description." },
      { name: "Contact", url: "/contact", href: "/contact", desc: "TODO: one-line description." },
      { name: "Blog", url: "/resources/blog", href: "/resources/blog", desc: "TODO: one-line description." },
      { name: "Testimonials", url: "/resources/testimonials", href: "/resources/testimonials", desc: "TODO: one-line description." },
      { name: "FAQs", url: "/resources/faqs", href: "/resources/faqs", desc: "TODO: one-line description." },
    ],
  },
  {
    name: "Meta", url: "meta", href: "/sitemap",
    kids: [
      { name: "Site Map (this page)", url: "/sitemap", href: "/sitemap", desc: "TODO: one-line description." },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link> / Site Map
        </p>
        <h1>The site map</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">
          Every page and its URL. Click any page name to visit it.
        </p>
      </div>

      <section className="py-[26px]">
        <div className="container-brand">
          <div className="mb-[26px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "3", s: "TODO: describe your audience split." },
              { v: "1", s: "TODO: describe your call-to-action approach." },
              { v: "0", s: "TODO: describe your mobile navigation approach." },
              { v: "×", s: "TODO: describe your URL/schema approach." },
            ].map((st) => (
              <div key={st.v} className="rounded-card border border-line bg-panel p-[18px]">
                <b className="font-display block text-2xl">{st.v}</b>
                <span className="text-[13px] text-ink2">{st.s}</span>
              </div>
            ))}
          </div>

          <div className="rounded-card border border-line bg-panel px-[22px] py-2">
            {TREE.map((n) => (
              <div key={n.name} className="border-b border-line py-[13px] last:border-0">
                <div className="flex flex-wrap items-baseline gap-3">
                  <Link href={n.href} className="font-display text-[16.5px] font-bold text-ink">
                    {n.name}
                  </Link>
                  <span className="mono text-[12.5px] text-brand-ink">{n.url}</span>
                </div>
                {n.desc && <p className="mt-1 max-w-[760px] text-sm text-ink2">{n.desc}</p>}
                {n.kids && (
                  <div className="mb-0.5 ml-3.5 mt-1.5 border-l-2 border-line pl-[18px]">
                    {n.kids.map((k) => (
                      <div key={k.name} className="border-b border-line py-2 last:border-0">
                        <div className="flex flex-wrap items-baseline gap-3">
                          <Link href={k.href} className="font-display text-[15px] font-bold text-ink">
                            {k.name}
                          </Link>
                          <span className="mono text-[12.5px] text-brand-ink">{k.url}</span>
                        </div>
                        {k.desc && <p className="mt-0.5 max-w-[760px] text-sm text-ink2">{k.desc}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="mt-11 text-[26px]">Navigation notes</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {[
              { t: "TODO: nav rule one", d: "TODO: describe this navigation decision." },
              { t: "TODO: nav rule two", d: "TODO: describe this navigation decision." },
              { t: "TODO: nav rule three", d: "TODO: describe this navigation decision." },
              { t: "TODO: nav rule four", d: "TODO: describe this navigation decision." },
            ].map((c) => (
              <div key={c.t} className="rounded-card border border-line bg-panel p-[22px]">
                <h3 className="text-[19px] font-bold">{c.t}</h3>
                <p className="mt-2 text-[15px] text-ink2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
