import growingAnnuity from "./growingAnnuity";

describe("growingAnnuity", () => {
  it("calculates growing annuity correctly", () => {
    expect(growingAnnuity(1000, 0.06, 0.02, 5)).toBeCloseTo(4374.16, 2);
  });

  it("handles rate = growth case", () => {
    expect(growingAnnuity(1000, 0.05, 0.05, 5)).toBeCloseTo(4761.9, 2); // 1000 * 5 / (1 + 0.05)
  });

  it("returns 0 if payment is 0", () => {
    expect(growingAnnuity(0, 0.05, 0.02, 10)).toBe(0);
  });
});
