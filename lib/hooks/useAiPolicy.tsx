import { useQuery } from "@tanstack/react-query";
import { AiPolicyResponse, getPolicy } from "..";

export function useAiPolicy(policyId: string, aiPolicy: AiPolicyResponse) {
  return useQuery({
    queryKey: ["policy", policyId],
    queryFn: (): Promise<AiPolicyResponse> => getPolicy(policyId),
    initialData: aiPolicy,
  });
}
