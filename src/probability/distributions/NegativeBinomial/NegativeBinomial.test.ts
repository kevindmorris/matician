import NegativeBinomial from "./NegativeBinomial";

describe("Negative Binomial module", () => {
  test("should throw an error", () => {
    expect(() => new NegativeBinomial(2.5, 0.5)).toThrow("Invalid parameters");
    expect(() => new NegativeBinomial(0, 0.5)).toThrow("Invalid parameters");
    expect(() => new NegativeBinomial(-1, 0.5)).toThrow("Invalid parameters");
    expect(() => new NegativeBinomial(2, -0.5)).toThrow("Invalid parameters");
    expect(() => new NegativeBinomial(2, 1.5)).toThrow("Invalid parameters");
  });
  test("should calcluate the Negative Binomial distribution", () => {
    let nb = new NegativeBinomial(2, 0.4);
    expect(nb.mean).toBeCloseTo(3, 2);
    expect(nb.variance).toBeCloseTo(7.5, 2);
    expect(nb.stdev).toBeCloseTo(Math.sqrt(7.5), 2);

    expect(nb.pEqualTo(0)).toBeCloseTo(0.16, 2);
    expect(nb.pEqualTo(1)).toBeCloseTo(0.192, 2);
    expect(nb.pEqualTo(2)).toBeCloseTo(0.1728, 2);
    expect(nb.pEqualTo(0.5)).toBeNaN();
    expect(nb.pEqualTo(-1)).toBeNaN();

    nb = new NegativeBinomial(9, 0.3);
    expect(nb.mean).toBeCloseTo(21, 2);
    expect(nb.variance).toBeCloseTo(70, 2);
    expect(nb.stdev).toBeCloseTo(Math.sqrt(70), 2);

    expect(nb.pEqualTo(10)).toBeCloseTo(0.02433, 2);
    expect(nb.pEqualTo(11)).toBeCloseTo(0.02942, 2);
    expect(nb.pEqualTo(12)).toBeCloseTo(0.03432, 2);
    expect(nb.pEqualTo(0.5)).toBeNaN();
    expect(nb.pEqualTo(-1)).toBeNaN();
  });
});
