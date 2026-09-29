import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Reviews",
  description:
    "How Home Ranger Services handles reviews in Dallas and Austin. We publish comments from customers, not quotes written for the website.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Reviews should come from the person who was home"
        description="This page will hold real comments as jobs are completed in Dallas–Fort Worth and Greater Austin. It does not hold invented ones."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Reviews" },
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-lg leading-relaxed text-mute">
        <p>
          After a completed job we can send a review link. What you write is yours. We do not draft it, edit a star rating, or post a neighbor’s comment under another name.
        </p>
        <p>
          Until those comments exist, judge a visit on three things: whether we arrived in the window we gave you, whether the explanation matched what you could see, and whether the price you approved is the price you were billed.
        </p>
        <p>
          If a visit missed that standard, write{" "}
          <Link href="/contact" className="font-semibold text-ink underline">
            the office
          </Link>{" "}
          and say so. We would rather correct a job than collect a softer sentence.
        </p>
      </article>
      <CtaBand />
    </>
  );
}
