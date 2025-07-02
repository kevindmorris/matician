import discountRate from "./discountRate";

describe("discountRate", () => {
  it("calculates discount rate correctly for common values", () => {
    expect(discountRate(0.05)).toBeCloseTo(0.047619, 6);
    expect(discountRate(0.1)).toBeCloseTo(0.090909, 6);
    expect(discountRate(0)).toBeCloseTo(0, 6);
  });

  it("handles small interest rates accurately", () => {
    expect(discountRate(0.0001)).toBeCloseTo(0.00009999, 8);
  });

  it("throws error for invalid interest rates ≤ -1", () => {
    expect(() => discountRate(-1)).toThrow(
      "Interest rate must be greater than -1."
    );
    expect(() => discountRate(-2)).toThrow();
  });
});
