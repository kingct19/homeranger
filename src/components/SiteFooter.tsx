import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";
import { companyLinks } from "@/lib/navigation";
import { servicePath } from "@/lib/paths";

const quickLinks = [
  { label: "Air Conditioning", href: servicePath("air-conditioning") },
  { label: "Heating", href: servicePath("heating") },
  { label: "Ductless", href: servicePath("ductless-mini-splits") },
  { label: "AC Repair", href: servicePath("ac-repair") },
  { label: "Furnace Repair", href: servicePath("furnace-repair") },
  { label: "Heat Pumps", href: servicePath("heat-pumps") },
  { label: "Commercial", href: servicePath("commercial-hvac") },
  { label: "Commercial Reliability Plans", href: "/commercial-plans" },
  { label: "Home Sale Inspections", href: servicePath("home-sale-inspections") },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-10 md:py-14">
        <h2 className="display max-w-md text-4xl text-white md:text-6xl">
          Proudly serving Dallas and Austin.
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1240px] gap-8 border-t border-white/10 px-5 py-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12 md:py-14">
        <div>
          <Logo tone="light" />
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/70">
            Dallas–Fort Worth and Greater Austin
          </p>
          <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-white/80">
            {site.email}
          </a>
          <p className="mt-6 text-sm text-white/70">
            {site.license ? `License #${site.license}` : "Ask us for our Texas ACR license before work begins."}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3 px-5 py-5 text-center text-sm text-white/50 sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Home Ranger Services</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
