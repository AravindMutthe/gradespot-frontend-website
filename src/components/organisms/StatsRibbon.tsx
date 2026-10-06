import { StatCounter } from "@/components/molecules";
import { STATS } from "@/lib/mock-data";

/** Full-width metrics ribbon on the brand primary color. */
export function StatsRibbon() {
  return (
    <section className="bg-primary">
      <div className="container-brand grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
        {STATS.map((s) => (
          <StatCounter key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}
