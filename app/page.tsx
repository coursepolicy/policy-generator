import Iframe from "react-iframe";

export default function Home() {
  return (
    <Iframe
      url={process.env.SURVEY_URL as string}
      className="main-height w-[100%] overflow-hidden border-none"
    />
  );
}
