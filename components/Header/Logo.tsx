import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface LogoProps {
  toggleMenu: (pref: boolean) => void;
}

export default function Logo({ toggleMenu }: LogoProps) {
  const pathname = usePathname();
  const isHGSE = pathname.includes("hgse");
  return (
    <Button
      asChild
      variant={"link"}
      className="ml-[16px] no-underline hover:no-underline md:ml-[32px]"
    >
      <Link
        href={isHGSE ? "/institution/hgse" : "/"}
        onClick={() => toggleMenu(false)}
      >
        <span className="text-xl font-bold leading-[35px] text-white md:text-2xl md:leading-9">
          CoursePolicy.
        </span>
        <span className="text-xl font-bold leading-[35px] text-coursePolicyLightGreen md:text-2xl md:leading-9">
          AI
        </span>
      </Link>
    </Button>
  );
}
