export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mx-auto my-0 w-[100%] max-w-[1040px] bg-white md:mt-[60px] md:px-[20px] md:py-[30px]">
        {children}
      </main>
    </>
  );
}
