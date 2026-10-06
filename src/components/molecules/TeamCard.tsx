export interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
}

/** Team member card — avatar is an initials placeholder until photos land. */
export function TeamCard({ name, role, bio }: TeamCardProps) {
  const initials = name
    .replace(/\[|\]|Pending:/g, "")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="rounded-card border border-line/20 bg-panel p-6 text-center">
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-xl font-bold text-brand-ink">
        {initials || "GS"}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-ink">{role}</p>
      <p className="mt-2 text-sm text-ink3">{bio}</p>
    </div>
  );
}
