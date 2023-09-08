import { Button } from "@/components/ui/button";
import { getPolicy, savePolicy } from "@/lib";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function TextEditing({
  handleUpdatePolicy,
  id,
}: {
  handleUpdatePolicy: () => Promise<void>;
  id: string;
}) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      <Button
        loading={loading}
        onClick={async () => {
          setLoading(() => true);
          await handleUpdatePolicy();
          await queryClient.prefetchQuery(["policy", id], () => getPolicy(id));
          router.push(`/policy/preview/${id}`);
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
