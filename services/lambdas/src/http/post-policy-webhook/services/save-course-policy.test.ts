import mockKnex from 'mock-knex';
import { saveCoursePolicy } from './save-course-policy';
import { db } from '../../../../data/knex';
import { AiPolicy, QaultricsResponse } from '../../../shared';

const tracker = mockKnex.getTracker();

describe('saveCoursePolicy', () => {
  beforeEach(() => {
    mockKnex.mock(db);
    tracker.install();
  });

  afterEach(() => {
    tracker.uninstall();
    mockKnex.unmock(db);
  });

  it('should update existing response', async () => {
    const mockData = {
      result: {
        values: {
          QID13_TEXT: '1234',
        },
        responseId: 'abcd',
      },
    } as QaultricsResponse;

    tracker.on('query', (query, step) => {
      if (step === 1) {
        expect(query.method).toBe('first');
        query.response([mockData.result]);
      } else if (step === 2) {
        expect(query.method).toBe('update');
        query.response([mockData.result.values.QID13_TEXT]);
      }
    });

    const saver = await saveCoursePolicy(mockData);
    const result = await saver({} as AiPolicy);
    expect(result).toEqual([mockData.result.values.QID13_TEXT]);
  });

  it('should insert new response', async () => {
    const mockData = {
      result: {
        values: {
          QID13_TEXT: '1234',
        },
        responseId: 'abcd',
      },
    } as QaultricsResponse;

    tracker.on('query', (query, step) => {
      if (step === 1) {
        expect(query.method).toBe('first');
        query.response([]);
      } else if (step === 2) {
        expect(query.method).toBe('insert');
        query.response([mockData.result.values.QID13_TEXT]);
      }
    });

    const saver = await saveCoursePolicy(mockData);
    const result = await saver({} as AiPolicy);
    expect(result).toEqual([mockData.result.values.QID13_TEXT]);
  });
});
