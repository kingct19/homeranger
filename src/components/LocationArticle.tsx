import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { nearbyCities } from "@/content/cities";
import { regions } from "@/content/site";
import { locationServices, relatedServices } from "@/content/services";
import type { City, Service } from "@/content/types";
import { fill, issuesFor, locationFaqs } from "@/lib/content";
import { servicePhoto } from "@/lib/media";
import { cityPath, locationPath, servicePath } from "@/lib/paths";

export function LocationArticle({ city, service }: { city: City; service: Service }) {
  const region = regions[city.region];
  const issues = issuesFor(city, service.tags);
  const faqs = locationFaqs(city, service);
  const related = relatedServices(service).filter((item) => item.locationPage);
  const others = locationServices().filter((item) => item.slug !== service.slug);
  const photo = servicePhoto(service.slug);

  return (
    <>
      <PageHero
        eyebrow={`${city.name}, TX · ${region.name}`}
        title={`${service.name} in ${city.name}`}
        description={`${service.description} ${city.signature}`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service areas", href: "/service-areas" },
          { label: city.name, href: cityPath(city.slug) },
          { label: service.shortName },
        ]}
      />
      <article className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div>
            <div className="relative mb-10 aspect-[16/9] overflow-hidden bg-black">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 1024px) 70vw, 100vw" />
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-mute">{fill(service.localAngle, city)}</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-mute">{city.intro}</p>

            <h2 className="mt-14 font-serif text-3xl">
              {service.shortName} issues we see in {city.name}
            </h2>
            <div className="mt-6 grid gap-4">
              {issues.map((issue) => (
                <section key={issue.title} className="panel p-5">
                  <h3 className="font-semibold">{issue.title}</h3>
                  <p className="mt-2 leading-relaxed text-mute">{issue.body}</p>
                </section>
              ))}
            </div>

            <h2 className="mt-14 font-serif text-3xl">What the visit includes</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {service.checks.map((check) => (
                <li key={check} className="rounded-2xl bg-cream px-4 py-3 text-sm leading-relaxed">
                  {check}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-serif text-3xl">Neighborhoods in this {city.name} route</h2>
            <p className="mt-3 text-mute">{city.responseNote}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {city.neighborhoods.map((name) => (
                <li key={name} className="rounded-full border border-line px-3 py-1.5 text-sm">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-mute">ZIP codes: {city.zips.join(", ")}.</p>

            <h2 className="mt-14 font-serif text-3xl">How we handle the job</h2>
            <ol className="mt-6 space-y-5">
              {service.process.map((step, index) => (
                <li key={step.title}>
                  <h3 className="font-semibold">
                    <span className="mr-2 text-copper">0{index + 1}</span>
                    {step.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-mute">{step.body}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-14 font-serif text-3xl">
              {service.shortName} questions in {city.name}
            </h2>
            <div className="mt-6">
              <FaqList items={faqs} />
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-ranger p-5 text-cream">
              <p className="kicker text-apricot">{city.name}</p>
              <p className="mt-3 font-serif text-2xl">{service.shortName}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">{city.signature}</p>
              <Link href="/contact" className="btn btn-primary mt-5">
                Book in {city.name}
              </Link>
            </div>
            <div className="panel p-5">
              <p className="kicker text-leaf">Also in {city.name}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {others.slice(0, 8).map((item) => (
                  <li key={item.slug}>
                    <Link href={locationPath(city.slug, item.slug)} className="hover:text-leaf">
                      {item.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-3xl">Same service nearby</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {nearbyCities(city).map((item) => (
              <li key={item.slug}>
                <Link
                  href={locationPath(item.slug, service.slug)}
                  className="inline-block rounded-full border border-line bg-white px-3 py-1.5 text-sm hover:border-ranger"
                >
                  {service.shortName} in {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={servicePath(service.slug)}
                className="inline-block rounded-full border border-line bg-white px-3 py-1.5 text-sm hover:border-ranger"
              >
                All {service.shortName}
              </Link>
            </li>
          </ul>
          {related.length > 0 ? (
            <p className="mt-6 text-sm text-mute">
              Related in {city.name}:{" "}
              {related.map((item, index) => (
                <span key={item.slug}>
                  {index > 0 ? ", " : null}
                  <Link href={locationPath(city.slug, item.slug)} className="font-semibold text-ink underline">
                    {item.shortName}
                  </Link>
                </span>
              ))}
              .
            </p>
          ) : null}
        </section>
      </article>
    </>
  );
}
