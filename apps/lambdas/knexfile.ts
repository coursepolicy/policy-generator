import 'dotenv/config';
import { Knex } from 'knex';

const {
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USERNAME,
} = process.env;

const defaultConfig: Knex.Config = {
  client: 'pg',
  connection: {
    password: DATABASE_PASSWORD,
    host: DATABASE_HOST,
    port: Number(DATABASE_PORT),
    database: DATABASE_NAME,
    user: DATABASE_USERNAME,
    ssl: { rejectUnauthorized: false },
  },
  migrations: {
    directory: './data/migrations',
    extension: 'js',
  },
  acquireConnectionTimeout: 5000,
  pool: {
    min: 1,
    max: 10,
  },
};

export type Environment = keyof typeof environments;

const environments = {
  development: defaultConfig,
  staging: defaultConfig,
  production: defaultConfig,
};

export default environments;
