/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env: {
    SURVEY_URL: process.env.SURVEY_URL,
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
