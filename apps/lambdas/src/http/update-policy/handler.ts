import { ExtendedApiGateWayEvent } from './utils/types';
import { updatePolicy } from './services';

export const updatePolicyHandler = async ({
  queryStringParameters: { id, generatedId },
  parsedBody: { policy },
}: ExtendedApiGateWayEvent) => {
  try {
    const updated = await updatePolicy(id, policy, generatedId);

    return {
      statusCode: 200,
      body: JSON.stringify({ data: updated }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error }),
    };
  }
};
