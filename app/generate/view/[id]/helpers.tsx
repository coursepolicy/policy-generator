import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";
import { GenerativeAiPolicy } from "./types";
import { CourseAiPolicy } from "./PolicyResults";

export const formatResult = (response: GenerativeAiPolicy): CourseAiPolicy => {
  const courseDescriptionSubSections = [];
  const generativeAiPolicySubSections = [];
  const additionalPoliciesSubSections = [];

  courseDescriptionSubSections.push({
    id: uuidv4(),
    subSectionTitle: "Introduction",
    content: (
      <section>
        <h3>Course Description</h3>
        <p>{response.courseDescription}</p>
      </section>
    ),
  });

  generativeAiPolicySubSections.push({
    id: uuidv4(),
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
  });

  if (response.useCases) {
    generativeAiPolicySubSections.push({
      id: uuidv4(),
      subSectionTitle: "Use Cases",
      content: (
        <section className="flex justify-between">
          <div className="">
            <h3>Reasonable Use Cases</h3>
            <ul>
              {response.useCases.reasonable ? (
                response.useCases.reasonable.map((entry) => (
                  <Fragment key={entry.label}>
                    <li>
                      <strong>{entry.label}</strong>
                      <p>{entry.text}</p>
                    </li>
                  </Fragment>
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
                  <Fragment key={entry.label}>
                    <li>
                      <strong>{entry.label}</strong>
                      <p>{entry.text}</p>
                    </li>
                  </Fragment>
                ))
              ) : (
                <p>None</p>
              )}
            </ul>
          </div>
        </section>
      ),
    });
  }

  if (response.specificPoliciesForAssignments) {
    generativeAiPolicySubSections.push({
      id: uuidv4(),
      subSectionTitle: "Assignment Specific AI Policies",
      content: (
        <section>
          <h3>Assignment/Project Specific AI Policies</h3>
          <p>{response.specificPoliciesForAssignments}</p>
        </section>
      ),
    });
  }

  if (response.specificPoliciesForAssignments) {
    generativeAiPolicySubSections.push({
      id: uuidv4(),
      subSectionTitle: "Asignment Specific AI Policies",
      content: (
        <section>
          <h3>Assignment/Project Specific AI Policies</h3>
          <p>{response.specificPoliciesForAssignments}</p>
        </section>
      ),
    });
  }

  if (response.ethicalGuidelines) {
    generativeAiPolicySubSections.push({
      id: uuidv4(),
      subSectionTitle: "Ethical Guidelines",
      content: (
        <section>
          <h3>Ethical guidelines for using generative AI for this course:</h3>
          {response.ethicalGuidelines.map((text) => (
            <Fragment key={text}>
              <p>{text}</p>
            </Fragment>
          ))}
          {response.additionalGuidelines && (
            <p>{response.additionalGuidelines}</p>
          )}
        </section>
      ),
    });
  }

  if (response.generativeAiToolDeclarations) {
    generativeAiPolicySubSections.push({
      id: uuidv4(),
      subSectionTitle: "Declaration",
      content: (
        <section>
          <h3>How to declare the use of generative tools:</h3>
          {response.generativeAiToolDeclarations.map((text) => (
            <Fragment key={text}>
              <p>{text}</p>
            </Fragment>
          ))}
          {response.additionalGenerativeAiToolsDeclarations && (
            <p>{response.additionalGenerativeAiToolsDeclarations}</p>
          )}
        </section>
      ),
    });
  }

  generativeAiPolicySubSections.push({
    id: uuidv4(),
    subSectionTitle: "Additional Notes",
    content: (
      <section>
        <h3>Additional Notes</h3>
        {response.additionalNotes && <p>{response.additionalNotes}</p>}
      </section>
    ),
  });

  //
  additionalPoliciesSubSections.push({
    id: uuidv4(),
    subSectionTitle: "Introduction",
    content: (
      <section>
        <h2>2. Additional Policies</h2>
        <p>{response.additionalPolicyText}</p>
      </section>
    ),
  });

  if (response.overallPolicy !== "No restrictions") {
    additionalPoliciesSubSections.push({
      id: uuidv4(),
      subSectionTitle: "Policy Links",
      content: (
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
      ),
    });
  }

  return [
    {
      // section
      id: uuidv4(),
      sectionTitle: "Course Description",
      subSections: courseDescriptionSubSections,
    },
    {
      id: uuidv4(),
      sectionTitle: "Generative AI Policy",
      subSections: generativeAiPolicySubSections,
    },
    {
      id: uuidv4(),
      sectionTitle: "Additional Policies",
      subSections: additionalPoliciesSubSections,
    },
  ];
};
