import Parallelogram from "./Parallelogram";

describe("Parallelogram", () => {
  it("creates a valid parallelogram", () => {
    const p = new Parallelogram(5, 3, 4);
    expect(p.base).toBe(5);
    expect(p.height).toBe(3);
    expect(p.side).toBe(4);
  });

  it("throws on invalid dimensions", () => {
    expect(() => new Parallelogram(0, 3, 4)).toThrow();
    expect(() => new Parallelogram(5, -2, 4)).toThrow();
    expect(() => new Parallelogram(5, 3, 0)).toThrow();
  });

  it("computes area correctly", () => {
    const p = new Parallelogram(6, 4, 5);
    expect(p.area).toBe(24);
  });

  it("computes perimeter correctly", () => {
    const p = new Parallelogram(6, 4, 5);
    expect(p.perimeter).toBe(22);
  });
});
