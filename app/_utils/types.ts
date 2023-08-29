export interface Section {
  [key: string]: any;
  id: string;
  sectionTitle: string;
  subSections: SubSection[];
}

export interface SubSection {
  id: string;
  subSectionTitle: string;
  miscData?: Record<string, any>;
  content: string | string[];
}

export type CourseAiPolicy = Section[];

export type CourseAiPolicyResponse = {
  header: string;
  content: CourseAiPolicy;
};
