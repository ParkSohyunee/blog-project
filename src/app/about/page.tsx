import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "who am I?",
};

export default function AboutPage() {
  return (
    <div className="flex gap-4 flex-col items-center bg-indigo-50 p-8 rounded-md">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl my-2 text-indigo-800 font-bold">Who am I?</h1>
        <p>컴포넌트의 확장성을 고려하여 코드를 작성하는 프론트엔드 개발자</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl my-2 text-indigo-800 font-bold">Skills</h1>
        <p>React, Next.js</p>
        <p>HTML, CSS, JS, TypeScript</p>
        <p>Git</p>
      </div>
    </div>
  );
}
