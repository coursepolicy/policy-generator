"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { AiPolicyResponse, getPolicy } from "@/app/_utils";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function SubmitForm() {
  const router = useRouter();
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const mutation = useMutation((id: string) => getPolicy(id), {
    onSuccess: (data) => {
      router.push(`/policy/${data.id}`);
    },
    onError: (error) => {
      setLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setLoading(true);
        mutation.mutate(input);
      }}
      className="mt-[10px] flex md:w-[425px]"
    >
      <Input onChange={handleChange} value={input} />
      <Button
        loading={loading}
        disabled={input.length === 0 || loading}
        type="submit"
        className="ml-[10px] inline-flex h-10 w-[100%] max-w-[84px] items-center justify-center gap-2.5 rounded-none bg-coursePolicyGreen py-2 text-base font-bold leading-normal text-white hover:bg-coursePolicyHoverGreen"
      >
        Submit
      </Button>
    </form>
  );
}
