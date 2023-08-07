import Category from "components/Category";
import { getPosts } from "service/posts";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl my-4">🔖 Posts</h1>
      <Category posts={posts} />
    </div>
  );
}
