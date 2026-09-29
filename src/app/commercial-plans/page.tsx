import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { servicePath } from "@/lib/paths";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Commercial HVAC Reliability Plans",
  description:
    "Documented maintenance for light commercial HVAC in Dallas–Fort Worth and Greater Austin: photos, condition notes, and a repair priority list.",
  path: "/commercial-plans",
});

const items = [
  {
    title: "A list of the equipment, not a handshake",
    body: "Each unit gets a name, a location, and a model number when the plate is readable. The next visit should not start with a roof search.",
  },
  {
    title: "Photos and a priority list",
    body: "Filters, belts, drains, coils, and the parts that are wearing out. Items are marked do now, schedule, or leave alone.",
  },
  {
    title: "Repairs stay separate",
    body: "The plan is the inspection and the record. A repair found during the visit is quoted and waits for approval.",
  },
];

export default function CommercialPlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Reliability plans for light commercial systems"
        description="For offices, retail, and restaurants in Dallas–Fort Worth and Greater Austin. Split systems, small package units, and common rooftop units. Not central plants."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Commercial plans" },
        ]}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <section key={item.title} className="panel p-6">
              <h2 className="font-serif text-2xl">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-mute">{item.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 max-w-2xl leading-relaxed text-mute">
          Repair work and one-time no-cool calls are on the{" "}
          <Link href={servicePath("commercial-hvac")} className="font-semibold text-ink underline">
            commercial HVAC
          </Link>{" "}
          page. Plan pricing is confirmed in writing for the equipment list we build at the first visit.
        </p>
      </div>
      <CtaBand
        title="Send the building and the hours you keep"
        body="Tell us the city, the type of equipment if you know it, and whether the visit needs to be before or after you open."
      />
    </>
  );
}
