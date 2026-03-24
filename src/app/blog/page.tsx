import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SceneryWrapper from "@/components/SceneryWrapper";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about the things I build and the ideas behind them — TypeScript, web development, and more.",
  openGraph: {
    title: "Blog | Evan",
    description:
      "Writing about the things I build and the ideas behind them — TypeScript, web development, and more.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="px-6">
      <SceneryWrapper className="h-24 min-h-24 pt-12" noMinScreen variant="bottom" offset={942} quantity={{
        bottom: 5,
        left: 2,
        right: 2,
        top: 2,
      }}>
        <div />
      </SceneryWrapper>
      <SceneryWrapper variant="bottom" offset={92985} quantity={{
        bottom: 3,
        left: posts.length * 2,
        right: posts.length * 2,
        top: 0,
      }}>
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 font-mono text-sm tracking-wide text-nord13">
            Blog
          </h1>

          <p className="mb-16 max-w-lg text-lg text-white">
            Writing about the things I build and the ideas behind them.
          </p>

          <div className="flex flex-col gap-12">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-nord13">
                      {post.title}
                    </h2>

                    <time className="shrink-0 font-mono text-xs text-white/80">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </time>
                  </div>

                  <p className="mt-2 text-base leading-relaxed text-nord4">
                    {post.description}
                  </p>

                  {post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
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
                </Link>
              </article>
            ))}
          </div>
        </div>
      </SceneryWrapper>
    </div>
  );
}
