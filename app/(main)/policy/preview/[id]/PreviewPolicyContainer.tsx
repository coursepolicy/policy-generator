"use client";

import { PolicyPreview } from "@/components/PolicyPreview";
import { publishPolicy, AiPolicyResponse, useAiPolicy } from "@/lib";
import base62 from "base62";
import DownloadPdfSection from "./DownloadPdfSection";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

type Props = {
  id: string;
  aiPolicy: AiPolicyResponse;
};

export default function PreviewPolicyContainer({ id, aiPolicy }: Props) {
  const { data } = useAiPolicy(id, aiPolicy);

  const queryClient = useQueryClient();
  const ulidToBase62 = (id: number) => {
    return base62.encode(id);
  };

  const { isLoading, mutate } = useMutation(
    async () =>
      publishPolicy(
        {
          sections: data.sections,
          heading: data.heading,
        },
        id,
        data.publishId ?? ulidToBase62(await stringToNumber(id)),
      ),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["publish-policy"]);
        await queryClient.invalidateQueries(["policy"]);
        toast.success("Policy has been published!");
      },
      onError: (error) => {
        toast.error("Something went wrong");
        throw new Error(JSON.stringify(error));
      },
    },
  );

  async function stringToNumber(s: string): Promise<number> {
    const encoder = new TextEncoder();
    const data = encoder.encode(s);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = new Uint8Array(hashBuffer);
    let hashNumber: number = 0;
    const bytesToUse = 6;

    for (let i = 0; i < bytesToUse; i++) {
      hashNumber = hashNumber * 256 + hashArray[i];
    }

    return hashNumber;
  }
  return (
    <div>
      <DownloadPdfSection
        id={id}
        publishId={data.publishId}
        mutate={mutate}
        isLoading={isLoading}
      />
      <PolicyPreview data={data} publish />
    </div>
  );
}
