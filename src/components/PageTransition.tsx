"use client";

import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [current, setCurrent] = useState(pathname);
  const [play, setPlay] = useState(false);

  if (pathname !== current) {
    setCurrent(pathname);
    setPlay(true);
  }

  return (
    <div key={pathname} className={play ? "page-enter" : undefined}>
      {children}
    </div>
  );
}
