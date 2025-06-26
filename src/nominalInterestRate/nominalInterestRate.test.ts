import nominalInterestRate from './nominalInterestRate';

describe('nominalInterestRate', () => {
  it('calculates nominal rate from effective rate and monthly compounding', () => {
    expect(nominalInterestRate(0.1268, 12)).toBeCloseTo(0.12, 2); // Should reverse EAR calc
  });

  it('calculates nominal rate with quarterly compounding', () => {
    expect(nominalInterestRate(0.0824, 4)).toBeCloseTo(0.08, 2);
  });

  it('returns effective rate when compounding once annually', () => {
    expect(nominalInterestRate(0.1, 1)).toBeCloseTo(0.1);
  });

  it('throws for zero or negative compounding periods', () => {
    expect(() => nominalInterestRate(0.1, 0)).toThrow("Compounding periods must be positive");
    expect(() => nominalInterestRate(0.1, -2)).toThrow("Compounding periods must be positive");
  });
});
