import simpleInterest from "./simpleInterest";

describe("simpleInterest", () => {
  it("calculates correct accumulated value", () => {
    expect(simpleInterest(1000, 0.05, 3)).toBeCloseTo(1150, 2);
    expect(simpleInterest(500, 0.1, 2)).toBeCloseTo(600, 2);
    expect(simpleInterest(100, 0.07, 1)).toBeCloseTo(107, 2);
  });

  it("returns principal when time is zero", () => {
    expect(simpleInterest(1000, 0.05, 0)).toBeCloseTo(1000, 2);
  });

  it("handles zero interest correctly", () => {
    expect(simpleInterest(1000, 0, 5)).toBeCloseTo(1000, 2);
  });
});
