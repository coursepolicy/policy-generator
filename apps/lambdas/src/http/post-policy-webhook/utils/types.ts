import { APIGatewayEvent } from 'aws-lambda';
import { SurveyHookRequestBody } from './schema';
import middy from '@middy/core';

export type ExtendedApiGateWayEvent = APIGatewayEvent & {
  parsedBody: SurveyHookRequestBody;
};

export interface MiddlewareRequest
  extends middy.Request<ExtendedApiGateWayEvent> {}
