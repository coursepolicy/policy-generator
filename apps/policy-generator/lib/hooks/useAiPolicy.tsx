import { useQuery } from "@tanstack/react-query";
import { AiPolicyResponse, getPolicy } from "..";

export function useAiPolicy(policyId: string) {
  return useQuery({
    queryKey: [policyId],
    queryFn: async (): Promise<AiPolicyResponse> => getPolicy(policyId),
  });
}
