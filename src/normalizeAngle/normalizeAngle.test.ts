import normalizeAngle from "./normalizeAngle";

describe("normalizeAngle", () => {
  it("returns the same value for angles in [0, 360)", () => {
    expect(normalizeAngle(0)).toBe(0);
    expect(normalizeAngle(45)).toBe(45);
    expect(normalizeAngle(359)).toBe(359);
  });

  it("wraps values over 360 degrees", () => {
    expect(normalizeAngle(360)).toBe(0);
    expect(normalizeAngle(450)).toBe(90);
    expect(normalizeAngle(725)).toBe(5);
  });

  it("handles negative angles", () => {
    expect(normalizeAngle(-90)).toBe(270);
    expect(normalizeAngle(-360)).toBe(0);
    expect(normalizeAngle(-450)).toBe(270);
  });

  it("handles large positive and negative values", () => {
    expect(normalizeAngle(1080)).toBe(0);
    expect(normalizeAngle(-1080)).toBe(0);
  });
});
