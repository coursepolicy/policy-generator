import LowerButtonSection from "./LowerButtonSection";
export default function LowerSection() {
  return (
    <section className="flex items-center justify-center bg-[#F6F6F9] px-4 lg:px-0 lg:pb-[28px]">
      <div className="flex max-w-[1600px] flex-col lg:pb-[60px] lg:pl-[20px] lg:pt-[70px] lg:text-left">
        <div className="flex flex-col pt-[50px] text-left md:mt-[7px] lg:pt-0">
          <h2 className="px-4 font-serif text-[30px] lg:px-0">
            Ready to get started?
          </h2>
          <p className="max-w-[800px] px-4 pt-[30px] text-left text-[16px] leading-normal text-stone-500 lg:px-0 lg:text-left">
            When we conducted a survey etc etc, we found that over 90% of course
            instructors think their students will use generative AI, regardless
            of what course policies say. Other insights. When we conducted a
            survey etc etc, we found that over 90% of course instructors think
            their students will use generative AI, regardless of what
          </p>
        </div>
        <LowerButtonSection />
      </div>
    </section>
  );
}
