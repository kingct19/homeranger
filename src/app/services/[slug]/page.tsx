import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ServiceArticle } from "@/components/ServiceArticle";
import { getService, services } from "@/content/services";
import { servicePath } from "@/lib/paths";
import { faqSchema, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.name,
    description: service.description,
    path: servicePath(service.slug),
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={faqSchema(service.faqs)} />
      <ServiceArticle service={service} />
      <CtaBand
        title={`Book ${service.shortName.toLowerCase()}`}
        body="Tell us the city and what the system is doing. We answer with a window and the next step."
      />
    </>
  );
}
