import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "薛恩明的個人網站",
  description: "專注於軟體工程與人工智慧開發的學生個人網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${inter.variable} bg-gray-100 text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}