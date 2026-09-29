export type RegionId = "dallas" | "austin";

export type ServiceTag =
  | "cooling"
  | "heating"
  | "ducts"
  | "air"
  | "install"
  | "maintenance";

export type NavGroup = "cooling" | "heating" | "air" | "plans" | "commercial";

export type CityIssue = {
  title: string;
  body: string;
  tags: ServiceTag[];
};

export type City = {
  slug: string;
  name: string;
  region: RegionId;
  county: string;
  neighborhoods: string[];
  zips: string[];
  signature: string;
  intro: string;
  housing: string;
  climate: string;
  responseNote: string;
  nearby: string[];
  issues: CityIssue[];
};

export type Faq = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  navGroup: NavGroup;
  locationPage: boolean;
  tags: ServiceTag[];
  headline: string;
  description: string;
  outcome: string;
  intro: string[];
  signs: { title: string; body: string }[];
  checks: string[];
  process: { title: string; body: string }[];
  localAngle: string;
  related: string[];
  faqs: Faq[];
};
