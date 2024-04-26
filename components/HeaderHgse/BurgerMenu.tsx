import React from "react";
import Image from "next/image";
import burgerMenuOpen from "@/public/images/burger-open.svg";
import burgerMenuClose from "@/public/images/burger-close.svg";
import { Button } from "@/components/ui/button";

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
        <Button
          variant={"ghost"}
          className="m-0 h-[100%] rounded-none bg-hoverBlue p-0 md:hidden"
          asChild
          onClick={() => toggleMenu(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Navigation menu"
        >
          <Image
            alt="Opened burger menu"
            src={burgerMenuOpen}
            className="cursor-pointer"
          />
        </Button>
      ) : (
        <Button
          variant={"ghost"}
          className="flex min-h-[50px] min-w-[50px] cursor-pointer items-center justify-center hover:bg-hoverBlue md:hidden"
          onClick={() => toggleMenu(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Navigation menu"
        >
          <Image alt="Closed burger menu" src={burgerMenuClose} />
        </Button>
      )}
    </>
  );
}
