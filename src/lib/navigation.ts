import { citiesIn } from "@/content/cities";
import { getService } from "@/content/services";
import { cityPath, servicePath } from "@/lib/paths";

export type NavLink = { label: string; href: string };

export type NavColumn = { title: string; links: NavLink[] };

export type NavItem = {
  label: string;
  href: string;
  links?: NavLink[];
  columns?: NavColumn[];
  align?: "left" | "right";
};

function svc(slug: string, label?: string): NavLink {
  const service = getService(slug);
  if (!service) {
    throw new Error(`Missing service ${slug}`);
  }
  return { label: label ?? service.shortName, href: servicePath(service.slug) };
}

export function mainNav(): NavItem[] {
  return [
    {
      label: "Air Conditioning",
      href: servicePath("air-conditioning"),
      links: [
        svc("air-conditioning", "AC Services"),
        svc("ac-repair"),
        svc("ac-installation"),
        svc("ac-maintenance"),
        svc("heat-pumps"),
        svc("ductless-mini-splits", "Ductless"),
      ],
    },
    {
      label: "Heating",
      href: servicePath("heating"),
      links: [
        svc("heating", "Heating Services"),
        svc("furnace-repair"),
        svc("furnace-replacement"),
        svc("heat-pumps"),
      ],
    },
    {
      label: "Maintenance",
      href: servicePath("maintenance-plans"),
      links: [
        svc("maintenance-plans", "Homeowner Plans"),
        svc("ac-maintenance"),
        svc("home-sale-inspections"),
        { label: "Commercial Plans", href: "/commercial-plans" },
      ],
    },
    {
      label: "Commercial",
      href: servicePath("commercial-hvac"),
      links: [
        svc("commercial-hvac"),
        svc("duct-services"),
        svc("indoor-air-quality"),
        { label: "Reliability Plans", href: "/commercial-plans" },
      ],
    },
    {
      label: "Service Areas",
      href: "/service-areas",
      align: "right",
      columns: [
        {
          title: "Dallas–Fort Worth",
          links: citiesIn("dallas").map((city) => ({
            label: city.name,
            href: cityPath(city.slug),
          })),
        },
        {
          title: "Greater Austin",
          links: citiesIn("austin").map((city) => ({
            label: city.name,
            href: cityPath(city.slug),
          })),
        },
      ],
    },
    {
      label: "About",
      href: "/about",
      align: "right",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Reviews", href: "/reviews" },
        { label: "Financing", href: "/financing" },
        { label: "Promotions", href: "/promotions" },
        { label: "FAQ", href: "/faq" },
        { label: "HVAC Terminology", href: "/hvac-terminology" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];
}

export const serviceGroups: { title: string; slugs: string[] }[] = [
  {
    title: "Air Conditioning",
    slugs: [
      "air-conditioning",
      "ac-repair",
      "ac-installation",
      "ac-maintenance",
      "heat-pumps",
      "ductless-mini-splits",
    ],
  },
  {
    title: "Heating",
    slugs: ["heating", "furnace-repair", "furnace-replacement", "heat-pumps"],
  },
  {
    title: "Air, ducts, and plans",
    slugs: [
      "indoor-air-quality",
      "duct-services",
      "maintenance-plans",
      "home-sale-inspections",
      "commercial-hvac",
    ],
  },
];

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Financing", href: "/financing" },
  { label: "Promotions", href: "/promotions" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Terminology", href: "/hvac-terminology" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
