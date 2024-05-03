import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function TextEditing({
  handleUpdatePolicy,
  id,
  isLoading,
}: {
  handleUpdatePolicy: () => Promise<void>;
  id: string;
  isLoading: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isHGSE = pathname.includes("hgse");

  return (
    <div>
      <Button
        loading={isLoading}
        onClick={async () => {
          await handleUpdatePolicy();
          router.push(
            isHGSE ? `/policy/preview/${id}/hgse` : `/policy/preview/${id}`,
          );
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
