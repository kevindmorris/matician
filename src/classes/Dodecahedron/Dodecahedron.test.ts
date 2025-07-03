import Dodecahedron from "./Dodecahedron";

describe("Dodecahedron", () => {
  it("returns correct side length", () => {
    const d = new Dodecahedron(2);
    expect(d.side).toBe(2);
  });

  it("calculates surface area correctly", () => {
    const a = 2;
    const expected = 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * a ** 2;
    const d = new Dodecahedron(a);
    expect(d.surfaceArea).toBeCloseTo(expected, 5);
  });

  it("calculates volume correctly", () => {
    const a = 2;
    const expected = ((15 + 7 * Math.sqrt(5)) / 4) * a ** 3;
    const d = new Dodecahedron(a);
    expect(d.volume).toBeCloseTo(expected, 5);
  });

  it("throws error for invalid side length", () => {
    expect(() => new Dodecahedron(0)).toThrow();
    expect(() => new Dodecahedron(-1)).toThrow();
  });
});
