import Link from "next/link";
import { CtaActions } from "@/components/CtaActions";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { mainNav, type NavItem } from "@/lib/navigation";

const headerLabels = ["Air Conditioning", "Heating", "Service Areas", "About"];

function Chevron() {
  return (
    <svg viewBox="0 0 12 8" className="ml-1 inline-block h-2 w-2" aria-hidden="true">
      <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function SiteHeader() {
  const items = mainNav()
    .filter((item) => headerLabels.includes(item.label))
    .map((item) => (item.label === "About" ? { ...item, label: "About Us" } : item));

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-2 lg:justify-start lg:gap-6 lg:px-5 lg:py-3">
        <Logo />
        <nav className="ml-auto hidden items-center lg:flex" aria-label="Primary">
          {items.map((item) => (
            <NavEntry key={item.href} item={item} />
          ))}
          <Link href="/contact" className="px-3 py-4 text-[15px] text-[#2b2b2b] hover:text-black">
            Contact Us
          </Link>
        </nav>
        <CtaActions className="ml-2 hidden gap-3 lg:flex" scheduleClassName="btn btn-line" />
        <MobileNav items={[...items, { label: "Contact Us", href: "/contact" }]} />
      </div>
    </header>
  );
}

function NavEntry({ item }: { item: NavItem }) {
  const hasMenu = Boolean(item.links?.length || item.columns?.length);

  return (
    <div className="group relative">
      <Link href={item.href} className="inline-flex items-center px-3 py-4 text-[15px] text-[#2b2b2b] hover:text-black">
        {item.label}
        {hasMenu ? <Chevron /> : null}
      </Link>
      {item.links ? (
        <div
          className={`invisible absolute top-full z-20 w-64 border border-line bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
            item.align === "right" ? "right-0" : "left-0"
          }`}
        >
          {item.links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="block px-4 py-2.5 text-sm text-[#333] hover:bg-cream"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
      {item.columns ? (
        <div className="invisible absolute right-0 top-full z-20 grid w-[40rem] grid-cols-2 gap-4 border border-line bg-white p-5 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          {item.columns.map((column) => (
            <div key={column.title}>
              <p className="kicker text-orange">{column.title}</p>
              <ul className="mt-3 max-h-80 space-y-1 overflow-auto">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="block px-2 py-1.5 text-sm hover:bg-cream">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link href="/service-areas" className="learn-more col-span-2 text-sm">
            See all service areas
          </Link>
        </div>
      ) : null}
    </div>
  );
}
