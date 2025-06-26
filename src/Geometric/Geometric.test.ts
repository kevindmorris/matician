import Geometric from "./Geometric";

describe("Geometric", () => {
  test("constructor validates p", () => {
    expect(() => new Geometric(0)).toThrow();
    expect(() => new Geometric(1.1)).toThrow();
    expect(() => new Geometric(-0.5)).toThrow();
  });

  test("pmf returns correct values", () => {
    const geo = new Geometric(0.5);
    expect(geo.pmf(1)).toBeCloseTo(0.5);
    expect(geo.pmf(2)).toBeCloseTo(0.25);
    expect(geo.pmf(3)).toBeCloseTo(0.125);
    expect(geo.pmf(0)).toBe(0);
    expect(geo.pmf(-5)).toBe(0);
  });

  test("cdf returns correct cumulative probabilities", () => {
    const geo = new Geometric(0.5);
    expect(geo.cdf(0)).toBe(0);
    expect(geo.cdf(1)).toBeCloseTo(0.5);
    expect(geo.cdf(2)).toBeCloseTo(0.75);
    expect(geo.cdf(3)).toBeCloseTo(0.875);
    expect(geo.cdf(10)).toBeCloseTo(1 - Math.pow(0.5, 10));
  });

  test("edge case: p = 1 always succeeds on first trial", () => {
    const geo = new Geometric(1);
    expect(geo.pmf(1)).toBe(1);
    expect(geo.pmf(2)).toBe(0);
    expect(geo.cdf(1)).toBe(1);
    expect(geo.cdf(10)).toBe(1);
  });
});
