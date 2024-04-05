import Image from "next/image";

export default function HeadingImage() {
  return (
    <div className=" mr-[70px] mt-[25px]">
      <Image
        src="/images/hp_image1.png"
        width={800}
        height={800}
        alt="header-image"
      />
    </div>
  );
}
