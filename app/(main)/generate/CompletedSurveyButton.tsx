"use client";

import { getPolicy } from "@/app/_utils";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function CompletedSurveyButton({
  uniqueId,
}: {
  uniqueId: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

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
    <div className="mt-4 flex justify-center">
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true);
          mutation.mutate(uniqueId);
        }}
        className="inline-flex h-10 w-[100%] items-center justify-center gap-2.5 rounded-none bg-coursePolicyGreen py-2 text-base font-bold leading-normal text-white hover:bg-coursePolicyHoverGreen md:max-w-[300px]"
      >
        Generate my policy
      </Button>
    </div>
  );
}
