import effectiveAnnualRate from './effectiveAnnualRate';

describe('effectiveAnnualRate', () => {
  it('calculates EAR for monthly compounding', () => {
    expect(effectiveAnnualRate(0.12, 12)).toBeCloseTo(0.1268, 4); // 12% nominal compounded monthly
  });

  it('calculates EAR for quarterly compounding', () => {
    expect(effectiveAnnualRate(0.08, 4)).toBeCloseTo(0.0824, 4);
  });

  it('throws if compounding periods is zero or negative', () => {
    expect(() => effectiveAnnualRate(0.1, 0)).toThrow("Compounding periods must be positive");
    expect(() => effectiveAnnualRate(0.1, -4)).toThrow("Compounding periods must be positive");
  });

  it('returns nominalRate when compounded once annually', () => {
    expect(effectiveAnnualRate(0.1, 1)).toBeCloseTo(0.1);
  });
});
