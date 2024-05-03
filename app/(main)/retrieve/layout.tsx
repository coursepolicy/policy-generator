import { Footer } from "@/components/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="md:flex md:min-h-screen">
        <div className="h-[92px] bg-blue-500 bg-bg-mobile bg-cover md:h-screen md:w-1/3 md:bg-bg-desktop" />
        <div className="m-[35px] md:ml-[100px] md:mt-[150px] md:w-2/3">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
