import Image from "next/image";

export default function UnitedStatesImage() {
  return (
    <div className=" mr-[70px] mt-[25px]">
      <Image
        src="/images/UnitedStates.png"
        width={800}
        height={800}
        alt="USA-image"
      />
    </div>
  );
}
