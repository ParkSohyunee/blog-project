import SendingMail from "components/Mail";
import { BiLogoGithub, BiNotepad, BiGame } from "react-icons/bi";

const LINKS = [
  { icon: <BiLogoGithub />, url: "https://github.com/ParkSohyunee" },
  { icon: <BiNotepad />, url: "https://soyeori.tistory.com" },
  { icon: <BiGame />, url: "" },
];

export default async function ContactPage() {
  return (
    <section className="flex flex-col gap-2 items-center">
      <h1 className="text-2xl font-bold">Contact me</h1>
      <p>sohyunee016@gmail.com</p>
      <ul className="flex gap-4 text-4xl">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className="hover:text-indigo-400 transition-all duration-300"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <p className="text-2xl font-bold my-4">Or Send me an email</p>
      <SendingMail />
    </section>
  );
}
