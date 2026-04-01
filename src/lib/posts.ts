import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface Post {
  title: string;
  summary: string;
  publishedAt: string;
  content: string;
}

export interface PostListItem {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  category: string;
}

export async function getPost(slug: string): Promise<Post | null> {
  // Search all category directories for the slug
  const categories = fs
    .readdirSync(contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const category of categories) {
    const filePath = path.join(contentDir, category, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      if (data.draft) return null;
      return {
        title: data.title,
        summary: data.summary,
        publishedAt: data.publishedAt,
        content,
      };
    }
  }

  return null;
}

export async function getPosts(category: string): Promise<PostListItem[]> {
  const categoryDir = path.join(contentDir, category);
  if (!fs.existsSync(categoryDir)) return [];

  const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".md"));

  const posts: PostListItem[] = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(categoryDir, file), "utf-8");
      const { data } = matter(raw);
      if (data.draft) return null;
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title,
        summary: data.summary,
        publishedAt: data.publishedAt,
        category: data.category ?? category,
      };
    })
    .filter((post): post is PostListItem => post !== null);

  posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return posts;
}

export async function getAllPosts(): Promise<PostListItem[]> {
  const categories = fs
    .readdirSync(contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const all: PostListItem[] = [];
  for (const category of categories) {
    const posts = await getPosts(category);
    all.push(...posts);
  }

  all.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return all;
}
