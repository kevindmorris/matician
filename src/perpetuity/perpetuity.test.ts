import perpetuity from './perpetuity';

describe('perpetuity', () => {
  it('calculates perpetuity value correctly', () => {
    expect(perpetuity(1000, 0.05)).toBe(20000);
  });

  it('throws error when rate is zero', () => {
    expect(() => perpetuity(1000, 0)).toThrow('Interest rate must be greater than zero');
  });
});
