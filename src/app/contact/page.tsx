import SendingMail from "components/Mail";
import { BiLogoGithub, BiNotepad, BiGame } from "react-icons/bi";

export default async function ContactPage() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl font-bold">Contact me</h1>
        <p>sohyunee016@gmail.com</p>
        <div className="flex gap-4 text-4xl">
          <BiLogoGithub />
          <BiNotepad />
          <BiGame />
        </div>
        <p className="text-2xl font-bold my-4">Or Send me an email</p>
        <SendingMail />
      </div>
    </>
  );
}
