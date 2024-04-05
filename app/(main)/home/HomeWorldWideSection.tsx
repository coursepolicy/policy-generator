import WorldWideList from "./WorldWideList";
import WorldWideText from "./WorldWideText";

export default function HomeWorldWideSection() {
  return (
    <div className="mb-[50px] ml-[150px] bg-[#191f3c]">
      <div>
        <WorldWideText />
      </div>
      <div>
        <WorldWideList />
      </div>
    </div>
  );
}
