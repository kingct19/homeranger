import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HVAC Financing",
  description:
    "Payment options for Home Ranger Services replacements in Dallas and Austin. Lender terms come from the lender, and you see them before you apply.",
  path: "/financing",
});

const points = [
  {
    title: "Replacements, not a capacitor",
    body: "Financing is a tool for a system change-out or a large repair. A simple part is priced as a repair.",
  },
  {
    title: "The price comes first",
    body: "You see the scope and the cash price before anyone talks about a monthly payment. A payment plan does not change what the job includes.",
  },
  {
    title: "The lender sets the terms",
    body: "When third-party financing is available, approval, rate, and term come from that lender. We do not invent a rate on this page.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="A way to pay for the project, after you know what the project is"
        description="Ask about payment options on qualifying replacements in Dallas–Fort Worth and Greater Austin. We explain what is available that day. We do not advertise a rate we cannot put on your paperwork."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Financing" },
        ]}
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-16 md:grid-cols-3">
        {points.map((point, index) => (
          <section key={point.title} className="panel p-6">
            <p className="font-serif text-copper">0{index + 1}</p>
            <h2 className="mt-3 font-serif text-2xl">{point.title}</h2>
            <p className="mt-3 leading-relaxed text-mute">{point.body}</p>
          </section>
        ))}
      </div>
      <CtaBand
        title="Ask what is available for your replacement"
        body="Tell us the city and whether this is a repair or a full system. We will say if financing is a fit before you spend time on an application."
      />
    </>
  );
}
