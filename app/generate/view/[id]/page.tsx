import { getSurveyData } from "@/app/_utils/getServeyData";
import PolicyResults from "./PolicyResults";

export default async function View({
  params: { id },
}: {
  params: { id: string };
}) {
  const surveyData = await getSurveyData(id);
  console.log({ surveyData });

  return (
    <main className="mx-auto my-0 mt-[64px] flex w-[100%] max-w-[1000px] flex-col bg-white">
      <PolicyResults data={surveyData} />
    </main>
  );
}
