export type PolicySections = PolicySection[];

export type AiPolicy = {
  heading: string; // Course information like title, number, instructor, etc.
  sections: PolicySections; // Policy sections taken from qualtrics survey
};

export type PolicySection = {
  [key: string]: unknown;
  id: string | number;
  title: string;
  children?: PolicySections;
  htmlContent?: string | string[];
  miscData?: Record<string, unknown>;
};

export type AiPolicyResponse = AiPolicy & {
  id: string | number; // Generated ULID
  updatedAt?: string;
  createdAt: string;
  publishId?: string;
};

export interface GenerativeAiPolicy {
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
  generatedAt?: string;
}

export interface UseCases {
  reasonable: UseCaseEntry[];
  unreasonable: UseCaseEntry[];
}
export interface UseCaseEntry {
  label: string;
  text: string;
}
