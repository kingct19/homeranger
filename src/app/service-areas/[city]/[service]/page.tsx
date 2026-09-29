import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { LocationArticle } from "@/components/LocationArticle";
import { cities, getCity } from "@/content/cities";
import { getService, locationServices } from "@/content/services";
import { site } from "@/content/site";
import { locationFaqs } from "@/lib/content";
import { locationPath } from "@/lib/paths";
import { faqSchema, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ city: string; service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.flatMap((city) =>
    locationServices().map((service) => ({
      city: city.slug,
      service: service.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service?.locationPage) return {};
  return pageMeta({
    title: `${service.name} in ${city.name}, TX`,
    description: `${service.name} in ${city.name}, ${city.county} County. ${city.signature}`,
    path: locationPath(city.slug, service.slug),
  });
}

export default async function LocationPage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service?.locationPage) notFound();
  const faqs = locationFaqs(city, service);
  const path = locationPath(city.slug, service.slug);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.name} in ${city.name}, Texas`,
          serviceType: service.name,
          description: service.description,
          areaServed: {
            "@type": "City",
            name: city.name,
            containedInPlace: { "@type": "State", name: "Texas" },
          },
          provider: {
            "@type": "HVACBusiness",
            name: site.name,
            url: site.url,
          },
          url: `${site.url}${path}`,
        }}
      />
      <LocationArticle city={city} service={service} />
      <CtaBand title={`${service.shortName} in ${city.name}`} body={city.responseNote} />
    </>
  );
}
