import binomial from "./binomial";

describe("binomial module", () => {
  test("should calcluate the binomial distribution", () => {
    expect(binomial(5, 1, 0.5)).toBeCloseTo(0.15625, 4);
    expect(binomial(5, 3, 0.5)).toBeCloseTo(0.3125, 4);
    expect(binomial(5, 5, 0.5)).toBeCloseTo(0.03125, 4);
    expect(binomial(10, 1, 0.25)).toBeCloseTo(0.18771, 4);
    expect(binomial(10, 3, 0.25)).toBeCloseTo(0.25028, 4);
    expect(binomial(10, 5, 0.25)).toBeCloseTo(0.0584, 4);
  });
  test("should return NaN", () => {
    expect(binomial(2.5, 1, 0.5)).toBeNaN();
    expect(binomial(-2, 1, 0.5)).toBeNaN();
    expect(binomial(2, -1, 0.5)).toBeNaN();
    expect(binomial(2, 0.5, 0.5)).toBeNaN();
    expect(binomial(2, 1, -0.1)).toBeNaN();
    expect(binomial(2, 1, 1.1)).toBeNaN();
  });
});
