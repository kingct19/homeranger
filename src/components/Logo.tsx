import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const src =
    tone === "light" ? "/brand/logos/home-ranger-reversed.png" : "/brand/logos/home-ranger-primary.png";

  return (
    <Link href="/" className="block shrink-0">
      <Image
        src={src}
        alt="Home Ranger Services"
        width={1024}
        height={682}
        sizes="(min-width: 1024px) 112px, (min-width: 640px) 96px, 84px"
        fetchPriority={tone === "dark" ? "high" : undefined}
        loading={tone === "dark" ? "eager" : "lazy"}
        className="h-auto w-[84px] sm:w-[96px] lg:w-[112px]"
      />
    </Link>
  );
}
