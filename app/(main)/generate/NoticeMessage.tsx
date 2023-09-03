import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import notice from "@/public/images/notice.svg";
import { Input } from "@/components/ui/input";
import CopyButton from "./CopyButton";

export default function NoticeMessage({ uniqueId }: { uniqueId: string }) {
  return (
    <div
      className="h-[100%] w-[100%] max-w-[823px] self-center rounded-[5px] border-red-400
      bg-rose-50 p-[15px] md:my-[25px] md:border"
    >
      <div className="flex flex-col items-center md:grid md:grid-flow-col md:gap-9">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start">
          <div className="md:mr-[5px] md:pt-[4px]">
            <Image alt="notice text" src={notice} />
          </div>
          <p>
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
