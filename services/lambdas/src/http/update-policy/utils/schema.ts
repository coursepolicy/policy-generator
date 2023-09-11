import { z } from 'zod';
import { PolicySection, PolicySections } from '../../../shared';

const policySection: z.ZodSchema<PolicySection> = z
  .object({
    id: z.string(),
    title: z.string(),
    children: z.lazy(() => z.array(policySection)).optional(),
    htmlContent: z.union([z.string(), z.array(z.string())]).optional(),
    miscData: z.record(z.unknown()).optional(),
  })
  .nonstrict();

const policySections: z.ZodSchema<PolicySections> = z.array(policySection);

export const updatePolicyRequestQueryParamSchema = z.object({
  id: z.string(),
  generatedId: z.string().optional(),
});

export const updatePolicyRequestBodySchema = z.object({
  policy: z.object({
    heading: z.string(),
    sections: policySections,
  }),
});

export type UpdatePolicyRequestQueryParam = z.infer<
  typeof updatePolicyRequestQueryParamSchema
>;

export type UpdatePolicyRequestBodySchema = z.infer<
  typeof updatePolicyRequestBodySchema
>;
