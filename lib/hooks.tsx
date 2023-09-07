import { AiPolicyResponse, getPolicy } from "@/app/_utils";
import { useQuery } from "@tanstack/react-query";

export function useAiPolicy(policyId: string) {
  return useQuery({
    queryKey: [policyId],
    queryFn: async (): Promise<AiPolicyResponse> => getPolicy(policyId),
  });
}
