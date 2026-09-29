export function servicePath(slug: string) {
  return `/services/${slug}`;
}

export function cityPath(slug: string) {
  return `/service-areas/${slug}`;
}

export function locationPath(city: string, service: string) {
  return `/service-areas/${city}/${service}`;
}

export function postPath(slug: string) {
  return `/blog/${slug}`;
}
