"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPolicy } from "@/app/_utils";
import { useRouter } from "next/navigation";

export default function SubmitForm() {
  const router = useRouter();
  const [input, setInput] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await getPolicy(input);
        router.push(`/policy/${input}`);
      }}
      className="mt-[10px] flex md:w-[425px]"
    >
      <Input onChange={handleChange} value={input} />
      <Button
        type="submit"
        className="ml-[10px] inline-flex h-10 w-[84px] items-center justify-center gap-2.5 bg-teal-600 px-[11px] py-2 text-base font-bold leading-normal text-white"
      >
        Submit
      </Button>
    </form>
  );
}
