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
