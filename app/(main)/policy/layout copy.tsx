export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex flex-col">{children}</main>;
}
