export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto w-[100%] max-w-[1000px]">{children}</main>;
}
