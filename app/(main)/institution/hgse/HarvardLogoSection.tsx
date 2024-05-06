import Image from "next/image";

export default function HarvardLogoSection() {
  return (
    <div className="bg-[#ffffff]">
      <section className="mx-auto flex max-w-[1600px] justify-center">
        <div className="flex h-full flex-col items-center lg:flex-row">
          <h2 className="text-[15px] lg:text-[19px]">in collaboration with:</h2>
          <Image
            className="lg:mr-[20px]"
            src="/images/hgse/HGSE_Logo_Horizontal_rgb.jpg"
            alt="Harvard College Logo"
            width={450}
            height={41}
          />
        </div>
      </section>
    </div>
  );
}
