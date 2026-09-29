import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { CityArticle } from "@/components/CityArticle";
import { JsonLd } from "@/components/JsonLd";
import { cities, getCity } from "@/content/cities";
import { cityFaqs } from "@/lib/content";
import { cityPath } from "@/lib/paths";
import { faqSchema, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return pageMeta({
    title: `HVAC Service in ${city.name}, TX`,
    description: `${city.signature} Home Ranger Services repairs, maintains, and replaces heating and cooling systems in ${city.name}, ${city.county} County.`,
    path: cityPath(city.slug),
  });
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const faqs = cityFaqs(city);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <CityArticle city={city} />
      <CtaBand
        title={`Book a visit in ${city.name}`}
        body={city.responseNote}
      />
    </>
  );
}
