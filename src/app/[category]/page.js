import { capitalize } from "lodash";
import { getPost } from "@/lib/hygraph";

export default async function Page({ params }) {
  const { category } = await params;
  const post = await getPost("recte-sapere-fons");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* <h1 className="text-4xl font-bold mb-2">{capitalize(category)}</h1> */}

      {post && (
        <article>
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p className="text-lg text-gray-600 mb-8">{post.summary}</p>

          {/* The prose class automatically styles all HTML elements */}
          <div
            className="hygraph-content"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </article>
      )}
    </div>
  );
}
