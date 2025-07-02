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

  it("creates from area", () => {
    const s = Square.fromArea(49);
    expect(s.side).toBe(7);
  });

  it("throws on invalid area", () => {
    expect(() => Square.fromArea(0)).toThrow();
  });
});
