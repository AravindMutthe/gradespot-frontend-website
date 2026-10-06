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
    <div className="rounded-card border border-muted/20 bg-surface p-6 text-center">
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
        {initials || "GS"}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-dark">{name}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{role}</p>
      <p className="mt-2 text-sm text-muted">{bio}</p>
    </div>
  );
}
