import Binomial from "./Binomial";

describe("Binomial", () => {
  test("constructor validates input", () => {
    expect(() => new Binomial(-1, 0.5)).toThrow();
    expect(() => new Binomial(10, -0.1)).toThrow();
    expect(() => new Binomial(10, 1.1)).toThrow();
  });

  test("pmf returns correct value for k=0..n", () => {
    const bin = new Binomial(3, 0.5);
    expect(bin.pmf(0)).toBeCloseTo(0.125);
    expect(bin.pmf(1)).toBeCloseTo(0.375);
    expect(bin.pmf(2)).toBeCloseTo(0.375);
    expect(bin.pmf(3)).toBeCloseTo(0.125);
  });

  test("pmf returns 0 for invalid k", () => {
    const bin = new Binomial(5, 0.5);
    expect(bin.pmf(-1)).toBe(0);
    expect(bin.pmf(6)).toBe(0);
  });

  test("cdf computes correct cumulative probability", () => {
    const bin = new Binomial(3, 0.5);
    expect(bin.cdf(-1)).toBeCloseTo(0);
    expect(bin.cdf(0)).toBeCloseTo(0.125);
    expect(bin.cdf(1)).toBeCloseTo(0.5);
    expect(bin.cdf(2)).toBeCloseTo(0.875);
    expect(bin.cdf(3)).toBeCloseTo(1.0);
    expect(bin.cdf(4)).toBeCloseTo(1.0);
  });

  test("binomialCoefficient works for edge cases", () => {
    const bin = new Binomial(10, 0.5);
    expect(bin["binomialCoefficient"](10, 0)).toBe(1);
    expect(bin["binomialCoefficient"](10, 10)).toBe(1);
    expect(bin["binomialCoefficient"](10, 5)).toBe(252);
  });
});
