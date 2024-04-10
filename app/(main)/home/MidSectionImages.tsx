import Image from "next/image";

export default function MidSectionImages() {
  return (
    <div className="mb-[80px] mt-[55px] flex justify-center">
      <div className="flex-cols flex items-center text-center">
        <div>
          <Image
            src="/images/step1_pic.png"
            alt="step1-image"
            width={200}
            height={200}
          />
        </div>

        <div className="">text</div>
        <div className="items-center font-bold leading-[45px] text-[#38406e]">
          <h6>
            {" "}
            To clear up confusing <span>course guidelines for students</span>
          </h6>
        </div>
      </div>
      <div className="hr relative w-[10%]">
        <Image src="/images/Line.svg" alt="line" objectFit="contain" fill />
      </div>
      <div className="flex flex-col items-center text-center">
        <div>
          <Image
            src="/images/step2_pic.png"
            alt="step2-image"
            width={200}
            height={200}
          />
        </div>

        <div className="">text</div>
        <div className="items-center font-bold leading-[45px] text-[#38406e]">
          <h6>
            {" "}
            To quickly and effectively <span>create an AI policy</span>
          </h6>
        </div>
      </div>
      <div className="w-[10%] bg-red-500">divider placeholder</div>
      <div className="flex flex-col items-center text-center">
        <div>
          <Image
            src="/images/step3_pic.png"
            alt="step3-image"
            width={200}
            height={200}
          />
        </div>

        <div className="">text</div>
        <div className="items-center font-bold leading-[45px] text-[#38406e]">
          <h6>
            {" "}
            To help students operate <span> with success!</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
