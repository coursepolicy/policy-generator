import Footer from "@/app/_components/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="bg-white md:flex md:h-screen">{children}</main>
      <Footer />
    </>
  );
}
