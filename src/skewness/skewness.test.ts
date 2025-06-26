import skewness from './skewness';

describe('skewness', () => {
  it('calculates skewness for a symmetric dataset', () => {
    const values = [1, 2, 3, 4, 5];
    expect(skewness(values)).toBeCloseTo(0, 2); // Nearly symmetric
  });

  it('detects right skewed data', () => {
    const values = [1, 2, 3, 4, 10];
    expect(skewness(values)).toBeGreaterThan(0);
  });

  it('detects left skewed data', () => {
    const values = [-10, 1, 2, 3, 4];
    expect(skewness(values)).toBeLessThan(0);
  });

  it('throws on less than 3 items', () => {
    expect(() => skewness([1, 2])).toThrow("Skewness requires at least 3 data points");
  });
});
