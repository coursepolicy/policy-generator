import React from "react";
import SubmitForm from "../SubmitForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <Button
            asChild
            variant="link"
            className="h-0 cursor-pointer p-0 text-blue-500"
          >
            <Link href="/generate/hgse">here.</Link>
          </Button>{" "}
          If you can’t find your course policy ID, please email us at{" "}
          <Button
            asChild
            variant="link"
            className="h-0 cursor-pointer p-0 text-blue-500"
          >
            <a href="mailto:here@coursepolicy.ai">here@coursepolicy.ai</a>
          </Button>{" "}
          with your name, email, and course number.
        </p>
        <p className="mt-[33px]">
          <strong>Enter the policy ID for your course below:</strong>
        </p>
        <SubmitForm />
      </div>
    </>
  );
}
