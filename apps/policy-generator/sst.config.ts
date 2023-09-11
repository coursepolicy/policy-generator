import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { SSTConfig } from "sst";
import { NextjsSite, Stack } from "sst/constructs";

export default {
  config(input) {
    return {
      name: "policy-gen",
      region: "us-west-2",
      profile: input.stage === "production" ? "production" : "staging",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const customDomain = "coursepolicy.ai";
      const awsProdCertId = "db66ddb6-2887-4b4d-a8f8-98dcbee70c69";
      const awsStagingCertId = "673d9fb2-0fe3-4076-b015-49dba9a71be2";
      const awsProdAccount = process.env.AWS_ACCOUNT_ID_PRODUCTION;
      const awsStagingAccount = process.env.AWS_ACCOUNT_ID_STAGING;
      const region = "us-east-1";

      // @ts-ignore
      const site = new NextjsSite(stack, "site", {
        customDomain: {
          domainName:
            app.stage === "production"
              ? customDomain
              : `${app.stage}.${customDomain}`,
          domainAlias:
            app.stage === "production"
              ? `www.${customDomain}`
              : `www.${app.stage}.${customDomain}`,
          cdk: {
            // @ts-ignore
            certificate: Certificate.fromCertificateArn(
              // @ts-ignore
              stack,
              app.stage === "production" ? awsProdCertId : awsStagingCertId,
              `arn:aws:acm:${region}:${
                app.stage === "production" ? awsProdAccount : awsStagingAccount
              }:certificate/${
                app.stage === "production" ? awsProdCertId : awsStagingCertId
              }`,
            ),
          },
          hostedZone:
            app.stage === "production"
              ? customDomain
              : `${app.stage}.${customDomain}`,
        },
      });

      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
