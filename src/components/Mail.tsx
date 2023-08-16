"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import { sendContactEmail } from "service/contact";
import Banner, { BannerData } from "./Banner";

interface Form {
  from: string;
  subject: string;
  message: string;
}

const DEFAULT = {
  from: "",
  subject: "",
  message: "",
};

export default function SendingMail() {
  const [data, setData] = useState<Form>(DEFAULT);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const onClickSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await sendContactEmail(data);
      setBanner({ message: "메일을 성공적으로 보냈어요.", state: "success" });
      setData(DEFAULT);
      setTimeout(() => setBanner(null), 3000);
    } catch (error) {
      setBanner({ message: "메일을 보내는데 실패했어요.", state: "error" });
      setTimeout(() => setBanner(null), 3000);
    }
  };

  return (
    <form>
      {banner && <Banner banner={banner} />}
      <div className="w-[400px] bg-indigo-800 p-6 rounded-md flex flex-col gap-4">
        <label className="text-lg text-white font-bold">Your mail</label>
        <input
          onChange={onChangeInput}
          id="from"
          value={data.from}
          autoFocus
          required
        />
        <label className="text-lg text-white font-bold">Subject</label>
        <input
          onChange={onChangeInput}
          id="subject"
          value={data.subject}
          required
        />
        <label className="text-lg text-white font-bold">Message</label>
        <textarea
          className="h-[200px]"
          onChange={onChangeInput}
          id="message"
          value={data.message}
          rows={10}
          required
        />
        <button
          type="button"
          onClick={onClickSubmit}
          className="bg-indigo-300 rounded-sm p-2 text-white text-lg"
        >
          submit
        </button>
      </div>
    </form>
  );
}
