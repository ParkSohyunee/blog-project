import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  // API Route에 이메일 전송을 위한 '요청'을 보내는 로직 (fetch)
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  const data = await res.json();

  if (!res.ok) {
    throw Error(data.message || "메일 전송에 실패했습니다."); // body안에 있는 message를 보여줌 => JSON.stringify({message: '메세지'})
  }
  return data;
}
