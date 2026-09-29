import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaActions } from "@/components/CtaActions";
import { HeroVideo } from "@/components/HeroVideo";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  video,
  image,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: { label: string; href?: string }[];
  video?: { src: string; poster?: string; label: string };
  image?: { src: string; alt: string; credit: string; license: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {video ? (
        <>
          <HeroVideo src={video.src} poster={video.poster} label={video.label} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/35" />
        </>
      ) : null}
      {image && !video ? (
        <>
          <Image src={image.src} alt={image.alt} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/35" />
        </>
      ) : null}
      <div className="relative mx-auto max-w-[1200px] px-5 py-10 md:py-20">
        <Breadcrumbs items={crumbs} tone="light" />
        {eyebrow ? <p className="kicker mt-8 text-orange">{eyebrow}</p> : null}
        <h1 className="display mt-4 max-w-4xl text-4xl text-white md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>
        <CtaActions
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          callClassName="btn btn-primary w-full sm:w-auto"
          scheduleClassName="btn btn-light w-full sm:w-auto"
        />
        {image && !video ? (
          <p className="mt-6 text-xs text-white/60">
            Photo:{" "}
            <a href={image.href} className="underline">
              {image.credit}
            </a>
            , {image.license}
          </p>
        ) : null}
      </div>
    </section>
  );
}
