import { Footer } from "@/components/Footer";

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
