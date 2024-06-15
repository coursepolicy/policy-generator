import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";

const messinaSans = localFont({
  src: [
    {
      path: "../../public/fonts/MessinaSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSans-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/MessinaSans-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSans-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/MessinaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSans-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/MessinaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-messina-sans",
});

export const metadata: Metadata = {
  title: "CoursePolicy.AI",
  description: "AI Policy Generation - Policy Preview",
};

export default function PDFLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${messinaSans.variable} font-sans`}>
      <body className="overscroll-y-contain bg-white">{children}</body>
    </html>
  );
}
