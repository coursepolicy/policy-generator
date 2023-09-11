import middy from '@middy/core';
import { MiddlewareRequest } from './types';
import { getPolicyQueryParams } from './schema';

export const validateQueryParameters =
  (): middy.MiddlewareFn => (request: MiddlewareRequest) => {
    if (!request.event.queryStringParameters) {
      throw new Error('query params is empty');
    }
    try {
      request.event.queryStringParameters = getPolicyQueryParams.parse(
        request.event.queryStringParameters
      );
    } catch (error) {
      throw new Error(`Query pararams cannot be validated: ${error}`);
    }
  };
