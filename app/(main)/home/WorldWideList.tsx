import Link from "next/link";

export default function WorldWideList() {
  return (
    <div className="flex">
      <div>
        <ul className="list-none text-left text-white md:p-8">
          <li>Boston,MA</li>
          <li>Palo Alto,CA</li>
          <li>New York,NY</li>
          <li>Toronta,CA</li>
          <li>Toronta,CA</li>
        </ul>
      </div>
      <div
        className="h-[1px] w-[150px] rotate-90
             cursor-pointer touch-manipulation self-center rounded-none border-none bg-white"
      ></div>
      <div>
        <ul className="list-none text-left text-white md:p-8">
          <li>Boston,MA</li>
          <li>Palo Alto,CA</li>
          <li>New York,NY</li>
          <li>Toronta,CA</li>
          <li>Toronta,CA</li>
        </ul>
      </div>
      <div
        className="h-[1px] w-[150px]
             rotate-90 cursor-pointer touch-manipulation self-center rounded-none border-none bg-white"
      ></div>
      <div>
        <ul className="list-none text-left text-white md:p-8">
          <li>Boston,MA</li>
          <li>Palo Alto,CA</li>
          <li>New York,NY</li>
          <li>Toronta,CA</li>
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
