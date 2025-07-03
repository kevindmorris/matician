import Octahedron from "./Octahedron";

describe("Octahedron", () => {
  it("returns correct side length", () => {
    const o = new Octahedron(3);
    expect(o.side).toBe(3);
  });

  it("calculates surface area correctly", () => {
    const a = 2;
    const expected = 2 * Math.sqrt(3) * a ** 2;
    const o = new Octahedron(a);
    expect(o.surfaceArea).toBeCloseTo(expected, 5);
  });

  it("calculates volume correctly", () => {
    const a = 2;
    const expected = (Math.sqrt(2) / 3) * a ** 3;
    const o = new Octahedron(a);
    expect(o.volume).toBeCloseTo(expected, 5);
  });

  it("throws error for invalid side length", () => {
    expect(() => new Octahedron(0)).toThrow();
    expect(() => new Octahedron(-1)).toThrow();
  });
});
