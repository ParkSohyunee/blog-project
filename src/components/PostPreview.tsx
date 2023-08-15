import Image from "next/image";
import Link from "next/link";
import { Post } from "service/posts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  post: Post;
  type: string;
}

// prettier-ignore
const ICON_CLASS = "text-green-300 text-5xl transition-all group-hover:text-6xl";

// prettier-ignore
export default function PostPreview({ post: {title, description, path}, type }: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className="group w-full relative max-h-56 bg-black"
    >
      <Image
        className="w-full opacity-40"
        src={`/posts/${path}.png`}
        alt={title}
        width={200}
        height={100}
      />
      <div className=" absolute w-full flex items-center justify-around top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-white text-center">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
