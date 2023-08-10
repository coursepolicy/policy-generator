import Image from "next/image";

interface BurgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export default function BurgerMenu({
  toggleMenu,
  isMenuOpen,
}: BurgerMenuProps) {
  return (
    <>
      {isMenuOpen ? (
        <div
          className="relative h-[50px] w-[50px] cursor-pointer bg-slate-800 md:hidden"
          onClick={() => toggleMenu()}
        >
          <Image
            className="absolute left-[13px] top-[13px]"
            alt="Burger menu"
            src="/burger-menu-open.png"
            width={24}
            height={24}
          />
        </div>
      ) : (
        <Image
          className="mb-[10px] mr-[16px] cursor-pointer md:hidden"
          alt="Burger menu"
          src="/burger-menu-close.png"
          width={24}
          height={24}
          onClick={() => toggleMenu()}
        />
      )}
    </>
  );
}
