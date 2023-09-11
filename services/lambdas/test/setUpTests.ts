import * as testEnvironments from './testEnvironments';

type TestEnvironments = {
  [key: string]: string | undefined;
};
const setTestEnvironmentVariables = () => {
  Object.keys(testEnvironments).forEach((key) => {
    process.env[key] =
      (testEnvironments as TestEnvironments)[key] || process.env[key];
  });
};

setTestEnvironmentVariables();
