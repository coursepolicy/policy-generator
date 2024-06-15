import LowerButtonSection from "./LowerButtonSection";
export default function LowerSection() {
  return (
    <section className="flex items-center justify-center bg-[#F6F6F9] px-4 lg:px-0 lg:pb-[28px]">
      <div className="flex max-w-[1600px] flex-col lg:pb-[60px] lg:pl-[20px] lg:pt-[70px] lg:text-left">
        <div className="flex flex-col pt-[50px] text-left md:mt-[7px] lg:pt-0">
          <h2 className="px-4 font-crimson text-[30px] lg:px-0">
            Ready to get started?
          </h2>
          <p className="max-w-[800px] px-4 pt-[30px] text-left text-[16px] leading-normal text-stone-500 lg:px-0 lg:text-left">
            If you are interested in beginning the process of creating a policy
            - start by viewing a sample policy, or creating your own. Within the
            policy builder, you&apos;re able to make changes directly, customize
            your sections, and reorder as needed.
          </p>
        </div>
        <LowerButtonSection />
      </div>
    </section>
  );
}
