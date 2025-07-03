import Cone from "./Cone";

describe("Cone", () => {
  it("returns correct dimensions", () => {
    const c = new Cone(3, 4);
    expect(c.radius).toBe(3);
    expect(c.height).toBe(4);
  });

  it("calculates slant height correctly", () => {
    const c = new Cone(3, 4);
    expect(c.slantHeight).toBeCloseTo(5, 6); // 3-4-5 triangle
  });

  it("calculates surface area correctly", () => {
    const c = new Cone(3, 4);
    const l = 5;
    const expected = Math.PI * 3 * (3 + l);
    expect(c.surfaceArea).toBeCloseTo(expected, 5);
  });

  it("calculates volume correctly", () => {
    const c = new Cone(3, 4);
    const expected = (1 / 3) * Math.PI * 3 * 3 * 4;
    expect(c.volume).toBeCloseTo(expected, 5);
  });

  it("throws error for invalid dimensions", () => {
    expect(() => new Cone(0, 2)).toThrow();
    expect(() => new Cone(2, 0)).toThrow();
    expect(() => new Cone(-1, 1)).toThrow();
  });
});
