"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import React from "react";

export default function Generate() {
  const [generatedId, setGeneratedId] = useState("12345ASDF");
  const router = useRouter();
  const onClick = () => {
    setGeneratedId(uuidv4());
  };

  return (
    <main>
      <div>
        <h2>Create a new AI Policy</h2>
        <h2>Retrieve your AI Policy by Unique ID</h2>
        <div>
          <p>Generate Id</p>
          <p>{generatedId}</p>
          <button onClick={onClick}>Generate</button>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Enter Id" />
        <button>Retrieve</button>
      </div>
      <div>
        <div>
          <p>enter a uuid or click one from below</p>
          <div className="border border-black">
            <button
              onClick={() => {
                router.push(`/generate/view/HELLOWORLD`);
              }}
            >
              HELLOWORLD
            </button>
          </div>
          <div className="border border-black">
            <button
              onClick={() => {
                router.push(`/generate/view/Allow_Under_Conditions_Case_1`);
              }}
            >
              Allow Under Conditions Case 1
            </button>
          </div>
          <div className="border border-black">
            <button
              onClick={() => {
                router.push(`/generate/view/Strictly_Prohibited`);
              }}
            >
              Strictly_Prohibited
            </button>
          </div>
          <div className="border border-black">
            <button
              onClick={() => {
                router.push(`/generate/view/No_Restriction`);
              }}
            >
              No_Restriction
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
