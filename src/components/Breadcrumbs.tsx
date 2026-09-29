import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: { label: string; href?: string }[];
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-cream/75" : "text-mute";
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={data} />
      <nav aria-label="Breadcrumb" className={`text-sm ${color}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href ? (
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className={tone === "light" ? "text-cream" : "text-ink"}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
