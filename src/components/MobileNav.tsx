"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CtaActions } from "@/components/CtaActions";
import type { NavItem } from "@/lib/navigation";

export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return <MobileNavMenu key={pathname} items={items} />;
}

function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      viewBox="0 0 12 8"
      className={`h-2.5 w-3 transition-transform ${expanded ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function MobileNavMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid h-11 w-11 place-items-center"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path d="M6 6 18 18M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        )}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 max-h-[82vh] overflow-auto border-b border-line bg-paper px-5 py-6 text-center shadow-xl"
        >
          <nav aria-label="Mobile">
            {items.map((item) => {
              const children = item.links ?? item.columns?.flatMap((column) => column.links) ?? [];
              const expanded = section === item.label;
              return (
                <div key={item.label} className="border-b border-line py-2">
                  <div className="grid grid-cols-[2.75rem_1fr_2.75rem] items-center">
                    <span />
                    <Link href={item.href} className="block py-3 text-center text-lg font-semibold">
                      {item.label}
                    </Link>
                    {children.length > 0 ? (
                      <button
                        type="button"
                        className="grid h-11 w-11 place-items-center justify-self-end text-navy"
                        aria-expanded={expanded}
                        aria-label={expanded ? `Hide ${item.label}` : `Show ${item.label}`}
                        onClick={() => setSection(expanded ? null : item.label)}
                      >
                        <Chevron expanded={expanded} />
                      </button>
                    ) : (
                      <span />
                    )}
                  </div>
                  {expanded ? (
                    <ul className="grid gap-1 pb-3 text-center">
                      {item.columns
                        ? item.columns.map((column) => (
                            <li key={column.title}>
                              <p className="kicker px-2 pb-1 pt-3 text-leaf">{column.title}</p>
                              <ul>
                                {column.links.map((link) => (
                                  <li key={link.href}>
                                    <Link href={link.href} className="block rounded-lg px-2 py-2 text-sm">
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))
                        : item.links?.map((link) => (
                            <li key={`${link.href}-${link.label}`}>
                              <Link href={link.href} className="block rounded-lg px-2 py-2 text-sm">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <CtaActions
            className="mt-4 flex flex-col gap-3"
            callClassName="btn btn-primary w-full"
            scheduleClassName="btn btn-line w-full"
          />
        </div>
      ) : null}
    </div>
  );
}
