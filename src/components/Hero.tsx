import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="p-4 flex flex-col gap-2 justify-center items-center">
      <Image
        priority
        src="/images/my_image_1.png"
        alt="avatar"
        width={250}
        height={250}
        className="rounded-full bg-green-100"
      />
      <h2 className="text-2xl mt-4 font-medium">
        {" "}
        Welcome! To my secret blog 👑
      </h2>
      <p className="text-xl mb-2 font-semibold">
        {" "}
        I&#39;m Frontend developer Sohyun.
      </p>
      <Link href={"/contact"}>
        <button className=" text-lg text-white bg-indigo-500 p-2 px-4 rounded-md">
          Contact
        </button>
      </Link>
    </section>
  );
}
