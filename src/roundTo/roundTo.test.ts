import roundTo from "./roundTo";

describe("roundTo", () => {
  it("rounds to 0 decimal places", () => {
    expect(roundTo(4.6, 0)).toBe(5);
    expect(roundTo(4.4, 0)).toBe(4);
  });

  it("rounds to 1 decimal place", () => {
    expect(roundTo(3.14, 1)).toBe(3.1);
    expect(roundTo(2.15, 1)).toBe(2.2);
  });

  it("rounds to 2 decimal places", () => {
    expect(roundTo(1.005, 2)).toBe(1.01);
    expect(roundTo(1.004, 2)).toBe(1.0);
  });

  it("handles negative numbers", () => {
    expect(roundTo(-2.3456, 2)).toBe(-2.35);
  });

  it("handles rounding to more digits than present", () => {
    expect(roundTo(1.2, 4)).toBe(1.2);
  });
});
