import middy from '@middy/core';
import {
  updatePolicyRequestBodySchema,
  updatePolicyRequestQueryParamSchema,
} from './schema';
import { MiddlewareRequest } from './types';

export const validateRequestBodySchema =
  (): middy.MiddlewareFn => (request: MiddlewareRequest) => {
    try {
      request.event.parsedBody = updatePolicyRequestBodySchema.parse(
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

export const validateRequestQueryParam =
  (): middy.MiddlewareFn => (request: MiddlewareRequest) => {
    if (!request.event.queryStringParameters) {
      throw new Error('query params is empty');
    }
    try {
      request.event.queryStringParameters =
        updatePolicyRequestQueryParamSchema.parse(
          request.event.queryStringParameters
        );
    } catch (error) {
      throw new Error(`Request query param cannot be validated: ${error}`);
    }
  };
