import Link from "next/link";
import React from "react";

interface LogoProps {
  toggleMenu: (pref: boolean) => void;
}

export default function Logo({ toggleMenu }: LogoProps) {
  return (
    <Link href="/" onClick={() => toggleMenu(false)}>
      <div className="ml-[16px] md:ml-[32px]">
        <span className="text-xl font-bold leading-[35px] text-white md:text-2xl md:leading-9">
          CoursePolicy.
        </span>
        <span className="text-xl font-bold leading-[35px] text-coursePolicyGreen md:text-2xl md:leading-9">
          AI
        </span>
      </div>
    </Link>
  );
}
