import React from "react";
import SubmitForm from "./SubmitForm";

export default function ExistingPolicy() {
  return (
    <main className="bg-white md:flex md:h-screen">
      <div className="h-[92px] bg-bg-mobile bg-cover bg-center md:h-screen md:w-1/3 md:bg-bg-desktop" />
      <div className="m-[35px] md:ml-[100px] md:mt-[150px] md:w-2/3">
        <h1 className="text-xl font-bold leading-normal text-indigo-900">
          Retrieve your AI Policy by Unique ID
        </h1>
        <div className="ml-[20px] mt-[33px]">
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
      </div>
    </main>
  );
}
