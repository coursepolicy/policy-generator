import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { IAM } from "./lib/sst/stacks/oid-connect-github";

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
    app.stack(IAM);
  },
} satisfies SSTConfig;
