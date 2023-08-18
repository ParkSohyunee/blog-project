import Category from "components/Category";
import { getPosts } from "service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "개발 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl my-4">🔖 Posts</h1>
      <Category posts={posts} />
    </div>
  );
}
