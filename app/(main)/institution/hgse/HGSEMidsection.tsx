import Image from "next/image";
export default function HGSEMidsection() {
  return (
    <section className="mx-auto flex max-w-[1600px] items-center justify-center px-4 lg:px-0 lg:pb-[72px]">
      <div className="flex flex-col pt-[85px] text-center lg:mr-[35px] lg:text-left">
        <h2 className="font-serif text-[32px]">Why use CoursePolicy?</h2>
        <p className="max-w-[740px] px-4 pt-[20px] text-center text-[16px] leading-normal text-stone-500 lg:px-0  lg:pt-[30px] lg:text-left">
          When we conducted a survey etc etc, we found that over 90% of course
          instructors think their students will use generative AI, regardless of
          what course policies say. Other insights. When we conducted a survey
          etc etc, we found that over 90% of course instructors think their
          students will use generative AI, regardless of what
        </p>
        <div className="flex flex-col items-center justify-center p-4 lg:flex-row lg:justify-between lg:p-0 lg:pt-[45px]">
          <div className="flex w-[100%] max-w-[450px] flex-col border-t-[3px] border-[#A41D30] py-8 text-center lg:mr-[35px] lg:max-w-[240px] lg:pb-[32px] lg:pt-[23px] lg:text-left">
            <h3 className="text-center font-serif text-[24px] lg:text-left">
              Students recieve clarity
            </h3>
            <p className="pt-[20px] text-center text-[16px] text-stone-500 lg:text-left">
              When we conducted a survey etc etc, we found that over 90% of
              course instructors think their students will sue generative AI,
              regardless of.
            </p>
          </div>
          <div className="flex w-[100%] max-w-[450px] flex-col border-t-[3px] border-[#A41D30] py-8 text-center lg:mr-[35px] lg:max-w-[240px] lg:pb-[32px] lg:pt-[23px] lg:text-left">
            <h3 className="text-center font-serif text-[24px] lg:text-left">
              Ease of use, right-out-of-the box tool
            </h3>
            <p className="pt-[20px] text-center text-[16px] text-stone-500 lg:text-left">
              When we conducted a survey etc etc, we found that over 90% of
              course instructors think their students will sue generative AI,
              regardless of.
            </p>
          </div>
          <div className="flex w-[100%] max-w-[450px] flex-col border-t-[3px] border-[#A41D30] py-8 text-center lg:mr-[35px] lg:max-w-[240px] lg:pb-[32px] lg:pt-[23px] lg:text-left">
            <h3 className="text-center font-serif text-[24px] lg:text-left">
              See what other professors are doing
            </h3>
            <p className="pt-[20px] text-center text-[16px] text-stone-500 lg:text-left">
              When we conducted a survey etc etc, we found that over 90% of
              course instructors think their students will sue generative AI,
              regardless of.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden h-[400px] w-[100%] max-w-[620px] xl:mt-[40px] xl:block">
        <Image
          src="/images/hgse/splash-image.jpg"
          alt="Photo of student graduation at Harvard"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
}
