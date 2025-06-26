import ContinuousUniform from "./ContinuousUniform";

describe("ContinuousUniform", () => {
  test("constructor throws if a >= b", () => {
    expect(() => new ContinuousUniform(5, 5)).toThrow();
    expect(() => new ContinuousUniform(6, 3)).toThrow();
  });

  test("pdf returns 0 outside [a, b]", () => {
    const dist = new ContinuousUniform(2, 4);
    expect(dist.pdf(1)).toBe(0);
    expect(dist.pdf(5)).toBe(0);
  });

  test("pdf returns constant inside [a, b]", () => {
    const dist = new ContinuousUniform(2, 4);
    expect(dist.pdf(2)).toBeCloseTo(0.5);
    expect(dist.pdf(3)).toBeCloseTo(0.5);
    expect(dist.pdf(4)).toBeCloseTo(0.5);
  });

  test("cdf returns 0 below a and 1 above b", () => {
    const dist = new ContinuousUniform(2, 4);
    expect(dist.cdf(1)).toBe(0);
    expect(dist.cdf(5)).toBe(1);
  });

  test("cdf increases linearly between a and b", () => {
    const dist = new ContinuousUniform(2, 4);
    expect(dist.cdf(2)).toBe(0);
    expect(dist.cdf(3)).toBeCloseTo(0.5);
    expect(dist.cdf(4)).toBe(1);
  });
});
