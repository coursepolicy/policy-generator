import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

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
      const site = new NextjsSite(stack, "site");

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
