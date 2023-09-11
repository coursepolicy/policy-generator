import { db } from '../../../../data/knex';
import { AiPolicy } from '../../../shared';

export const createNewPolicy = async (
  id: string,
  policy: AiPolicy
): Promise<string[]> => {
  return db('survey_responses')
    .returning('id')
    .insert({
      id,
      results: JSON.stringify(policy),
      created_at: db.fn.now(),
      updated_at: db.fn.now(),
    });
};
