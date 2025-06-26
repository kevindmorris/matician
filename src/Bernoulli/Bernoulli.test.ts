import Bernoulli from "./Bernoulli";

describe("Bernoulli", () => {
  test("throws error if p is not in [0, 1]", () => {
    expect(() => new Bernoulli(-0.1)).toThrow();
    expect(() => new Bernoulli(1.1)).toThrow();
  });

  test("pmf returns correct values for p = 0.7", () => {
    const bern = new Bernoulli(0.7);
    expect(bern.pmf(0)).toBeCloseTo(0.3);
    expect(bern.pmf(1)).toBeCloseTo(0.7);
    expect(bern.pmf(2)).toBe(0);
  });

  test("cdf returns correct values for p = 0.7", () => {
    const bern = new Bernoulli(0.7);
    expect(bern.cdf(-1)).toBe(0);
    expect(bern.cdf(0)).toBeCloseTo(0.3);
    expect(bern.cdf(1)).toBe(1);
    expect(bern.cdf(2)).toBe(1);
  });

  test("pmf and cdf for edge case p = 1", () => {
    const bern = new Bernoulli(1);
    expect(bern.pmf(0)).toBe(0);
    expect(bern.pmf(1)).toBe(1);
    expect(bern.cdf(0)).toBe(0);
    expect(bern.cdf(1)).toBe(1);
  });

  test("pmf and cdf for edge case p = 0", () => {
    const bern = new Bernoulli(0);
    expect(bern.pmf(0)).toBe(1);
    expect(bern.pmf(1)).toBe(0);
    expect(bern.cdf(0)).toBe(1);
    expect(bern.cdf(1)).toBe(1);
  });
});
