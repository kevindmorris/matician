import accumulationFunction from './accumulationFunction';

describe('accumulationFunction', () => {
  it('calculates accumulation correctly for integer time', () => {
    expect(accumulationFunction(0.05, 3)).toBeCloseTo(1.1576, 4);
  });

  it('calculates accumulation for fractional time', () => {
    expect(accumulationFunction(0.05, 2.5)).toBeCloseTo(Math.pow(1.05, 2.5), 5);
  });

  it('returns 1 when time is 0', () => {
    expect(accumulationFunction(0.07, 0)).toBe(1);
  });

  it('returns 1 when rate is 0', () => {
    expect(accumulationFunction(0, 5)).toBe(1);
  });
});
