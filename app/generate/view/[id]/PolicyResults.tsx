"use client";
import React, { useState } from "react";
import TextEditing from "./TextEditing";
import SectionModifier from "./SectionModifier";
import PolicySection from "./PolicySection";
import { JsxElement } from "typescript";

interface ResponseObject {
  labels: Labels;
  values: Values;
  responseId: string;
  displayedFields: string[];
  displayedValues: DisplayedValues;
}

interface Labels {
  [index: string]: any;
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

interface Values {
  [index: string]: any;
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
  QID25_6_TEXT?: string;
  QID30_TEXT: string;
  recordedDate: string;
  userLanguage: string;
  Q_RecaptchaScore: number;
  locationLatitude: string;
  locationLongitude: string;
  distributionChannel: string;
}

interface DisplayedValues {
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

interface GenerativeAiPolicy {
  courseNumber: string; // q4_3
  courseTitle: string; // q4_4
  instructor: string; // q4_1
  email: string; // q4_2
  createdAt: string; // created_at
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

interface UseCases {
  reasonable: UseCaseEntry[];
  unreasonable: UseCaseEntry[];
}

interface UseCaseEntry {
  label: string;
  text: string;
}

interface PolicyMapper {
  [index: number]: string;
}
const generativeAiPolicyMapper: PolicyMapper = {
  1: "No restrictions",
  2: "Allowed under conditions",
  3: "Strictly prohibited",
} as const;

const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const responseMapper = (surveyResponse: ResponseObject): GenerativeAiPolicy => {
  const { values, labels } = surveyResponse;
  const {
    QID15,
    QID25_6_TEXT: additionalGuidelines,
    QID19_TEXT,
    QID20_TEXT,
    QID17_TEXT: specificPoliciesForAssignments,
    QID26_3_TEXT: additionalGenerativeAiToolsDeclarations,
    QID30_TEXT: additionalNotes,
    endDate: generatedAt,
  } = values; // ["Reasonable", "Not Reasonable", "Not Applicable"]
  const { QID16_DO, QID26_DO } = labels;
  let { QID25: ethicalGuidelines } = labels;

  if (additionalGuidelines) {
    ethicalGuidelines = ethicalGuidelines.slice(
      0,
      ethicalGuidelines.length - 1,
    );
  }

  let useCases;
  if (QID16_DO) {
    useCases = QID16_DO.reduce(
      (acc: UseCases, item: string, index: number) => {
        let [label, text] = item.split(":");
        label = toTitleCase(label);
        text = text.trim();

        const key = `QID16_${index === 10 ? index + 2 : index + 1}`;
        const status = labels[key];

        const useCaseEntry = {
          label,
          text,
        };

        if (status === "Reasonable") {
          acc.reasonable.push(useCaseEntry);
          return acc;
        }
        if (status === "Not Reasonable") {
          acc.unreasonable.push(useCaseEntry);
          return acc;
        }
        return acc;
      },
      {
        reasonable: [],
        unreasonable: [],
      },
    );

    if (QID19_TEXT) {
      useCases.reasonable.push({
        label: "Additional examples",
        text: QID19_TEXT,
      });
    }

    if (QID20_TEXT) {
      useCases.unreasonable.push({
        label: "Additional examples",
        text: QID20_TEXT,
      });
    }
  }

  let generativeAiToolDeclarations;
  if (QID26_DO) {
    QID26_DO.pop();
    generativeAiToolDeclarations = QID26_DO;
  }

  const base = {
    courseNumber: values.QID4_3,
    courseTitle: values.QID4_4,
    instructor: values.QID4_1,
    email: values.QID4_2,
    createdAt: "",
    courseDescription: values.QID3_TEXT,
    overallPolicy: generativeAiPolicyMapper[QID15],
    additionalGuidelines,
    ethicalGuidelines,
    useCases,
    specificPoliciesForAssignments,
    generativeAiToolDeclarations,
    additionalGenerativeAiToolsDeclarations,
    additionalNotes,
    generatedAt,
  };

  if (generativeAiPolicyMapper[QID15] === "No restrictions") {
    return {
      ...base,
      overallPolicyText: `This course imposes no restrictions on the use of generative AI, recognizing each student's unique learning methods. This flexibility empowers you to tailor your educational journey to your needs. However, while exploring these technological options, adherence to the department or school's academic integrity policies is essential. This ensures that while maximizing your learning potential, you also uphold our community's high standards of academic ethics.`,
      additionalPolicyText:
        "This policy document aims to provide clarity and transparency for the use of generative AI in our course. However, it's paramount to remember that students are also expected to adhere to all other policies specified in the course syllabus and those established by the school administration.",
    };
  }
  if (generativeAiPolicyMapper[QID15] === "Allowed under conditions") {
    return {
      ...base,
      campusWidePolicy: values.QID12_1,
      departmentWidePolicy: values.QID12_2,
      academicIntegrityPolicy: values.QID12_3,
      otherPolicies: values.QID12_4,
      overallPolicyText: `We recognize the potential benefits of incorporating generative AI in the learning process. As such, we embrace the use of generative AI tools by our students. In this policy, we employ a "reasonable/not reasonable" system rather than a strict "allowed/not allowed" one (inspired by CS50 at Harvard). This approach fosters proactive thinking among students by encouraging them to understand context, evaluate implications, and make thoughtful decisions. `,
      additionalPolicyText:
        "This policy document aims to provide clarity and transparency for the use of generative AI in our course. However, it's paramount to remember that students are also expected to adhere to all other policies specified in the course syllabus and those established by the school administration. The following represents a non-exhaustive list of institution-wide policies which all students must observe, some of which may touch on the use of generative AI. These policies are subject to modification at any point in time. It's incumbent upon the students to keep themselves updated and well-informed about these policies.",
    };
  }
  if (generativeAiPolicyMapper[QID15] === "Strictly prohibited") {
    return {
      ...base,
      campusWidePolicy: values.QID12_1,
      academicIntegrityPolicy: values.QID12_3,
      overallPolicyText: `The use of generative AI is strictly prohibited in this course to optimize students' learning outcomes. This policy is instituted to inspire comprehensive engagement with the course content and foster a deep understanding of the subject matter. It provides an avenue for students to articulate their ideas, form personal connections with the material, and bolster their academic development.`,
      additionalPolicyText:
        "This policy document aims to provide clarity and transparency for the use of generative AI in our course. However, it's paramount to remember that students are also expected to adhere to all other policies specified in the course syllabus and those established by the school administration. The following represents a non-exhaustive list of institution-wide policies which all students must observe, some of which may touch on the use of generative AI. These policies are subject to modification at any point in time. It's incumbent upon the students to keep themselves updated and well-informed about these policies. ",
    };
  }
  throw new Error("Invalid policy");
};

export default function Result({ data: { data } }: { data: any }) {
  const response = responseMapper(data.results);

  const [content, setContent] = useState<
    {
      id: number;
      sectionTitle: string;
      subSections: {
        id: number;
        subSectionTitle: string;
        content: React.ReactElement;
      }[];
    }[]
  >([
    {
      id: 1,
      sectionTitle: "Course Description",
      subSections: [
        {
          id: 1,
          subSectionTitle: "Introduction",
          content: (
            <section>
              <h3>Course Description</h3>
              <p>{response.courseDescription}</p>
            </section>
          ),
        },
      ],
    },
    {
      id: 2,
      sectionTitle: "Generative AI Policy",
      subSections: [
        {
          id: 1,
          subSectionTitle: "Introduction",
          content: (
            <section>
              <div className="flex justify-between">
                <h3>1. {response.courseNumber} Generative AI Policy</h3>
                <p>
                  Overall generative AI policy:
                  <span>{response.overallPolicy}</span>
                </p>
              </div>
              <p>{response.overallPolicyText}</p>
            </section>
          ),
        },
        {
          id: 2,
          subSectionTitle: "Use Cases",
          content: (
            <>
              {response.useCases && (
                <section className="flex justify-between">
                  <div className="">
                    <h3>Reasonable Use Cases</h3>
                    <ul>
                      {response.useCases.reasonable ? (
                        response.useCases.reasonable.map((entry) => (
                          <React.Fragment key={entry.label}>
                            <li>
                              <strong>{entry.label}</strong>
                              <p>{entry.text}</p>
                            </li>
                          </React.Fragment>
                        ))
                      ) : (
                        <p>None</p>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3>Unreasonable Use Cases</h3>
                    <ul>
                      {response.useCases.unreasonable.length ? (
                        response.useCases.unreasonable.map((entry) => (
                          <React.Fragment key={entry.label}>
                            <li>
                              <strong>{entry.label}</strong>
                              <p>{entry.text}</p>
                            </li>
                          </React.Fragment>
                        ))
                      ) : (
                        <p>None</p>
                      )}
                    </ul>
                  </div>
                </section>
              )}
            </>
          ),
        },
        {
          id: 3,
          subSectionTitle: "Assignment Specific AI Policies",
          content: (
            <>
              {response.specificPoliciesForAssignments && (
                <section>
                  <h3>Assignment/Project Specific AI Policies</h3>
                  <p>{response.specificPoliciesForAssignments}</p>
                </section>
              )}
            </>
          ),
        },
        {
          id: 4,
          subSectionTitle: "Ethical Guidelines",
          content: (
            <>
              {response.ethicalGuidelines && (
                <section>
                  <h3>
                    Ethical guidelines for using generative AI for this course:
                  </h3>
                  {response.ethicalGuidelines.map((text) => (
                    <React.Fragment key={text}>
                      <p>{text}</p>
                    </React.Fragment>
                  ))}
                  {response.additionalGuidelines && (
                    <p>{response.additionalGuidelines}</p>
                  )}
                </section>
              )}
            </>
          ),
        },
        {
          id: 5,
          subSectionTitle: "Declaration",
          content: (
            <>
              {response.generativeAiToolDeclarations && (
                <section>
                  <h3>How to declare the use of generative tools:</h3>
                  {response.generativeAiToolDeclarations.map((text) => (
                    <React.Fragment key={text}>
                      <p>{text}</p>
                    </React.Fragment>
                  ))}
                  {response.additionalGenerativeAiToolsDeclarations && (
                    <p>{response.additionalGenerativeAiToolsDeclarations}</p>
                  )}
                </section>
              )}
            </>
          ),
        },
        {
          id: 6,
          subSectionTitle: "Additional Notes",
          content: (
            <section>
              <h3>Additional Notes</h3>
              {response.additionalNotes && <p>{response.additionalNotes}</p>}
            </section>
          ),
        },
      ],
    },
    {
      id: 3,
      sectionTitle: "Additional Policies",

      subSections: [
        {
          id: 1,
          subSectionTitle: "Introduction",
          content: (
            <section>
              <h2>2. Additional Policies</h2>
              <p>{response.additionalPolicyText}</p>
            </section>
          ),
        },
        {
          id: 2,
          subSectionTitle: "Policy Links",
          content: (
            <>
              {response.overallPolicy !== "No restrictions" && (
                <section>
                  <ul>
                    {response.campusWidePolicy && (
                      <li>
                        Campus-wide generative AI policy:{" "}
                        <span>
                          {response.campusWidePolicy.length
                            ? response.campusWidePolicy
                            : "N/A"}
                        </span>
                      </li>
                    )}
                    {response.departmentWidePolicy && (
                      <li>
                        Department-wide generative AI policy:{" "}
                        <span>
                          {response.departmentWidePolicy.length
                            ? response.departmentWidePolicy
                            : "N/A"}
                        </span>
                      </li>
                    )}
                    {response.academicIntegrityPolicy && (
                      <li>
                        Academic Integrity policy:{" "}
                        <span>
                          {response.academicIntegrityPolicy.length
                            ? response.academicIntegrityPolicy
                            : "N/A"}
                        </span>
                      </li>
                    )}
                    {response.otherPolicies && (
                      <li>
                        Other policies:{" "}
                        <span>
                          {response.otherPolicies.length
                            ? response.otherPolicies
                            : "N/A"}
                        </span>
                      </li>
                    )}
                  </ul>
                </section>
              )}
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <header className="flex justify-between">
        <div>
          <h2>
            {response.courseNumber}: {response.courseTitle}
          </h2>
          <p>
            Course Instructor: {response.instructor}[{response.email}]{" "}
            <span>Generated on {response.generatedAt}</span>
          </p>
        </div>
        <div className="flex">
          <SectionModifier />
          <TextEditing />
        </div>
      </header>
      <article>
        {content.map((section) => (
          <section key={section.id}>
            <PolicySection section={section} />
          </section>
        ))}
      </article>
    </>
  );
}
