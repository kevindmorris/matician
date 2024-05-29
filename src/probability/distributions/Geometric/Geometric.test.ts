import Geometric from "./Geometric";

describe("geometric module", () => {
  test("should throw an error", () => {
    expect(() => new Geometric(-1)).toThrow("Invalid parameters");
    expect(() => new Geometric(1.3)).toThrow("Invalid parameters");
  });
  test("should calcluate the geometric distribution", () => {
    let geo = new Geometric(0.5);
    expect(geo.mean).toBe(2);
    expect(geo.variance).toBe(2);
    expect(geo.stdev).toBe(Math.sqrt(2));

    expect(geo.pEqualTo(1)).toBeCloseTo(0.5, 2);
    expect(geo.pEqualTo(2)).toBeCloseTo(0.25, 2);
    expect(geo.pEqualTo(3)).toBeCloseTo(0.125, 2);
    expect(geo.pEqualTo(-1)).toBeNaN();
    expect(geo.pEqualTo(0)).toBeNaN();
    expect(geo.pEqualTo(0.5)).toBeNaN();
  });
});
