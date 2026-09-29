import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { citiesIn } from "@/content/cities";
import { regions } from "@/content/site";
import { cityPath } from "@/lib/paths";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HVAC Service Areas in Dallas and Austin",
  description:
    "Home Ranger Services covers Dallas–Fort Worth and Greater Austin, with a page for each city we schedule and the HVAC problems common there.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Dallas–Fort Worth and Greater Austin"
        description="Two metros, scheduled as different routes. Open a city for the housing, the weather, and the services we list there."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service areas" },
        ]}
        video={{
          src: "/videos/skylines.mp4",
          poster: "/photos/skylines-poster.jpg",
          label: "Dallas skyline at sunset, then the Austin skyline along Lady Bird Lake",
        }}
      />
      <div className="mx-auto max-w-7xl space-y-16 px-5 py-16">
        {(["dallas", "austin"] as const).map((regionId) => {
          const region = regions[regionId];
          return (
            <section key={regionId}>
              <h2 className="font-serif text-4xl">{region.name}</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-mute">{region.summary}</p>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {citiesIn(regionId).map((city) => (
                  <li key={city.slug}>
                    <Link href={cityPath(city.slug)} className="panel block h-full p-6 hover:border-ranger">
                      <h3 className="font-serif text-2xl">
                        {city.name}, TX
                      </h3>
                      <p className="mt-2 text-sm text-leaf">{city.county} County</p>
                      <p className="mt-3 leading-relaxed text-mute">{city.signature}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
      <CtaBand />
    </>
  );
}
