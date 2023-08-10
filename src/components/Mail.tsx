"use client";

import { ChangeEvent, useState } from "react";
import { sendContactEmail } from "service/contact";

interface Form {
  from: string;
  subject: string;
  message: string;
}

export default function SendingMail() {
  const [data, setData] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const onClickSubmit = async () => {
    try {
      await sendContactEmail(data);

      const banner = document.getElementById("banner");
      banner?.classList.add("submit");
      setTimeout(() => banner?.classList.remove("submit"), 3000);
    } catch (error) {
      console.log(error);
    }
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
        <input onChange={onChangeInput} id="from" />
        <h2 className="text-lg text-white font-bold">Subject</h2>
        <input onChange={onChangeInput} id="subject" />
        <h2 className="text-lg text-white font-bold">Message</h2>
        <textarea className="h-[200px]" onChange={onChangeInput} id="message" />
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
