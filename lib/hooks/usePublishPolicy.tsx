import { useQuery } from "@tanstack/react-query";
import { AiPolicyResponse, getPublishPolicy } from "..";

export function usePublishPolicy(publishId: string) {
  return useQuery({
    queryKey: [publishId],
    queryFn: async (): Promise<AiPolicyResponse> => getPublishPolicy(publishId),
  });
}
