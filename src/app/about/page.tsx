import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { WorkVideo } from "@/components/WorkVideo";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Home Ranger Services",
  description:
    "Home Ranger Services is a heating and cooling company for Dallas–Fort Worth and Greater Austin. Diagnosis first, written prices, and work that matches the house.",
  path: "/about",
});

const values = [
  {
    title: "Respect first",
    body: "Shoe covers, a clear path to the equipment, and a clean work area are part of the job. The house is not something we leave behind.",
  },
  {
    title: "No pressure",
    body: "We explain the options and the price in writing. You decide. Replacement is a recommendation only when a repair is unsafe or a poor way to spend the money.",
  },
  {
    title: "Show up ready",
    body: "The visit is scheduled against the other jobs in that metro. If the window changes, you hear it from us.",
  },
  {
    title: "Real accountability",
    body: "If the explanation or the bill does not match what you approved, say so. We would rather correct the job than collect a softer sentence.",
  },
  {
    title: "Honest workmanship",
    body: "We test the system that is actually failing. We do not replace parts on a healthy one, and we do not add refrigerant without saying why the charge was low.",
  },
  {
    title: "The house over the sale",
    body: "A maintenance visit is a written list of findings, not an opening pitch. A failed part is quoted as a repair when the rest of the system is sound.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-[860px] px-5 py-14 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <p className="kicker mt-8 text-orange">About Home Ranger Services</p>
          <h1 className="display mt-3 text-4xl text-navy md:text-6xl">Who we are</h1>
          <p className="mt-5 text-lg leading-relaxed text-mute">
            Home Ranger Services works in Dallas–Fort Worth and Greater Austin. The standard is the same in both: show up when we said we would, explain the problem in plain language, and recommend only the work the house needs.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div className="relative min-h-80 overflow-hidden lg:min-h-[460px]">
            <Image
              src="/photos/homeowner-visit.jpg"
              alt="Technician talking with a homeowner beside an outdoor unit"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-mute">
            <p>
              Dallas–Fort Worth and Greater Austin are not one climate and not one kind of house. North Texas still relies on a lot of gas furnaces. A large share of newer Austin-area homes are heat pumps. Attic ducts show up in both. The recommendation has to follow the equipment that is actually installed.
            </p>
            <p>
              We repair systems. Replacement is what we recommend when a repair is unsafe or a poor way to spend the money, and you see both prices when that is a real choice. A visit starts with what the system is doing, not with a replacement script.
            </p>
            <p>
              Choosing a contractor should not require translating a sales pitch. If you are comparing quotes, or you want a second look at a system someone else recommended, we will tell you what we can see and what we cannot.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f7f8]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:py-20">
          <div className="space-y-5 text-lg leading-relaxed text-mute lg:order-1">
            <p>
              You should not have to reconstruct a visit from memory. Findings, model numbers, and the price you approved go on the paperwork before any work starts.
            </p>
            <p>
              Ask for the Texas Air Conditioning and Refrigeration Contractor license and the insurance certificate before work starts.
              {site.license
                ? ` Our license number is ${site.license}.`
                : " When a license number is posted on this site, that is the number to verify."}{" "}
              Service agreements, diagnostic fees, and any financing terms are the ones written on your paperwork for that job. This website explains how we work. It is not a substitute for that paperwork.
            </p>
            <p>
              <Link href="/careers" className="font-semibold text-navy underline">
                Careers
              </Link>{" "}
              are open to technicians and installers who want Dallas–Fort Worth or Greater Austin and can talk to a homeowner without a script.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden lg:order-2 lg:min-h-[460px]">
            <Image
              src="/photos/roof-tech.jpg"
              alt="Technician working inside an open rooftop air conditioner"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-14 lg:py-20">
          <p className="kicker text-orange">Our values</p>
          <h2 className="display mt-3 max-w-3xl text-4xl text-navy md:text-5xl">The values that drive the visit</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.title}>
                <h3 className="text-xl font-bold text-navy">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-mute">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <h2 className="display text-4xl text-white md:text-5xl">Honest HVAC work, clearly explained</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              We explain what we found, show you the options, and review the written price before work begins.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold">Clear recommendations</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Repair, duct correction, or replacement, in plain language, with the reason for each.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Written price</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  The scope you approve is the scope you are billed. A payment plan does not change what the job includes.
                </p>
              </div>
            </div>
            <WorkVideo src="/videos/roof-service.mp4" poster="/photos/roof-tech.jpg" label="Watch a rooftop visit" />
          </div>
          <div className="relative min-h-72 overflow-hidden lg:min-h-[420px]">
            <Image
              src="/photos/condenser-kneel.jpg"
              alt="Technician kneeling at an outdoor condenser"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
