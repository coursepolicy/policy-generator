import Link from "next/link";

interface LogoProps {
  toggleMenu: (pref: boolean) => void;
}

export default function Logo({ toggleMenu }: LogoProps) {
  return (
    <Link href="/" onClick={() => toggleMenu(false)}>
      <h1 className="ml-[16px] md:ml-[32px]">
        <span className="text-xl font-bold leading-[35px] text-white md:text-2xl md:leading-9">
          CoursePolicy.
        </span>
        <span className="text-xl font-bold leading-[35px] text-emerald-300 md:text-2xl md:leading-9">
          AI
        </span>
      </h1>
    </Link>
  );
}
