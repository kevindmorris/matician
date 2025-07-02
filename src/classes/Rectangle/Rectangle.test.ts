import Rectangle from "./Rectangle";

describe("Rectangle", () => {
  it("creates a valid rectangle", () => {
    const r = new Rectangle(4, 5);
    expect(r.width).toBe(4);
    expect(r.height).toBe(5);
  });

  it("throws on invalid dimensions", () => {
    expect(() => new Rectangle(0, 5)).toThrow();
    expect(() => new Rectangle(4, -1)).toThrow();
  });

  it("computes area correctly", () => {
    const r = new Rectangle(3, 7);
    expect(r.area).toBe(21);
  });

  it("computes perimeter correctly", () => {
    const r = new Rectangle(6, 4);
    expect(r.perimeter).toBe(20);
  });

  it("scales both dimensions", () => {
    const r = new Rectangle(2, 3);
    r.scale(2);
    expect(r.width).toBe(4);
    expect(r.height).toBe(6);
  });

  it("throws on invalid scale factor", () => {
    const r = new Rectangle(3, 3);
    expect(() => r.scale(0)).toThrow();
  });

  it("creates from area and aspect ratio", () => {
    const r = Rectangle.fromAreaAndAspect(100, 2); // width:height = 2:1
    expect(r.area).toBeCloseTo(100);
    expect(r.width / r.height).toBeCloseTo(2);
  });

  it("throws on invalid area or aspect ratio", () => {
    expect(() => Rectangle.fromAreaAndAspect(0, 1)).toThrow();
    expect(() => Rectangle.fromAreaAndAspect(10, 0)).toThrow();
  });
});
