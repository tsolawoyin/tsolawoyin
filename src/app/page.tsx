import Page from "./my-page";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="">
      <Page posts={posts} />
    </div>
  );
}
