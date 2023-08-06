import { CarouselComponent } from "components/Carousel";
import Image from "next/image";
import { getPosts } from "service/posts";

// body의 children에 해당하는 부분!!
export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <section>
        <h1 className="text-3xl my-4">📖 Featured Posts</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 m-auto ">
          {posts.map(
            (post, index) =>
              post.featured && (
                <div
                  key={index}
                  className="text-center h-[360px] overflow-hidden rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
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
      </section>
      <section>
        <h1 className="text-3xl mt-8">💜 You may like</h1>
        <CarouselComponent posts={posts} />
      </section>
    </div>
  );
}
