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
});
