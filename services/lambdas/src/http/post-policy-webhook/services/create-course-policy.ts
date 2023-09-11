import { ulid } from 'ulid';
import {
  PolicySections,
  AiPolicy,
  MappedSurveyResponse,
  PolicySection,
} from '../../../shared';

const policyFormatter = (
  courseAiPolicy: PolicySections,
  { courseTitle, courseNumber, email, instructor }: MappedSurveyResponse
): AiPolicy => {
  return {
    heading: `
      <div>
        <h1>
          AI Policy for ${courseNumber}: ${courseTitle}
        </h1>
        <p>
          Course Instructor: ${instructor} <a target="_blank" rel="noopener noreferrer nofollow" class="editor-links" href="mailto:${email}">${email}</a>
        </p>
      </div>
    `
      .replace(/\n/g, '')
      .replace(/>(\s+)</g, '><')
      .trim(),
    sections: courseAiPolicy,
  };
};

export const createCoursePolicy = (
  response: MappedSurveyResponse,
  test = false
): AiPolicy => {
  const courseDescriptionSubSections: PolicySection[] = [];
  const generativeAiPolicySubSections: PolicySection[] = [];
  const additionalPoliciesSubSections: PolicySection[] = [];

  // courseDescriptionSubSections
  courseDescriptionSubSections.push({
    id: test ? 'mockId' : ulid(),
    title: 'Introduction',
    htmlContent: `
        <h3>Course Description</h3>
        <p>${response.courseDescription}</p>
      `
      .replace(/\n/g, '')
      .replace(/>(\s+)</g, '><')
      .trim(),
  });
  // end of courseDescriptionSubSections

  // generativeAiPolicySubSections

  generativeAiPolicySubSections.push({
    id: test ? 'mockId' : ulid(),
    title: 'Introduction',
    miscData: { overallPolicy: response.overallPolicy },
    htmlContent: `<h2>1. ${
      response.courseNumber
    } Generative AI Policy</h2><p>${response.overallPolicyText.trim()}</p>`
      .replace(/\n/g, '')
      .replace(/>(\s+)</g, '><')
      .trim(),
  });

  if (response.useCases) {
    generativeAiPolicySubSections.push({
      id: test ? 'mockId' : ulid(),
      title: 'Use Cases',
      htmlContent: [
        `<h3>Reasonable Use Cases ✅</h3>
          ${
            response.useCases.reasonable.length
              ? `
            ${response.useCases.reasonable.reduce(
              (acc, entry) =>
                (acc += `
                <p><strong>${entry.label}</strong></p>
                <ul>
                  <li>
                    
                    <p>${entry.text}</p>
                  </li>
                </ul>
              `),
              ''
            )}
          `
              : '<p>None</p>'
          }`
          .replace(/\n/g, '')
          .replace(/>(\s+)</g, '><')
          .trim(),
        `
          <h3>Unreasonable Use Cases ❌</h3>
          ${
            response.useCases.unreasonable.length
              ? `
            ${response.useCases.unreasonable.reduce(
              (acc, entry) =>
                (acc += `
                <p><strong>${entry.label}</strong></p>
                <ul>
                  <li>
                    <p>${entry.text}</p>
                  </li>
                </ul>
              `),
              ''
            )}
          `
              : '<p>None</p>'
          }`
          .replace(/\n/g, '')
          .replace(/>(\s+)</g, '><')
          .trim(),
      ],
    });
  }

  if (response.specificPoliciesForAssignments) {
    generativeAiPolicySubSections.push({
      id: test ? 'mockId' : ulid(),
      title: 'Assignment Specific AI Policies',
      htmlContent:
        `<h3>Assignment/Project Specific AI Policies</h3><p>${response.specificPoliciesForAssignments}</p>`
          .replace(/\n/g, '')
          .replace(/>(\s+)</g, '><')
          .trim(),
    });
  }

  if (response.ethicalGuidelines) {
    generativeAiPolicySubSections.push({
      id: test ? 'mockId' : ulid(),
      title: 'Ethical Guidelines',
      htmlContent:
        `<h3>Ethical guidelines for using generative AI for this course:</h3>
        <ul>
          ${response.ethicalGuidelines.reduce(
            (acc, text) => (acc += `<li>${text}</li>`),
            ''
          )}
          ${
            response.additionalGuidelines
              ? `<li>${response.additionalGuidelines}</li>`
              : ''
          }
        </ul>
      `
          .replace(/\n/g, '')
          .replace(/>(\s+)</g, '><')
          .trim(),
    });
  }

  if (response.generativeAiToolDeclarations) {
    generativeAiPolicySubSections.push({
      id: test ? 'mockId' : ulid(),
      title: 'Declaration',
      htmlContent: `<h3>How to declare the use of generative tools:</h3>
          <ul>
            ${response.generativeAiToolDeclarations.reduce(
              (acc, text) => (acc += `<li>${text}</li>`),
              ''
            )}
            ${
              response.additionalGenerativeAiToolsDeclarations
                ? `<li>${response.additionalGenerativeAiToolsDeclarations}</li>`
                : ''
            }
          </ul>`
        .replace(/\n/g, '')
        .replace(/>(\s+)</g, '><')
        .trim(),
    });
  }

  generativeAiPolicySubSections.push({
    id: test ? 'mockId' : ulid(),
    title: 'Additional Notes',
    htmlContent: `
        <h3>Additional Notes</h3>
        ${
          response.additionalNotes
            ? `
        <ul>
          <li>${response.additionalNotes}</li>
        </ul>
        `
            : ''
        }`
      .replace(/\n/g, '')
      .replace(/>(\s+)</g, '><')
      .trim(),
  });

  // end of generativeAiPolicySubSections

  // additionalPoliciesSubSections
  additionalPoliciesSubSections.push({
    id: test ? 'mockId' : ulid(),
    title: 'Introduction',
    htmlContent:
      `<h2>2. Additional Policies</h2><p>${response.additionalPolicyText}</p>`
        .replace(/\n/g, '')
        .replace(/>(\s+)</g, '><')
        .trim(),
  });

  // check to see if all the policy links exists and are not empty
  if (response.overallPolicy !== 'No restrictions') {
    additionalPoliciesSubSections.push({
      id: test ? 'mockId' : ulid(),
      title: 'Policy Links',
      htmlContent: `<ul>
              ${
                response.campusWidePolicy
                  ? `
                <li>
                ${
                  response.campusWidePolicy.length
                    ? `<p><a target="_blank" rel="noopener noreferrer nofollow" class="editor-links" href="${response.campusWidePolicy}">Campus-wide generative AI policy</a></p>`
                    : 'Campus-wide generative AI policy: N/A'
                }
                </li>
              `
                  : ''
              }
              ${
                response.departmentWidePolicy
                  ? `
                <li>
                ${
                  response.departmentWidePolicy.length
                    ? `<p><a target="_blank" rel="noopener noreferrer nofollow" class="editor-links" href="${response.departmentWidePolicy}">Department-wide generative AI policy</a></p>`
                    : 'Department-wide generative AI policy: N/A'
                }
                </li>
              `
                  : ''
              }
              ${
                response.academicIntegrityPolicy
                  ? `
                  <li>
                  ${
                    response.academicIntegrityPolicy.length
                      ? `<p><a target="_blank" rel="noopener noreferrer nofollow" class="editor-links" href="${response.academicIntegrityPolicy}">Academic Integrity policy</a></p>`
                      : 'Academic Integrity policy: N/A'
                  }
                  </li>
              `
                  : ''
              }
              ${
                response.otherPolicies
                  ? `
                  <li>
                  ${
                    response.otherPolicies.length
                      ? `<p><a target="_blank" rel="noopener noreferrer nofollow" class="editor-links" href="${response.otherPolicies}">Other policies</a></p>`
                      : 'Other policies: N/A'
                  }
                  </li>
              `
                  : ''
              }
            </ul>`
        .replace(/\n/g, '')
        .replace(/>(\s+)</g, '><')
        .trim(),
    });
  }
  // end of additionalPoliciesSubSections

  return policyFormatter(
    [
      {
        // section
        id: test ? 'mockId' : ulid(),
        title: 'Course Description',
        children: courseDescriptionSubSections,
      },
      {
        id: test ? 'mockId' : ulid(),
        title: 'Generative AI Policy',
        children: generativeAiPolicySubSections,
      },
      {
        id: test ? 'mockId' : ulid(),
        title: 'Additional Policies',
        children: additionalPoliciesSubSections,
      },
    ],
    response
  );
};
