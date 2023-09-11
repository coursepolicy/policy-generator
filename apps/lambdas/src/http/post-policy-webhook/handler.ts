import 'dotenv/config';

import { db } from '../../../data/knex';
import { qualtricsBaseUrl } from '../../shared/constants';
import { flow, get } from 'lodash';
import { ExtendedApiGateWayEvent } from './utils/types';
import { surveyResponseMapper } from './services/survey-response-mapper';
import { QaultricsResponse } from '../../shared';
import { createCoursePolicy } from './services/create-course-policy';
import { saveCoursePolicy } from './services/save-course-policy';

const { SURVEY_ID, QUALTRICS_API_TOKEN } = process.env;

export const postPolicyWebhookHandler = async ({
  parsedBody: { responseId: surveyResponseId, saveDb },
}: ExtendedApiGateWayEvent) => {
  try {
    console.info({
      message: 'Qualtrics Webhook',
      surveyId: SURVEY_ID,
      QUALTRICS_API_TOKEN: QUALTRICS_API_TOKEN?.length,
      responseId: surveyResponseId,
    });

    const response = await fetch(
      `${qualtricsBaseUrl}/surveys/${SURVEY_ID}/responses/${surveyResponseId}`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'X-API-TOKEN': QUALTRICS_API_TOKEN as string,
        },
      }
    );

    if (response.status !== 200) {
      console.error({
        message: 'Qualtrics API call failed',
        surveyId: SURVEY_ID,
        QUALTRICS_API_TOKEN: QUALTRICS_API_TOKEN?.length,
        responseId: surveyResponseId,
      });
      throw new Error('Qualtrics API call failed');
    }
    const data: QaultricsResponse = await response.json();
    const generatedUlid = String(get(data, 'result.values.QID13_TEXT'));

    if (saveDb === false) {
      const queriedResponse = await db('survey_responses')
        .where({ id: generatedUlid })
        .first();

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'DB Insert Skipped', queriedResponse }),
      };
    }

    const result = flow(
      surveyResponseMapper,
      createCoursePolicy,
      await saveCoursePolicy(data)
    )(data.result);

    if (!result) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'DB failure',
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'DB Insert Success',
        generatedId: generatedUlid,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error }),
    };
  }
};
