import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaActions } from "@/components/CtaActions";
import { CtaBand } from "@/components/CtaBand";
import { getService } from "@/content/services";
import { servicePhoto } from "@/lib/media";
import { serviceGroups } from "@/lib/navigation";
import { servicePath } from "@/lib/paths";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HVAC Services",
  description:
    "Air conditioning, heating, ductless, indoor air, maintenance, and light commercial HVAC from Home Ranger Services in Dallas–Fort Worth and Greater Austin.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-[1240px] items-end gap-8 px-5 py-14 lg:grid-cols-[1.3fr_0.7fr] lg:py-20">
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services" },
              ]}
            />
            <h1 className="display mt-6 text-4xl text-navy md:text-6xl">Pick the job. Then pick the city.</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">
              Repair, replacement, maintenance, and light commercial work for Dallas–Fort Worth and Greater Austin. Each service below is its own page.
            </p>
          </div>
          <CtaActions
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
            callClassName="btn btn-primary w-full sm:w-auto"
            scheduleClassName="btn btn-line w-full sm:w-auto"
          />
        </div>
      </section>
      {serviceGroups.map((group, groupIndex) => (
        <section key={group.title} className={groupIndex % 2 === 0 ? "bg-white" : "bg-[#f6f7f8]"}>
          <div className="mx-auto max-w-[1240px] px-5 py-14 lg:py-20">
            <h2 className="display text-3xl text-navy md:text-4xl">{group.title}</h2>
            <ul className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {group.slugs.map((slug) => {
                const service = getService(slug);
                if (!service) return null;
                const photo = servicePhoto(service.slug);
                return (
                  <li key={`${group.title}-${slug}`}>
                    <article>
                      <Link href={servicePath(service.slug)} className="relative block aspect-[16/10] overflow-hidden">
                        <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                      </Link>
                      <h3 className="mt-4 text-2xl font-bold text-navy">
                        <Link href={servicePath(service.slug)}>{service.name}</Link>
                      </h3>
                      <p className="mt-2 leading-relaxed text-mute">{service.outcome}</p>
                      <Link href={servicePath(service.slug)} className="learn-more mt-3">
                        Learn more <span aria-hidden="true">&gt;</span>
                      </Link>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
