import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaActions } from "@/components/CtaActions";
import { FaqList } from "@/components/FaqList";
import { citiesIn } from "@/content/cities";
import { getService, relatedServices } from "@/content/services";
import type { Service } from "@/content/types";
import { servicePhoto } from "@/lib/media";
import { mainNav, type NavLink } from "@/lib/navigation";
import { cityPath, locationPath, servicePath } from "@/lib/paths";

const crumbsFor = (service: Service) => [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: service.shortName },
];

function hubLinks(service: Service) {
  const item = mainNav().find((entry) => entry.href === servicePath(service.slug));
  const self = servicePath(service.slug);
  return (item?.links ?? []).filter((link) => link.href !== self);
}

function slugFromHref(href: string) {
  const prefix = "/services/";
  return href.startsWith(prefix) ? href.slice(prefix.length) : undefined;
}

export function ServiceArticle({ service }: { service: Service }) {
  const links = hubLinks(service);
  if (links.length > 0) {
    return (
      <>
        <HubHero service={service} />
        <HubGrid service={service} links={links} />
        <Intro service={service} />
        <FaqBlock service={service} />
        <ServiceCities service={service} />
      </>
    );
  }

  return (
    <>
      <DetailOpen service={service} />
      <ServiceStory service={service} />
      <ServiceCities service={service} />
    </>
  );
}

function HubHero({ service }: { service: Service }) {
  const photo = servicePhoto(service.slug);
  return (
    <section className="relative min-h-[560px] bg-navy text-white">
      <Image src={photo.src} alt={photo.alt} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/25" />
      <div className="relative mx-auto flex min-h-[560px] max-w-[1240px] items-end px-5 py-14">
        <div className="max-w-2xl">
          <Breadcrumbs items={crumbsFor(service)} tone="light" />
          <h1 className="display mt-6 text-4xl text-white md:text-6xl">{service.headline}</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">{service.description}</p>
          <CtaActions
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            callClassName="btn btn-primary w-full sm:w-auto"
            scheduleClassName="btn btn-light w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

function HubGrid({ service, links }: { service: Service; links: NavLink[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 lg:py-20">
        <h2 className="display max-w-3xl text-4xl md:text-5xl">Explore our {service.shortName.toLowerCase()} services</h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => {
            const slug = slugFromHref(link.href);
            const child = slug ? getService(slug) : undefined;
            const photo = servicePhoto(slug ?? service.slug);
            return (
              <li key={link.href}>
                <article>
                  <Link href={link.href} className="relative block aspect-[16/10] overflow-hidden">
                    <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                  </Link>
                  <h3 className="mt-4 text-2xl font-bold text-navy">
                    <Link href={link.href}>{link.label}</Link>
                  </h3>
                  <p className="mt-2 leading-relaxed text-mute">{child?.outcome ?? "A separate visit, with the price in writing before any work starts."}</p>
                  <Link href={link.href} className="learn-more mt-3">
                    Learn more <span aria-hidden="true">&gt;</span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function DetailOpen({ service }: { service: Service }) {
  switch (service.navGroup) {
    case "cooling":
      return <SplitOpen service={service} photoFirst panelClassName="bg-white" />;
    case "heating":
      return <SplitOpen service={service} photoFirst={false} panelClassName="bg-[#f6f1e8]" />;
    case "air":
      return <OverlapOpen service={service} />;
    case "plans":
      return <CenteredOpen service={service} />;
    case "commercial":
      return <SplitOpen service={service} photoFirst panelClassName="bg-navy" tone="light" />;
    default: {
      const exhaustive: never = service.navGroup;
      return exhaustive;
    }
  }
}

function SplitOpen({
  service,
  photoFirst,
  panelClassName,
  tone = "dark",
}: {
  service: Service;
  photoFirst: boolean;
  panelClassName: string;
  tone?: "dark" | "light";
}) {
  const photo = servicePhoto(service.slug);
  const light = tone === "light";
  const photoPane = (
    <div className={`relative h-80 lg:h-auto lg:min-h-[640px] ${photoFirst ? "" : "lg:order-2"}`}>
      <Image src={photo.src} alt={photo.alt} fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
    </div>
  );
  const copyPane = (
    <div className={`flex items-center px-5 py-12 lg:px-14 ${panelClassName} ${photoFirst ? "" : "lg:order-1"}`}>
      <div className="max-w-xl">
        <Breadcrumbs items={crumbsFor(service)} tone={tone} />
        <p className="kicker mt-6 text-orange">{service.shortName}</p>
        <h1 className={`display mt-3 text-4xl md:text-5xl ${light ? "text-white" : "text-navy"}`}>{service.headline}</h1>
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/80" : "text-mute"}`}>{service.description}</p>
        <CtaActions
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          callClassName="btn btn-primary w-full sm:w-auto"
          scheduleClassName={`btn w-full sm:w-auto ${light ? "btn-light" : "btn-line"}`}
        />
      </div>
    </div>
  );

  return (
    <section className="lg:grid lg:min-h-[640px] lg:grid-cols-2">
      {photoPane}
      {copyPane}
    </section>
  );
}

function OverlapOpen({ service }: { service: Service }) {
  const photo = servicePhoto(service.slug);
  return (
    <section className="bg-white">
      <div className="relative h-[420px] lg:h-[520px]">
        <Image src={photo.src} alt={photo.alt} fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="relative z-10 -mt-28 max-w-2xl bg-white p-8 shadow-xl lg:-mt-36 lg:p-10">
          <Breadcrumbs items={crumbsFor(service)} />
          <p className="kicker mt-6 text-orange">{service.shortName}</p>
          <h1 className="display mt-3 text-4xl text-navy md:text-5xl">{service.headline}</h1>
          <p className="mt-4 text-lg leading-relaxed text-mute">{service.description}</p>
          <CtaActions
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            callClassName="btn btn-primary w-full sm:w-auto"
            scheduleClassName="btn btn-line w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}

function CenteredOpen({ service }: { service: Service }) {
  const photo = servicePhoto(service.slug);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-14 text-center lg:py-20">
        <div className="flex justify-center">
          <Breadcrumbs items={crumbsFor(service)} />
        </div>
        <p className="kicker mt-6 text-orange">{service.shortName}</p>
        <h1 className="display mt-3 text-4xl text-navy md:text-6xl">{service.headline}</h1>
        <p className="mt-4 text-lg leading-relaxed text-mute">{service.description}</p>
        <CtaActions
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center"
          callClassName="btn btn-primary w-full sm:w-auto"
          scheduleClassName="btn btn-line w-full sm:w-auto"
        />
      </div>
      <div className="mx-auto max-w-[1100px] px-5 pb-4">
        <div className="relative aspect-[21/9] min-h-48">
          <Image src={photo.src} alt={photo.alt} fill priority className="object-cover" sizes="(min-width: 1100px) 1100px, 100vw" />
        </div>
      </div>
    </section>
  );
}

function Intro({ service }: { service: Service }) {
  return (
    <section className="bg-[#f6f7f8]">
      <div className="mx-auto max-w-3xl space-y-4 px-5 py-14 text-lg leading-relaxed text-mute">
        {service.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function ServiceStory({ service }: { service: Service }) {
  const related = relatedServices(service);
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-[860px] px-5 py-16">
        <div className="space-y-4 text-lg leading-relaxed text-mute">
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h2 className="display mt-16 text-3xl text-navy md:text-4xl">When to call about {service.shortName.toLowerCase()}</h2>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {service.signs.map((sign, index) => (
            <li key={sign.title} className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
              <span className="text-sm font-bold tracking-wide text-orange">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-bold text-navy">{sign.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{sign.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="display mt-16 text-3xl text-navy md:text-4xl">What the visit includes</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {service.checks.map((check, index) => (
            <li key={check} className="border border-line p-5">
              <span className="text-sm font-bold text-orange">0{index + 1}</span>
              <p className="mt-2 leading-relaxed">{check}</p>
            </li>
          ))}
        </ol>

        <h2 className="display mt-16 text-3xl text-navy md:text-4xl">How a visit goes</h2>
        <ol className="mt-8 grid gap-8">
          {service.process.map((step, index) => (
            <li key={step.title}>
              <span className="text-sm font-bold tracking-wide text-orange">STEP 0{index + 1}</span>
              <h3 className="mt-2 text-2xl font-bold text-navy">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-mute">{step.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="display mt-16 text-3xl text-navy md:text-4xl">{service.shortName} questions</h2>
        <div className="mt-6">
          <FaqList items={service.faqs} />
        </div>

        {related.length > 0 ? (
          <p className="mt-12 text-mute">
            Related:{" "}
            {related.map((item, index) => (
              <span key={item.slug}>
                {index > 0 ? ", " : null}
                <Link href={servicePath(item.slug)} className="font-semibold text-navy underline">
                  {item.shortName}
                </Link>
              </span>
            ))}
            .
          </p>
        ) : null}
      </div>
    </article>
  );
}

function FaqBlock({ service }: { service: Service }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[860px] px-5 py-16">
        <h2 className="display text-3xl text-navy md:text-4xl">{service.shortName} questions</h2>
        <div className="mt-6">
          <FaqList items={service.faqs} />
        </div>
      </div>
    </section>
  );
}

function ServiceCities({ service }: { service: Service }) {
  const regions = [
    { id: "dallas" as const, label: "Dallas–Fort Worth" },
    { id: "austin" as const, label: "Greater Austin" },
  ];

  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14">
        <h2 className="display text-3xl text-navy md:text-4xl">{service.shortName} by city</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {regions.map((region) => (
            <div key={region.id}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-orange">{region.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {citiesIn(region.id).map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={service.locationPage ? locationPath(city.slug, service.slug) : cityPath(city.slug)}
                      className="text-lg hover:text-orange"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
