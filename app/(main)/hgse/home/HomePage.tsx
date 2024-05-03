import ButtonSection from "./ButtonSection";
import HarvardLogoSection from "./HarvardLogoSection";
import TextHeader from "./TextHeader";
import TextParagraph from "./TextParagraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import rightArrowBlue from "@/public/images/right-arrow-blue.svg";
import LowerSection from "./LowerSection";
import HGSEMidsection from "./HGSEMidsection";
import LowerButtonSection from "./LowerButtonSection";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="mx-auto flex max-w-[1600px] justify-center">
          <HarvardLogoSection />
        </div>
        <div className="bg-[#F6F6F9] px-4 lg:mt-[20px] lg:px-0 lg:pb-[70px]">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center lg:flex-row">
            <div className="lg:flex-start">
              <TextHeader />
            </div>
            <div className="lg:ml-[-7px] lg:mt-[50px]">
              <TextParagraph />
              <ButtonSection />
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1600px] items-center justify-center px-4 lg:px-0 lg:pb-[72px] ">
          <HGSEMidsection />
          <div className="hidden h-[400px] w-[100%] max-w-[620px] xl:mt-[40px] xl:block">
            <Image
              src="/images/hgse/splash-image.jpg"
              alt="Photo of student graduation at Harvard"
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#F6F6F9] px-4 lg:px-0">
          <div className="flex max-w-[1600px] flex-col lg:mr-[30px] lg:mt-[38px] lg:pb-[60px] lg:text-left">
            <LowerSection />
            <LowerButtonSection />
          </div>
        </div>
      </main>
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
          <Link href="/">Take me to the full website</Link>
          <Image
            className="ml-[5px]"
            alt="right pointed arrow"
            src={rightArrowBlue}
          />
        </div>
      </div>
    </>
  );
}
