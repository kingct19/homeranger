import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { servicePath } from "@/lib/paths";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HVAC Promotions",
  description:
    "Seasonal HVAC timing for Dallas and Austin: spring cooling checks, summer no-cool priority, fall heat checks, and maintenance plans.",
  path: "/promotions",
});

const seasons = [
  {
    name: "Spring",
    title: "Cooling check before the first long heat wave",
    body: "Coils, drains, and capacitors fail quietly through winter. A spring visit is the cheap version of an August shutdown.",
  },
  {
    name: "Summer",
    title: "No-cool calls get a real window",
    body: "Extreme-heat breakdowns are prioritized against the board that already exists. We tell you the window instead of promising ‘sometime today’ to everyone.",
  },
  {
    name: "Fall",
    title: "Run the heat while you still have time",
    body: "Furnaces and heat-pump backup sit idle for months. Fall is when a dirty sensor or a dead heat strip is an appointment, not an emergency.",
  },
  {
    name: "Winter",
    title: "Freeze weeks are about backup heat",
    body: "A Texas freeze is short and rude. Systems that only work in mild weather show themselves then. If the house is unsafe or you smell gas, shut it down and call for emergency help first.",
  },
];

export default function PromotionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Promotions"
        title="The offer is a clear scope, not a coupon we invented"
        description="We are not advertising a discount that is not on your paperwork. The standing option is a maintenance plan, and the seasonal advice below is when to use it."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Promotions" },
        ]}
      />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {seasons.map((season) => (
            <section key={season.name} className="panel p-6">
              <p className="kicker text-leaf">{season.name}</p>
              <h2 className="mt-3 font-serif text-2xl">{season.title}</h2>
              <p className="mt-3 leading-relaxed text-mute">{season.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 max-w-2xl leading-relaxed text-mute">
          Membership details, including what the two yearly visits include, are confirmed in writing when you join. Read the{" "}
          <Link href={servicePath("maintenance-plans")} className="font-semibold text-ink underline">
            homeowner plan
          </Link>{" "}
          or the{" "}
          <Link href="/commercial-plans" className="font-semibold text-ink underline">
            commercial plan
          </Link>
          .
        </p>
      </div>
      <CtaBand />
    </>
  );
}
