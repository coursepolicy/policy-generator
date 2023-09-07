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
    <main className="mx-auto my-0 mt-[30px] flex w-[100%] max-w-[1000px] flex-col md:mt-[50px] ">
      <div className="mb-[40px] flex flex-col items-center">{children}</div>
    </main>
  );
}
