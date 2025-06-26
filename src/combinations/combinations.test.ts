import combinations from './combinations';

describe('combinations', () => {
  it('calculates combinations for n = 5, r = 2', () => {
    expect(combinations(5, 2)).toBe(10);
  });

  it('returns 1 when r = 0 or r = n', () => {
    expect(combinations(7, 0)).toBe(1);
    expect(combinations(7, 7)).toBe(1);
  });

  it('uses symmetry property', () => {
    expect(combinations(10, 3)).toBe(combinations(10, 7));
  });

  it('throws for r > n', () => {
    expect(() => combinations(3, 5)).toThrow("r cannot be greater than n");
  });

  it('throws for negative or non-integer input', () => {
    expect(() => combinations(-1, 2)).toThrow("Inputs must be non-negative");
    expect(() => combinations(5, -2)).toThrow("Inputs must be non-negative");
    expect(() => combinations(5.2, 2)).toThrow("Inputs must be integers");
    expect(() => combinations(5, 2.5)).toThrow("Inputs must be integers");
  });
});
