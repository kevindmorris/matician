import interquartileRange from './interquartileRange';

describe('interquartileRange', () => {
  it('calculates IQR for an odd-length array', () => {
    expect(interquartileRange([1, 2, 3, 4, 5])).toBeCloseTo(2, 5); // Q3=4, Q1=2, IQR=2
  });

  it('calculates IQR for an even-length array', () => {
    expect(interquartileRange([7, 15, 36, 39, 40, 41])).toBeCloseTo(24, 5); // Q1=15, Q3=39
  });

  it('works for already sorted data', () => {
    expect(interquartileRange([10, 20, 30, 40, 50, 60])).toBeCloseTo(30, 5); // Q3=50, Q1=20
  });

  it('throws on empty array', () => {
    expect(() => interquartileRange([])).toThrow("Input array cannot be empty");
  });
});
