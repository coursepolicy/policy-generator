import MidSectionImages from "./MidSectionImages";
import MidSectionText from "./MidSectionText";

export default function MidSection() {
  return (
    <div className="mx-auto flex max-w-[1600px] justify-center bg-[#F6F6F9]">
      <MidSectionText />
      <MidSectionImages />
    </div>
  );
}
