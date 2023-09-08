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
    <>
      <div className="z-20 hidden h-[80px] w-[100%] max-w-[inherit] bg-neutral-50 md:fixed md:block" />
      <main className="mx-auto my-0 mt-[30px] flex w-[100%] max-w-[1000px] flex-col bg-white md:mt-[50px] ">
        {children}
      </main>
    </>
  );
}
