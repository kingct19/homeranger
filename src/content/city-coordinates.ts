import { cities } from "@/content/cities";

/** City-center coordinates for the service-area map. */
export const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  dallas: { lat: 32.7767, lng: -96.797 },
  "fort-worth": { lat: 32.7555, lng: -97.3308 },
  arlington: { lat: 32.7357, lng: -97.1081 },
  plano: { lat: 33.0198, lng: -96.6989 },
  frisco: { lat: 33.1507, lng: -96.8236 },
  irving: { lat: 32.814, lng: -96.9489 },
  mckinney: { lat: 33.1972, lng: -96.6397 },
  garland: { lat: 32.9126, lng: -96.6389 },
  "grand-prairie": { lat: 32.746, lng: -96.9978 },
  richardson: { lat: 32.9483, lng: -96.7299 },
  carrollton: { lat: 32.9756, lng: -96.8899 },
  denton: { lat: 33.2148, lng: -97.1331 },
  allen: { lat: 33.1032, lng: -96.6706 },
  mesquite: { lat: 32.7668, lng: -96.5992 },
  lewisville: { lat: 33.0462, lng: -96.9942 },
  "flower-mound": { lat: 33.0146, lng: -97.097 },
  austin: { lat: 30.2672, lng: -97.7431 },
  "round-rock": { lat: 30.5083, lng: -97.6789 },
  "cedar-park": { lat: 30.5052, lng: -97.8203 },
  georgetown: { lat: 30.6333, lng: -97.678 },
  pflugerville: { lat: 30.4394, lng: -97.62 },
  leander: { lat: 30.5788, lng: -97.8531 },
  kyle: { lat: 29.9891, lng: -97.8772 },
  buda: { lat: 30.0852, lng: -97.8403 },
  "san-marcos": { lat: 29.8833, lng: -97.9414 },
  lakeway: { lat: 30.3638, lng: -97.9786 },
  "bee-cave": { lat: 30.3085, lng: -97.945 },
  "dripping-springs": { lat: 30.1902, lng: -98.0867 },
  manor: { lat: 30.3408, lng: -97.5569 },
  hutto: { lat: 30.5427, lng: -97.5467 },
};

for (const city of cities) {
  if (!cityCoordinates[city.slug]) {
    throw new Error(`Missing map coordinates for ${city.slug}`);
  }
}

export function coordinatesFor(slug: string) {
  const point = cityCoordinates[slug];
  if (!point) {
    throw new Error(`Missing map coordinates for ${slug}`);
  }
  return point;
}
