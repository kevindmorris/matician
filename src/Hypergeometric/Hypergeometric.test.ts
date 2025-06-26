import Hypergeometric from "./Hypergeometric";

describe("Hypergeometric", () => {
  test("constructor throws for invalid input", () => {
    expect(() => new Hypergeometric(10, 5, 11)).toThrow();
    expect(() => new Hypergeometric(10, 11, 5)).toThrow();
  });

  test("pmf works for valid hypergeometric values", () => {
    const dist = new Hypergeometric(20, 7, 5);
    expect(dist.pmf(0)).toBeGreaterThan(0);
    expect(dist.pmf(1)).toBeGreaterThan(0);
    expect(dist.pmf(6)).toBe(0); // more successes than in population
  });

  test("cdf sums up pmf correctly", () => {
    const dist = new Hypergeometric(20, 7, 5);
    const sum = [0, 1, 2, 3, 4, 5].map(k => dist.pmf(k)).reduce((a, b) => a + b, 0);
    expect(dist.cdf(5)).toBeCloseTo(sum, 4);
  });

  test("pmf handles edge cases", () => {
    const dist = new Hypergeometric(10, 0, 5);
    expect(dist.pmf(0)).toBe(1);
    expect(dist.pmf(1)).toBe(0);

    const fullSuccess = new Hypergeometric(10, 10, 5);
    expect(fullSuccess.pmf(5)).toBe(1);
    expect(fullSuccess.pmf(4)).toBe(0);
  });
});
