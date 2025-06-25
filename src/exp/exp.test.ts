import exp from "./exp";

describe("exp", () => {
  it("returns e^0 = 1", () => {
    expect(exp(0)).toBeCloseTo(1);
  });

  it("returns e^1 ≈ 2.718", () => {
    expect(exp(1)).toBeCloseTo(Math.E);
  });

  it("returns e^2 ≈ 7.389", () => {
    expect(exp(2)).toBeCloseTo(7.389, 3);
  });

  it("handles negative exponents", () => {
    expect(exp(-1)).toBeCloseTo(1 / Math.E);
  });
});
