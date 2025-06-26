import presentValue from "./presentValue";

describe("presentValue", () => {
  it("calculates present value correctly", () => {
    expect(presentValue(1000, 0.05, 2)).toBeCloseTo(907.03, 2);
  });

  it("returns future value if rate is 0", () => {
    expect(presentValue(1000, 0, 5)).toBe(1000);
  });

  it("returns 0 if future value is 0", () => {
    expect(presentValue(0, 0.05, 3)).toBe(0);
  });
});
