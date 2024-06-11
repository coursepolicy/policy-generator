export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="z-10 hidden h-[125px] w-[100%] max-w-[inherit] bg-neutral-50 md:fixed md:block">
        <h1 className="mx-auto flex w-[100%] max-w-[1000px] pt-[30px] text-2xl font-bold leading-normal text-black">
          Policy Draft (Editing Mode)
        </h1>
      </div>
      <main className="mx-auto my-0 mt-[30px] flex w-[100%] max-w-[1000px] flex-col bg-white md:mt-[100px]">
        {children}
      </main>
    </>
  );
}
