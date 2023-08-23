"use client";

import { useState } from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import BurgerMenu from "./BurgerMenu";
import NavigationAlt from "./NavigationAlt";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (pref: boolean) => setIsMenuOpen(pref);

  return (
    <header className="relative flex h-[50px] items-center justify-between bg-blue-950 md:h-[85px]">
      <Logo toggleMenu={toggleMenu} />
      <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <NavigationAlt toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Navigation />
    </header>
  );
}
