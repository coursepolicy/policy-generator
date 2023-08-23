import Iframe from "react-iframe";

export default function Survey() {
  return (
    <main>
      <Iframe
        url={process.env.SURVEY_URL as string}
        className="main-height w-[100%] overflow-hidden border-none"
      />
    </main>
  );
}
