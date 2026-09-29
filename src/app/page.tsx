import Image from "next/image";
import Link from "next/link";
import { BrandIcon, type BrandIconName } from "@/components/BrandIcon";
import { CtaActions } from "@/components/CtaActions";
import { CtaBand } from "@/components/CtaBand";
import { HeroReel } from "@/components/HeroReel";
import { JsonLd } from "@/components/JsonLd";
import { WorkVideo } from "@/components/WorkVideo";
import { newsPosts } from "@/content/blog";
import { cities } from "@/content/cities";
import { coordinatesFor } from "@/content/city-coordinates";
import { ServiceMap } from "@/components/ServiceMap";
import { formatDate } from "@/lib/content";
import { cityPath, postPath, servicePath } from "@/lib/paths";
import { businessSchema } from "@/lib/seo";

const services: { href: string; title: string; icon: BrandIconName; image: string; body: string }[] = [
  {
    href: servicePath("air-conditioning"),
    title: "Air Conditioning",
    icon: "cooling",
    image: "/photos/condenser-kneel.jpg",
    body: "Repair and replacement for houses that have to cool through a long Texas summer.",
  },
  {
    href: servicePath("heat-pumps"),
    title: "Heat Pumps",
    icon: "heating",
    image: "/photos/roof-tech.jpg",
    body: "Heating and cooling in one system, sized for the house, with backup heat checked before winter.",
  },
  {
    href: servicePath("heating"),
    title: "Heating Repairs",
    icon: "heating",
    image: "/photos/attic-blue-duct.jpg",
    body: "Furnace and heat-pump fixes, with the price in writing before any work starts.",
  },
  {
    href: servicePath("indoor-air-quality"),
    title: "Indoor Air Quality",
    icon: "air-quality",
    image: "/photos/attic-metal.jpg",
    body: "Filters, humidity, and the returns that actually move air through the house.",
  },
  {
    href: servicePath("ductless-mini-splits"),
    title: "Ductless Systems",
    icon: "installation",
    image: "/photos/wall-cavity.jpg",
    body: "Room-by-room comfort for older houses and additions that should not be opened up for new ducts.",
  },
  {
    href: servicePath("commercial-hvac"),
    title: "Commercial HVAC",
    icon: "repairs",
    image: "/photos/hands-wiring.jpg",
    body: "Light commercial repair and maintenance. We show up when we said we would.",
  },
];

const steps = [
  {
    title: "Talk with Our Team",
    body: "Call or write. We answer with the next step and a window, and we help you schedule the visit.",
  },
  {
    title: "We Show Up On Time",
    body: "The visit is scheduled against the other jobs in that metro. If the window changes, you hear it from us.",
  },
  {
    title: "Honest, Expert Solutions",
    body: "We explain the issue in plain language, lay out the options and the cost, and only recommend what you need.",
  },
];

const standards = [
  {
    title: "The repair that fits",
    body: "A failed part is quoted as a repair when the rest of the system is sound. Replacement is a separate price, shown beside it when that is a real choice.",
  },
  {
    title: "It gets written down",
    body: "Findings, model numbers, and the price you approved are on the paperwork. You should not have to reconstruct the visit from memory.",
  },
  {
    title: "The house is respected",
    body: "Shoe covers, a clear path to the equipment, and a clean work area are part of the job.",
  },
];

const areaHighlights = [
  "dallas",
  "fort-worth",
  "arlington",
  "plano",
  "frisco",
  "irving",
  "mckinney",
  "garland",
  "austin",
  "round-rock",
  "cedar-park",
  "georgetown",
  "pflugerville",
  "leander",
  "kyle",
  "san-marcos",
];

export default function HomePage() {
  const highlighted = areaHighlights
    .map((slug) => cities.find((city) => city.slug === slug))
    .filter((city) => city !== undefined);

  return (
    <>
      <JsonLd data={businessSchema()} />

      <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-navy text-white lg:min-h-[720px]">
        <HeroReel />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/65 lg:bg-gradient-to-r lg:from-navy/80 lg:via-navy/55 lg:to-navy/30" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[1200px] flex-col justify-center px-5 pb-28 pt-10 lg:grid lg:min-h-[720px] lg:items-center lg:py-16 lg:pb-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="hidden text-sm font-bold tracking-[0.14em] text-white lg:block">HEATING | COOLING | AIR QUALITY</p>
            <h1 className="display max-w-[11ch] text-[2.85rem] uppercase leading-[0.9] text-white sm:text-6xl lg:mt-3 lg:max-w-3xl lg:text-[68px] lg:normal-case lg:leading-[0.95]">
              Trusted comfort. Stronger homes.
            </h1>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/90 sm:text-lg lg:max-w-xl lg:text-lg">
              Heating, cooling, and indoor air for homes and small businesses in Dallas–Fort Worth and Greater Austin. We explain the problem, then the next step.
            </p>
            <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-white lg:hidden">
              <span className="border-b border-white pb-0.5">See all our HVAC services</span>
              <span aria-hidden="true">&gt;</span>
            </Link>
            <CtaActions
              className="mt-6 hidden gap-3 lg:flex lg:flex-row lg:flex-wrap"
              callClassName="btn btn-primary lg:w-auto"
              scheduleClassName="btn btn-light lg:w-auto"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="relative mx-auto h-full max-w-[1200px] px-5">
            <Image
              src="/brand/mascot/home-ranger-technician.png"
              alt=""
              width={1312}
              height={1199}
              priority
              className="absolute bottom-0 right-5 w-full max-w-lg translate-y-4 drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:gap-10 lg:py-24">
          <div className="relative order-2 h-64 overflow-hidden bg-navy sm:h-80 lg:order-1 lg:h-auto lg:min-h-[420px]">
            <Image
              src="/photos/roof-tech.jpg"
              alt="Technician working inside an open rooftop air conditioner"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="display text-4xl text-navy md:text-[44px]">Your friendly, local HVAC pros</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mute">
              Home Ranger Services works in Dallas–Fort Worth and Greater Austin. The visit is the same in both: show up when we said we would, name the problem in plain language, and recommend only the work the house needs.
            </p>
            <WorkVideo src="/videos/roof-service.mp4" poster="/photos/roof-tech.jpg" label="Watch video" />
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-12 lg:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-xl text-4xl text-white md:text-[44px]">Your Dallas and Austin HVAC service team</h2>
            <Link href="/services" className="btn btn-light w-fit">
              See how we can help
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:mt-12 lg:grid-cols-3 lg:gap-8">
            {services.map((service) => (
              <article key={service.href}>
                <Link href={service.href} className="relative block aspect-[4/3] overflow-hidden">
                  <Image src={service.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </Link>
                <div className="mt-4 flex items-center gap-3 text-white">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white">
                    <BrandIcon name={service.icon} />
                  </span>
                  <h3 className="text-base font-bold leading-tight lg:text-2xl">{service.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/75 lg:mt-3 lg:text-base">{service.body}</p>
                <Link href={service.href} className="learn-more mt-4 text-white">
                  Learn more <span aria-hidden="true">&gt;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 pt-12 lg:pt-16">
          <h2 className="display max-w-3xl text-4xl text-navy md:text-[44px]">What you can expect from us</h2>
        </div>
        <div className="relative mt-6 min-h-[28rem] lg:mt-8 lg:min-h-[520px]">
          <Image
            src="/photos/homeowner-visit.jpg"
            alt="Technician talking with a homeowner beside an outdoor unit"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="relative mx-auto flex min-h-[28rem] max-w-[1200px] items-end px-5 py-8 lg:min-h-[520px] lg:items-center lg:justify-end lg:py-16">
            <ol className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl lg:p-8">
              {steps.map((step, index) => (
                <li key={step.title} className={index < steps.length - 1 ? "mb-7" : ""}>
                  <span className="text-sm font-bold tracking-wide text-orange">STEP 0{index + 1}</span>
                  <h3 className="mt-2 text-2xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-mute">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3f6]">
        <div className="mx-auto max-w-[1100px] px-5 py-12 text-center lg:py-20">
          <p className="kicker text-orange">Maintenance plans</p>
            <h2 className="display mx-auto mt-4 max-w-3xl text-4xl text-navy md:text-[44px]">
            HVAC maintenance for homes and businesses
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-mute">
            Choose the path that fits the property. Documented maintenance and a written list of findings for homeowners and commercial teams in both metros.
          </p>
          <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
            <article className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-navy">Residential HVAC Maintenance</h3>
              <p className="mt-3 leading-relaxed text-mute">
                A cooling visit and a heating visit, with clear findings and the filter size written down so the next season is not a surprise.
              </p>
              <Link href={servicePath("maintenance-plans")} className="btn btn-orange mt-6 w-full sm:w-auto">
                Explore residential maintenance
              </Link>
            </article>
            <article className="bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-navy">Commercial HVAC Reliability</h3>
              <p className="mt-3 leading-relaxed text-mute">
                An equipment list, condition notes, and a priority list for light commercial systems. Repairs stay a separate, approved price.
              </p>
              <Link href="/commercial-plans" className="btn btn-orange mt-6 w-full sm:w-auto">
                Explore commercial reliability plans
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-12 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display max-w-3xl text-4xl md:text-[44px]">Real customers. Real experiences.</h2>
            <Link href="/reviews" className="btn btn-primary">
              More reviews
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-mute">
            We publish comments after the job, in the customer’s words. Until those are here, this is the standard a visit is supposed to meet.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {standards.map((item) => (
              <article key={item.title} className="flex min-h-72 flex-col border border-line p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-mute">{item.body}</p>
                <p className="mt-6 text-sm font-semibold">Home Ranger standard</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-[1100px] px-5 py-12 text-center lg:py-20">
          <h2 className="display text-4xl md:text-[44px]">Easy financing to fit your budget</h2>
          <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
            {[
              ["Many financing options", "On qualifying replacements we explain the payment choices available that day. A simple part is priced as a repair."],
              ["Easy application", "You see the job price first. A monthly payment does not change what the work includes."],
              ["Get started now", "Ask when you book. The lender sets the rate and the term. We do not invent a number on this page."],
            ].map(([title, body]) => (
              <div key={title}>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white text-sm">✓</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>
          <Link href="/financing" className="btn btn-primary mt-12">
            Get started
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-12 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-4xl md:text-[44px]">Helpful HVAC guides and news</h2>
            <Link href="/blog" className="learn-more">
              All guides <span aria-hidden="true">&gt;</span>
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-mute">
            Briefs on industry reporting that changes a repair or a replacement here, with a link to the original source.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {newsPosts.map((post, index) => (
              <article key={post.slug}>
                <Link href={postPath(post.slug)} className="relative block aspect-[16/10]">
                  <Image
                    src={index === 0 ? "/photos/attic-blue-duct.jpg" : "/photos/condenser-kneel.jpg"}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </Link>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-orange">
                  {post.source?.name}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-snug">
                  <Link href={postPath(post.slug)}>{post.title}</Link>
                </h3>
                <p className="mt-3 leading-relaxed text-mute">{post.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-mute">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <Link href={postPath(post.slug)} className="learn-more text-sm">
                    Read the brief <span aria-hidden="true">&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7f8]">
        <div className="mx-auto max-w-[1240px] px-5 py-12 lg:py-20">
          <h2 className="display text-4xl md:text-[44px] lg:text-center">Serving Dallas and Austin communities.</h2>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {highlighted.map((city) => (
                <li key={city.slug}>
                  <Link href={cityPath(city.slug)} className="flex items-center gap-3 border-b border-black/5 py-3 text-lg hover:text-orange">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-white" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                        />
                      </svg>
                    </span>
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ServiceMap
              points={cities.map((city) => ({
                slug: city.slug,
                name: city.name,
                region: city.region,
                ...coordinatesFor(city.slug),
              }))}
            />
          </div>
          <p className="mt-8 text-center">
            <Link href="/service-areas" className="learn-more">
              See every service area <span aria-hidden="true">&gt;</span>
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
