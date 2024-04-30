# Policy Gen

This is the frontend app that generates survey responses into a document that users can edit and then download as a PDF.

## Installation

```bash
git clone policy-gen
cd policy-gen
pnpm i
pnpm dev

```

### Deployment

This repository uses SST for deployment and that's it. We directly manage the rest of our distributed systems in AWS using the serverless framework.

Staging: Must have a PR and be merged to `main`. That will trigger a staging deployment.

Production: Triggered via github actions.
