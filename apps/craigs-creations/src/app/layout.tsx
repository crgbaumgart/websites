import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const frauncesFont = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Craig's Creations Photography",
  description: "Portraits, Live Events, Candid, Landscapes, Studio, and Boudoir Photography in North Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${frauncesFont.variable} ${interFont.variable} font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}