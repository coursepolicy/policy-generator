import middy from '@middy/core';
import { getGeneratedQueryParams } from './schema';
import { MiddlewareRequest } from './types';

export const validateQueryParameters =
  (): middy.MiddlewareFn => (request: MiddlewareRequest) => {
    if (!request.event.queryStringParameters) {
      throw new Error('query params is empty');
    }
    try {
      request.event.queryStringParameters = getGeneratedQueryParams.parse(
        request.event.queryStringParameters
      );
    } catch (error) {
      throw new Error(`Query pararams cannot be validated: ${error}`);
    }
  };
