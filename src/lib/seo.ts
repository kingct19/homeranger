import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Faq } from "@/content/types";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type: "website",
    },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    image: `${site.url}/opengraph-image`,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Dallas-Fort Worth" },
      { "@type": "AdministrativeArea", name: "Greater Austin" },
    ],
    ...(site.phoneTel ? { telephone: site.phoneDisplay } : {}),
    ...(site.license ? { identifier: site.license } : {}),
  };
}
