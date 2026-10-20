import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

export function CtaActions({
  className = "flex flex-wrap gap-3",
  callClassName = "btn btn-primary",
  scheduleClassName = "btn btn-light",
  scheduleLabel = "Book",
}: {
  className?: string;
  callClassName?: string;
  scheduleClassName?: string;
  scheduleLabel?: ReactNode;
}) {
  return (
    <div className={className}>
      {site.phoneTel ? (
        <a href={`tel:${site.phoneTel}`} className={callClassName}>
          <span className="min-w-0 text-balance">Call Us</span>
        </a>
      ) : (
        <Link href="/contact" className={callClassName}>
          <span className="min-w-0 text-balance">Call Us</span>
        </Link>
      )}
      <a href={site.bookingUrl} className={scheduleClassName}>
        <span className="min-w-0 text-balance">{scheduleLabel}</span>
      </a>
    </div>
  );
}
