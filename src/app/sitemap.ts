import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { cities } from "@/content/cities";
import { terms } from "@/content/glossary";
import { services, locationServices } from "@/content/services";
import { site } from "@/content/site";
import { cityPath, locationPath, postPath, servicePath } from "@/lib/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-29");
  const staticPaths = [
    "/",
    "/services",
    "/service-areas",
    "/about",
    "/contact",
    "/financing",
    "/reviews",
    "/faq",
    "/promotions",
    "/careers",
    "/blog",
    "/maintenance",
    "/commercial",
    "/commercial-plans",
    "/hvac-terminology",
    "/privacy",
    "/terms",
  ];

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path === "/" ? "" : path}`,
      lastModified,
    })),
    ...services.map((service) => ({
      url: `${site.url}${servicePath(service.slug)}`,
      lastModified,
    })),
    ...cities.map((city) => ({
      url: `${site.url}${cityPath(city.slug)}`,
      lastModified,
    })),
    ...cities.flatMap((city) =>
      locationServices().map((service) => ({
        url: `${site.url}${locationPath(city.slug, service.slug)}`,
        lastModified,
      })),
    ),
    ...posts.map((post) => ({
      url: `${site.url}${postPath(post.slug)}`,
      lastModified,
    })),
    ...terms.map((term) => ({
      url: `${site.url}/hvac-terminology#${term.slug}`,
      lastModified,
    })),
  ];

  return entries;
}
