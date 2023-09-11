import { surveyResponseMapper } from './survey-response-mapper'; // Update with the correct path
import {
  DisplayedValues,
  Labels,
  SurveyResponse,
  Values,
} from '../../../shared'; // Update with the correct path

describe('surveyResponseMapper', () => {
  it('should match the snapshot for a given response', () => {
    const mockLabels: Labels = {
      QID8: 'SomeQID8',
      QID15: 'Allowed under conditions',
      QID22: 'SomeQID22',
      QID24: 'SomeQID24',
      QID25: ['Guideline1', 'Guideline2', 'Guideline3'],
      QID26: 'SomeQID26',
      QID28: 'SomeQID28',
      status: 'SomeStatus',
      QID4_DO: ['Action1', 'Action2'],
      QID8_DO: ['Response1', 'Response2'],
      QID12_DO: ['ResponseA', 'ResponseB'],
      QID15_DO: ['Reasonable', 'Not Reasonable'],
      QID22_DO: ['Option1', 'Option2'],
      QID24_DO: ['OptionA', 'OptionB'],
      QID25_DO: ['GuidelineA', 'GuidelineB'],
      QID26_DO: ['ToolDeclaration1', 'ToolDeclaration2'],
      QID28_DO: ['ValueA', 'ValueB'],
      finished: 'Completed',
    };

    const mockValues: Values = {
      QID8: 1,
      QID15: 2,
      QID22: 3,
      QID24: 4,
      QID25: ['GuidelineValue1', 'GuidelineValue2'],
      QID26: 5,
      QID28: 6,
      QID4_1: 'InstructorXYZ',
      QID4_2: 'email@example.com',
      QID4_3: 'CourseNumber123',
      QID4_4: 'CourseTitleABC',
      status: 7,
      QID12_1: 'SomeCampusPolicy',
      QID12_2: 'SomeDepartmentPolicy',
      QID12_3: 'SomeIntegrityPolicy',
      QID12_4: 'SomeOtherPolicies',
      QID4_DO: ['ActionValue1', 'ActionValue2'],
      QID8_DO: ['ResponseValue1', 'ResponseValue2'],
      endDate: '2023-09-08',
      QID12_DO: ['ResponseValueA', 'ResponseValueB'],
      QID15_DO: ['ReasonableValue', 'NotReasonableValue'],
      QID22_DO: ['OptionValue1', 'OptionValue2'],
      QID24_DO: ['OptionValueA', 'OptionValueB'],
      QID25_DO: ['GuidelineValueA', 'GuidelineValueB'],
      QID26_DO: ['ToolDeclarationValue1', 'ToolDeclarationValue2'],
      QID28_DO: ['ValueA', 'ValueB'],
      duration: 120,
      finished: 100,
      progress: 80,
      QID3_TEXT: 'SomeCourseDescription',
      ipAddress: '192.168.1.1',
      startDate: '2023-09-01',
      QID13_TEXT: 'SomeID',
      QID17_TEXT: 'SomeSpecificPolicies',
      QID19_TEXT: 'SomeQID19Text',
      QID20_TEXT: 'SomeQID20Text',
      QID25_6_TEXT: 'SomeAdditionalGuidelines',
      QID26_3_TEXT: ['SomeGenerativeAiTools1', 'SomeGenerativeAiTools2'],
      QID30_TEXT: 'SomeNotes',
      recordedDate: '2023-09-07',
      userLanguage: 'en-US',
      Q_RecaptchaScore: 0.9,
      locationLatitude: '40.730610',
      locationLongitude: '-73.935242',
      distributionChannel: 'Web',
    };

    const mockResponse: SurveyResponse = {
      responseId: 'SomeResponseId',
      displayedFields: [],
      displayedValues: {} as DisplayedValues,
      labels: mockLabels,
      values: mockValues,
    };

    const result = surveyResponseMapper(mockResponse);

    expect(result).toMatchSnapshot();
  });
});
