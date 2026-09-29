import type { Faq } from "@/content/types";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold">
            <span>{item.q}</span>
            <span className="mt-1 text-copper transition group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-mute">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
