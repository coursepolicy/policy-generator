export const qualtricsBaseUrl = 'https://sjc1.qualtrics.com/API/v3';

export const useCaseReasonabilityMapper: {
  [index: number]: string;
} = {
  1: 'Reasonable',
  2: 'Not Reasonable',
  3: 'Not Applicable',
} as const;

export const useCasesMapper: {
  [index: string]: string;
} = {
  'Grammar Check': 'QID16_1',
  'Concept Learning': 'QID16_2',
  'Argument Generation': 'QID16_3',
  'Outline Generation': 'QID16_12',
  'Essay Generation': 'QID16_4',
  'Test-taking': 'QID16_5',
  'Literature Discovery': 'QID16_6',
  'Summary Generation': 'QID16_7',
  'Coding Assistant': 'QID16_8',
  'Art Creation': 'QID16_9',
  'Data Fabrication': 'QID16_10',
} as const;

export const generativeAiPolicyMapper: {
  [index: number]: string;
} = {
  1: 'No restrictions',
  2: 'Allowed under conditions',
  3: 'Strictly prohibited',
} as const;
