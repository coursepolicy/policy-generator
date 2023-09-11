import { db } from '../../../../data/knex';
import { AiPolicy } from '../../../shared';
import { createNewPolicy } from './'; // Update the path appropriately
import mockKnex from 'mock-knex';

// Mock the database
const tracker = mockKnex.getTracker();

describe('createNewPolicy', () => {
  beforeAll(() => {
    mockKnex.mock(db);
    tracker.install();
  });

  afterAll(() => {
    tracker.uninstall();
    mockKnex.unmock(db);
  });

  it('should insert a new policy and return its ID', async () => {
    const mockId = '1234';
    const mockPolicy = {
      id: 'Generated ULID',
      heading: 'Course information like title, number, instructor, etc.',
      sections: [
        {
          id: 'Generated ULID',
          title: 'Section heading',
        },
      ],
    } as AiPolicy;

    tracker.on('query', (query) => {
      expect(query.method).toBe('insert');
      query.response([mockId]);
    });

    const [returnedId] = await createNewPolicy(mockId, mockPolicy);

    expect(returnedId).toBe(mockId);
  });
});
