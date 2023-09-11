# Lambdas

Name pending? This repository houses all of the lambda functions we use.

```
- data
  - migrations
  - knex
- src
  - http
    - GET PDF generation
    - GET policy
    - POST qualtrics webhook
    - POST/PUT update policy
  - shared
    - constants
    - helpeers
    - types
```

## Installation

### prerequisite

Make sure you have aws cli installed and have been authenticated using: `https://coursepolicy.awsapps.com/start/`

```bash
git clone <this repo>
cd lambdas
yarn install
yarn offline

```

### Deployment

This repository uses the serverless framework for deployment.

Staging: Must have a PR and be merged to `main`. That will trigger a staging deployment.

Production: Triggered via github actions.

## Testing
Every unit test is written in the same folder with the function it's testing. 

Test environment variables live in `test/testEnvironments.ts`

```bash
yarn test
```

## ENV

```
# .env.example

QUALTRICS_API_TOKEN=tolken
SURVEY_ID=sampleSurveyId
DATABASE_URL=pg:connection:string
CORE_BASE_URL=baseUrl
DATABASE_PASSWORD=password
DATABASE_USERNAME=postgres
DATABASE_NAME=postgres
DATABASE_HOST=host
DATABASE_PORT=5432
```
