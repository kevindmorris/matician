import Gamma from "./Gamma";

describe("Gamma", () => {
  test("constructor validates shape and rate", () => {
    expect(() => new Gamma(0, 1)).toThrow();
    expect(() => new Gamma(1, 0)).toThrow();
  });

  test("pdf returns 0 for x < 0", () => {
    const gamma = new Gamma(2, 2);
    expect(gamma.pdf(-1)).toBe(0);
  });

  test("pdf is correct at x = 0 for shape > 1", () => {
    const gamma = new Gamma(2, 1);
    expect(gamma.pdf(0)).toBe(0);
  });

  test("pdf is highest near mode", () => {
    const gamma = new Gamma(3, 2);
    const x1 = gamma.pdf(0.5);
    const x2 = gamma.pdf(1);
    const x3 = gamma.pdf(1.5);
    expect(x2).toBeGreaterThan(x1);
    expect(x2).toBeGreaterThan(x3);
  });

  test("cdf is increasing and approaches 1", () => {
    const gamma = new Gamma(2, 1);
    expect(gamma.cdf(0)).toBe(0);
    expect(gamma.cdf(5)).toBeGreaterThan(0.95);
  });

  test("cdf returns 0 for x < 0", () => {
    const gamma = new Gamma(2, 2);
    expect(gamma.cdf(-3)).toBe(0);
  });
});
