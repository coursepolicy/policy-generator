export type PolicySection = {
  [key: string]: unknown;
  id: string | number;
  title: string;
  children?: PolicySections;
  htmlContent?: string | string[];
  miscData?: Record<string, unknown>;
};

export type PolicySections = PolicySection[];

export type AiPolicy = {
  heading: string; // Course information like title, number, instructor, etc.
  sections: PolicySections; // Policy sections taken from qualtrics survey
};

export type AiPolicyResponse = AiPolicy & {
  id: string | number; // Generated ULID
  updatedAt?: string;
  createdAt: string;
};

interface UpdatedPolicy {
  results: AiPolicy;
}

export type ReturningUpdatedPolicy = UpdatedPolicy[];

export interface QaultricsResponse {
  result: SurveyResponse;
}

export interface SurveyResponse {
  labels: Labels;
  values: Values;
  responseId: string;
  displayedFields: string[];
  displayedValues: DisplayedValues;
}

export interface Labels {
  [index: string]: unknown;
  QID8: string;
  QID15: string;
  QID22: string;
  QID24: string;
  QID25: string[];
  QID26: string;
  QID28: string;
  status: string;
  QID16_1?: string;
  QID16_2?: string;
  QID16_3?: string;
  QID16_4?: string;
  QID16_5?: string;
  QID16_6?: string;
  QID16_7?: string;
  QID16_8?: string;
  QID16_9?: string;
  QID4_DO: string[];
  QID8_DO: string[];
  QID12_DO: string[];
  QID15_DO: string[];
  QID16_10?: string;
  QID16_DO?: string[];
  QID22_DO: string[];
  QID24_DO: string[];
  QID25_DO: string[];
  QID26_DO: string[];
  QID28_DO: string[];
  finished: string;
}

export interface Values {
  [index: string]: unknown;
  QID8: number;
  QID15: number;
  QID22: number;
  QID24: number;
  QID25: string[];
  QID26: number;
  QID28: number;
  QID4_1: string;
  QID4_2: string;
  QID4_3: string;
  QID4_4: string;
  status: number;
  QID12_1: string;
  QID12_2: string;
  QID12_3: string;
  QID12_4: string;
  QID16_1?: number;
  QID16_2?: number;
  QID16_3?: number;
  QID16_4?: number;
  QID16_5?: number;
  QID16_6?: number;
  QID16_7?: number;
  QID16_8?: number;
  QID16_9?: number;
  QID4_DO: string[];
  QID8_DO: string[];
  endDate: string;
  QID12_DO: string[];
  QID15_DO: string[];
  QID16_10?: number;
  QID16_DO?: string[];
  QID22_DO: string[];
  QID24_DO: string[];
  QID25_DO: string[];
  QID26_DO: string[];
  QID28_DO: string[];
  duration: number;
  finished: number;
  progress: number;
  QID3_TEXT: string;
  ipAddress: string;
  startDate: string;
  QID13_TEXT: string;
  QID17_TEXT: string;
  QID19_TEXT?: string;
  QID20_TEXT?: string;
  QID25_6_TEXT?: string;
  QID26_3_TEXT?: string[];
  QID30_TEXT: string;
  recordedDate: string;
  userLanguage: string;
  Q_RecaptchaScore: number;
  locationLatitude: string;
  locationLongitude: string;
  distributionChannel: string;
}

export interface DisplayedValues {
  QID8: number[];
  QID15: number[];
  QID22: number[];
  QID24: number[];
  QID25: string[];
  QID26: number[];
  QID28: number[];
  QID16_1?: number[];
  QID16_2?: number[];
  QID16_3?: number[];
  QID16_4?: number[];
  QID16_5?: number[];
  QID16_6?: number[];
  QID16_7?: number[];
  QID16_8?: number[];
  QID16_9?: number[];
  QID16_10?: number[];
}

export interface MappedSurveyResponse {
  id: string;
  courseNumber: string; // q4_3
  courseTitle: string; // q4_4
  instructor: string; // q4_1
  email: string; // q4_2
  courseDescription: string; // q3 text
  overallPolicy: string; // values.QID15,
  overallPolicyText: string; // none
  additionalPolicyText: string; // q12
  useCases?: UseCases; // q16
  ethicalGuidelines?: string[]; // q25
  additionalGuidelines?: string; // q26
  specificPoliciesForAssignments?: string; // q17 // specific generative ai policies
  additionalGenerativeAiToolsDeclarations?: string[]; // q26
  generativeAiToolDeclarations?: string[]; // q26
  campusWidePolicy?: string;
  departmentWidePolicy?: string;
  academicIntegrityPolicy?: string;
  otherPolicies?: string;
  additionalNotes: string;
  createdAt: string;
}

export interface UseCases {
  reasonable: UseCaseEntry[];
  unreasonable: UseCaseEntry[];
}

interface UseCaseEntry {
  label: string;
  text: string;
}
