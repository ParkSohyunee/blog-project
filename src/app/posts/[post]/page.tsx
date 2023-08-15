import MarkdownViewer from "components/MarkdownViewer";
import { readFileSync } from "fs";
import path from "path";
import Image from "next/image";
import { getPostDetail } from "service/posts";
import { AiOutlineCalendar } from "react-icons/ai";

interface Props {
  params: {
    post: string;
  };
}

export default async function PostDetailPage({ params: { post } }: Props) {
  const postDetail = await getPostDetail(post);

  // const data = await fetch(
  //   `../../../../data/posts/${postDetail?.path}.md`
  // ).then((res) => res.text());

  const filePath = path.join(
    process.cwd(),
    "data/posts",
    `${postDetail?.path}.md`
  );
  const res = readFileSync(filePath, "utf-8");
  // console.log(res);

  const data = res;

  return (
    <article className="w-full bg-indigo-50 rounded-md overflow-hidden shadow-sm">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/posts/${postDetail?.path}.png`}
        alt={postDetail?.title || ""}
        width={200}
        height={200}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end gap-2 text-indigo-600">
          <AiOutlineCalendar />
          <p className="font-semibold">{postDetail?.date}</p>
        </div>
        <h1 className="my-4 text-3xl font-semibold">{postDetail?.title}</h1>
        <p className="text-xl">{postDetail?.description}</p>
        <div className="w-56 border-indigo-800 border-2 mt-4 mb-8" />
        <MarkdownViewer data={data} />
      </section>
    </article>
  );
}
