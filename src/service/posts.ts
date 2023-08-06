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
  const data = await promises.readFile(filePath, "utf-8");
  return JSON.parse(data);
};
