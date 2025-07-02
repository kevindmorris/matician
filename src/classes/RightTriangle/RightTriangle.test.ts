import RightTriangle from "./RightTriangle";

describe("RightTriangle", () => {
  it("creates a valid triangle", () => {
    const t = new RightTriangle(3, 4);
    expect(t.base).toBe(3);
    expect(t.height).toBe(4);
  });

  it("throws on invalid dimensions", () => {
    expect(() => new RightTriangle(0, 4)).toThrow();
    expect(() => new RightTriangle(3, -1)).toThrow();
  });

  it("calculates hypotenuse correctly", () => {
    const t = new RightTriangle(5, 12);
    expect(t.hypotenuse).toBe(13);
  });

  it("computes area correctly", () => {
    const t = new RightTriangle(6, 8);
    expect(t.area).toBe(24);
  });

  it("computes perimeter correctly", () => {
    const t = new RightTriangle(3, 4);
    expect(t.perimeter).toBeCloseTo(3 + 4 + 5);
  });
});
