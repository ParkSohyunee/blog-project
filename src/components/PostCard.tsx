import Image from "next/image";
import Link from "next/link";
import { Post } from "service/posts";

interface Props {
  posts: Post;
}

export default function PostCard({
  posts: { title, category, description, date, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`} key={path}>
      <article className="rounded-md overflow-hidden cursor-pointer shadow-lg hover:shadow-xl">
        <Image
          className="w-full"
          src={`/posts/${path}.png`}
          alt={`${title} 이미지`}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center gap-2 p-4">
          <p className="self-end text-slate-500">{date}</p>
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="w-full truncate text-center text-md">{description}</p>
          <span className="bg-indigo-300 p-1 px-2 rounded-md text-white">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
