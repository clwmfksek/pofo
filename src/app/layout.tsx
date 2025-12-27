import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "신효환 | PM/AX Engineer",
  description: "AI를 활용한 다양한 경험을 추구하는 PM/AX Engineer 신효환의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
