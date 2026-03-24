import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import SideNav from "@/components/SideNav";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import SceneryWrapper from "@/components/SceneryWrapper";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const sections = post.headings.map(({ id, label }) => ({ id, label }));

  return (
    <>
      <SideNav sections={sections} />

      <SceneryWrapper variant="full" offset={Date.parse(post.date)} quantity={{
        left: 20,
        top: 3,
        bottom: 3,
        right: 20,
      }}>
        <div className="px-6 py-32">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="mb-12 inline-block font-mono text-sm text-nord13/80 transition-opacity hover:text-nord13"
            >
              &larr; Back to blog
            </Link>

            <header className="mb-12">
              <time className="font-mono text-xs text-white/80">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-nord6 sm:text-4xl">
                {post.title}
              </h1>

              {post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/20 px-3 py-1 font-mono text-xs text-nord13"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <article className="prose-nord">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    rehypePlugins: [
                      rehypeSlug,
                      [
                        rehypePrettyCode,
                        {
                          theme: "everforest-light",
                          keepBackground: true,
                        },
                      ],
                    ],
                  },
                }}
              />
            </article>
          </div>
      </div>
      </SceneryWrapper>
    </>
  );
}
