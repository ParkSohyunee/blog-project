import MarkdownViewer from "components/MarkdownViewer";
import { promises, readFileSync } from "fs";
import path from "path";

import { getPostDetail } from "service/posts";

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
    <div>
      <h1 className="my-4 text-2xl font-medium">{postDetail?.title}</h1>
      <MarkdownViewer data={data} />
    </div>
  );
}
