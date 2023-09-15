import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body className="overscroll-y-contain bg-white">{children}</body>;
}
