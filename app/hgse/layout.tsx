import { Header } from "@/components/HeaderHgse/Header";
import "../globals.css";
import React from "react";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "CoursePolicy.AI",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}
