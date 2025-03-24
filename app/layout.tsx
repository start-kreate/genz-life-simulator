import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const doodleFont = localFont({ src: "../public/DoodleFont.otf" });

export const metadata: Metadata = {
  title: "MY GenZ Life Simulator",
  description: "Created by StartKreate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${doodleFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
