import { MappedSurveyResponse } from '../../../shared';
import { createCoursePolicy } from './create-course-policy';

describe('createCoursePolicy', () => {
  it('should return consistent output', () => {
    const mockResponse: MappedSurveyResponse = {
      id: 'mockId',
      createdAt: '2021-01-01T00:00:00.000Z',
      courseTitle: 'Test Course',
      courseNumber: '101',
      email: 'test@email.com',
      instructor: 'Test Instructor',
      courseDescription: 'This is a test course.',
      overallPolicy: 'Some Policy',
      overallPolicyText: 'Some policy text.',

      useCases: {
        reasonable: [
          {
            label: 'Test Reasonable Use Case',
            text: 'Description for a reasonable use case.',
          },
        ],
        unreasonable: [
          {
            label: 'Test Unreasonable Use Case',
            text: 'Description for an unreasonable use case.',
          },
        ],
      },

      specificPoliciesForAssignments:
        'Specific policies related to assignments for the test course.',

      ethicalGuidelines: [
        'First ethical guideline.',
        'Second ethical guideline.',
      ],

      additionalGuidelines:
        'Additional ethical guidelines for the test course.',

      generativeAiToolDeclarations: [
        'First declaration regarding generative tools.',
        'Second declaration regarding generative tools.',
      ],

      additionalGenerativeAiToolsDeclarations: [
        'Additional declarations regarding generative AI tools for the test course.',
      ],

      additionalNotes: 'Some additional notes regarding the test course.',

      additionalPolicyText: 'Additional policies text for the test course.',

      campusWidePolicy: 'https://example.com/campus-wide-policy',
      departmentWidePolicy: 'https://example.com/department-wide-policy',
      academicIntegrityPolicy: 'https://example.com/academic-integrity-policy',
      otherPolicies: 'https://example.com/other-policies',
    };

    const result = createCoursePolicy(mockResponse, true);
    expect(result).toMatchSnapshot();
  });
});
