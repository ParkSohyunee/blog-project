import { getPosts } from "service/posts";
import { PostList } from "components/Post";
import { CarouselComponent } from "components/Carousel";
import Hero from "components/Hero";

// body의 children에 해당하는 부분!!
export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <Hero />
      <section>
        <h1 className="text-3xl my-4">📖 Featured Posts</h1>
        <PostList posts={posts} />
      </section>
      <section>
        <h1 className="text-3xl mt-8">💜 You may like</h1>
        <CarouselComponent posts={posts} />
      </section>
    </div>
  );
}
