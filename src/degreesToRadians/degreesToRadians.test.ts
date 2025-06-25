import degreesToRadians from "./degreesToRadians";

describe("degreesToRadians", () => {
  it("converts common angles correctly", () => {
    expect(degreesToRadians(0)).toBeCloseTo(0);
    expect(degreesToRadians(90)).toBeCloseTo(Math.PI / 2);
    expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
    expect(degreesToRadians(360)).toBeCloseTo(2 * Math.PI);
  });

  it("handles negative angles", () => {
    expect(degreesToRadians(-90)).toBeCloseTo(-Math.PI / 2);
  });

  it("handles fractional degrees", () => {
    expect(degreesToRadians(45.5)).toBeCloseTo((45.5 * Math.PI) / 180);
  });
});
