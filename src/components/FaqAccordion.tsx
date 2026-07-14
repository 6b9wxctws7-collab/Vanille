"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-cocoa/10 overflow-hidden rounded-2xl border border-cocoa/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-cocoa transition-colors hover:text-gold-dark sm:px-6"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-gold-dark"
                >
                  <Icon name={isOpen ? "minus" : "plus"} size={18} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 text-cocoa-muted sm:px-6"
            >
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
