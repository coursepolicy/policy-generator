"use client";

import { getPolicy } from "@/app/_utils";
import { Button } from "@/components/ui/button";
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
  return (
    <div className="mt-4 flex justify-center">
      <Button
        loading={loading}
        onClick={async () => {
          try {
            setLoading(true);
            const { data } = await getPolicy(uniqueId);

            if (!data) return;
            router.push(`/policy/${data.id}`);
          } catch (error) {
            setLoading(false);
            if (error instanceof Error) {
              toast.error(error.message);
            } else {
              toast.error("Something went wrong");
            }
          }
        }}
      >
        I have completed the survey
      </Button>
    </div>
  );
}
