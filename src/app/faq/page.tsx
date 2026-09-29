import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/content/faqs";
import { faqSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HVAC FAQ",
  description:
    "Answers about Home Ranger Services coverage, repairs, maintenance, licensing, and booking in Dallas–Fort Worth and Greater Austin.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Questions homeowners ask before they book"
        description="Coverage, repairs versus replacement, heat pumps, commercial work, and what to do before a technician arrives."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <FaqList items={faqs} />
      </div>
      <CtaBand />
    </>
  );
}
