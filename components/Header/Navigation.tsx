import Link from "next/link";
import { navItems } from "../../lib/constants";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="mr-[22px] grid list-none grid-flow-col place-items-center gap-9">
        {navItems.map((item, i) => (
          <li key={i}>
            <Button variant={"link"} className="p-0 text-white" asChild>
              <Link
                href={item.href}
                className="text-right leading-snug text-[sm] text-indigo-100 hover:text-slate-50 hover:underline lg:leading-[25px]"
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
            className="mr-[27px] flex w-[164px] items-center justify-center gap-2.5 rounded-[100px] bg-coursePolicyGreen px-5 py-2 hover:bg-coursePolicyHoverGreen hover:no-underline"
          >
            <Link
              href="/generate"
              className="GenerateAPolicy inline-flex items-center justify-center text-right text-sm leading-[25px] text-white"
            >
              Generate AI Policy
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
