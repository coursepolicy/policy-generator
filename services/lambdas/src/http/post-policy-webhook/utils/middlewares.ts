import middy from '@middy/core';
import { MiddlewareRequest } from './types';
import { surveyHookRequestBodySchema } from './schema';

export const validateRequestBody =
  (): middy.MiddlewareFn => (request: MiddlewareRequest) => {
    try {
      request.event.parsedBody = surveyHookRequestBodySchema.parse(
        request.event.parsedBody
      );
    } catch (error) {
      throw new Error(`Request body cannot be validated: ${error}`);
    }
  };

export const parseJsonBody =
  (): middy.MiddlewareFn => (request: MiddlewareRequest) => {
    if (request.event.body)
      request.event.parsedBody = JSON.parse(request.event.body);
  };
