import Link from "next/link";
import { navItems } from "../_utils/constants";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="mr-[22px] grid list-none grid-flow-col place-items-center gap-9">
        {navItems.map((item, i) => (
          <li key={i}>
            <Button variant={"link"} className="p-0 text-white" asChild>
              <Link
                href={item.href}
                className="text-right text-sm font-semibold leading-[25px] leading-snug text-indigo-100 hover:text-slate-50 hover:underline"
              >
                {item.title}
              </Link>
            </Button>
          </li>
        ))}
        <li>
          <Button
            asChild
            variant={"link"}
            className="flex w-[175px] items-center justify-center gap-2.5 rounded-[100px] bg-coursePolicyGreen px-6 py-2 hover:bg-coursePolicyHoverGreen hover:no-underline"
          >
            <Link
              href="/generate"
              className="GenerateAPolicy text-right text-sm font-semibold leading-[25px] text-white"
            >
              Generate a Policy
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
