import nthPower from "./nthPower";

describe("nthPower", () => {
  it("calculates positive powers", () => {
    expect(nthPower(2, 3)).toBe(8);
    expect(nthPower(5, 1)).toBe(5);
    expect(nthPower(4, 0)).toBe(1);
  });

  it("handles negative exponents", () => {
    expect(nthPower(2, -1)).toBeCloseTo(0.5);
    expect(nthPower(10, -2)).toBeCloseTo(0.01);
  });

  it("handles fractional exponents", () => {
    expect(nthPower(9, 0.5)).toBe(3);
    expect(nthPower(27, 1 / 3)).toBeCloseTo(3);
  });

  it("returns NaN for negative base with fractional exponent", () => {
    expect(nthPower(-8, 1 / 3)).toBeNaN();
  });
});
