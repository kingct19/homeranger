"use client";

import { useId, useState } from "react";
import type { Faq } from "@/content/types";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <FaqItem key={item.q} item={item} />
      ))}
    </div>
  );
}

function FaqItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="py-5">
      <button
        type="button"
        className="flex w-full cursor-pointer items-start justify-between gap-6 text-left text-lg font-semibold"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{item.q}</span>
        <span className={`mt-1 text-copper transition-transform duration-200 ${open ? "rotate-45" : ""}`} aria-hidden="true">
          +
        </span>
      </button>
      <div id={panelId} className={`reveal ${open ? "is-open" : ""}`} role="region">
        <div className="reveal-inner">
          <p className="mt-3 max-w-3xl leading-relaxed text-mute">{item.a}</p>
        </div>
      </div>
    </div>
  );
}
