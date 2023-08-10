import Link from "next/link";
import Image from "next/image";

interface NavigationAltProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export default function NavigationAlt({
  isMenuOpen,
  toggleMenu,
}: NavigationAltProps) {
  return (
    <nav className="absolute top-[50px] w-[100%] bg-indigo-900 md:hidden">
      {isMenuOpen && (
        <>
          <Link href="/" onClick={() => toggleMenu()}>
            <div className="h-[49px] border border-slate-700">
              <div className="ml-[26px] mt-[15px] text-sm font-bold leading-normal text-white">
                Findings + Insights
              </div>
            </div>
          </Link>
          <Link href="/about" onClick={() => toggleMenu()}>
            <div className="h-[50px] border border-slate-700">
              <div className="ml-[26px] mt-[15px] text-sm font-bold leading-normal text-white">
                About
              </div>
            </div>
          </Link>
          <Link href="contact" onClick={() => toggleMenu()}>
            <div className="h-[49px] border border-slate-700">
              <div className="ml-[26px] mt-[15px] text-sm font-bold leading-normal text-white">
                Contact
              </div>
            </div>
          </Link>
          <Link href="/generate" onClick={() => toggleMenu()}>
            <div className="h-[49px] border border-slate-700">
              <div className="ml-[26px] mt-[11px] flex items-center text-sm font-bold leading-normal text-white">
                <div className="text-sm font-bold leading-normal text-emerald-300">
                  Generate a Policy
                </div>
                <div className="ml-[4px]">
                  <Image
                    className=""
                    alt="Green right pointed arrow"
                    src="/green-right-arrow.png"
                    width={17}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </Link>
        </>
      )}
    </nav>
  );
}
