import Footer from "@/app/_components/Footer";

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
