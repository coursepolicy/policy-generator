import 'dotenv/config';
import { generatePdf } from './services';
import { ExtendedApiGateWayEvent } from './utils';

// TODO - make this similar to update policy handler
export const getGeneratedPdf = async ({
  queryStringParameters: { generatedId },
}: ExtendedApiGateWayEvent) => {
  try {
    const pdf = await generatePdf(generatedId);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/pdf' },
      body: pdf.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error }),
    };
  }
};
