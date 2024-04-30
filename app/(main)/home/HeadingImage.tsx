import Image from "next/image";

export default function HeadingImage() {
  return (
    <div>
      <Image
        className="mb-[-2px] ml-[-113px] mr-[-145px] mt-[105px] xl:mt-[120px]"
        src="/images/hp_image1.png"
        width={937}
        height={656}
        alt="header-image"
      />
    </div>
  );
}
