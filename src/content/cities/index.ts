import { austinCities } from "@/content/cities/austin";
import { dallasCities } from "@/content/cities/dallas";
import type { City, RegionId } from "@/content/types";

export const cities: City[] = [...dallasCities, ...austinCities];

const bySlug = new Map(cities.map((city) => [city.slug, city]));

for (const city of cities) {
  for (const slug of city.nearby) {
    if (!bySlug.has(slug)) {
      throw new Error(`${city.slug} lists unknown nearby city ${slug}`);
    }
  }
}

export function getCity(slug: string) {
  return bySlug.get(slug);
}

export function citiesIn(region: RegionId) {
  return cities.filter((city) => city.region === region);
}

export function nearbyCities(city: City) {
  return city.nearby
    .map((slug) => bySlug.get(slug))
    .filter((item): item is City => Boolean(item));
}
