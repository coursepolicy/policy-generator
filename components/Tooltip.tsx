export default function Tooltip() {
  return (
    <div className="flex min-h-[59px] w-[100%] max-w-[904px]  items-center justify-start rounded-[3px] bg-[#3284ff] pl-[20px] md:mb-[25px] md:ml-[20px] md:mt-[50px] md:w-[96%]">
      <p>
        <span className="text-xs font-bold leading-normal text-white">
          INSTRUCTIONS
        </span>
        <span className="flex text-xs font-normal leading-normal text-white">
          To make modifications to your AI policy, try clicking on a section to
          start editing the content.
        </span>
      </p>
    </div>
  );
}
