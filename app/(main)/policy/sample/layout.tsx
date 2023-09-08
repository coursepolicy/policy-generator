import { Footer } from "@/components/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="z-10 hidden h-[125px] w-[100%] max-w-[inherit] bg-neutral-50 md:fixed md:block" />
      <main className="mx-auto my-0 mt-[30px] flex w-[100%] max-w-[1000px] flex-col bg-white md:mt-[50px] ">
        {children}
      </main>
    </>
  );
}
