import { Footer } from "@/components/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="bg-white md:flex md:h-screen">
        <div className="h-[92px] bg-bg-mobile bg-cover bg-center md:h-screen md:w-1/3 md:bg-bg-desktop" />
        <div className="md:m-[35px] md:ml-[100px] md:mt-20 md:w-2/3">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
