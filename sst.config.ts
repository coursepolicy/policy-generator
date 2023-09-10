import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

const customDomain = "coursepolicy.ai";

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
      const site = new NextjsSite(stack, "site", {
        customDomain:
          stack.stage === "production"
            ? {
                domainName: customDomain,
                domainAlias: `www.${customDomain}`,
              }
            : undefined,
      });

      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
