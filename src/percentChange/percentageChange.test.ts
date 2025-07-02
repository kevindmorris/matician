import percentageChange from "./percentageChange";

describe("percentageChange", () => {
  it("returns a positive decimal for an increase", () => {
    expect(percentageChange(100, 120)).toBeCloseTo(0.2);
  });

  it("returns a negative decimal for a decrease", () => {
    expect(percentageChange(200, 150)).toBeCloseTo(-0.25);
  });

  it("returns zero when initial and final are the same", () => {
    expect(percentageChange(50, 50)).toBe(0);
  });

  it("handles negative initial values", () => {
    expect(percentageChange(-100, -80)).toBeCloseTo(-0.2);
    expect(percentageChange(-100, -120)).toBeCloseTo(0.2);
  });

  it("throws an error when initial is zero", () => {
    expect(() => percentageChange(0, 100)).toThrow(
      "Initial value cannot be zero."
    );
  });
});
