import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Topbar,
  Navbar,
  Footer,
  MobileTabBar,
  CallbackButton,
} from "@/components/organisms";
import { Button } from "@/components/atoms";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { COURSES } from "@/lib/mock-data";

export function generateStaticParams() {
  return COURSES.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const { course } = await params;
  const found = COURSES.find((c) => c.slug === course);
  return {
    title: found ? `${found.title} — GradeSpot Trainings` : "Course — GradeSpot",
    description: found?.tagline,
  };
}

/* JSON-LD Course schema (researched schema stack). */
function CourseJsonLd({ course }: { course: (typeof COURSES)[number] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.who,
    provider: {
      "@type": "EducationalOrganization",
      name: "GradeSpot IT Solutions",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const found = COURSES.find((c) => c.slug === course);
  if (!found) notFound();

  return (
    <>
      <CourseJsonLd course={found} />
      <Topbar />
      <Navbar />

      <div className="container-brand pb-2 pt-11">
        <p className="mono mb-3.5 text-[12.5px] text-ink3">
          <Link href="/" className="text-ink3">Home</Link>
          {" / "}
          <Link href="/trainings" className="text-ink3">Courses</Link>
          {" / "}
          {found.short}
        </p>
        <h1>{found.title}</h1>
        <p className="mt-2.5 max-w-[720px] text-[17px] text-ink2">{found.who}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <CallbackButton size="lg">Get a Callback</CallbackButton>
          <Link href="/pricing">
            <Button size="lg" variant="ghost">
              Fees &amp; Installments
            </Button>
          </Link>
        </div>
      </div>

      <section className="py-[30px]">
        <div className="container-brand">
          <div className="grid gap-[18px] md:grid-cols-2">
            <div className="rounded-card border border-line bg-panel p-[22px]">
              <h3 className="text-[19px] font-bold">What you&apos;ll learn</h3>
              <ul className="mt-3.5">
                {found.topics.map((t) => (
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
            <div>
              <div className="rounded-card border border-line bg-panel p-[22px]">
                <h3 className="text-[19px] font-bold">Who this is for</h3>
                <p className="mt-2 text-[15px] text-ink2">{found.who}</p>
                <h3 className="mt-[18px] text-[19px] font-bold">Where it leads</h3>
                <p className="mt-2 text-[15px] text-ink2">{found.outcome}</p>
              </div>
              <div className="mt-[18px] rounded-card border border-line bg-panel p-[22px]">
                <h3 className="text-[19px] font-bold">Fee</h3>
                <p className="mt-2">
                  <span className="mono rounded-lg border border-dashed border-line bg-bg2 px-2.5 py-1.5 text-[13px] text-ink3">
                    To be confirmed — published here at launch
                  </span>
                </p>
                <p className="mt-2.5 text-[15px] text-ink2">
                  Installment options will be listed on the{" "}
                  <Link href="/pricing" className="font-bold hover:underline">
                    Pricing page
                  </Link>
                  . No hidden charges; the fee on the page is the fee you pay.
                </p>
                <dl className="mt-4 space-y-2.5 border-t border-line pt-4 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink3">Duration</dt>
                    <dd className="text-right font-medium text-ink">{found.duration}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink3">Mode</dt>
                    <dd className="text-right font-medium text-ink">{found.mode}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink3">Level</dt>
                    <dd className="text-right font-medium text-ink">{found.level}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-[22px] rounded-card border border-line bg-brand-soft p-[18px] text-[14.5px] text-ink2">
            <b className="text-ink">Built for search &amp; AI answers:</b> this
            page carries <code className="mono rounded-md border border-line bg-bg2 px-1.5 py-0.5 text-[0.86em]">Course</code> +{" "}
            <code className="mono rounded-md border border-line bg-bg2 px-1.5 py-0.5 text-[0.86em]">Offer</code> schema,
            an <code className="mono rounded-md border border-line bg-bg2 px-1.5 py-0.5 text-[0.86em]">EducationalOrganization</code> provider
            and <code className="mono rounded-md border border-line bg-bg2 px-1.5 py-0.5 text-[0.86em]">BreadcrumbList</code> — the
            researched schema stack.{" "}
            <Link href="/research" className="font-bold hover:underline">
              See the evidence
            </Link>
            .
          </div>
        </div>
      </section>

      <Footer />
      <MobileTabBar />
      <ChatWidget />
    </>
  );
}
