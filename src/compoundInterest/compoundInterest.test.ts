import compoundInterest from "./compoundInterest";

describe("compoundInterest", () => {
  it("calculates correct accumulated value", () => {
    expect(compoundInterest(1000, 0.05, 3)).toBeCloseTo(1157.625, 3);
    expect(compoundInterest(500, 0.1, 2)).toBeCloseTo(605, 2);
    expect(compoundInterest(100, 0.07, 1)).toBeCloseTo(107, 2);
  });

  it("returns principal when time is zero", () => {
    expect(compoundInterest(1000, 0.05, 0)).toBeCloseTo(1000, 2);
  });

  it("handles zero interest correctly", () => {
    expect(compoundInterest(1000, 0, 5)).toBeCloseTo(1000, 2);
  });
});
