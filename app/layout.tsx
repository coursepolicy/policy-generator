import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import Header from "./_components/Header";

const messinaSans = localFont({
  src: [
    {
      path: "../public/fonts/MessinaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/MessinaSans-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/MessinaSans-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MessinaSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/MessinaSans-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/MessinaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MessinaSans-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/MessinaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-messina-sans",
});

export const metadata: Metadata = {
  title: "CourcePolicy.AI",
  description: "AI Policy Generation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${messinaSans.variable} bg-neutral-50 font-sans`}
    >
      <body>
        <Toaster />
        <Header />
        {children}
        <footer className="flex h-[145px] items-center justify-center">
          <p className="text-sm font-bold leading-normal text-stone-500">
            Have a question or concern? Email us{" "}
            <a
              href="#"
              target="blank"
              className="text-sm font-bold leading-normal text-stone-500 underline"
            >
              here
            </a>{" "}
            or fill out an anonymous feedback form{" "}
            <a
              href="#"
              target="blank"
              className="text-sm font-bold leading-normal text-stone-500 underline"
            >
              here
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
