import { z } from 'zod';

export const getPolicyQueryParams = z.object({
  generatedId: z.string(),
});

export type GetPolicyQueryParamsSchema = z.infer<typeof getPolicyQueryParams>;
