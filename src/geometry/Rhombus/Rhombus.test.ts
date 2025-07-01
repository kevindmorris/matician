import { Rhombus } from "./Rhombus";

describe("Rhombus", () => {
  it("creates a rhombus with height", () => {
    const r = new Rhombus(5, 3);
    expect(r.side).toBe(5);
    expect(r.perimeter).toBe(20);
    expect(r.area).toBe(15);
  });

  it("creates a rhombus with diagonals", () => {
    const r = new Rhombus(4, undefined, [6, 8]);
    expect(r.perimeter).toBe(16);
    expect(r.area).toBe(24);
  });

  it("throws if side is non-positive", () => {
    expect(() => new Rhombus(0, 2)).toThrow();
  });

  it("throws if height or diagonals are non-positive", () => {
    expect(() => new Rhombus(5, -1)).toThrow();
    expect(() => new Rhombus(5, undefined, [4, 0])).toThrow();
  });

  it("throws on area if no height or diagonals are provided", () => {
    const r = new Rhombus(5);
    expect(() => r.area).toThrow();
  });

  it("scales all dimensions correctly", () => {
    const r = new Rhombus(3, 4, [6, 8]);
    r.scale(2);
    expect(r.side).toBe(6);
    expect(r.area).toBeCloseTo(3 * 2 * 4 * 2);
    expect(r.perimeter).toBe(24);
  });

  it("throws on invalid scale factor", () => {
    const r = new Rhombus(3, 4);
    expect(() => r.scale(0)).toThrow();
  });
});
