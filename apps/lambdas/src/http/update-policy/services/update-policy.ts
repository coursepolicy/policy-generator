import { isEmpty } from 'lodash';
import { db } from '../../../../data/knex';
import { AiPolicy } from '../../../shared';
import { createNewPolicy } from './create-new-policy';

export const SAMPLE_POLICY = 'Sample_Policy_for_all';
export const PolicyStatusEnum = {
  UPDATED: 'UPDATED',
  INSERTED: 'INSERTED',
  NONE: 'NONE',
} as const;

type PolicyStatus = (typeof PolicyStatusEnum)[keyof typeof PolicyStatusEnum];

export const updatePolicy = async (
  id: string,
  policy: AiPolicy,
  generatedId?: string
): Promise<{
  id: string;
  policyStatus: PolicyStatus;
}> => {
  if (generatedId && id === SAMPLE_POLICY) {
    const foundPolicyBygeneratedId = await db('survey_responses')
      .where({ id: generatedId })
      .first();

    if (!isEmpty(foundPolicyBygeneratedId)) {
      console.info('Policy already exists... generatedId was not inserted', {
        id: generatedId,
        policyStatus: 'NONE',
      });
      return { id: generatedId, policyStatus: 'NONE' };
    }

    console.info('Policy does not exist... generatedId was inserted', {
      id: generatedId,
      policyStatus: 'INSERTED',
    });
    await createNewPolicy(generatedId, policy);
    return { id: generatedId, policyStatus: 'INSERTED' };
  }

  const foundPolicyByid = await db('survey_responses').where({ id }).first();

  if (isEmpty(foundPolicyByid)) {
    console.info('Policy does not exist... nothing was updated', {
      id,
      policyStatus: 'NONE',
    });
    return { id, policyStatus: 'NONE' };
  }

  await db('survey_responses')
    .where({ id })
    .update({
      results: JSON.stringify(policy),
      updated_at: db.fn.now(),
    })
    .returning('id');
  console.info('Policy was updated', { id, policyStatus: 'UPDATED' });
  return { id, policyStatus: 'UPDATED' };
};
