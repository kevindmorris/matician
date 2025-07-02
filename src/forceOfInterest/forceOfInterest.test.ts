import forceOfInterest from "./forceOfInterest";

describe("forceOfInterest", () => {
  it("correctly calculates δ for positive interest rates", () => {
    expect(forceOfInterest(0.05)).toBeCloseTo(Math.log(1.05), 6);
    expect(forceOfInterest(0.1)).toBeCloseTo(Math.log(1.1), 6);
    expect(forceOfInterest(0)).toBeCloseTo(0, 6);
  });

  it("throws an error for interest rates ≤ -1", () => {
    expect(() => forceOfInterest(-1)).toThrow(
      "Interest rate must be greater than -1."
    );
    expect(() => forceOfInterest(-1.5)).toThrow(
      "Interest rate must be greater than -1."
    );
  });

  it("handles small interest rates accurately", () => {
    expect(forceOfInterest(0.0001)).toBeCloseTo(Math.log(1.0001), 10);
  });
});
