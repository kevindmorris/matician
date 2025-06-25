import tanDegrees from "./tanDegrees";

describe("tanDegrees", () => {
  it("returns 0 for 0 degrees", () => {
    expect(tanDegrees(0)).toBeCloseTo(0);
  });

  it("returns 1 for 45 degrees", () => {
    expect(tanDegrees(45)).toBeCloseTo(1);
  });

  it("returns ~0 for 180 degrees", () => {
    expect(tanDegrees(180)).toBeCloseTo(0);
  });

  it("returns negative for angles in 2nd quadrant", () => {
    expect(tanDegrees(135)).toBeCloseTo(-1);
  });

  it("handles negative angles", () => {
    expect(tanDegrees(-45)).toBeCloseTo(-1);
  });

  it("handles angles > 360", () => {
    expect(tanDegrees(405)).toBeCloseTo(1); // 405° = 45°
  });

  it("returns large values near asymptotes (e.g., 90°)", () => {
    const val = tanDegrees(90);
    expect(Math.abs(val)).toBeGreaterThan(1e10); // Considered asymptotically large
  });
});
