import Footer from "@/app/_components/Footer";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "CourcePolicy.AI",
  description: "AI Policy Generation",
  viewport: {
    width: "1024",
    initialScale: 1,
  },
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-[40px]">
      <div className="mb-[40px] flex flex-col items-center">{children}</div>
    </div>
  );
}
