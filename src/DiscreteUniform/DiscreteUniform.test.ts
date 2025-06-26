import DiscreteUniform from "./DiscreteUniform";

describe("DiscreteUniform", () => {
  test("constructor throws on invalid range", () => {
    expect(() => new DiscreteUniform(5, 4)).toThrow();
    expect(() => new DiscreteUniform(3.1, 4)).toThrow();
  });

  test("pmf returns correct uniform probabilities", () => {
    const dist = new DiscreteUniform(1, 4);
    expect(dist.pmf(1)).toBeCloseTo(0.25);
    expect(dist.pmf(2)).toBeCloseTo(0.25);
    expect(dist.pmf(4)).toBeCloseTo(0.25);
    expect(dist.pmf(0)).toBe(0);
    expect(dist.pmf(5)).toBe(0);
  });

  test("cdf returns correct values", () => {
    const dist = new DiscreteUniform(1, 4);
    expect(dist.cdf(0)).toBe(0);
    expect(dist.cdf(1)).toBeCloseTo(0.25);
    expect(dist.cdf(2)).toBeCloseTo(0.5);
    expect(dist.cdf(4)).toBe(1);
    expect(dist.cdf(5)).toBe(1);
  });

  test("pmf handles degenerate case (a == b)", () => {
    const dist = new DiscreteUniform(7, 7);
    expect(dist.pmf(7)).toBe(1);
    expect(dist.pmf(6)).toBe(0);
    expect(dist.pmf(8)).toBe(0);
    expect(dist.cdf(6)).toBe(0);
    expect(dist.cdf(7)).toBe(1);
  });
});
