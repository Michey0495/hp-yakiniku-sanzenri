import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";

export const metadata: Metadata = {
  title: "炭火焼肉 三千里 | 北海道釧路市の焼肉店",
  description:
    "北海道釧路市益浦の炭火焼肉 三千里。炭火で丁寧に焼き上げる本格焼肉。35席、全席禁煙、駐車場10台完備。水曜〜日曜 17:00-21:00営業。",
  keywords: ["焼肉", "炭火焼肉", "三千里", "釧路", "北海道", "益浦"],
  openGraph: {
    title: "炭火焼肉 三千里 | 北海道釧路市の焼肉店",
    description:
      "炭火で丁寧に焼き上げる本格焼肉。35席、全席禁煙、駐車場10台完備。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "炭火焼肉 三千里 | 北海道釧路市の焼肉店",
    description:
      "炭火で丁寧に焼き上げる本格焼肉。35席、全席禁煙、駐車場10台完備。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
