import cosDegrees from "./cosDegrees";

describe("cosDegrees", () => {
  it("returns 1 for 0 degrees", () => {
    expect(cosDegrees(0)).toBeCloseTo(1);
  });

  it("returns 0 for 90 degrees", () => {
    expect(cosDegrees(90)).toBeCloseTo(0);
  });

  it("returns -1 for 180 degrees", () => {
    expect(cosDegrees(180)).toBeCloseTo(-1);
  });

  it("returns 0 for 270 degrees", () => {
    expect(cosDegrees(270)).toBeCloseTo(0);
  });

  it("returns 1 for 360 degrees (full rotation)", () => {
    expect(cosDegrees(360)).toBeCloseTo(1);
  });

  it("handles negative angles correctly", () => {
    expect(cosDegrees(-90)).toBeCloseTo(0);
    expect(cosDegrees(-180)).toBeCloseTo(-1);
  });

  it("handles angles greater than 360 degrees", () => {
    expect(cosDegrees(450)).toBeCloseTo(0); // Equivalent to 90°
  });

  it("returns expected values for common angles", () => {
    expect(cosDegrees(60)).toBeCloseTo(0.5);
    expect(cosDegrees(120)).toBeCloseTo(-0.5);
    expect(cosDegrees(45)).toBeCloseTo(Math.SQRT1_2); // √2/2 ≈ 0.707
  });
});
