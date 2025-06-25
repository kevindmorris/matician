import reciprocal from "./reciprocal";

describe("reciprocal", () => {
  it("returns the reciprocal of positive numbers", () => {
    expect(reciprocal(2)).toBeCloseTo(0.5);
    expect(reciprocal(4)).toBeCloseTo(0.25);
  });

  it("returns the reciprocal of negative numbers", () => {
    expect(reciprocal(-4)).toBeCloseTo(-0.25);
  });

  it("throws an error for 0", () => {
    expect(() => reciprocal(0)).toThrow("Cannot compute reciprocal of zero");
  });
});
