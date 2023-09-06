import Footer from "@/app/_components/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto my-0 w-[100%] max-w-[1040px] px-[20px] py-[30px] md:mt-[60px]">
      {children}
      <Footer />
    </main>
  );
}
