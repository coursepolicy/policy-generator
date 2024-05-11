import { Footer } from "@/components/Footer";

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mx-auto my-0 mt-[30px] flex w-[100%] max-w-[1000px] flex-col md:mt-[50px] ">
        <div className="mb-[40px] flex flex-col items-center">{children}</div>
      </main>
      <Footer />
    </>
  );
}
