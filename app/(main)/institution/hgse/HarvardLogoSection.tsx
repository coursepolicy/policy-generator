import Image from "next/image";

export default function HarvardLogoSection() {
  return (
    <section className="mx-auto flex max-w-[1600px] justify-center">
      <div className="flex h-full flex-col items-center lg:ml-[17px] lg:mt-[22px] lg:flex-row">
        <h2 className="text-[15px] lg:pr-[14px] lg:text-[19px]">
          in collaboration with:
        </h2>
        <Image
          className="lg:mr-[18px]"
          src="/images/hgse/HGSE_Logo_H.svg"
          alt="Harvard College Logo"
          width={425}
          height={41}
        />
      </div>
    </section>
  );
}
