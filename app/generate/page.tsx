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
          <button
            onClick={() => {
              router.push(`/generate/view/HELLOWORLD`);
            }}
          >
            HELLOWORLD
          </button>
          <button
            onClick={() => {
              router.push(`/generate/view/Strictly_Prohibited`);
            }}
          >
            Strictly_Prohibited
          </button>
          <button
            onClick={() => {
              router.push(`/generate/view/No_Restriction`);
            }}
          >
            No_Restriction
          </button>
        </div>
      </div>
    </main>
  );
}
