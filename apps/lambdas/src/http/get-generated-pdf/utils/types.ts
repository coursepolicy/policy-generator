import middy from '@middy/core';

import { APIGatewayEvent } from 'aws-lambda';
import { GetGeneratedQueryParamsSchema } from './schema';

export type ExtendedApiGateWayEvent = Omit<
  APIGatewayEvent,
  'queryStringParameters'
> & {
  queryStringParameters: GetGeneratedQueryParamsSchema;
};

export interface MiddlewareRequest
  extends middy.Request<ExtendedApiGateWayEvent> {}
