import React from "react";
import { Toaster } from "react-hot-toast";

import Header from "../_components/Header";

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
