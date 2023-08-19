import MarkdownViewer from "components/MarkdownViewer";
import Image from "next/image";
import { getPostDetail, getPosts } from "service/posts";
import { AiOutlineCalendar } from "react-icons/ai";
import PostPreview from "components/PostPreview";
import { Metadata } from "next";

interface Props {
  params: {
    post: string;
  };
}

// prettier-ignore
export async function generateMetadata({params: { post }}: Props): Promise<Metadata> {
  const { title, description } = await getPostDetail(post);

  return {
    title,
    description,
  };
}

export default async function PostDetailPage({ params: { post } }: Props) {
  const { title, description, content, path, date, prev, next } =
    await getPostDetail(post);

  return (
    <article className="w-full bg-indigo-50 rounded-md overflow-hidden shadow-sm">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/posts/${path}.png`}
        alt={title}
        width={200}
        height={200}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end gap-2 text-indigo-600">
          <AiOutlineCalendar />
          <p className="font-semibold">{date}</p>
        </div>
        <h1 className="my-4 text-3xl font-semibold">{title}</h1>
        <p className="text-xl">{description}</p>
        <div className="w-56 border-indigo-800 border-2 mt-4 mb-8" />
        <MarkdownViewer data={content} />
      </section>
      <section className="flex shadow-md">
        {prev && <PostPreview post={prev} type="prev" />}
        {next && <PostPreview post={next} type="next" />}
      </section>
    </article>
  );
}

// 원하는 페이지에 한해서 미리 만들어 놓고 싶음 => SSG
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
