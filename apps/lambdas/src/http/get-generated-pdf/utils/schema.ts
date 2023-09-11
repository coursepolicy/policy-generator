import { z } from 'zod';

export const getGeneratedQueryParams = z.object({
  generatedId: z.string(),
});

export type GetGeneratedQueryParamsSchema = z.infer<
  typeof getGeneratedQueryParams
>;
