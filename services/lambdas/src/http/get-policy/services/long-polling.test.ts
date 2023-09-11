import { longPolling } from './long-polling'; // Update the path accordingly
import { db } from '../../../../data/knex';
import mockKnex from 'mock-knex';

const tracker = mockKnex.getTracker();

describe('longPolling', () => {
  beforeEach(() => {
    mockKnex.mock(db);
    tracker.install();
  });

  afterEach(() => {
    tracker.uninstall();
    mockKnex.unmock(db);
  });

  it('should return data if found before MAX_TIME_ALOTTED', async () => {
    const mockData = {
      id: 'someId',
      results: { someField: 'someValue' },
      created_at: new Date(),
      updated_at: new Date(),
    };

    tracker.on('query', (query, step) => {
      if (step === 1) {
        expect(query.method).toBe('first');
        query.response(mockData);
      }
    });

    const result = await longPolling('someGeneratedId', 1_000);

    expect(result).toEqual({
      ...mockData.results,
      id: mockData.id,
      updatedAt: mockData.updated_at,
      createdAt: mockData.created_at,
    });
  });

  it('should return false if MAX_TIME_ALOTTED is exceeded', async () => {
    tracker.on('query', (query) => {
      query.response(null); // Always return null
    });

    const resultPromise = longPolling('someGeneratedId', 1_000);

    const result = await resultPromise;

    expect(result).toBe(false);
  });
});
