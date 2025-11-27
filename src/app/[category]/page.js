import { capitalize } from "lodash";
import { getPost, getPosts } from "@/lib/hygraph";
import { Suspense } from "react";
import Link from "next/link";


export function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Page({ params }) {
  const { category } = await params;
  const posts = await getPosts(category);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-5">{capitalize(category)}</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {posts.map((post) => {
        //   console.log(post);
          return (
            <div>
              <h3 className="hover:underline text-amber-800 text-2xl">
                <Link href={`/${category}/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-xs text-gray-600">{formatDate(post.publishedAt)}</p>
            </div>
          );
        })}
      </Suspense>
    </div>
  );
}