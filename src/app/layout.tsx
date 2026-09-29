import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { CtaActions } from "@/components/CtaActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const metadataBase = new URL(
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : site.url,
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Home Ranger Services | HVAC in Dallas and Austin",
    template: "%s | Home Ranger Services",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-clip bg-paper pb-28 font-sans text-ink antialiased lg:pb-0">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <div className="fixed inset-x-0 bottom-0 z-40 box-border w-full max-w-[100vw] border-t border-line bg-paper p-3 lg:hidden">
          <CtaActions
            className="cta-bar"
            callClassName="btn btn-primary"
            scheduleClassName="btn btn-line"
          />
        </div>
      </body>
    </html>
  );
}
