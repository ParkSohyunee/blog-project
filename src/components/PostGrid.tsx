"use client";

import { Post } from "service/posts";
import PostCard from "./PostCard";

interface PostProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostProps) {
  return (
    <section>
      <h1 className="text-3xl my-4">📖 Featured Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <li key={post.path}>
            <PostCard posts={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
