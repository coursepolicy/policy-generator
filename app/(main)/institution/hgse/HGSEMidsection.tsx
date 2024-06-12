import Image from "next/image";
export default function HGSEMidsection() {
  return (
    <div className="bg-[#FFFFFF]">
      <section className="mx-auto flex max-w-[1600px] items-center justify-center px-4 lg:pb-[72px]">
        <div className="flex flex-col pt-[100px] text-center lg:ml-[100px] lg:text-left">
          <h2 className="font-crimson text-[32px]">
            Why do I need an AI policy?
          </h2>
          <p className="max-w-[800px] px-4 pt-[20px] text-center text-[16px] leading-normal text-stone-500 lg:px-0  lg:pt-[30px] lg:text-left">
            A clear AI policy clarifies academic expectations, enhances
            communication, and fosters open dialogue about the use of AI,
            ensuring a productive educational environment.
          </p>
          <div className="flex flex-col items-center justify-center p-4 lg:flex-row lg:justify-between lg:p-0 lg:pt-[45px]">
            <div className="flex w-[100%] max-w-[450px] flex-col border-t-[3px] border-[#A41D30] py-8 text-center lg:mr-[35px] lg:max-w-[240px] lg:pb-[32px] lg:pt-[23px] lg:text-left">
              <h3 className="text-center font-crimson text-[24px] lg:text-left">
                Empower student learning
              </h3>
              <p className="pt-[20px] text-center text-[16px] text-stone-500 lg:text-left">
                Clear AI policies help s tudents effectively manage their
                coursework and utilize AI tools responsibly.
              </p>
            </div>
            <div className="flex w-[100%] max-w-[450px] flex-col border-t-[3px] border-[#A41D30] py-8 text-center lg:mr-[35px] lg:max-w-[240px] lg:pb-[32px] lg:pt-[23px] lg:text-left">
              <h3 className="text-center font-crimson text-[24px] lg:text-left">
                Facilitate policy communication
              </h3>
              <p className="pt-[20px] text-center text-[16px] text-stone-500 lg:text-left">
                Well-defined AI policies reduce confusion and inquiries,
                allowing students to concentrate on their learning.
              </p>
            </div>
            <div className="flex w-[100%] max-w-[450px] flex-col border-t-[3px] border-[#A41D30] py-8 text-center lg:mr-[35px] lg:max-w-[240px] lg:pb-[32px] lg:pt-[23px] lg:text-left">
              <h3 className="text-center font-crimson text-[24px] lg:text-left">
                Encourage constructive discourse
              </h3>
              <p className="pt-[20px] text-center text-[16px] text-stone-500 lg:mb-[24px] lg:text-left">
                Transparent guidelines promote open discussions about the
                beneficial use of AI in education.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:ml-[100px] xl:relative xl:mr-[100px] xl:mt-[90px] xl:block">
          <Image
            src="/images/hgse/splash-image2.jpg"
            alt="Photo of student graduation at Harvard"
            objectFit="contain"
            width={370}
            height={370}
          />
        </div>
      </section>
    </div>
  );
}
