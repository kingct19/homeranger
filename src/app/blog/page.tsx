import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/content/blog";
import { formatDate } from "@/lib/content";
import { postPath } from "@/lib/paths";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HVAC Guides",
  description:
    "Plain-language guides on AC replacement, furnaces, heat pumps, ductless systems, attic ducts, and home-sale inspections in Dallas and Austin.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Notes for Dallas and Austin homeowners"
        description="Costs, equipment choices, and what to ask before you approve a quote. Planning ranges are labeled as planning ranges."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <ul className="mx-auto grid max-w-7xl gap-4 px-5 py-16 md:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={postPath(post.slug)} className="panel block h-full p-6 hover:border-ranger">
              <p className="text-sm text-mute">
                {formatDate(post.date)} · {post.cityFocus}
                {post.source ? ` · ${post.source.name}` : ""}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-snug">{post.title}</h2>
              <p className="mt-3 leading-relaxed text-mute">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
