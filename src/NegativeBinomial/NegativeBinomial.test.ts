import NegativeBinomial from "./NegativeBinomial";

describe("NegativeBinomial", () => {
  test("constructor validates input", () => {
    expect(() => new NegativeBinomial(0, 0.5)).toThrow();
    expect(() => new NegativeBinomial(3, -0.1)).toThrow();
    expect(() => new NegativeBinomial(3, 1.5)).toThrow();
  });

  test("pmf returns correct values for r=2, p=0.5", () => {
    const nb = new NegativeBinomial(2, 0.5);
    expect(nb.pmf(0)).toBeCloseTo(0.25);
    expect(nb.pmf(1)).toBeCloseTo(0.25);
    expect(nb.pmf(2)).toBeCloseTo(0.1875);
  });

  test("pmf returns 0 for invalid k", () => {
    const nb = new NegativeBinomial(2, 0.5);
    expect(nb.pmf(-1)).toBe(0);
    expect(nb.pmf(2.5)).toBe(0);
  });

  test("cdf computes correct cumulative probability", () => {
    const nb = new NegativeBinomial(2, 0.5);
    const expected = nb.pmf(0) + nb.pmf(1) + nb.pmf(2);
    expect(nb.cdf(2)).toBeCloseTo(expected, 5);
  });

  test("edge case: p = 1 always succeeds, only k = 0 is valid", () => {
    const nb = new NegativeBinomial(3, 1);
    expect(nb.pmf(0)).toBe(1);
    expect(nb.pmf(1)).toBe(0);
    expect(nb.cdf(0)).toBe(1);
    expect(nb.cdf(5)).toBe(1);
  });
});
