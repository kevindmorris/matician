import annuityImmediate from './annuityImmediate';

describe('annuityImmediate', () => {
  it('calculates annuity immediate value correctly', () => {
    expect(annuityImmediate(1000, 0.05, 5)).toBeCloseTo(4329.48, 2);
  });

  it('returns payment * periods if rate is 0', () => {
    expect(annuityImmediate(1000, 0, 5)).toBe(5000);
  });

  it('returns 0 if payment is 0', () => {
    expect(annuityImmediate(0, 0.05, 10)).toBe(0);
  });
});
