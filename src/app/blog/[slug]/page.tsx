import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getPost, posts } from "@/content/blog";
import { site } from "@/content/site";
import { formatDate } from "@/lib/content";
import { postPath } from "@/lib/paths";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: postPath(post.slug),
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": post.source ? "NewsArticle" : "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.description,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    ...(post.source
      ? {
          citation: post.source.url,
          isBasedOn: post.source.url,
        }
      : {}),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <article>
        <header className="bg-ranger text-cream">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <Breadcrumbs
              tone="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
            <p className="mt-8 text-sm text-apricot">
              {formatDate(post.date)} · {post.cityFocus}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg text-cream/80">{post.description}</p>
            {post.source ? (
              <p className="mt-4 text-sm text-cream/80">
                Based on reporting from{" "}
                <a href={post.source.url} className="underline" rel="noopener noreferrer">
                  {post.source.name}
                </a>
                , published {formatDate(post.source.published)}.
              </p>
            ) : null}
          </div>
        </header>
        <div className="mx-auto max-w-3xl space-y-10 px-5 py-16">
          {post.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]}>
              {section.heading ? <h2 className="font-serif text-3xl">{section.heading}</h2> : null}
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-mute">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
          <p className="text-sm text-mute">
            More reading lives on the{" "}
            <Link href="/blog" className="font-semibold text-ink underline">
              guide index
            </Link>
            .
          </p>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
