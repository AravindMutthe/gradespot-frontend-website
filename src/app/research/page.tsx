import Link from "next/link";
import type { Metadata } from "next";
import { Topbar, Navbar, Footer, MobileTabBar } from "@/components/organisms";
import { EvidenceTag, type EvidenceKind } from "@/components/molecules";
import { Chip } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

export const metadata: Metadata = {
  title: "Research — GradeSpot IT Solutions",
  description:
    "The research behind the GradeSpot site structure: navigation patterns, pricing evidence, and 15 companies running the training + services model.",
};

const NAV_ROWS: { site: string; url: string; pattern: string; kind: EvidenceKind }[] = [
  {
    site: "SANS Institute",
    url: "https://www.sans.org/",
    pattern:
      "Flat 4-tab navbar — Training | Learning Paths | Free Resources | For Organizations. No mega menu, no hamburger. Utility bar: Log In / Join – It's Free.",
    kind: "verified",
  },
  {
    site: "OffSec",
    url: "https://www.offsec.com/",
    pattern:
      "Full visible navbar — Learn | Individuals | Teams | Kali & Community | Resources | Pricing + “Get started” CTA. Services merchandised inside the For Organizations track, not the navbar.",
    kind: "verified",
  },
  {
    site: "Coursera",
    url: "https://www.coursera.org/",
    pattern:
      "“Explore our catalog” panel + catalog search in the nav (mega-menu pattern, justified by catalog size). Audience switcher in a banner above: Individuals | Businesses | Universities | Governments.",
    kind: "verified",
  },
  {
    site: "Hacker School, Hyderabad",
    url: "https://www.hackerschool.in/",
    pattern:
      "Minimal nav — Home | Courses (simple dropdown) | Contact Us | phone. No B2B split; pricing hidden behind “GET A CALL BACK”. Footer still © 2021 — dated, an opening.",
    kind: "verified",
  },
];

const COMPANIES: [string, string, string, string][] = [
  ["Hacker School / Cartel Software", "Hyderabad, India", "EC-Council training; parent is a software Pvt Ltd (services unverified)", "Callback-only, prices hidden"],
  ["Koenig Solutions", "Gurugram, India · global", "Training only — 5,000+ vendor-authorized courses", "Per-course published; corporate custom"],
  ["Aptech", "Mumbai, India · 40+ countries", "Training + institutional B2B via 1,000+ franchise centers", "Franchise model (~20% royalty)"],
  ["FDM Group", "London, UK", "Recruit → train free → deploy to clients on 18–24-month contracts", "Employer-paid contracts"],
  ["SoftServe Academy", "Ukraine → global", "Free academy inside an IT-services giant; 80% of trainees come from it", "Free — subsidized by services margin"],
  ["EPAM Campus", "Global", "Free programs feeding EPAM's services hiring; India cohort with stipend", "Free — employment pipeline"],
  ["Revature", "Reston, USA", "Free 12-week bootcamps; bills clients for placed engineers", "Employer-paid per engineer"],
  ["ThriveDX", "USA / Israel", "Bootcamps + enterprise security training; bought Cybint's SaaS platform (~$50M, 2021)", "University partnerships; enterprise sales"],
  ["GoHighLevel", "Dallas, USA", "Agency built its own automation, then sold it as white-label SaaS — 2.2M businesses by 2025", "SaaS subscription + white-label resale"],
  ["Digital House × Globant", "Buenos Aires, Argentina", "Coding school; Globant invested ($50M round, 2021) — investment, not acquisition", "Per-program tuition"],
  ["AstroLabs", "Dubai, UAE", "Academy + company setup + coworking + talent; 800+ companies set up", "Per-course + packaged services"],
  ["Decagon", "Lagos, Nigeria", "6-month engineering program + product-engineering services, one brand; pay-after-learning", "Tuition or income-linked loan"],
  ["Andela", "Lagos → global", "Started as paid-to-learn fellowship; now a curated talent marketplace", "Unpublished; long commitments"],
  ["Algoritma + Supertype", "Jakarta, Indonesia", "Data academy + consulting arm + curriculum licensing to universities", "Corporate L&D + licensing"],
  ["CodersTrust", "Dhaka, Bangladesh", "Affordable training → freelance-marketplace income (scale claims self-reported)", "Low-fee training"],
];

const FIVE = [
  { place: "Lagos, Nigeria", name: "Decagon", d: "Closest small-company match: training + product-engineering services under one brand; pay-after-learning removes the affordability barrier; client projects fund the operation; selectivity marketed as quality." },
  { place: "Jakarta, Indonesia", name: "Algoritma + Supertype", d: "Academy + data consulting + curriculum licensing to other institutes and universities — the direct blueprint for the institute-owner product track." },
  { place: "Hyderabad, India", name: "Hacker School / Cartel", d: "Local proof the model exists — and the cautionary tale: no visible services integration, dated site (© 2021), callback-only pricing. Transparent pricing + a modern site already differentiates." },
  { place: "Dallas, USA", name: "GoHighLevel", d: "The productization playbook: an agency built automation for itself, then sold it as white-label SaaS (2.2M businesses by 2025). The product is the demo." },
  { place: "Dubai, UAE", name: "AstroLabs", d: "Academy feeding services (company setup, coworking, talent) under one roof; community flywheel; per-course consumer pricing, packaged B2B quotes." },
];

export default function ResearchPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link> / Research
        </p>
        <h1>Research behind this structure</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">
          Compiled 2026-10-02 from live checks of SANS, OffSec, Coursera and
          Hacker School, published UX/CRO studies, and 15 companies worldwide
          running the training + services model. Every claim carries its
          evidence strength.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <EvidenceTag kind="verified" />
          <EvidenceTag kind="measured" />
          <EvidenceTag kind="practitioner" />
          <EvidenceTag kind="index" />
        </div>
      </div>

      <section className="py-[30px]">
        <div className="container-brand">
          <p className="kicker">Part A · Navigation, menus &amp; heroes</p>
          <h2 className="mt-2.5 text-[28px]">What the winners&apos; navbars actually do</h2>
          <div className="mt-5 overflow-x-auto rounded-card">
            <table className="w-full border-collapse bg-panel text-sm">
              <thead>
                <tr className="bg-bg2 text-left">
                  <th className="border-b border-line px-3.5 py-3 font-display text-[13px]">Site</th>
                  <th className="border-b border-line px-3.5 py-3 font-display text-[13px]">Nav pattern observed</th>
                  <th className="border-b border-line px-3.5 py-3 font-display text-[13px]">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {NAV_ROWS.map((r) => (
                  <tr key={r.site}>
                    <td className="border-b border-line px-3.5 py-3 font-semibold text-ink">
                      <a href={r.url} target="_blank" rel="noopener">{r.site}</a>
                    </td>
                    <td className="border-b border-line px-3.5 py-3 text-ink2">{r.pattern}</td>
                    <td className="border-b border-line px-3.5 py-3">
                      <EvidenceTag kind={r.kind} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-[18px] md:grid-cols-2">
            {[
              {
                t: "Mega menu vs dropdown",
                d: "NN/g: mega menus outperform cascading dropdowns for discoverability — all options visible at a glance, less memory load. Cap flyouts at one tier. Edinburgh task study: course-finding took ~9.1s with a mega menu vs 26.3s with a left-hand menu (small lab sample). 88% of top US e-commerce sites use hover dropdown/mega-menu nav (Baymard).",
                kind: "measured" as EvidenceKind,
              },
              {
                t: "Hero & CTA evidence",
                d: "One primary CTA beat competing CTAs by 27% across 500 B2B SaaS homepages; concrete outcome headlines beat generic by 38% (CopyCrest, vendor study — directional). A persistent header CTA lifted conversion 1.43% → 2.19% in one A/B test (MetriFi, credit-union context). Mobile sticky bottom CTAs: +12–27% (practitioner aggregation).",
                kind: "practitioner" as EvidenceKind,
              },
              {
                t: "Mobile, India-first",
                d: "India: 950M+ internet users (IAMAI), mobile is >80% of web traffic. Bottom tab bars take 70–80% of taps vs <15% for hamburger-hidden nav; buried features are found 30–50% less often. Speed is the lever: 53% of mobile visitors abandon after 3 seconds.",
                kind: "index" as EvidenceKind,
              },
              {
                t: "URLs, schema & the llms.txt verdict",
                d: "Shallow URLs (≤3 clicks) beat deep nesting for link equity; BreadcrumbList + Course schema are fully supported by Google. FAQPage rich results are heavily restricted since Aug 2023 — ship FAQs for AI-answer extraction, not SERP display. llms.txt: Google ignores it; across ~300k domains only 1 of the 50 most AI-cited sites had one, and 97% of published files got zero crawler requests (Ahrefs, 137k domains). Ship it free — never sell it as an AEO lever.",
                kind: "measured" as EvidenceKind,
              },
            ].map((c) => (
              <div key={c.t} className="rounded-card border border-line bg-panel p-[22px]">
                <h3 className="text-[19px] font-bold">{c.t}</h3>
                <p className="mt-2 text-[15px] text-ink2">{c.d}</p>
                <p className="mt-2.5"><EvidenceTag kind={c.kind} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg2 py-14">
        <div className="container-brand">
          <p className="kicker">Part B · The integrated model worldwide</p>
          <h2 className="mt-2.5 text-[28px]">
            15 companies running training + services (+ products)
          </h2>
          <div className="mt-5 overflow-x-auto rounded-card">
            <table className="w-full border-collapse bg-panel text-sm">
              <thead>
                <tr className="bg-bg2 text-left">
                  {["Company", "Model", "Pricing pattern"].map((h) => (
                    <th key={h} className="border-b border-line px-3.5 py-3 font-display text-[13px]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPANIES.map((r) => (
                  <tr key={r[0]}>
                    <td className="border-b border-line px-3.5 py-3 font-semibold text-ink">
                      {r[0]}
                      <br />
                      <span className="text-[12.5px] font-normal text-ink3">{r[1]}</span>
                    </td>
                    <td className="border-b border-line px-3.5 py-3 text-ink2">{r[2]}</td>
                    <td className="border-b border-line px-3.5 py-3 text-ink2">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12.5px] text-ink3">
            Hedges kept from the research: Koenig revenue reported as $40M vs
            $91M (sources disagree); CodersTrust&apos;s 1.5M learners is
            self-reported; Hacker School&apos;s parent Cartel Software&apos;s
            services could not be verified; Globant <b>invested in</b> Digital
            House — it did not acquire it.
          </p>

          <h2 className="mt-10 text-[26px]">The five worth studying at Hyderabad scale</h2>
          <div className="mt-5 grid gap-[18px] md:grid-cols-2">
            {FIVE.map((f) => (
              <div key={f.name} className="rounded-card border border-line bg-panel p-[22px]">
                <Chip tone="brand">{f.place}</Chip>
                <h3 className="mt-2.5 text-[19px] font-bold">{f.name}</h3>
                <p className="mt-2 text-[15px] text-ink2">{f.d}</p>
              </div>
            ))}
            <div className="rounded-card border border-line bg-panel p-[22px]">
              <h3 className="text-[19px] font-bold">Patterns the winners share</h3>
              <ul className="mt-3.5">
                {[
                  "One brand, audience-split navigation — services inside the business track",
                  "Two economic engines: training fees + services/product revenue",
                  "Course prices published; B2B quotes gated",
                  "Internal tooling becomes the product (GoHighLevel, ThriveDX/Cybint)",
                  "The website itself is the live demo",
                ].map((t) => (
                  <li key={t} className="relative border-b border-dashed border-line py-1.5 pl-[26px] text-[14.5px] text-ink2 last:border-0">
                    <span aria-hidden className="absolute left-[2px] top-[12px] h-[7px] w-3 -rotate-45 border-b-[2.5px] border-l-[2.5px] border-ok" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-[26px] rounded-card border border-line bg-brand-soft p-[18px] text-[14.5px] text-ink2">
            <b className="text-ink">Still open:</b> what Cartel Software
            (Hacker School&apos;s parent) actually sells as services — no
            services section found; Koenig&apos;s true revenue ($40M vs $91M);
            whether FAQ rich results have any residual SERP value (one weak
            source claims zero since May 2026 — contested, treated as
            “restricted”). CTA stats like “+90% first-person” and “7.9×
            interactive demos” are single tests or practitioner claims — used
            as direction, not law.
          </div>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
