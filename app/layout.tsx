import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "@/lib/providers";

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
      <Providers>{children}</Providers>
    </html>
  );
}
