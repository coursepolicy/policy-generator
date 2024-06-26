/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env: {
    SURVEY_URL: process.env.SURVEY_URL,
    HGSE_SURVEY_URL: process.env.HGSE_SURVEY_URL,
    LAMBDAS_API_BASE_URL: process.env.LAMBDAS_API_BASE_URL,
    SAMPLE_PDF_URL: process.env.SAMPLE_PDF_URL,
  },
};

module.exports = nextConfig;
