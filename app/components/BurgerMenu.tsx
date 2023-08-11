import Image from "next/image";
import burgerMenuOpen from "../../public/images/burger-open.svg";
import burgerMenuClose from "../../public/images/burger-close.svg";

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
        <Image
          className="cursor-pointer md:hidden"
          alt="Opened Burger menu"
          src={burgerMenuOpen}
          onClick={() => toggleMenu()}
        />
      ) : (
        <Image
          className="mr-[16px] cursor-pointer md:hidden"
          alt="Closed Burger menu"
          src={burgerMenuClose}
          onClick={() => toggleMenu()}
        />
      )}
    </>
  );
}
