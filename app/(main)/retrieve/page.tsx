import React from "react";
import SubmitForm from "./SubmitForm";

export default function ExistingPolicy() {
  return (
    <>
      <h1 className="text-xl font-bold leading-normal text-indigo-900">
        Retrieve your AI Policy by Unique ID
      </h1>
      <div className="mt-[33px]">
        <p className="text-sm font-normal leading-normal text-black">
          Some brief text about this to provide context. Some brief text about
          this to provide context. Some brief text about this to provide
          context. Some brief text about this to provide context. Some brief
          text about this to provide context. Some brief text about this to
          provide context.
        </p>
        <p className="mt-[33px]">
          <strong>
            Enter the generated key for access (found in email confirmation):
          </strong>
        </p>
        <SubmitForm />
      </div>
    </>
  );
}
