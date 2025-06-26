import Exponential from "./Exponential";

describe("Exponential", () => {
  test("constructor validates lambda", () => {
    expect(() => new Exponential(0)).toThrow();
    expect(() => new Exponential(-1)).toThrow();
  });

  test("pdf returns 0 for x < 0", () => {
    const exp = new Exponential(1);
    expect(exp.pdf(-1)).toBe(0);
  });

  test("pdf computes correct values", () => {
    const exp = new Exponential(2);
    expect(exp.pdf(0)).toBeCloseTo(2);
    expect(exp.pdf(1)).toBeCloseTo(2 * Math.exp(-2));
  });

  test("cdf computes correct values", () => {
    const exp = new Exponential(2);
    expect(exp.cdf(0)).toBe(0);
    expect(exp.cdf(1)).toBeCloseTo(1 - Math.exp(-2));
  });

  test("cdf approaches 1 as x increases", () => {
    const exp = new Exponential(0.5);
    expect(exp.cdf(100)).toBeCloseTo(1, 5);
  });

  test("pdf is decreasing function", () => {
    const exp = new Exponential(1);
    const pdf1 = exp.pdf(1);
    const pdf2 = exp.pdf(2);
    expect(pdf2).toBeLessThan(pdf1);
  });
});
