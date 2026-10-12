import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description:
    "Terms for using the Home Ranger Services website. The site explains our work. The job itself is the written quote you approve.",
  path: "/terms",
});

const updated = "October 12, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Using this website"
        description="These terms cover homerangerservices.com. They are not the paperwork for a repair, a replacement, or a maintenance plan."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 leading-relaxed text-mute">
        <p className="text-sm font-semibold text-navy">Last updated {updated}</p>
        <p className="mt-5">
          {site.name} publishes this website to explain heating, cooling, and indoor-air work in Dallas–Fort Worth and Greater Austin. By using the site, you agree to these terms. If you do not agree, do not use the site. Questions about them go to{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
            {site.email}
          </a>
          .
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">The website is not the job</h2>
        <p className="mt-3">
          Pages, guides, and answers on this site are information. They are not a diagnosis of your system and they are not an offer to do work. A visit, a repair, a replacement, a maintenance plan, or a commercial agreement starts when we accept it and you approve the written scope and price for that address.
        </p>
        <p className="mt-3">
          If a page and your paperwork disagree, the paperwork controls. That includes diagnostic fees, what a visit includes, how a plan can be cancelled, and any payment terms.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Prices on the site</h2>
        <p className="mt-3">
          Planning ranges in the guides are not quotes. A price is real when it is written for your house or building and the equipment that is actually installed. We do not lock a price from a web page, a phone description, or a photo.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Scheduling and service area</h2>
        <p className="mt-3">
          City pages describe where we schedule work. Listing a city is not a promise that every request is accepted, or that it is accepted the same day. We confirm a window when we accept the request. If that window changes, we tell you.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Financing</h2>
        <p className="mt-3">
          Payment options, when they are available, are for qualifying replacements or large repairs. Approval, rate, and term come from the lender, not from this website. We do not publish a rate here. Applying is a separate step with that lender, under that lender’s terms. A payment plan does not change the scope you approved.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Messages you send</h2>
        <p className="mt-3">
          The contact form does not create an account and it does not store the note on this website. Submitting it opens your email application with a message addressed to {site.email}. Sending that email is a request for us to reply. It is not a booked appointment until we confirm one.
        </p>
        <p className="mt-3">
          Do not put card numbers, bank details, Social Security numbers, or other sensitive financial information in that email. How we handle the message is described in the{" "}
          <Link href="/privacy" className="font-semibold text-navy underline">
            privacy policy
          </Link>
          .
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Acceptable use</h2>
        <p className="mt-3">You may read the site and share links to it. You may not:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Copy the site, the writing, the logo, or the illustrated technician and present them as another company.</li>
          <li>Scrape the site in a way that degrades it for other people, or use it to send spam.</li>
          <li>Attempt to break, probe, or bypass the site.</li>
          <li>Use the site to impersonate Home Ranger Services or a technician.</li>
        </ul>

        <h2 className="mt-10 font-serif text-2xl text-navy">Our content</h2>
        <p className="mt-3">
          The name Home Ranger Services, the logo, the site design, and the original writing are ours. The illustrated technician is a brand character, not a photograph of an employee. Photos credited to other people stay under the license named next to them. You may not remove those credits or reuse those photos beyond what their license allows.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Other websites</h2>
        <p className="mt-3">
          Some pages link to news, reference material, map tiles, or photo sources we do not operate. Those sites have their own terms. A link is not an endorsement of everything on that site.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">The site can change or be unavailable</h2>
        <p className="mt-3">
          We can update, correct, or remove pages, including these terms, without notice on the site beyond changing this page. The date at the top is the date of the current version. The site can also be unavailable while it is being fixed or hosted. We do not promise that every page is complete or current. Equipment and local conditions change, and a page can lag behind a job.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Liability for the website</h2>
        <p className="mt-3">
          The website is provided as it is. To the extent the law allows, we are not liable for decisions you make from a page alone, or for loss caused by a site outage, a broken link, or an email that never left your own mail application. This limit does not change any responsibility we have for work you actually hire us to do. That responsibility is the one in your paperwork, and the one the law already gives you.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Texas law</h2>
        <p className="mt-3">
          These website terms are governed by the laws of the State of Texas, without regard to conflict-of-law rules. They do not replace a service agreement signed for a specific job.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Contact</h2>
        <p className="mt-3">
          {site.name}
          <br />
          Dallas–Fort Worth and Greater Austin
          <br />
          <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
            {site.email}
          </a>
        </p>
      </article>
    </>
  );
}
