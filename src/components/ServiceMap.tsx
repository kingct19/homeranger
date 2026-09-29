"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapPoint = {
  slug: string;
  name: string;
  region: "dallas" | "austin";
  lat: number;
  lng: number;
};

const pinColor = {
  dallas: "#111111",
  austin: "#e06a2c",
} as const;

export function ServiceMap({ points }: { points: MapPoint[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    let cancelled = false;

    void import("leaflet").then((leaflet) => {
      if (cancelled || !containerRef.current || mapRef.current) return;
      const wrapped = leaflet as unknown as { default?: typeof leaflet };
      const L = typeof leaflet.map === "function" ? leaflet : wrapped.default;
      if (!L) return;
      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const markers = points.map((point) => {
        const icon = L.divIcon({
          className: "service-pin",
          html: `<span style="display:block;width:16px;height:16px;border-radius:9999px;background:${pinColor[point.region]};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.45)"></span>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        const marker = L.marker([point.lat, point.lng], { icon, title: point.name }).addTo(map);
        marker.bindPopup(
          `<a href="/service-areas/${point.slug}" style="font-weight:600;color:#111">${point.name}</a>`,
        );
        return marker;
      });

      if (markers.length > 0) {
        map.fitBounds(L.featureGroup(markers).getBounds().pad(0.2));
      }
      mapRef.current = map;
      requestAnimationFrame(() => {
        map.invalidateSize();
      });
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [points]);

  return (
    <div className="relative z-0 overflow-hidden bg-[#d7e4ea]">
      <div ref={containerRef} className="h-[320px] w-full lg:h-[520px]" role="region" aria-label="Map of Home Ranger service cities" />
      <div className="flex flex-wrap items-center gap-5 bg-white px-4 py-3 text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-black" aria-hidden="true" />
          Dallas–Fort Worth
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-orange" aria-hidden="true" />
          Greater Austin
        </span>
        <span className="text-mute">Each pin opens that city’s service page.</span>
      </div>
    </div>
  );
}
