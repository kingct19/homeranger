"use client";

import { useRef, useState } from "react";

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

  return (
    <>
      <video
        ref={firstRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${slot === 0 ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        playsInline
        poster="/photos/hero-close.jpg"
        aria-label={label}
        onEnded={() => {
          if (slotRef.current === 0) advance();
        }}
      >
        <source src={clips[0].src} type="video/mp4" />
      </video>
      <video
        ref={secondRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${slot === 1 ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        preload="auto"
        poster="/photos/roof-tech.jpg"
        onEnded={() => {
          if (slotRef.current === 1) advance();
        }}
      >
        <source src={clips[1].src} type="video/mp4" />
      </video>
    </>
  );
}
