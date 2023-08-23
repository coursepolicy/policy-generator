import Link from "next/link";
import { navItems } from "../_utils/constants";

export default function Navigation() {
  return (
    <nav className="mr-[22px] hidden w-[495px] items-center justify-between md:flex">
      {navItems.map((item, i) => (
        <Link href={item.href} key={i}>
          <div className="text-right text-sm font-semibold leading-[25px] text-indigo-100 hover:text-slate-50 hover:underline">
            {item.title}
          </div>
        </Link>
      ))}
      <Link href="/generate">
        <div className="flex items-start justify-start gap-2.5 rounded-[100px] bg-teal-600 px-6 py-2 hover:bg-emerald-600">
          <div className="GenerateAPolicy text-right text-sm font-semibold leading-[25px] text-white">
            Generate a Policy
          </div>
        </div>
      </Link>
    </nav>
  );
}
