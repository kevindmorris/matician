import Ellipse from "./Ellipse";

describe("Ellipse", () => {
  it("creates a valid ellipse", () => {
    const e = new Ellipse(5, 3);
    expect(e.a).toBe(5);
    expect(e.b).toBe(3);
  });

  it("throws on invalid axis values", () => {
    expect(() => new Ellipse(0, 3)).toThrow();
    expect(() => new Ellipse(5, -1)).toThrow();
  });

  it("computes area correctly", () => {
    const e = new Ellipse(4, 2);
    expect(e.area).toBeCloseTo(Math.PI * 4 * 2);
  });

  it("computes circumference approximately", () => {
    const e = new Ellipse(7, 3);
    const approx =
      Math.PI * (3 * (7 + 3) - Math.sqrt((3 * 7 + 3) * (7 + 3 * 3)));
    expect(e.circumference).toBeCloseTo(approx);
  });
});
