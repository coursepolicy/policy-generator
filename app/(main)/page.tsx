"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Carousel from "./_home/Carousel";
import CarouselSlide from "./_home/CarouselSlide";
import rightArrow from "@/public/images/right-arrow.svg";
import rightArrowWhite from "@/public/images/right-arrow-white.svg";

const components = [CarouselSlide, CarouselSlide, CarouselSlide];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="max-w-[1018px] self-center p-8 text-center text-[50px] font-bold leading-[70px] text-neutral-900 md:pt-14">
        The step-by-step AI policy generator for university course instructor
      </h1>
      <p className="w-[100%] max-w-[875px] p-8 text-center text-base font-semibold leading-normal text-stone-500 md:pt-0">
        *These numbers came from our survey findings. To learn more about the
        survey, click here. *These numbers came from our survey findings. To
        learn more about the survey, click here.*These numbers came from our
        survey findings. To learn more about the survey, click here.*These
        numbers came from our survey findings. To learn more about the survey,
        click here.*These numbers came from our survey findings. To learn more
        about the survey, click here.
      </p>
      <div className="my-[60px] grid grid-flow-col gap-6">
        <Button
          className="inline-flex h-[41px] w-[199px] items-center justify-start gap-2.5 rounded-[100px] 
         bg-coursePolicyGreen px-6 py-2"
        >
          Generate AI Policy
          <Image alt="right pointed arrow" src={rightArrowWhite} />
        </Button>
        <Button
          variant={"outline"}
          className="inline-flex h-[41px] w-[210px] items-start justify-start gap-2.5 rounded-[100px] border border-slate-600
          bg-white px-6 py-2 text-right text-sm font-semibold leading-[25px] text-slate-600"
        >
          Retrieve existing policy
        </Button>
      </div>
      <div
        className="flex min-h-[400px] max-w-[1440px] flex-col items-center rounded-[5px] border border-neutral-200 bg-white
      px-[20px] lg:flex-row"
      >
        <Carousel components={components} />
        <div className="mt-[40px] lg:ml-[50px] lg:mt-0">
          <p className="text-base font-semibold leading-normal text-stone-500 ">
            *These numbers came from our survey findings. To learn more about
            the survey, click here. *These numbers came from our survey
            findings. To learn more about the survey, click here.*These numbers
            came from our survey findings. To learn more about the survey, click
            here.*These numbers came from our survey findings. To learn more
            about the survey, click here.*These numbers came from our survey
            findings.
          </p>
          <p className="mt-[25px] text-base font-semibold leading-normal text-stone-500">
            To learn more about the survey, click here. To learn more about the
            survey, click here.*These numbers came from our survey findings. To
            learn more about the survey, click here.*These numbers came from our
            survey findings. To learn more about the survey, click here.
          </p>
          <div className="flex justify-evenly">
            <div>
              <Button
                className=" flex h-[41px] w-[220px] items-center justify-start gap-2.5 rounded-[100px] border border-[#4A558E]
              px-6 py-2 text-right text-sm font-semibold leading-[25px] text-[#4A558E] sm:mt-[10px] lg:mt-[45px]"
                variant={"outline"}
              >
                Read survey insights
                <Image alt="right pointed arrow" src={rightArrow} />
              </Button>
            </div>
            <div>
              <Button
                asChild
                className=" flex h-[41px] items-center justify-start gap-2.5 rounded-[100px] bg-[#4A558E]
              px-6 py-2 text-right text-sm font-semibold leading-[25px] text-white sm:mt-[10px] lg:mt-[45px]"
                variant={"default"}
              >
                <Link href="/sample">View a sample policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
