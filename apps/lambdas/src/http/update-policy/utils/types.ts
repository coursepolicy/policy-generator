import middy from '@middy/core';

import { APIGatewayEvent } from 'aws-lambda';
import {
  UpdatePolicyRequestBodySchema,
  UpdatePolicyRequestQueryParam,
} from './schema';

export type ExtendedApiGateWayEvent = Omit<
  APIGatewayEvent,
  'queryStringParameters'
> & {
  queryStringParameters: UpdatePolicyRequestQueryParam;
  parsedBody: UpdatePolicyRequestBodySchema;
};

export interface MiddlewareRequest
  extends middy.Request<ExtendedApiGateWayEvent> {}
