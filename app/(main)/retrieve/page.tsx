import React from "react";
import SubmitForm from "./SubmitForm";

export default function ExistingPolicy() {
  return (
    <>
      <h1 className="text-xl font-bold leading-normal text-indigo-900">
        Retrieve your AI Policy using your policy ID
      </h1>
      <div className="mt-[33px]">
        <p className="text-sm font-normal leading-normal text-black">
          Enter your policy ID below to review, edit, and export your course’s
          AI policy. Each course would have its own unique policy ID. If you
          never used our course AI policy generator before, get started{" "}
          <a href="https://coursepolicy.ai/generate">here.</a> If you can’t find
          your course policy ID, please email us at{" "}
          <a href="mailto:here@coursepolicy.ai">here@coursepolicy.ai</a> with
          your name, email, and course number.
        </p>
        <p className="mt-[33px]">
          <strong>Enter the policy ID for your course below:</strong>
        </p>
        <SubmitForm />
      </div>
    </>
  );
}
