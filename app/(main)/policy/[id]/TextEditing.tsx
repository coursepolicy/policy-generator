import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function TextEditing({
  handleUpdatePolicy,
  id,
}: {
  handleUpdatePolicy: () => Promise<void>;
  id: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  return (
    <div className={`ml-[8px] ${loading ? "relative top-[4px]" : ""}`}>
      <Button
        loading={loading}
        onClick={async () => {
          setLoading(() => true);
          await handleUpdatePolicy();
          router.push(`/policy/${id}/preview`);
        }}
        className="inline-flex h-9 w-[92px] items-center justify-center gap-1.5 rounded-[3px] bg-coursePolicyGreen px-3 py-1.5 hover:bg-coursePolicyHoverGreen"
      >
        <p className="text-center text-xs font-bold leading-normal text-white">
          Finish Edits
        </p>
      </Button>
    </div>
  );
}
