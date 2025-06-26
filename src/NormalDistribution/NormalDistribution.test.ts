import NormalDistribution from "./NormalDistribution";

describe("NormalDistribution", () => {
  const normal = new NormalDistribution(0, 1);

  test("pdf at mean (x = 0) should return peak value", () => {
    const result = normal.pdf(0);
    expect(result).toBeCloseTo(0.3989, 4);
  });

  test("cdf at mean (x = 0) should return 0.5", () => {
    const result = normal.cdf(0);
    expect(result).toBeCloseTo(0.5, 4);
  });

  test("cdf at large positive value (x → ∞) should approach 1", () => {
    const result = normal.cdf(1000);
    expect(result).toBeCloseTo(1.0, 4);
  });

  test("cdf at large negative value (x → -∞) should approach 0", () => {
    const result = normal.cdf(-1000);
    expect(result).toBeCloseTo(0.0, 4);
  });

  test("pdf should be symmetric about the mean", () => {
    const pos = normal.pdf(1);
    const neg = normal.pdf(-1);
    expect(pos).toBeCloseTo(neg, 4);
  });
});
