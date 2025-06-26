import annuityDue from './annuityDue';

describe('annuityDue', () => {
  it('calculates annuity due value correctly', () => {
    expect(annuityDue(1000, 0.05, 5)).toBeCloseTo(4545.95, 2);
  });

  it('returns payment * periods if rate is 0', () => {
    expect(annuityDue(1000, 0, 5)).toBe(5000);
  });

  it('returns 0 if payment is 0', () => {
    expect(annuityDue(0, 0.05, 10)).toBe(0);
  });
});
