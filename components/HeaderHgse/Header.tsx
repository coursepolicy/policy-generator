"use client";

import { useState } from "react";
import Logo from "../Header/Logo";
import BurgerMenu from "./BurgerMenu";
import NavigationAlt from "../Header/NavigationAlt";
import React from "react";
import Navigation from "./HGSENavigation";

interface Props {}

export function Header(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (pref: boolean) => setIsMenuOpen(pref);

  return (
    <header
      className="sticky top-0 z-[50] flex h-[50px] items-center justify-between bg-[#252D54] lg:h-[85px]"
      {...props}
    >
      <Logo toggleMenu={toggleMenu} />
      <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <NavigationAlt toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Navigation />
    </header>
  );
}
