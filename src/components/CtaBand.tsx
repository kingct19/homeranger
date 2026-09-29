import Image from "next/image";
import { CtaActions } from "@/components/CtaActions";

export function CtaBand({
  title = "Ready for honest HVAC service? Let's talk.",
  body = "Tell us the city, the system, and what it is doing. We reply with a window and a clear next step.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Image src="/photos/condenser-kneel.jpg" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto max-w-[1200px] px-5 py-14 text-center md:py-24">
        <h2 className="display text-4xl text-white md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">{body}</p>
        <CtaActions
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          callClassName="btn btn-primary w-full sm:w-auto"
          scheduleClassName="btn btn-light w-full sm:w-auto"
        />
      </div>
    </section>
  );
}
