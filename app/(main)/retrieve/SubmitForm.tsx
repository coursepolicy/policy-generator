"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { getPolicy } from "@/lib";

export default function SubmitForm() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          await queryClient.prefetchQuery({
            queryKey: ["policy", input],
            queryFn: () => getPolicy(input),
          });
          router.push(`/policy/${input}`);
        } catch (error) {
          setLoading(false);
          if (error instanceof Error) {
            toast.error(error.message);
          } else {
            toast.error("Something went wrong");
          }
        }
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
