"use client";

import { useState } from "react";
import Logo from "../Header/Logo";
import BurgerMenu from "../HeaderHgse/BurgerMenu";
import NavigationAlt from "../Header/NavigationAlt";
import React from "react";
import Navigation from "../HeaderHgse/Navigation";

interface Props {}

export function Header(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (pref: boolean) => setIsMenuOpen(pref);

  return (
    <div className="bg-[#252D54]">
      <header
        className=" sticky top-0 z-[50] mx-auto flex h-[50px] max-w-[1600px] items-center justify-between bg-[#252D54] md:h-[85px]"
        {...props}
      >
        <Logo toggleMenu={toggleMenu} />
        <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <NavigationAlt toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Navigation />
      </header>
    </div>
  );
}
