"use client";

import { useState } from "react";

export function WorkVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="learn-more mt-8" onClick={() => setOpen(true)}>
        {label} <span aria-hidden="true">&gt;</span>
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpen(false)}
        >
          <div className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <video src={src} poster={poster} controls autoPlay className="aspect-video w-full bg-black" />
            <button type="button" className="mt-3 text-sm text-white underline" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
