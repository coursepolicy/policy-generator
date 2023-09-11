import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpEventNormalizer from '@middy/http-event-normalizer';
import errorLogger from '@middy/error-logger';
import httpSecurityHeaders from '@middy/http-security-headers';
import cors from '@middy/http-cors';
import { updatePolicyHandler } from './handler';
import {
  parseJsonBody,
  validateRequestBodySchema,
  validateRequestQueryParam,
} from './utils/middlewares';

// POST /update-policy
export const handler = middy(updatePolicyHandler)
  .before(parseJsonBody())
  .before(validateRequestBodySchema())
  .before(validateRequestQueryParam())
  .use(httpEventNormalizer())
  .use(errorLogger())
  .use(httpErrorHandler())
  .use(cors())
  .use(httpSecurityHeaders());
