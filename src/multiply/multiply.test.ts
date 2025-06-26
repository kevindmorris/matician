import multiply from './multiply';

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('handles negative numbers', () => {
    expect(multiply(-4, 5)).toBe(-20);
    expect(multiply(4, -5)).toBe(-20);
    expect(multiply(-4, -5)).toBe(20);
  });

  it('handles zero', () => {
    expect(multiply(0, 100)).toBe(0);
    expect(multiply(100, 0)).toBe(0);
  });

  it('handles decimals', () => {
    expect(multiply(1.5, 2)).toBe(3);
  });
});
