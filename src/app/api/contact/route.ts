import { sendEmail } from "service/email";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required("이메일을 입력해주세요."),
  subject: yup.string().required("제목을 입력해주세요."),
  message: yup.string().required("내용을 입력해주세요."),
});

export async function POST(request: Request) {
  const body = await request.json(); // ReadableStream => json으로 변환해서 사용
  // console.log(body); // { from: '...', subject: '...', message: '...' }

  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "유효하지 않은 포맷" }), {
      status: 400,
    });
  }

  /** 노드메일러를 이용해서 메일을 전송 */
  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일을 성공적으로 보냈음" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.log(error);
      return new Response(JSON.stringify({ message: "메일 전송에 실패함" }), {
        status: 500,
      });
    });
}
