import Image from "next/image";
import Link from "next/link";

export default function WorldWideList() {
  return (
    <div className="mt-[78px] flex flex-col items-center lg:flex-row lg:justify-between">
      <ul className="list-none space-y-3 pb-[20px] text-[21px] text-white lg:pb-0">
        <li>Boston,MA</li>
        <li>Palo Alto,CA</li>
        <li>New York,NY</li>
        <li>Dallas,TX</li>
        <li>Toronto,CA</li>
      </ul>
      <ul className="list-none space-y-3 border-y-2 pb-[20px] pt-[20px] text-[21px] text-white lg:border-x-2 lg:border-y-0 lg:pb-0 lg:pl-[45px] lg:pr-[45px] lg:pt-0 ">
        <li>Boston,MA</li>
        <li>Palo Alto,CA</li>
        <li>Austin,TX</li>
        <li>New York,NY</li>
        <li>New York,NY</li>
      </ul>
      <div>
        <ul className=" list-none space-y-3 pt-[20px] text-[21px] text-white lg:pt-0">
          <li>Boston,MA</li>
          <li>Palo Alto,CA</li>
          <li>New York,NY</li>
          <li>Dallas,TX</li>
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
