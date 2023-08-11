import Link from "next/link";
import Image from "next/image";
import greenPointer from "../../public/images/green-pointer.svg";
import { navItems } from "../utils/constants";

interface NavigationAltProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export default function NavigationAlt({
  isMenuOpen,
  toggleMenu,
}: NavigationAltProps) {
  return (
    <nav className="absolute top-[50px] z-10 w-[100%] bg-indigo-900 md:hidden">
      {isMenuOpen && (
        <>
          {navItems.map((item, i) => (
            <Link href={item.href} onClick={() => toggleMenu()} key={i}>
              <div className="h-[49px] border-t-[1px] border-slate-700">
                <div className="ml-[26px] mt-[15px] text-sm font-bold leading-normal text-white">
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
          <Link href="/generate" onClick={() => toggleMenu()}>
            <div className="h-[49px] border-t-[1px] border-slate-700">
              <div className="ml-[26px] mt-[11px] flex items-center text-sm font-bold leading-normal text-white">
                <div className="text-sm font-bold leading-normal text-emerald-300">
                  Generate a Policy
                </div>
                <div className="ml-[4px]">
                  <Image alt="Green right pointed arrow" src={greenPointer} />
                </div>
              </div>
            </div>
          </Link>
        </>
      )}
    </nav>
  );
}
