import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="ml-[16px] md:ml-[32px]">
        <span className="text-white text-xl md:text-2xl font-bold leading-[35px] md:leading-9">
          CoursePolicy.
        </span>
        <span className="text-emerald-300 text-xl md:text-2xl font-bold leading-[35px] md:leading-9">
          AI
        </span>
      </h1>
    </Link>
  );
}
