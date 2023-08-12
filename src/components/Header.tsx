import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-200 p-4">
      <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">💎 sohyun&#39;s blog</h1>
        </Link>
        <nav className="text-xl flex gap-6">
          <Link href={"/"} className="hover:text-white">
            Home
          </Link>
          <Link href={"/about"} className="hover:text-white">
            About
          </Link>
          <Link href={"/posts"} className="hover:text-white">
            Posts
          </Link>
          <Link href={"/contact"} className="hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
