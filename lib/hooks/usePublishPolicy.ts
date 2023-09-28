import { useQuery } from "@tanstack/react-query";
import { AiPolicyResponse, getPublishPolicy } from "..";

export function usePublishPolicy(
  publishId: string,
  aiPolicy: AiPolicyResponse,
) {
  return useQuery({
    queryKey: ["publish-policy", publishId],
    queryFn: async (): Promise<AiPolicyResponse> => getPublishPolicy(publishId),
    initialData: aiPolicy,
  });
}
