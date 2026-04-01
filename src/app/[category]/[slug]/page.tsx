import { getPost } from "@/lib/posts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Oxanium } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const ubuntu = Oxanium({
  // weight: ["300", "400", "500", "700"],
  weight:["200", "300", "400", "500", "600", "700", "800"],
  // weight: ["400", "700"],
  // weight: ["200", "300"]
  subsets: ["latin"],
});

function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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

const components = {
  h1: ({ children }: { children?: ReactNode }) => {
    return <h1 className="my-8 pb-6 text-4xl font-semibold">{children}</h1>;
  },
  h2: ({ children }: { children?: ReactNode }) => {
    return <h2 className="my-7 pb-5 text-3xl font-semibold">{children}</h2>;
  },
  h3: ({ children }: { children?: ReactNode }) => {
    return <h3 className="my-6 text-2xl font-semibold">{children}</h3>;
  },
  h4: ({ children }: { children?: ReactNode }) => {
    return <h4 className="my-6 text-xl font-semibold">{children}</h4>;
  },
  h5: ({ children }: { children?: ReactNode }) => {
    return <h5 className="my-5 pb-3 text-lg font-semibold">{children}</h5>;
  },
  h6: ({ children }: { children?: ReactNode }) => {
    return <h6 className="my-4 text-base font-semibold">{children}</h6>;
  },
  p: ({ children }: { children?: ReactNode }) => {
    return <p className="my-4 leading-7">{children}</p>;
  },
  ul: ({ children }: { children?: ReactNode }) => {
    return <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>;
  },
  ol: ({ children }: { children?: ReactNode }) => {
    return <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>;
  },
  li: ({ children }: { children?: ReactNode }) => {
    return <li className="leading-7">{children}</li>;
  },
  blockquote: ({ children }: { children?: ReactNode }) => {
    return (
      <blockquote className="my-6 border-l-4 border-gray-300 pl-6 italic text-gray-700">
        {children}
      </blockquote>
    );
  },
  code: ({ children, className }: { children?: ReactNode; className?: string }) => {
    // Block code (inside <pre>) gets a className like "language-js" from remark
    const isBlock = typeof className === "string" && className.startsWith("language-");
    if (isBlock) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="bg-slate-100 text-slate-800 rounded-md px-2 py-1 text-sm font-mono shadow-sm ring-1 ring-slate-200">
        {children}
      </code>
    );
  },
  pre: ({ children }: { children?: ReactNode }) => {
    return (
      <pre className="my-6 bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
        {children}
      </pre>
    );
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
      <img src={props.src} alt={props.alt ?? ""} className="my-6 rounded-lg max-w-full h-auto" />
    );
  },
  hr: () => {
    return <hr className="my-8 border-gray-300" />;
  },
  strong: ({ children }: { children?: ReactNode }) => {
    return <strong className="font-semibold">{children}</strong>;
  },
  em: ({ children }: { children?: ReactNode }) => {
    return <em className="italic">{children}</em>;
  },
  table: ({ children }: { children?: ReactNode }) => {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          {children}
        </table>
      </div>
    );
  },
  thead: ({ children }: { children?: ReactNode }) => {
    return <thead className="bg-gray-50">{children}</thead>;
  },
  tbody: ({ children }: { children?: ReactNode }) => {
    return (
      <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
    );
  },
  tr: ({ children }: { children?: ReactNode }) => {
    return <tr>{children}</tr>;
  },
  th: ({ children }: { children?: ReactNode }) => {
    return (
      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
        {children}
      </th>
    );
  },
  td: ({ children }: { children?: ReactNode }) => {
    return <td className="px-6 py-4 text-sm text-gray-700">{children}</td>;
  },
};

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const content = await getPost(slug);

  return (
    <div className="max-w-[750px] mx-auto">
      <div className="border-y-2 py-3 mb-8 border-y-gray-600">
        <h3>
          <Link href={"/"}>Temidayo O.&apos;s blog</Link>
        </h3>
      </div>
      {content && (
        <article className={ubuntu.className}>
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-amber-800">
              {content.title}
            </h2>
            <p className="text-xs text-gray-600">
              {formatDate(content.publishedAt)}
            </p>
          </div>

          <p className="text-lg text-gray-600 mb-8">{content.summary}</p>

          <Markdown remarkPlugins={[remarkGfm]} components={components}>
            {content.content}
          </Markdown>
        </article>
      )}
    </div>
  );
}
