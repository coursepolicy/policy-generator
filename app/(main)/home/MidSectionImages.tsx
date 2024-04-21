import Image from "next/image";

export default function MidSectionImages() {
  return (
    <div className="mt-[72px] max-w-[1600px] lg:flex">
      <div className="flex flex-col items-center text-center lg:w-[35%] lg:pl-[135px]">
        <div>
          <Image
            src="/images/step1_pic.png"
            alt="step1-image"
            width={290}
            height={289}
          />
        </div>
        <div className="mt-[34px] rounded-full bg-[#e0e4fd] p-1 text-[11px] font-bold text-[#38406e]">
          STEP ONE: BEFORE
        </div>
        <div className="mt-[20px] max-w-[350px] items-center text-[24px] font-bold text-[#364071] text-[#38406e]">
          <h6>
            {" "}
            To clear up confusing course <span>guidelines for students</span>
          </h6>
        </div>
      </div>
      <div className=" relative mb-[120px] w-[11%]">
        <Image src="/images/Line.svg" alt="line" objectFit="contain" fill />
      </div>
      <div className="flex flex-col items-center text-center lg:w-[25%]">
        <div>
          <Image
            src="/images/step2_pic.png"
            alt="step1-image"
            width={290}
            height={289}
          />
        </div>
        <div className="mt-[34px] rounded-full bg-[#e0e4fd] p-1 text-[11px] font-bold text-[#38406e]">
          STEP TWO: USAGE
        </div>
        <div className="mt-[20px] max-w-[300px] items-center text-[24px] font-bold text-[#364071] text-[#38406e]">
          <h6>
            {" "}
            To quickly and effectively <span>create an AI policy</span>
          </h6>
        </div>
      </div>
      <div className="relative mb-[120px] w-[11%]">
        <Image src="/images/Line.svg" alt="line" objectFit="contain" fill />
      </div>
      <div className="flex flex-col items-center text-center lg:w-[35%] lg:pr-[150px]">
        <div>
          <Image
            src="/images/step3_pic.png"
            alt="step1-image"
            width={290}
            height={289}
          />
        </div>
        <div className="mt-[34px] rounded-full bg-[#e0e4fd] p-1 text-[11px] font-bold text-[#38406e]">
          STEP THREE: AFTER
        </div>
        <div className="mt-[20px] max-w-[300px] items-center text-[24px] font-bold text-[#364071] text-[#38406e]">
          <h6>
            {" "}
            To help students operate <span>with success! &#x2705;</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
