import Image from "next/image";
import burgerMenuOpen from "../../public/images/burger-open.svg";
import burgerMenuClose from "../../public/images/burger-close.svg";

interface BurgerMenuProps {
  toggleMenu: (pref: boolean) => void;
  isMenuOpen: boolean;
}

export default function BurgerMenu({
  toggleMenu,
  isMenuOpen,
}: BurgerMenuProps) {
  return (
    <>
      {isMenuOpen ? (
        <Image
          className="cursor-pointer md:hidden"
          alt="Opened burger menu"
          src={burgerMenuOpen}
          onClick={() => toggleMenu(!isMenuOpen)}
        />
      ) : (
        <div
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center md:hidden"
          onClick={() => toggleMenu(!isMenuOpen)}
        >
          <Image alt="Closed burger menu" src={burgerMenuClose} />
        </div>
      )}
    </>
  );
}
