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
        width={943}
        height={528}
        priority={tone === "dark"}
        className="h-auto w-[118px] sm:w-[150px] lg:w-[190px]"
      />
    </Link>
  );
}
