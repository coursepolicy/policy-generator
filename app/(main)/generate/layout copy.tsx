import Footer from "@/app/_components/Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
