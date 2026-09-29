import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { nearbyCities } from "@/content/cities";
import { cityPhoto } from "@/content/city-photos";
import { regions } from "@/content/site";
import type { City } from "@/content/types";
import { cityFaqs, cityOffers, contextCityOffers } from "@/lib/content";
import { cityPath, locationPath, servicePath } from "@/lib/paths";

const sidebarServices = [
  { label: "Air Conditioning", href: servicePath("air-conditioning") },
  { label: "Heating", href: servicePath("heating") },
  { label: "Ductless", slug: "ductless-mini-splits" },
  { label: "AC Repair", slug: "ac-repair" },
  { label: "Furnace Replacement", slug: "furnace-replacement" },
  { label: "Commercial", slug: "commercial-hvac" },
] as const;

const resources = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Financing", href: "/financing" },
  { label: "FAQ", href: "/faq" },
];

export function CityArticle({ city }: { city: City }) {
  const region = regions[city.region];
  const nearby = nearbyCities(city);
  const photo = cityPhoto(city.slug);
  const offers = cityOffers(city);
  const contextOffers = contextCityOffers(city);

  return (
    <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16 lg:py-16">
      <article>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Service areas", href: "/service-areas" },
            { label: city.name },
          ]}
        />
        <p className="mt-8 text-sm font-semibold text-mute">
          {region.name} · {city.county} County
        </p>
        <h1 className="mt-3 font-serif text-4xl uppercase leading-[1.05] md:text-5xl">
          HVAC service in {city.name}, TX, and surrounding areas
        </h1>
        <figure className="mt-8">
          <div className="relative aspect-[16/9] overflow-hidden bg-sand">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 860px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-mute">
            Photo:{" "}
            <a href={photo.href} className="underline" rel="noopener noreferrer">
              {photo.credit}
            </a>
            , {photo.license}
          </figcaption>
        </figure>
        <div className="mt-8 space-y-4 text-lg leading-relaxed">
          <p>{city.intro}</p>
          <p>{city.housing}</p>
          <p>{city.climate}</p>
          <p>
            We regularly schedule {city.neighborhoods.join(", ")}. ZIP codes on this route:{" "}
            {city.zips.join(", ")}. {city.responseNote}
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {offers.map((offer) => {
            const service = offer.services[0]?.service;
            if (!service) return null;
            return (
              <section key={offer.issue.title}>
                <h2 className="font-serif text-3xl">{service.shortName}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-mute">
                  <p>{offer.issue.body}</p>
                  <p>
                    When this shows up in {city.name}, the job is{" "}
                    <Link
                      href={locationPath(city.slug, service.slug)}
                      className="font-semibold text-ink underline"
                    >
                      {service.shortName}
                    </Link>
                    .
                  </p>
                </div>
              </section>
            );
          })}
          {contextOffers.map(({ service, reason }) => (
            <section key={service.slug}>
              <h2 className="font-serif text-3xl">{service.shortName}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-mute">
                <p>{reason}</p>
                <p>
                  <Link
                    href={locationPath(city.slug, service.slug)}
                    className="font-semibold text-ink underline"
                  >
                    {service.shortName} in {city.name}
                  </Link>{" "}
                  is booked on its own route, separate from house calls.
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-3xl">Surrounding areas</h2>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-lg">
            {nearby.map((item) => (
              <li key={item.slug}>
                <Link href={cityPath(item.slug)} className="font-semibold text-ink underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-3xl">{city.name} questions</h2>
          <div className="mt-6">
            <FaqList items={cityFaqs(city)} />
          </div>
        </section>
      </article>

      <aside className="space-y-6 lg:sticky lg:top-36">
        <nav className="bg-navy p-6 text-white" aria-label="Our services">
          <h2 className="font-serif text-2xl uppercase">Our services</h2>
          <ul className="mt-2">
            {sidebarServices.map((item) => {
              const href = "slug" in item ? locationPath(city.slug, item.slug) : item.href;
              return (
                <li key={item.label} className="border-b border-white/25">
                  <Link
                    href={href}
                    className="block py-3 font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="bg-navy p-6 text-white" aria-label="Resources">
          <h2 className="font-serif text-2xl uppercase">Resources</h2>
          <ul className="mt-2">
            {resources.map((item) => (
              <li key={item.href} className="border-b border-white/25">
                <Link
                  href={item.href}
                  className="block py-3 font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
