import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HVAC Careers",
  description:
    "Technician and installer roles with Home Ranger Services in Dallas–Fort Worth and Greater Austin.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Technicians and installers for two Texas metros"
        description="We hire people who can diagnose, explain, and leave a house the way they found it. Dallas–Fort Worth and Greater Austin are separate routes."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-lg leading-relaxed text-mute">
        <p>
          The work is residential service and light commercial: no-cool calls, heat calls, maintenance, change-outs, and duct corrections. You should be comfortable saying when a part is the whole job.
        </p>
        <p>
          Bring the license you hold, or say clearly which one you are working toward. Texas Air Conditioning and Refrigeration licensing matters, and so does a driving record you can talk about. We will ask.
        </p>
        <p>
          Tell us which metro you want. A Frisco route and a Kyle route are not the same week.
        </p>
        <Link href="/contact?topic=careers" className="btn btn-primary">
          Send a note
        </Link>
      </article>
    </>
  );
}
