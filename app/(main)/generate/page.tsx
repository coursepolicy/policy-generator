"use client";

import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Iframe from "react-iframe";
import { Button } from "@/components/ui/button";

export default function Generate() {
  const [generatedId, setGeneratedId] = useState("12345ASDF");
  const router = useRouter();
  const onClick = () => {
    setGeneratedId(uuidv4());
  };

  const frameRef = useRef(null);

  console.log(process.env.SURVEY_URL);

  return (
    <main>
      <div>
        <div>image</div>
        <p>
          Please copy and save the unique ID for your AI course policy. You will
          use it to review and edit your policy later.
        </p>
        <div>
          <input placeholder="someId" />
          <Button onClick={onClick}>Generate</Button>
        </div>
      </div>
      <Iframe
        url={process.env.SURVEY_URL as string}
        className="main-height w-[100%] overflow-hidden border-none"
      />
      {/* <iframe src={process.env.SURVEY_URL}></iframe> */}
      <div>
        <Button>I have completed the survey</Button>
      </div>
    </main>
  );
}
