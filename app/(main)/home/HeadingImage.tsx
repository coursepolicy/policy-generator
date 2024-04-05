import Image from "next/image";

export default function HeadingImage() {
  return (
    <div className="flex justify-center md:mt-[160px]">
      <Image
        src="/images/hp_image1.png"
        width={500}
        height={500}
        alt="image1"
      />
    </div>
  );
}
