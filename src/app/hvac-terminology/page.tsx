import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { terms } from "@/content/glossary";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HVAC Terminology",
  description:
    "Plain-language HVAC terms for Dallas and Austin homeowners: SEER2, heat pumps, static pressure, line sets, and the parts technicians mention on a visit.",
  path: "/hvac-terminology",
});

export default function TerminologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Terminology"
        title="The words on a quote, in plain language"
        description="A short glossary for the terms that show up on Texas heating and cooling visits. It is a reference, not a sales sheet."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "HVAC terminology" },
        ]}
      />
      <dl className="mx-auto max-w-3xl space-y-8 px-5 py-16">
        {terms.map((term) => (
          <div key={term.slug} id={term.slug} className="scroll-mt-28">
            <dt className="font-serif text-2xl">{term.name}</dt>
            <dd className="mt-2 leading-relaxed text-mute">{term.body}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
