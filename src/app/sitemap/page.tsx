import Link from "next/link";
import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { COURSES } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Site Map — GradeSpot IT Solutions",
  description:
    "Every GradeSpot page, its URL, and why it sits where it sits — the proposed site map with its navigation rules.",
};

const TREE: {
  name: string;
  url: string;
  href: string;
  desc?: string;
  kids?: { name: string; url: string; href: string; desc?: string }[];
}[] = [
  { name: "Home", url: "/", href: "/", desc: "Split-audience hero (Students / Businesses / Institutes), one repeated CTA, the WhatsApp demo running live, course + services + product bands." },
  {
    name: "Students", url: "audience tab", href: "/trainings",
    kids: [
      { name: "Courses & Fees", url: "/trainings", href: "/trainings", desc: "All six courses with fee and EMI slots on the page — published pricing is the wedge." },
      ...COURSES.map((c) => ({
        name: c.title, url: `/trainings/${c.slug}`, href: `/trainings/${c.slug}`,
        desc: `${c.short} course page: syllabus, trainer, fee, Course+Offer schema.`,
      })),
      { name: "Pricing", url: "/pricing", href: "/pricing", desc: "The published fee list and installment terms — one page every course links to." },
      { name: "Certificate Verification", url: "/verify", href: "/verify", desc: "Public ID check for employers — trust infrastructure, linked from the utility bar." },
      { name: "Batches", url: "/batches", href: "/batches", desc: "Upcoming batch schedule." },
    ],
  },
  {
    name: "Businesses", url: "audience tab", href: "/services",
    kids: [
      { name: "IT Services", url: "/services", href: "/services", desc: "Web development, cybersecurity services, digital marketing, corporate training — quote-gated, inside the business track." },
    ],
  },
  {
    name: "For Institutes", url: "audience tab", href: "/institutes",
    kids: [
      { name: "Institute Automation", url: "/institutes", href: "/institutes", desc: "WhatsApp Lead Automation, Video LMS and PXE Lab Setup — setup + monthly, pilot first. The recurring-revenue engine." },
    ],
  },
  {
    name: "Company", url: "footer + utility bar", href: "/about",
    kids: [
      { name: "About Us", url: "/about", href: "/about", desc: "Story, Why Choose Us, Team and Contact." },
      { name: "Contact", url: "/contact", href: "/contact", desc: "Enquiry form, address, phones, office hours." },
      { name: "Blog", url: "/resources/blog", href: "/resources/blog", desc: "Articles that compound search traffic." },
      { name: "Testimonials", url: "/resources/testimonials", href: "/resources/testimonials", desc: "Real names, real batches, real outcomes — empty until genuine." },
      { name: "FAQs", url: "/resources/faqs", href: "/resources/faqs", desc: "Answered straight; feeds AI-answer extraction." },
    ],
  },
  {
    name: "Behind the structure", url: "meta", href: "/sitemap",
    kids: [
      { name: "Site Map (this page)", url: "/sitemap", href: "/sitemap", desc: "The map itself, with the navigation rules and their evidence." },
      { name: "Research", url: "/research", href: "/research", desc: "Every pattern above, sourced and tagged by evidence strength — including the open questions." },
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
        <h1>The proposed site map</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">
          Every page, its URL, and why it sits where it sits. Click any page
          name to visit it.
        </p>
      </div>

      <section className="py-[26px]">
        <div className="container-brand">
          <div className="mb-[26px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "3", s: "audience tabs in the navbar — Students, Businesses, For Institutes (SANS/OffSec pattern)" },
              { v: "≤3 clicks", s: "every money page reachable within three clicks of home; flat /section/page URLs" },
              { v: "1 CTA", s: "“Get a Callback” — identical in the header, hero, page ends and mobile bar" },
              { v: "0", s: "hamburger menus for primary nav — full navbar on desktop, bottom tab bar on mobile" },
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

          <h2 className="mt-11 text-[26px]">Navigation rules behind the map</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {[
              { t: "Navbar: flat, visible, audience-split", d: "SANS runs 4 flat tabs; OffSec runs Individuals / Teams tabs — both verified live, neither uses a desktop hamburger. A mega menu only earns its place past ~15 destinations (NN/g); the rule applied here: tabs now, mega menu only if the catalog outgrows them." },
              { t: "Hero: one headline, split CTAs", d: "One outcome headline, the three audiences as side-by-side routes (the accepted split-audience pattern), and a single repeated primary CTA. Single-CTA pages measured ~27% better in a 500-homepage B2B study — directional, vendor-run." },
              { t: "Mobile: bottom tab bar, not a hamburger", d: "India is 80%+ mobile traffic. Bottom bars get 70–80% of taps; hamburger-hidden nav is found 30–50% less often and costs ~40% engagement. This site's mobile bar: Home · Courses · Pricing · Institutes · More." },
              { t: "URLs & schema: shallow and machine-readable", d: "Flat URLs distribute link equity better than deep nesting; every course page ships Course + Offer + BreadcrumbList schema. FAQ pages stay for AI-answer extraction — Google restricts FAQ rich results, so no SERP promise is made." },
            ].map((c) => (
              <div key={c.t} className="rounded-card border border-line bg-panel p-[22px]">
                <h3 className="text-[19px] font-bold">{c.t}</h3>
                <p className="mt-2 text-[15px] text-ink2">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-5">
            <Link href="/research">
              <span className="inline-flex items-center justify-center gap-2 rounded-button border-[1.5px] border-line bg-transparent px-5 py-[11px] text-[15px] font-bold text-ink hover:border-ink3">
                Read the full research behind these rules
              </span>
            </Link>
          </p>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
