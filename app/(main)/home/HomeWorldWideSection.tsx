import WorldWideList from "./WorldWideList";
import WorldWideText from "./WorldWideText";

export default function HomeWorldWideSection() {
  return (
    <div className="2xl:ml-[147px]">
      <div className="mt-[-90px]">
        <WorldWideText />
      </div>
      <div>
        <WorldWideList />
      </div>
    </div>
  );
}
