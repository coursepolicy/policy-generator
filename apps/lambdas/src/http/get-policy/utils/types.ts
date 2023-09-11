import middy from '@middy/core';

import { APIGatewayEvent } from 'aws-lambda';
import { GetPolicyQueryParamsSchema } from './schema';

export type ExtendedApiGateWayEvent = Omit<
  APIGatewayEvent,
  'queryStringParameters'
> & {
  queryStringParameters: GetPolicyQueryParamsSchema;
};

export interface MiddlewareRequest
  extends middy.Request<ExtendedApiGateWayEvent> {}
