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
        priority={tone === "dark"}
        className="h-auto w-[84px] sm:w-[96px] lg:w-[112px]"
      />
    </Link>
  );
}
