import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How the Home Ranger Services website handles information you send us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What this website does with your information"
        description="A plain description of the current site. Have an attorney review it before you rely on it as a legal policy."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 leading-relaxed text-mute">
        <p>
          The contact form does not save your message on this website. Submitting it opens your email application with the note addressed to {site.email}. What you send after that is ordinary email.
        </p>
        <p>
          This site does not run advertising trackers. If that changes, this page should change with it. Server logs kept by the host may include your IP address and the page you requested, the way most websites do.
        </p>
        <p>
          Do not send sensitive financial information through the form. Financing applications, if you choose one, happen with the lender under that lender’s policy.
        </p>
        <p>To ask about a message you sent, email {site.email}.</p>
      </article>
    </>
  );
}
