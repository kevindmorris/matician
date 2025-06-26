import futureValue from "./futureValue";

describe("futureValue", () => {
  it("calculates future value correctly", () => {
    expect(futureValue(1000, 0.05, 2)).toBeCloseTo(1102.5, 2);
  });

  it("returns present value if rate is 0", () => {
    expect(futureValue(1000, 0, 5)).toBe(1000);
  });

  it("returns 0 if present value is 0", () => {
    expect(futureValue(0, 0.07, 10)).toBe(0);
  });
});
