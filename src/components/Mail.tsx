"use client";

// import { GET } from "app/api/route";
import { ChangeEvent, useState } from "react";
import * as yup from "yup";

const emailSchema = yup.object({
  email: yup.string().email().required("이메일을 입력해주세요."),
  subject: yup.string().required("제목을 입력해주세요."),
  message: yup.string().required("내용을 입력해주세요."),
});

export default function SendingMail() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onMailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubjectInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const onMessageInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const onClickSubmit = () => {
    // emailSchema.validate({});
    // GET(subject);
    const banner = document.getElementById("banner");
    banner?.classList.add("submit");
    setTimeout(() => banner?.classList.remove("submit"), 3000);
  };

  return (
    <>
      <p
        id="banner"
        className="bg-green-200 p-4 rounded-md text-lg font-bold hidden"
      >
        🎉 이메일 전송을 성공했어요! 🥳
      </p>
      <div className="w-[400px] bg-indigo-800 p-6 rounded-md flex flex-col gap-4">
        <h2 className="text-lg text-white font-bold">Your mail</h2>
        <input onChange={onMailInput} />
        <h2 className="text-lg text-white font-bold">Subject</h2>
        <input onChange={onSubjectInput} />
        <h2 className="text-lg text-white font-bold">Message</h2>
        <textarea className="h-[200px]" onChange={onMessageInput} />
        <button
          onClick={onClickSubmit}
          className="bg-indigo-300 rounded-sm p-2 text-white text-lg"
        >
          submit
        </button>
      </div>
    </>
  );
}
