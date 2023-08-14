import { promises } from "fs";
import path from "path";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export const getPosts: () => Promise<Post[]> = async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return promises
    .readFile(filePath, "utf-8")
    .then(JSON.parse)
    .then((posts: Post[]) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getPostDetail: (
  path: string
) => Promise<Post | undefined> = async (path: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.path === path);
};

// export const getMarkDown = async (path: string) => {
//   const filePath = path.join(process.cwd(), "data/posts", `${path}.md`);
//   const data = await promises.readFile(filePath, "utf-8");
//   return JSON.parse(data);
// };
