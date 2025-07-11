import Triangle from "./Triangle";

describe("Triangle", () => {
  it("creates a valid triangle with base and height only", () => {
    const t = new Triangle(10, 5);
    expect(t.base).toBe(10);
    expect(t.height).toBe(5);
    expect(t.area).toBe(25);
  });

  it("creates a triangle with full side data", () => {
    const t = new Triangle(6, 4, [5, 6, 7]);
    expect(t.area).toBe(12);
    expect(t.perimeter).toBe(18);
  });

  it("throws when side data is incomplete for perimeter", () => {
    const t = new Triangle(6, 4);
    expect(() => t.perimeter).toThrow();
  });

  it("throws on invalid dimensions", () => {
    expect(() => new Triangle(0, 4)).toThrow();
    expect(() => new Triangle(6, -1)).toThrow();
    expect(() => new Triangle(6, 4, [3, -2, 5])).toThrow();
  });
});
