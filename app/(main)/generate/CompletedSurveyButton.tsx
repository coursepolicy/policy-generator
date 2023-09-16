"use client";

import { Button } from "@/components/ui/button";
import { getPolicy } from "@/lib";
import { useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  return (
    <div className="mt-4 flex justify-center">
      <Button
        loading={loading}
        onClick={async () => {
          try {
            setLoading(true);
            await queryClient.fetchQuery(["policy", uniqueId], () =>
              getPolicy(uniqueId),
            );

            router.push(`/policy/${uniqueId}`);
          } catch (error) {
            setLoading(false);
            if (error instanceof Error) {
              toast.error(error.message);
            } else {
              toast.error("Something went wrong");
            }
          }
        }}
        className="inline-flex h-10 w-[100%] w-[90%] items-center justify-center gap-2.5 rounded-none bg-coursePolicyGreen py-2 text-base font-bold leading-normal text-white hover:bg-coursePolicyHoverGreen md:max-w-[300px]"
      >
        Generate my policy
      </Button>
    </div>
  );
}
