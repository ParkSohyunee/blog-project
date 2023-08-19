"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Post } from "service/posts";
import PostCard from "./PostCard";

interface PostProps {
  posts: Post[];
}

export function CarouselComponent({ posts }: PostProps) {
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
    <section>
      <h1 className="text-3xl mt-8 mb-4">💜 You may like</h1>
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {posts.map((post) => (
          <li key={post.path} className="mx-2">
            <PostCard posts={post} />
          </li>
        ))}
      </Carousel>
    </section>
  );
}
