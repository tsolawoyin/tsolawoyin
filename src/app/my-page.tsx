"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { PostListItem } from "@/lib/posts";

const categories = ["programming", "medicine"] as const;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Page({ posts }: { posts: PostListItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts;

  return (
    <div className="text-gray-900">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="pb-4 pt-8 grid">
          <div className="mb-4 grid gap-1">
            <h1 className="text-5xl font-bold">Temidayo OS</h1>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-600 flex italic gap-1 items-center">
                  <span>Computer programmer</span> <Plus />{" "}
                  <span>medical student</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category ? null : category
                  )
                }
                className={`transition-all ${
                  activeCategory === category
                    ? "text-gray-900 underline"
                    : "text-gray-700 hover:text-gray-900 hover:underline"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </header>

        {/* Blog listing */}
        <section className="grid gap-3">
          {filteredPosts.map((post) => (
            <div key={post.slug}>
              <h3 className="hover:underline text-amber-800 text-2xl">
                <Link href={`/${post.category}/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-xs text-gray-600">
                {formatDate(post.publishedAt)}
              </p>
            </div>
          ))}
        </section>

        <footer className="mt-16 pt-8 flex justify-center gap-4">
          <p className="text-gray-600 text-sm">
            <a href="mailto:your.email@example.com">Mail </a>
          </p>
          <p className="text-gray-600 text-sm">
            <a href="https://github.com/tsolawoyin">Github</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
