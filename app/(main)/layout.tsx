import "../globals.css";
import React from "react";
import { Header } from "@/components/Header";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "@/lib/providers";
import GoogleAnalytics from "@/lib/googleAnalytics";

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
  description: "AI Policy Generation",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${messinaSans.variable} bg-neutral-50 font-sans`}>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <Providers>
        <body>
          <Toaster />
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
