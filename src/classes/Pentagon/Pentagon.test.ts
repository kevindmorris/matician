import Pentagon from "./Pentagon";

describe("Pentagon", () => {
  it("creates a valid pentagon", () => {
    const p = new Pentagon(6);
    expect(p.side).toBe(6);
  });

  it("throws on non-positive side length", () => {
    expect(() => new Pentagon(0)).toThrow();
    expect(() => new Pentagon(-2)).toThrow();
  });

  it("computes perimeter correctly", () => {
    const p = new Pentagon(4);
    expect(p.perimeter).toBe(20);
  });

  it("computes area correctly", () => {
    const p = new Pentagon(3);
    const expected = (5 * 9) / (4 * Math.tan(Math.PI / 5));
    expect(p.area).toBeCloseTo(expected);
  });
});
