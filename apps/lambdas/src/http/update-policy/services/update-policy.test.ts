import { db } from '../../../../data/knex';
import { updatePolicy, SAMPLE_POLICY, PolicyStatusEnum } from './update-policy';
import { AiPolicy } from '../../../shared';
import mockKnex from 'mock-knex';

// Mock the database
const tracker = mockKnex.getTracker();
const policy = {} as AiPolicy;
describe('updatePolicy', () => {
  beforeEach(() => {
    mockKnex.mock(db);
    tracker.install();
  });

  afterEach(() => {
    tracker.uninstall();
    mockKnex.unmock(db);
  });

  it('should return NONE status when policy already exists with the provided generatedId', async () => {
    tracker.on('query', (query) => {
      expect(query.method).toBe('first');
      query.response([{ id: 'mockGeneratedId' }]);
    });

    const result = await updatePolicy(SAMPLE_POLICY, policy, 'mockGeneratedId');

    expect(result).toEqual({
      id: 'mockGeneratedId',
      policyStatus: PolicyStatusEnum.NONE,
    });
  });

  it('should insert new policy when policy does not exist with the provided generatedId', async () => {
    tracker.on('query', (query, step) => {
      if (step === 1) {
        expect(query.method).toBe('first');
        query.response([]);
      } else if (step === 2) {
        expect(query.method).toBe('insert');
        query.response(['mockGeneratedId']);
      }
    });

    const result = await updatePolicy(SAMPLE_POLICY, policy, 'mockGeneratedId');

    expect(result).toEqual({
      id: 'mockGeneratedId',
      policyStatus: PolicyStatusEnum.INSERTED,
    });
  });

  it('should update the policy when it exists with the provided id', async () => {
    tracker.on('query', (query, step) => {
      if (step === 1) {
        expect(query.method).toBe('first');
        query.response([{ id: 'mockId' }]);
      } else if (step === 2) {
        expect(query.method).toBe('update');
        query.response([]);
      }
    });
    const result = await updatePolicy('mockId', policy);

    expect(result).toEqual({
      id: 'mockId',
      policyStatus: PolicyStatusEnum.UPDATED,
    });
  });
});
