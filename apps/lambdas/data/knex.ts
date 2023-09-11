import "dotenv/config";
import knex from "knex";
import knexfile, { Environment } from "../knexfile";

let env: Environment = "development";
if (process.env.NODE_ENV === "production") env = "production";
if (process.env.NODE_ENV === "staging") env = "staging";

if (!knexfile[env]) {
  throw new Error(`No knex config for env ${env}`);
}

const db = knex(knexfile[env]);

export { db };
