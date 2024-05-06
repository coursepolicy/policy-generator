import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import rightArrowBlue from "@/public/images/right-arrow-blue.svg";
export default function HGSEFooter() {
  return (
    <>
      <footer
        className="flex justify-center bg-[#181f3e] px-4 text-center sm:mx-0
      lg:px-0"
      >
        <div className="grid max-w-[1600px] grid-flow-row gap-2 lg:mb-[18px] lg:mr-[30px] lg:text-left">
          <h2 className="mt-[45px] font-serif text-[32px] text-white lg:mt-[58px]">
            Contact Us
          </h2>
          <p className="mt-[25px] text-[16px] font-normal text-white">
            Are you a course instructor, student, university admin, or a
            technologist? We would love to hear from you.
          </p>
          <p className="mb-[40px] text-[17px] text-white">
            Drop us an email at&nbsp;
            <Button
              asChild
              variant={"link"}
              className="cursor-pointer p-0 text-[16px] text-blue-500 underline"
            >
              <a href="mailto:here@coursepolicy.ai" target="_blank">
                here@coursepolicy.ai
              </a>
            </Button>
          </p>
        </div>
      </footer>
      <div className="flex bg-[#252d54]">
        <div className="text-md mx-auto flex max-w-[1600px] py-3 text-center text-[#acb8f1] ">
          <Link href="/" className="flex items-center">
            Take me to the full website
            <span className="ml-[5px]">
              <Image
                alt="right pointed arrow"
                src={rightArrowBlue}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
