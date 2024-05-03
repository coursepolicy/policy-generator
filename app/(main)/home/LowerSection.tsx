import HomeWorldWideSection from "./HomeWorldWideSection";
import UnitedStatesImage from "./UnitedStatesImage";

export default function LowerSection() {
  return (
    <div className="hidden bg-[#191f3c] pb-[105px]">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-4 lg:px-0 2xl:flex-row 2xl:justify-between 2xl:text-left">
        <HomeWorldWideSection />
        <div className="hidden 2xl:block">
          <UnitedStatesImage />
        </div>
      </div>
    </div>
  );
}
