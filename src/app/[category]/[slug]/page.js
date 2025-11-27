import { capitalize } from "lodash";
import { getPost, getPosts } from "@/lib/hygraph";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Ubuntu, Open_Sans } from "next/font/google";
import Link from "next/link";

const ubuntu = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = await getPost(slug);

  if (!content) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: content.title,
    description: content.summary,
    openGraph: {
      title: content.title,
      description: content.summary,
      type: "article",
    //   url: `https://yourdomain.com/blog/${slug}`,
      // Add if you have an image field in your content
      // images: [{ url: content.coverImage?.url }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.summary,
      // Add if you have an image field
      // images: [content.coverImage?.url],
    },
  };
}

const render = {
  h1: ({ children }) => {
    return (
      <h1 className="my-8 pb-6 border-b-2 text-4xl font-semibold border-gray-300">
        {children}
      </h1>
    );
  },
  h2: ({ children }) => {
    return (
      <h2 className="my-7 pb-5 border-b-2 text-3xl font-semibold border-gray-300">
        {children}
      </h2>
    );
  },
  h3: ({ children }) => {
    return (
      <h3 className="my-6 pb-4 border-b text-2xl font-semibold border-gray-200">
        {children}
      </h3>
    );
  },
  h4: ({ children }) => {
    return (
      <h4 className="my-6 pb-4 border-b text-xl font-semibold border-gray-200">
        {children}
      </h4>
    );
  },
  h5: ({ children }) => {
    return <h5 className="my-5 pb-3 text-lg font-semibold">{children}</h5>;
  },
  h6: ({ children }) => {
    return <h6 className="my-4 text-base font-semibold">{children}</h6>;
  },
  p: ({ children }) => {
    return <p className="my-4 leading-7">{children}</p>;
  },
  a: ({ children, href }) => {
    return (
      <a href={href} className="text-blue-600 hover:text-blue-800 underline">
        {children}
      </a>
    );
  },
  ul: ({ children }) => {
    return <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>;
  },
  ol: ({ children }) => {
    return <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>;
  },
  li: ({ children }) => {
    return <li className="leading-7">{children}</li>;
  },
  blockquote: ({ children }) => {
    return (
      <blockquote className="my-6 border-l-4 border-gray-300 pl-6 italic text-gray-700">
        {children}
      </blockquote>
    );
  },
  code: ({ children }) => {
    return (
      <code className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => {
    return (
      <pre className="my-6 bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
        {children}
      </pre>
    );
  },
  img: ({ src, alt }) => {
    return (
      <img src={src} alt={alt} className="my-6 rounded-lg max-w-full h-auto" />
    );
  },
  hr: () => {
    return <hr className="my-8 border-gray-300" />;
  },
  strong: ({ children }) => {
    return <strong className="font-semibold">{children}</strong>;
  },
  em: ({ children }) => {
    return <em className="italic">{children}</em>;
  },
  table: ({ children }) => {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          {children}
        </table>
      </div>
    );
  },
  thead: ({ children }) => {
    return <thead className="bg-gray-50">{children}</thead>;
  },
  tbody: ({ children }) => {
    return (
      <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
    );
  },
  tr: ({ children }) => {
    return <tr>{children}</tr>;
  },
  th: ({ children }) => {
    return (
      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
        {children}
      </th>
    );
  },
  td: ({ children }) => {
    return <td className="px-6 py-4 text-sm text-gray-700">{children}</td>;
  },
};

export default async function ({ params }) {
  const { slug } = await params;

  const content = await getPost(slug);

  return (
    <div>
      <div className="border-y-2 py-3 mb-8 border-y-gray-600">
        <h3>
          <Link href={"/"}>Temidayo O.'s blog</Link>
        </h3>
      </div>
      {content && (
        <article className={ubuntu.className}>
          <h2 className="text-3xl font-semibold mb-4 text-amber-800">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">{content.summary}</p>

          {/* The prose class automatically styles all HTML elements */}
          <RichText content={content.content.raw} renderers={render} />
        </article>
      )}
    </div>
  );
}
