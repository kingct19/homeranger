"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const clips = [
  {
    src: "/videos/hero-filter-draw.mp4",
    label: "Technician inspecting a pleated air filter",
  },
  {
    src: "/videos/hero-panel.mp4",
    label: "Technician lowering an air handler service panel",
  },
  {
    src: "/videos/hero-condenser.mp4",
    label: "Technician testing an outdoor condenser",
  },
  {
    src: "/videos/hero-arrival.mp4",
    label: "Technician carrying a ladder up to a home",
  },
  {
    src: "/videos/hero-warehouse-aerial.mp4",
    label: "Aerial view of the service shop and vans",
  },
  {
    src: "/videos/hero-van.mp4",
    label: "White service van with navy and orange striping",
  },
  {
    src: "/videos/hero-walk.mp4",
    label: "Technician walking from the van to the shop",
  },
  {
    src: "/videos/hero-rollup.mp4",
    label: "Technician opening the warehouse door",
  },
  {
    src: "/videos/hero-furnace.mp4",
    label: "Technician servicing a residential furnace",
  },
  {
    src: "/videos/hero-consult.mp4",
    label: "Technician reviewing options with a homeowner",
  },
  {
    src: "/videos/hero-closing.mp4",
    label: "Aerial view pulling back from the shop and fleet",
  },
];

export function HeroReel() {
  const firstRef = useRef<HTMLVideoElement>(null);
  const secondRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);
  const slotRef = useRef(0);
  const [slot, setSlot] = useState(0);
  const [label, setLabel] = useState(clips[0].label);
  const [ready, setReady] = useState(false);
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    const start = () => setMountVideo(true);

    if (document.readyState === "complete") {
      timerId = setTimeout(start, 2500);
      return () => {
        if (timerId !== undefined) clearTimeout(timerId);
      };
    }

    const onLoad = () => {
      timerId = setTimeout(start, 2500);
    };
    window.addEventListener("load", onLoad, { once: true });

    return () => {
      window.removeEventListener("load", onLoad);
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, []);

  function advance() {
    const outgoing = slotRef.current === 0 ? firstRef.current : secondRef.current;
    outgoing?.pause();
    const nextIndex = (indexRef.current + 1) % clips.length;
    const nextSlot = slotRef.current === 0 ? 1 : 0;
    const incoming = nextSlot === 0 ? firstRef.current : secondRef.current;
    const clip = clips[nextIndex];
    if (!incoming) return;
    incoming.src = clip.src;
    incoming.currentTime = 0;
    void incoming.play();
    indexRef.current = nextIndex;
    slotRef.current = nextSlot;
    setSlot(nextSlot);
    setLabel(clip.label);
  }

  function prepareNext(currentIndex: number) {
    const nextSlot = slotRef.current === 0 ? 1 : 0;
    const nextVideo = nextSlot === 0 ? firstRef.current : secondRef.current;
    const nextClip = clips[(currentIndex + 1) % clips.length];
    if (nextVideo && !nextVideo.getAttribute("src")) {
      nextVideo.src = nextClip.src;
      nextVideo.preload = "metadata";
    }
  }

  return (
    <>
      <Image
        src="/photos/outdoor-inspect.jpg"
        alt=""
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}
      />
      {mountVideo ? (
        <>
          <video
            ref={firstRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready && slot === 0 ? "opacity-100" : "opacity-0"}`}
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-label={label}
            onPlaying={() => {
              setReady(true);
              prepareNext(indexRef.current);
            }}
            onEnded={() => {
              if (slotRef.current === 0) advance();
            }}
          >
            <source src={clips[0].src} type="video/mp4" />
          </video>
          <video
            ref={secondRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready && slot === 1 ? "opacity-100" : "opacity-0"}`}
            muted
            playsInline
            preload="none"
            aria-hidden="true"
            onPlaying={() => {
              prepareNext(indexRef.current);
            }}
            onEnded={() => {
              if (slotRef.current === 1) advance();
            }}
          />
        </>
      ) : null}
    </>
  );
}
