import Image from "next/image";
import Link from "next/link";

export default function WorldWideList() {
  return (
    <div className="mt-[78px] flex justify-between">
      <ul className="list-none space-y-3 text-[21px] text-white">
        <li>Boston,MA</li>
        <li>Palo Alto,CA</li>
        <li>New York,NY</li>
        <li>Toronto,CA</li>
        <li>Toronto,CA</li>
      </ul>
      <div className="relative w-[15%]">
        <Image src="/images/Line_14.svg" alt="line" objectFit="contain" fill />
      </div>
      <ul className="list-none space-y-3 text-[21px] text-white ">
        <li>Boston,MA</li>
        <li>Palo Alto,CA</li>
        <li>New York,NY</li>
        <li>New York,NY</li>
        <li>New York,NY</li>
      </ul>
      <div className="relative w-[15%]">
        <Image src="/images/Line_14.svg" alt="line" objectFit="contain" fill />
      </div>
      <div>
        <ul className=" list-none space-y-3 text-[21px] text-white">
          <li>Boston,MA</li>
          <li>Palo Alto,CA</li>
          <li>Westwood,CA</li>
          <li>Toronto,CA</li>
          <li>
            <Link href="" className="text-[#38406e]">
              and more!
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
