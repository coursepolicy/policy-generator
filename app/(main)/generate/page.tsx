import React from "react";
import { v4 as uuidv4 } from "uuid";
import Iframe from "react-iframe";
import NoticeMessage from "./NoticeMessage";
import CompletedSurveyButton from "./CompletedSurveyButton";

export default function Generate() {
  const uniqueId = uuidv4();

  return (
    <>
      <NoticeMessage uniqueId={uniqueId} />
      <div className="flex justify-center">
        <Iframe
          url={process.env.SURVEY_URL as string}
          className="grid
        h-screen w-[100%] max-w-[1000px] overflow-hidden border-none"
        />
      </div>
      <CompletedSurveyButton uniqueId={uniqueId} />
    </>
  );
}
