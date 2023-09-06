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
      <Iframe
        url={process.env.SURVEY_URL as string}
        className="h-[65vh] w-[100%] overflow-hidden border-none"
      />
      <CompletedSurveyButton uniqueId={uniqueId} />
    </>
  );
}
