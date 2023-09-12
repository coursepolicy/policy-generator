import Image from "next/image";
import notice from "@/public/images/notice.svg";
import { Input } from "@/components/ui/input";
import CopyButton from "./CopyButton";

import { cn } from "@/lib/utils";

export default function NoticeMessage({
  uniqueId,
  className,
}: {
  uniqueId: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `mt-5 h-[100%] w-[90%] self-center rounded-[5px] border
        border-[#FFA113] bg-[#FFF4E4] p-[15px] md:w-[100%] md:max-w-[725px]`,
        className,
      )}
    >
      <div className="flex flex-col items-center md:grid md:grid-flow-col md:gap-9">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start">
          <div className="md:mr-[5px] md:pt-[4px]">
            <Image alt="notice text" src={notice} />
          </div>
          <p className="text-sm font-normal leading-normal text-black">
            Please copy and save the unique ID for your AI course policy. You
            will use it to review and edit your policy later.
          </p>
        </div>
        <div className="inline-flex h-10 w-[167.30px] flex-row items-center justify-between gap-2.5 border border-black p-[2px]">
          <Input
            placeholder="someId"
            value={uniqueId}
            readOnly
            className="w-[125px] border-none bg-transparent pr-0 text-center text-sm font-semibold leading-[25px]  text-black"
          />
          <CopyButton text={uniqueId} />
        </div>
      </div>
    </div>
  );
}
