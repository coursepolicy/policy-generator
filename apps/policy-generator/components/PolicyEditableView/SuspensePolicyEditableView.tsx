import React from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Tooltip from "../Tooltip";
import { Button } from "../ui/button";
import addPolicy from "@/public/images/add-policy.svg";
import arrow from "@/public/images/arrow.svg";

export default function SuspenseResult() {
  return (
    <div className="p-[10px] px-[5px] md:px-[20px] md:pt-[39px] ">
      <header className="mb-[24px] flex w-[100%] max-w-[inherit] flex-col justify-between border-b border-[#CCCCCC] bg-white md:sticky md:top-[165px] md:z-20 md:flex-row">
        <div className="mt-3 flex flex-col">
          <Skeleton className="h-[50px] w-[500px] rounded-sm" />
          <Skeleton className="mt-[10px] h-[15px] w-[300px] rounded-sm" />
          <Skeleton className="my-[10px] h-[15px] w-[300px] rounded-sm" />
        </div>
        <div className="grid grid-flow-col items-start justify-between gap-2 md:mt-[27px] md:justify-start">
          <div className="relative flex flex-col md:flex-row md:justify-end">
            <Button
              variant={"outline"}
              className={`inline-flex h-9 w-[150px] items-center justify-center gap-1.5 rounded-[3px] border border-[#364071] border-[#364071] px-3  px-3 py-1.5 py-1.5`}
            >
              <p className="text-center text-xs font-bold leading-normal text-[#364071]">
                Reorder Sections
              </p>
              <div className="text-center text-sm font-bold leading-normal text-neutral-500">
                <Image src={arrow} alt="down arrow image" className="" />
              </div>
            </Button>
          </div>
          <Button
            loading={true}
            className="inline-flex h-9 w-[92px] items-center justify-center gap-1.5 rounded-[3px] bg-coursePolicyGreen px-3 py-1.5 hover:bg-coursePolicyHoverGreen"
          />
        </div>
      </header>
      <article>
        <Tooltip />
        <section className="mb-[48px] border-b border-[#CCCCCC] pb-[48px]">
          <header className="flex flex-col-reverse md:relative  md:justify-between">
            <div className="right-0 top-0 mb-[10px] flex flex-col items-center justify-between md:absolute md:mb-0 md:flex-row">
              <div
                className={`ml-[12px] inline-flex h-7 w-[171px] items-center justify-center gap-2.5 px-3 py-0.5`}
              >
                <Skeleton className="my-[10px] ml-[20px] h-[30px] w-[100px] rounded-sm" />
              </div>
            </div>
            <Skeleton className="my-[10px] ml-[20px] h-[30px] w-[500px] rounded-sm" />
          </header>
          <section>
            <Skeleton className="ml-[20px] h-[100px] w-[920px] rounded-sm" />
          </section>
          <section className="flex h-[100%] w-[100%] flex-col items-center px-[20px] py-[24px] md:flex-row md:items-stretch md:justify-between">
            <div
              className={`use-cases w-[100%] max-w-[445px] bg-stone-100 sm:px-[25px] sm:py-[30px]`}
            >
              <Skeleton className="ml-[20px] h-[30px] w-[100px] rounded-sm" />
            </div>
            <div
              className={`use-cases w-[100%] max-w-[445px] bg-red-50 sm:px-[25px] sm:py-[30px]`}
            >
              <Skeleton className="ml-[20px] h-[500px] w-[100px] rounded-sm" />
            </div>
          </section>
        </section>
      </article>
      <section className="mt-[48px]">
        <Button
          variant={"ghost"}
          className="flex h-[104px] w-[100%] cursor-pointer items-center justify-center border border-dashed border-neutral-400 hover:bg-neutral-100"
        >
          <p>I want to add additional sections of information</p>
          <div>
            <Image
              alt="plus sign image"
              src={addPolicy}
              className="ml-[10px]"
            />
          </div>
        </Button>
      </section>
    </div>
  );
}
