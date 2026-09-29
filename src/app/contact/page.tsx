import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { cities } from "@/content/cities";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Home Ranger Services",
  description:
    "Request HVAC service in Dallas–Fort Worth or Greater Austin. Tell us the city, the system, and what it is doing.",
  path: "/contact",
});

type Props = { searchParams: Promise<{ topic?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { topic } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={topic === "careers" ? "Talk with us about a job" : "Tell us what the system is doing"}
        description="Share the city, a phone number, and a short description. The form opens an email to the office so the request does not sit in an unseen inbox on the website."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_280px]">
        <ContactForm
          topic={topic}
          cities={cities.map((city) => ({ value: city.slug, label: city.name }))}
          services={services.map((service) => ({ value: service.slug, label: service.shortName }))}
        />
        <aside className="space-y-4 text-sm leading-relaxed text-mute">
          <p className="font-semibold text-ink">Office</p>
          <p>
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
          </p>
          {site.phoneDisplay ? (
            <p>
              <a href={`tel:${site.phoneTel}`} className="text-lg font-semibold text-ink">
                {site.phoneDisplay}
              </a>
            </p>
          ) : (
            <p>A phone number will appear here once it is added to the site settings.</p>
          )}
          <p>We schedule Dallas–Fort Worth and Greater Austin as separate routes. Include the city so the window we offer is a real one.</p>
          <p>If you smell gas or see sparking, shut the system off and contact your gas utility or an emergency line. Do not wait on a routine email.</p>
        </aside>
      </div>
    </>
  );
}
