"use client";

import { MouseEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Post } from "service/posts";

interface PostProps {
  posts: Post[];
}

export default function Category(props: PostProps) {
  const router = useRouter();
  //   const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("all");
  const [viewPosts, setViewPosts] = useState(props.posts);

  //   const changeBtnToggle = () => {
  //     setIsActive((prev) => !prev);
  //   };

  const onClickCategory = (event: MouseEvent<HTMLButtonElement>) => {
    const category = event.currentTarget.id;
    setCategory(category);
    // changeBtnToggle();
    const result = props.posts.filter((post) => post.category === category);
    setViewPosts(category === "all" ? props.posts : result);
  };

  return (
    <div className=" flex gap-8">
      {/* <PostList posts={props.posts} category={category}/> */}
      <div className="grid grid-cols-3 grid-rows-2 gap-6 m-auto ">
        {viewPosts.map((post, index) => (
          <div
            onClick={() => router.push(`/posts/${post.path}`)}
            key={index}
            className="text-center h-[360px] overflow-hidden rounded-lg cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
          >
            <Image
              priority
              className="w-full"
              src={`/posts/${post.path}.png`}
              alt={`${post.title} 이미지`}
              width={380}
              height={300}
            />
            <p className="text-end p-2">{post.date}</p>
            <div className="flex flex-col p-2 items-center">
              <h2 className="font-bold text-lg">{post.title}</h2>
              <p>{post.description}</p>
            </div>
            <span className="bg-indigo-300 p-1 px-2 rounded-md text-white">
              {post.category}
            </span>
          </div>
        ))}
      </div>
      <section className=" flex flex-col gap-2 items-center">
        <p className=" text-lg font-bold">Category</p>
        <button onClick={onClickCategory} id="all">
          All Posts
        </button>
        <button onClick={onClickCategory} id="my story">
          my story
        </button>
        <button onClick={onClickCategory} id="frontend">
          frontend
        </button>
        <button onClick={onClickCategory} id="backend">
          backend
        </button>
        <button onClick={onClickCategory} id="javascript">
          javascript
        </button>
      </section>
    </div>
  );
}
