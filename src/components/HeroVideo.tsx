"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <>
      {poster ? (
        <Image
          src={poster}
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
        />
      ) : null}
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${poster && !ready ? "opacity-0" : "opacity-100"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlaying={() => setReady(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
