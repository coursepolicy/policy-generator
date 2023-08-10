import Link from "next/link";

export default function Navigation() {
  return (
    <div className="mr-[22px] hidden w-[495px] items-center justify-between lg:flex">
      <div className="text-right text-sm font-semibold leading-[25px] text-white">
        <Link href="/blog">Findings + Insights</Link>
      </div>
      <div className="text-right text-sm font-semibold leading-[25px] text-white">
        <Link href="/about">About</Link>
      </div>
      <div className="text-right text-sm font-semibold leading-[25px] text-white">
        <Link href="/contact">Contact</Link>
      </div>
      <Link href="/generate">
        <div className="flex items-start justify-start gap-2.5 rounded-[100px] bg-teal-600 px-6 py-2">
          <div className="GenerateAPolicy text-right text-sm font-semibold leading-[25px] text-white">
            Generate a Policy
          </div>
        </div>
      </Link>
    </div>
  );
}
