"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Post } from "service/posts";

interface PostProps {
  posts: Post[];
}

export function PostList(props: PostProps) {
  const router = useRouter();
  // console.log(props);

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-6 m-auto ">
        {props.posts.map(
          (post, index) =>
            post.featured && (
              <div
                onClick={() => router.push(`/posts/${post.path}`)}
                key={index}
                className="text-center h-[360px] overflow-hidden rounded-lg cursor-pointer shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
              >
                <Image
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
            )
        )}
      </div>
    </>
  );
}
