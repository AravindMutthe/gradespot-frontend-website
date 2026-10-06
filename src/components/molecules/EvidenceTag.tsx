/* Evidence tags — researched honesty system for the /research page.
 * Every claim carries its strength: verified live / measured study /
 * practitioner (directional) / search index. */

export type EvidenceKind = "verified" | "measured" | "practitioner" | "index";

const LABELS: Record<EvidenceKind, string> = {
  verified: "verified live",
  measured: "measured study",
  practitioner: "practitioner / single test — directional",
  index: "search index",
};

export function EvidenceTag({ kind }: { kind: EvidenceKind }) {
  const tones: Record<EvidenceKind, string> = {
    verified: "bg-ok-soft text-ok",
    measured: "bg-[#e4ecfd] text-[#2b4c9b]",
    practitioner: "bg-warn-soft text-warn",
    index: "bg-bg2 text-ink2 border border-line",
  };
  return (
    <span
      className={`mono inline-block whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-medium ${tones[kind]}`}
    >
      {LABELS[kind]}
    </span>
  );
}
