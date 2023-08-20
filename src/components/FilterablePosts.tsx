"use client";

import { useState } from "react";

import { Post } from "service/posts";
import { PostGrid } from "./PostGrid";
import PostCategory from "./PostCategory";

interface PostProps {
  posts: Post[];
  categories: string[];
}

export default function FilterablePosts({ posts, categories }: PostProps) {
  const [selected, setSelected] = useState("All posts");
  const filteredPost =
    selected === "All posts"
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <div className=" flex gap-4">
      <PostGrid posts={filteredPost} />
      <PostCategory
        categories={["All posts", ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </div>
  );
}
