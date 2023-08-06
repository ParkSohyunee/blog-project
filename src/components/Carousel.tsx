"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Post } from "service/posts";

interface PostProps {
  posts: Post[];
}

export function CarouselComponent(props: PostProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={true}>
      {props.posts.map(
        (post, index) =>
          !post.featured && (
            <div
              key={index}
              className=" m-4 rounded-lg h-[320px] overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            >
              <Image
                className="w-full "
                src={`/posts/${post.path}.png`}
                alt={`${post.title} 이미지`}
                width={200}
                height={200}
              />
              <div className="flex flex-col items-center p-4 gap-2">
                <h2 className="font-bold text-lg">{post.title}</h2>
                <p>{post.description}</p>
                <span className="bg-indigo-300 p-1 px-2 rounded-md text-white">
                  {post.category}
                </span>
              </div>
            </div>
          )
      )}
    </Carousel>
  );
}
