import growingPerpetuity from './growingPerpetuity';

describe('growingPerpetuity', () => {
  it('calculates growing perpetuity value correctly', () => {
    expect(growingPerpetuity(1000, 0.06, 0.03)).toBeCloseTo(33333.33, 2);
  });

  it('throws error when rate <= growth', () => {
    expect(() => growingPerpetuity(1000, 0.03, 0.03)).toThrow('Rate must be greater than growth rate');
    expect(() => growingPerpetuity(1000, 0.02, 0.03)).toThrow('Rate must be greater than growth rate');
  });
});
