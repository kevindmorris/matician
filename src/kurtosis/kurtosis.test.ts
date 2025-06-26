import kurtosis from './kurtosis';

describe('kurtosis', () => {
  it('returns approximately 0 for normal-like data', () => {
    const data = [1, 2, 3, 4, 5];
    expect(kurtosis(data)).toBeCloseTo(0, 1); // Small dataset approximation
  });

  it('returns positive for heavy-tailed data', () => {
    const data = [1, 2, 3, 4, 100];
    expect(kurtosis(data)).toBeGreaterThan(0);
  });

  it('returns negative for light-tailed data', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const flat = data.map(() => 5);
    expect(kurtosis(flat)).toBeLessThan(0);
  });

  it('throws on less than 4 values', () => {
    expect(() => kurtosis([1, 2, 3])).toThrow("Kurtosis requires at least 4 data points");
  });
});
