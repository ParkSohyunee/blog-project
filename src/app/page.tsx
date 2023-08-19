import { getFeaturedPosts, getPosts } from "service/posts";
import { PostGrid } from "components/PostGrid";
import { CarouselComponent } from "components/Carousel";
import Hero from "components/Hero";

// body의 children에 해당하는 부분!!
export default async function Home() {
  const posts = await getPosts();
  const featuredPosts = await getFeaturedPosts();

  return (
    <>
      <Hero />
      <PostGrid posts={featuredPosts} />
      <CarouselComponent posts={posts} />
    </>
  );
}
