import { getService } from "@/content/services";
import type { City, CityIssue, Faq, Service, ServiceTag } from "@/content/types";

export function fill(template: string, city: City) {
  return template
    .replaceAll("{city}", city.name)
    .replaceAll("{county}", `${city.county} County`)
    .replaceAll("{climate}", city.climate)
    .replaceAll("{housing}", city.housing)
    .replaceAll("{signature}", city.signature);
}

const fallbackService: Record<ServiceTag, string> = {
  cooling: "ac-repair",
  heating: "furnace-repair",
  ducts: "duct-services",
  air: "indoor-air-quality",
  install: "ac-installation",
  maintenance: "maintenance-plans",
};

function serviceCandidates(issue: CityIssue) {
  const text = `${issue.title}. ${issue.body}`;
  const has = (pattern: RegExp) => pattern.test(text);
  const slugs: string[] = [];
  const push = (slug: string) => {
    const service = getService(slug);
    if (!service?.locationPage || slugs.includes(slug)) return;
    slugs.push(slug);
  };
  const avoidDucts = has(
    /ductless|mini-split|bungalow|without a real duct|forced-duct|should not be torn|should not get a forced/i,
  );
  const furnace = has(/furnace|igniter|flame sensor|inducer|short-cycle/i);

  if (avoidDucts) push("ductless-mini-splits");
  if (has(/heat pump|heat strip|backup heat|all-electric|electric strip/i)) push("heat-pumps");
  if (
    furnace &&
    has(/should be retired|new furnace|replace the furnace|furnace replacement/i) &&
    !has(/before anyone talks about replacement|not a replacement/i)
  ) {
    push("furnace-replacement");
  }
  if (furnace) push("furnace-repair");
  if (has(/pollen|cedar|indoor air|filtration|sticky|humid/i)) push("indoor-air-quality");
  if (!avoidDucts && has(/\bflex\b|\breturn|static|airflow|kinked|\bduct/i)) push("duct-services");
  if (
    !avoidDucts &&
    has(/replacement|aging out|like-for-like|second system|install defect|commission|builder/i) &&
    !has(/not a replacement|before anyone talks about replacement/i)
  ) {
    push("ac-installation");
  }
  if (has(/capacitor|contactor|compressor|packed with|condenser/i)) push("ac-repair");
  if (has(/maintenance|skipped|deferred|never tested|history/i)) {
    push(issue.tags.includes("cooling") ? "ac-maintenance" : "maintenance-plans");
  }
  if (has(/home sale|inspection|buyer|listing/i)) push("home-sale-inspections");
  if (slugs.length === 0) push(fallbackService[issue.tags[0]]);
  return slugs;
}

export type CityOffer = {
  issue: CityIssue;
  services: { service: Service; reason: string }[];
};

export function cityOffers(city: City): CityOffer[] {
  const used = new Set<string>();
  return city.issues.flatMap((issue) => {
    const ranked = serviceCandidates(issue);
    const slug = ranked.find((item) => !used.has(item)) ?? ranked[0];
    const service = slug ? getService(slug) : undefined;
    if (!service) return [];
    used.add(service.slug);
    return [{ issue, services: [{ service, reason: "" }] }];
  });
}

function featuredSlugs(city: City) {
  return new Set(
    cityOffers(city).flatMap((offer) => offer.services.map((item) => item.service.slug)),
  );
}

function sentenceMatching(city: City, pattern: RegExp) {
  return [city.intro, city.housing, city.climate, city.signature]
    .join(" ")
    .split(/(?<=[.!?])\s+/)
    .find((sentence) => pattern.test(sentence));
}

export function contextCityOffers(city: City) {
  const featured = featuredSlugs(city);
  const notes: { slug: string; pattern: RegExp; reason: (sentence: string) => string }[] = [
    {
      slug: "commercial-hvac",
      pattern: /business|commercial|shop|office/i,
      reason: (sentence) => `${sentence} Those calls are scheduled as commercial HVAC.`,
    },
  ];
  return notes.flatMap((note) => {
    if (featured.has(note.slug)) return [];
    const service = getService(note.slug);
    const sentence = sentenceMatching(city, note.pattern);
    return service && sentence ? [{ service, reason: note.reason(sentence) }] : [];
  });
}

export function issuesFor(city: City, tags: ServiceTag[]) {
  const matched = city.issues.filter((issue) =>
    issue.tags.some((tag) => tags.includes(tag)),
  );
  return matched.length > 0 ? matched : city.issues;
}

export function cityFaqs(city: City): Faq[] {
  return [
    {
      q: `Do you service all of ${city.name}?`,
      a: `Yes. We schedule ${city.name} in ${city.county} County, including ${city.neighborhoods.slice(0, 4).join(", ")}. ${city.responseNote}`,
    },
    {
      q: `What HVAC problems show up most in ${city.name}?`,
      a: `${city.signature} The calls we see most often are ${city.issues.map((issue) => issue.title.toLowerCase()).join("; ")}.`,
    },
    {
      q: `Do you repair and replace systems in ${city.name}?`,
      a: `Both. A ${city.name} visit starts with the failed part or the failed room. Replacement is the recommendation when a repair is unsafe or a poor spend, and the price is approved before work starts.`,
    },
    {
      q: `Which ${city.name} neighborhoods do you cover?`,
      a: `We regularly work in ${city.neighborhoods.join(", ")}. If you are inside ${city.name} and your neighborhood is not on that list, book the visit anyway.`,
    },
  ];
}

export function locationFaqs(city: City, service: Service): Faq[] {
  return [
    {
      q: `Do you offer ${service.shortName.toLowerCase()} in ${city.name}?`,
      a: `Yes. ${service.name} is scheduled across ${city.name} in ${city.county} County. ${city.responseNote}`,
    },
    {
      q: `How does a ${service.shortName.toLowerCase()} visit work in ${city.name}?`,
      a: `${service.process.map((step) => step.body).join(" ")}`,
    },
    ...service.faqs,
  ];
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T12:00:00Z`));
}
