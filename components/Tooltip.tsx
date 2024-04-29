import Image from "next/image";

export default function Tooltip() {
  return (
    <div className="flex min-h-[34px] w-[100%] max-w-[904px]  items-center justify-start rounded-[3px] bg-[#3284ff] pl-[20px] md:ml-[20px] md:w-[96%]">
      <p>
        <span className="text-xs font-normal leading-normal text-blue-500">
          <Image
            alt="tooltip lightbulb"
            src="/images/lightbulb_white.png"
            width="12"
            height="13"
            className="inline-block"
          />
        </span>
        <span className="text-xs font-bold leading-normal text-white"> </span>
        <span className="text-xs font-bold leading-normal text-white">
          TIP:{" "}
        </span>
        <span className="text-xs font-normal leading-normal text-white">
          <i>
            To make modifications to your AI policy, try clicking on a section
            to start editing the content. Bold and italic shortcuts are
            supported.
          </i>
        </span>
      </p>
    </div>
  );
}
