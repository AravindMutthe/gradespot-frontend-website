import { Badge } from "@/components/atoms";

/** Value proposition + accreditations — two-column trust block. */
export function TrustBlock() {
  return (
    <section className="bg-surface-light">
      <div className="container-brand grid gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Why choose us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-dark">
            9+ years of practical, career-focused training
          </h2>
          <p className="mt-4 text-muted">
            [Pending: finalize the company background paragraph with the team —
            history, teaching philosophy, and what makes GradeSpot different.]
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>ISO 9001:2015 Certified</Badge>
            <Badge tone="accent">AICTE Internship Approved</Badge>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-card border border-muted/20 bg-surface p-8">
            <h3 className="text-lg font-semibold text-dark">
              From the founder
            </h3>
            <p className="mt-3 text-muted">
              [Pending: founder message and signature block.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
