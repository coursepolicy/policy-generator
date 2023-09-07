import { Header } from "@/components/Header";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <Toaster />
      <Header />
      {children}
    </body>
  );
}
