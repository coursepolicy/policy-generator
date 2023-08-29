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
  return (
    <div className="ml-[8px]">
      <button
        onClick={async () => {
          await handleUpdatePolicy();
          router.push(`/generate/policy/${id}/preview`);
        }}
        className="inline-flex h-9 w-[92px] items-center justify-center gap-1.5 rounded-[3px] bg-coursePolicyGreen px-3 py-1.5 hover:bg-coursePolicyHoverGreen"
      >
        <p className="text-center text-xs font-bold leading-normal text-white">
          Finish Edits
        </p>
      </button>
    </div>
  );
}
