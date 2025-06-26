import solveLinear from './solveLinear';

describe('solveLinear', () => {
  it('solves a basic linear equation', () => {
    expect(solveLinear(2, -4)).toBe(2);
    expect(solveLinear(1, 3)).toBe(-3);
    expect(solveLinear(-5, 10)).toBe(2);
  });

  it('returns 0 when b is 0', () => {
    expect(solveLinear(5, 0)).toBe(0);
  });

  it('throws an error when a is 0', () => {
    expect(() => solveLinear(0, 5)).toThrow('Coefficient "a" cannot be zero');
  });
});
