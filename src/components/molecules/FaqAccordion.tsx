import type { Faq } from "@/lib/mock-data";

export interface FaqAccordionProps {
  items: Faq[];
}

/* FAQ accordion — native details/summary, researched styling
 * (Static_Website.html): panel bg, 9px radius, 16px/700 summary. */

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div>
      {items.map((item) => (
        <details
          key={item.q}
          className="group mb-2.5 rounded-[9px] border border-line bg-panel"
        >
          <summary className="cursor-pointer list-none px-[18px] py-4 font-display text-[16px] font-bold marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              {item.q}
              <span
                aria-hidden
                className="shrink-0 text-[20px] font-normal leading-none text-ink3 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <div className="px-[18px] pb-[18px] text-[15px] text-ink2">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
