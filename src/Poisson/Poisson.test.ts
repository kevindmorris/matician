import Poisson from "./Poisson";

describe("Poisson", () => {
  test("constructor validates lambda", () => {
    expect(() => new Poisson(0)).toThrow();
    expect(() => new Poisson(-5)).toThrow();
  });

  test("pmf returns correct values for lambda = 3", () => {
    const poisson = new Poisson(3);
    expect(poisson.pmf(0)).toBeCloseTo(Math.exp(-3), 4);
    expect(poisson.pmf(1)).toBeCloseTo(3 * Math.exp(-3), 4);
    expect(poisson.pmf(2)).toBeCloseTo((9 / 2) * Math.exp(-3), 4);
  });

  test("cdf returns cumulative probabilities", () => {
    const poisson = new Poisson(3);
    const expected = poisson.pmf(0) + poisson.pmf(1) + poisson.pmf(2);
    expect(poisson.cdf(2)).toBeCloseTo(expected, 4);
  });

  test("pmf returns 0 for invalid k", () => {
    const poisson = new Poisson(3);
    expect(poisson.pmf(-1)).toBe(0);
    expect(poisson.pmf(1.5)).toBe(0);
  });
});
