import HeaderLogo from "./HeaderLogo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex h-[50px] items-center justify-between bg-blue-950 md:h-[85px]">
      <HeaderLogo />
      <div className="Menu relative h-6 w-6 lg:hidden">
        <div className="BoundingBox absolute left-0 top-0 h-6 w-6 bg-zinc-300" />
      </div>
      <Navigation />
    </header>
  );
}
