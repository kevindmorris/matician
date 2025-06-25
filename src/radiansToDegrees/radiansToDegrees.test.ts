import radiansToDegrees from "./radiansToDegrees";

describe("radiansToDegrees", () => {
  it("converts common angles correctly", () => {
    expect(radiansToDegrees(0)).toBeCloseTo(0);
    expect(radiansToDegrees(Math.PI / 2)).toBeCloseTo(90);
    expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
    expect(radiansToDegrees(2 * Math.PI)).toBeCloseTo(360);
  });

  it("handles negative radians", () => {
    expect(radiansToDegrees(-Math.PI / 2)).toBeCloseTo(-90);
  });

  it("handles fractional radians", () => {
    const rad = 1.2;
    expect(radiansToDegrees(rad)).toBeCloseTo((rad * 180) / Math.PI);
  });
});
