import Script from "next/script";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script />
      <main className="mx-auto my-0 w-[100%] max-w-[1175px] px-[20px] py-[30px] md:mt-[60px]">
        {children}
      </main>
    </>
  );
}
