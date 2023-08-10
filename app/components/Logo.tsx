import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
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
