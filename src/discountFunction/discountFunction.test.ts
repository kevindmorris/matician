import discountFunction from './discountFunction';

describe('discountFunction', () => {
  it('calculates discount factor for integer time', () => {
    expect(discountFunction(0.05, 3)).toBeCloseTo(0.86384, 5);
  });

  it('calculates discount factor for fractional time', () => {
    expect(discountFunction(0.05, 2.5)).toBeCloseTo(Math.pow(1.05, -2.5), 6);
  });

  it('returns 1 when time is 0', () => {
    expect(discountFunction(0.07, 0)).toBe(1);
  });

  it('returns 1 when rate is 0', () => {
    expect(discountFunction(0, 5)).toBe(1);
  });
});
