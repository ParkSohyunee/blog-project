import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "components/Footer";
import Header from "components/Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  //  Template Object
  title: {
    template: "%s | 소현의 블로그",
    default: "소현의 블로그", // 대체 제목 (required),
  },
  description: "welcome to my secret blog! 👑",
  authors: [{ name: "ParkSoHyun" }],
  generator: "Next.js",
  applicationName: "Blog",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  openGraph: {
    title: "소현의 블로그",
    description: "개발 관련 블로그",
    url: "https://blog-project-psi-sand.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Header />
        <main className="max-w-[1200px] m-auto p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
