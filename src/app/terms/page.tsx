import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description: "Terms for using the Home Ranger Services website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Using this website"
        description="The site explains our services. The work itself is governed by the written quote you approve."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 leading-relaxed text-mute">
        <p>
          Content on {site.url} is for information. Planning price ranges in the guides are not offers. A price becomes real when it is written for your address and your equipment.
        </p>
        <p>
          Service areas describe where we schedule work. They are not a promise that every request can be accepted the same day. We confirm a window when we accept the request.
        </p>
        <p>
          You may not copy the site and present it as another company’s. You may share links. Have an attorney review these terms before you treat them as a complete agreement.
        </p>
      </article>
    </>
  );
}
