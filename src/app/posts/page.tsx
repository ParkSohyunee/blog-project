import { getPosts } from "service/posts";
import { Metadata } from "next";
import FilterablePosts from "components/FilterablePosts";

export const metadata: Metadata = {
  title: "Posts",
  description: "개발 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div>
      <h1 className="text-2xl my-4">🔖 Posts</h1>
      <FilterablePosts posts={posts} categories={categories} />
    </div>
  );
}
