import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const rubikSand = Rubik({
  subsets: ["latin"],
  weight: ["300","400", "600"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Screenshot To Code",
  description:
    "Convert any screenshot or design to clean code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-new-gr-c-s-check-loaded="14.1226.0"
        data-gr-ext-installed=""
        className={rubikSand.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
