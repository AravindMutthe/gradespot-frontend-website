"use client";

import { Accordion, AccordionItem } from "@carbon/react";
import type { Faq } from "@/lib/mock-data";

export interface FaqAccordionProps {
  items: Faq[];
}

/**
 * FAQ accordion — built on IBM Carbon's Accordion (keyboard accessible:
 * Tab / Space / Enter). Proves Carbon + Tailwind coexistence in structure.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion>
      {items.map((item) => (
        <AccordionItem key={item.q} title={item.q}>
          <p className="text-ink3">{item.a}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
