"use client";

import { getPolicy } from "@/app/_utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CompletedSurveyButton({
  uniqueId,
}: {
  uniqueId: string;
}) {
  const router = useRouter();
  return (
    <div className="mt-4 flex justify-center">
      <Button
        onClick={async () => {
          await getPolicy(uniqueId);
          router.push(`/policy/${uniqueId}`);
        }}
      >
        I have completed the survey
      </Button>
    </div>
  );
}
