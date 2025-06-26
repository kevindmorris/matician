import forceOfInterest from './forceOfInterest';

describe('forceOfInterest', () => {
  it('calculates force of interest for 5%', () => {
    expect(forceOfInterest(0.05)).toBeCloseTo(0.04879, 5);
  });

  it('calculates force of interest for 0%', () => {
    expect(forceOfInterest(0)).toBe(0);
  });

  it('throws for effective rates < -100%', () => {
    expect(() => forceOfInterest(-1.01)).toThrow("Effective rate must be greater than -100%");
  });
});
