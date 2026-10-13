import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How the Home Ranger Services website handles information you send us. The contact form emails the office. We do not store it in a site database.",
  path: "/privacy",
});

const updated = "October 13, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What this website does with your information"
        description="This policy describes the site as it works today. It is not the privacy policy of a lender, an email provider, or a phone company."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 leading-relaxed text-mute">
        <p className="text-sm font-semibold text-navy">Last updated {updated}</p>
        <p className="mt-5">
          {site.name} uses this website to explain our heating and cooling work and to give you a way to reach the office. We do not sell personal information. We do not run advertising trackers on this site. If either of those things changes, this page changes with it.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Information you choose to send</h2>
        <p className="mt-3">
          The contact form asks for your name, phone number, email address, city, the kind of help you need, and a short description. A career note asks for the same fields, with the message used for experience and the metro you want.
        </p>
        <p className="mt-3">
          Submitting the form sends that note by email to {site.email}, and sends a short confirmation to the email address you entered. The site does not keep a database of form entries. After it arrives, it is ordinary email between you and the office. If sending fails, nothing has been delivered until you call or write us directly.
        </p>
        <p className="mt-3">
          Do not include card numbers, bank account numbers, Social Security numbers, or other sensitive financial information in that message.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Information the host may log</h2>
        <p className="mt-3">
          The site is hosted like most websites. The host can keep technical logs of a visit, such as your IP address, browser type, the page you requested, and the time of the request. We use that kind of record to keep the site available and to look into abuse. We do not use it to build an advertising profile.
        </p>
        <p className="mt-3">
          The service-area map loads map tiles from OpenStreetMap. Requesting those tiles is a request to that service, under its own practices. City pages and some photos link out to the sources credited on the page.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Cookies and analytics</h2>
        <p className="mt-3">
          This site does not set advertising cookies and it does not include a third-party analytics product. Your browser may still store ordinary technical data a host needs to deliver the page. If we add analytics or advertising later, we will say so here before we rely on it.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">How we use a message</h2>
        <p className="mt-3">If you email us, we use what you sent to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Reply and, if we accept the request, schedule a visit.</li>
          <li>Prepare for the equipment and the city you named.</li>
          <li>Answer a career inquiry.</li>
          <li>Keep a record of the conversation in our email, the way a business keeps its mail.</li>
        </ul>
        <p className="mt-3">We do not use that email list for unrelated marketing blasts.</p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Who else sees it</h2>
        <p className="mt-3">We share information only as needed to do the thing you asked for:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>The people at Home Ranger Services who schedule and perform the work.</li>
          <li>The email service that delivers the form to our inbox, and the email providers on both ends.</li>
          <li>The company that hosts the website, for the technical logs described above.</li>
          <li>A public authority, if the law requires us to provide a record.</li>
        </ul>
        <p className="mt-3">We do not sell, rent, or trade personal information.</p>

        <h2 className="mt-10 font-serif text-2xl text-navy">How long it stays</h2>
        <p className="mt-3">
          The form does not create a website database entry. Email we actually receive is kept long enough to answer you, do the work, and meet ordinary business and tax record needs. Hosting logs are kept for the period the host uses for operations and security.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Children</h2>
        <p className="mt-3">
          This site is written for homeowners and small businesses. We do not knowingly collect information from children under 13. If you believe a child sent us a message, email {site.email} and we will delete that email.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Security</h2>
        <p className="mt-3">
          The site is served over HTTPS. Email is only as private as the mail services on each end. Do not treat a contact email as a secure channel for financial account numbers.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Your requests</h2>
        <p className="mt-3">
          You can ask what we have in email from you, ask us to correct it, or ask us to delete a message that is not part of a job record we are required to keep. Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-navy underline">
            {site.email}
          </a>{" "}
          with the address you wrote from. We will respond to a straightforward request.
        </p>

        <h2 className="mt-10 font-serif text-2xl text-navy">Changes</h2>
        <p className="mt-3">
          If we change how the site handles information, we will update this page and the date at the top. The matching rules for using the site are in the{" "}
          <Link href="/terms" className="font-semibold text-navy underline">
            terms of use
          </Link>
          .
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
