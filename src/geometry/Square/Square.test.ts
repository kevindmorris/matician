import Square from "./Square";

describe("Square", () => {
  it("creates a valid square", () => {
    const s = new Square(4);
    expect(s.side).toBe(4);
  });

  it("throws on non-positive side", () => {
    expect(() => new Square(0)).toThrow();
    expect(() => new Square(-2)).toThrow();
  });

  it("computes perimeter correctly", () => {
    const s = new Square(3);
    expect(s.perimeter).toBe(12);
  });

  it("computes area correctly", () => {
    const s = new Square(5);
    expect(s.area).toBe(25);
  });

  it("scales the side length", () => {
    const s = new Square(2);
    s.scale(3);
    expect(s.side).toBe(6);
  });

  it("throws on invalid scale factor", () => {
    const s = new Square(3);
    expect(() => s.scale(0)).toThrow();
  });

  it("creates from area", () => {
    const s = Square.fromArea(49);
    expect(s.side).toBe(7);
  });

  it("throws on invalid area", () => {
    expect(() => Square.fromArea(0)).toThrow();
  });
});
