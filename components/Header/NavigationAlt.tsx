"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import greenPointer from "../../public/images/green-pointer.svg";
import { navItems } from "../../lib/constants";
import { Button } from "@/components/ui/button";

interface NavigationAltProps {
  toggleMenu: (pref: boolean) => void;
  isMenuOpen: boolean;
}

export default function NavigationAlt({
  isMenuOpen,
  toggleMenu,
}: NavigationAltProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleMenu(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    // allow users to open the meny with enter and space
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        toggleMenu(true);
      }
    };

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("keydown", handleEnter);
    };
  }, [toggleMenu]);

  useEffect(() => {
    // focus on the first link in the menu when it's opened
    if (isMenuOpen) {
      const firstLink = document.querySelector("nav a");
      (firstLink as HTMLAnchorElement)?.focus();
    }
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <nav
          className="absolute top-[50px] z-10 w-[100%] md:hidden"
          style={{ backgroundColor: "#364071" }}
        >
          <ul className="borde list-none">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="flex h-[49px] items-center"
                style={{ borderBottom: "0.50px #2D3665 solid" }}
              >
                <Button
                  asChild
                  variant={"link"}
                  onClick={() => toggleMenu(false)}
                  className="ml-[26px] text-sm font-bold leading-normal text-white"
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              </li>
            ))}
            <li
              className="flex h-[49px] items-center"
              style={{ borderBottom: "0.50px #2D3665 solid" }}
            >
              <Button
                asChild
                variant={"link"}
                className="ml-[26px] text-sm font-bold leading-normal text-coursePolicyLightGreen"
                onClick={() => toggleMenu(false)}
              >
                <Link href="/generate">
                  Generate a Policy
                  <span className="ml-[4px]">
                    <Image alt="Green right pointed arrow" src={greenPointer} />
                  </span>
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
