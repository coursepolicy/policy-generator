import React from "react";
import Link from "next/link";
import Image from "next/image";
import greenPointer from "../../public/images/green-pointer.svg";
import { navItems } from "../_utils/constants";
import { Button } from "@/components/ui/button";

interface NavigationAltProps {
  toggleMenu: (pref: boolean) => void;
  isMenuOpen: boolean;
}

export default function NavigationAlt({
  isMenuOpen,
  toggleMenu,
}: NavigationAltProps) {
  return (
    <>
      {isMenuOpen && (
        <nav
          className="absolute top-[50px] z-10 w-[100%] md:hidden"
          style={{ backgroundColor: "#364071" }}
        >
          <ul className="list-none">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="h-[49px]"
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
              className="h-[49px]"
              style={{ borderBottom: "0.50px #2D3665 solid" }}
            >
              <Button
                asChild
                variant={"link"}
                className="ml-[26px] text-sm font-bold leading-normal"
                onClick={() => toggleMenu(false)}
              >
                <Link href="/generate">
                  <div className="text-sm font-bold leading-normal text-coursePolicyLightGreen">
                    Generate a Policy
                  </div>
                  <div className="ml-[4px]">
                    <Image alt="Green right pointed arrow" src={greenPointer} />
                  </div>
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
