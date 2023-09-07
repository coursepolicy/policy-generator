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
  id: string | number; // Generated UUIDv4
  updatedAt?: string;
  createdAt: string;
};
