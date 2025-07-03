import Sphere from "./Sphere";

describe("Sphere", () => {
  it("returns correct radius", () => {
    const s = new Sphere(5);
    expect(s.radius).toBe(5);
  });

  it("calculates surface area correctly", () => {
    const s = new Sphere(1);
    expect(s.surfaceArea).toBeCloseTo(4 * Math.PI, 5);
  });

  it("calculates volume correctly", () => {
    const s = new Sphere(1);
    expect(s.volume).toBeCloseTo((4 / 3) * Math.PI, 5);
  });

  it("throws error for non-positive radius", () => {
    expect(() => new Sphere(0)).toThrow();
    expect(() => new Sphere(-2)).toThrow();
  });
});
