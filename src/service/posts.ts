import { promises } from "fs";
import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export type PostData = Post & {
  content: string;
  prev: Post | null;
  next: Post | null;
};

// 렌더링되는 사이클에 한해서만(같은 페이지) 캐시를 제공
export const getPosts = cache(async () => {
  // console.log("getPosts");
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return promises
    .readFile(filePath, "utf-8")
    .then(JSON.parse)
    .then((posts: Post[]) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

// prettier-ignore
export const getPostDetail: (fileName: string) => Promise<PostData> = async (fileName: string) => {
  const filePath = path.join(process.cwd(), "data/posts", `${fileName}.md`); // /Users/.../blog_project/data/posts/react18-walkthrough.md
  const posts = await getPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw Error(`"${fileName}"의 포스트를 찾을 수 없습니다.`)

  // 이전 포스트, 다음 포스트 정보
  const index = posts.indexOf(post)
  const prev = index < posts.length - 1 ? posts[index + 1] : null
  const next = index > 0 ? posts[index - 1] : null

  const content = await readFile(filePath, "utf-8");
  return {...post, content, prev, next}
};
