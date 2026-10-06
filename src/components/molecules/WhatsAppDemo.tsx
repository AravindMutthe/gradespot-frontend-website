"use client";

/* WhatsApp chat demo widget — chat-bubble UI structure.
 * TODO: replace the placeholder bubbles below with your own demo script.
 * The live engine plugs in behind this UI in Phase 3. */

const MESSAGES = [
  { from: "in", text: "TODO: sample visitor message", time: "--:--" },
  { from: "out", text: "TODO: sample automated reply", time: "--:--" },
] as const;

export function WhatsAppDemo() {
  return (
    <div
      aria-label="WhatsApp automation demo"
      className="max-w-md rounded-[18px] border border-line bg-panel p-[18px] shadow-[var(--shadow)]"
    >
      <div className="mb-3.5 flex items-center gap-2.5 border-b border-line pb-3">
        <span className="font-display grid h-9 w-9 place-items-center rounded-full bg-wa font-extrabold text-white">
          G
        </span>
        <span>
          <b className="block text-[14.5px]">GradeSpot Admissions</b>
          <span className="text-xs font-semibold text-ok">
            TODO: status line
          </span>
        </span>
      </div>
      {MESSAGES.map((m, i) => (
        <div
          key={i}
          className={
            m.from === "in"
              ? "mb-2 max-w-[85%] rounded-xl rounded-bl-sm border border-line bg-bg2 px-3 py-2 text-[13.5px] leading-[1.45]"
              : "mb-2 ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-[#dcf8c6] px-3 py-2 text-[13.5px] leading-[1.45] text-[#14351c] dark:bg-[#0d3b26] dark:text-[#c9f2da]"
          }
        >
          {m.text}
          <span className="mt-1 block text-right text-[10.5px] opacity-60">
            {m.time}
          </span>
        </div>
      ))}
      <p className="mt-2.5 text-[12.5px] text-ink3">
        TODO: one-line caption describing what this demo shows.
      </p>
    </div>
  );
}
