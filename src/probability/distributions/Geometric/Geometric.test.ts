import Geometric from "./Geometric";

describe("geometric module", () => {
  test("should calcluate the geometric distribution", () => {
    const geometric = new Geometric(0.5);
    expect(geometric.mean).toBe(2);
    expect(geometric.variance).toBe(8);
    expect(geometric.stdev).toBe(Math.sqrt(8));

    expect(geometric.pEqualTo(1)).toBeCloseTo(0.5, 4);
    expect(geometric.pEqualTo(2)).toBeCloseTo(0.25, 4);
    expect(geometric.pEqualTo(3)).toBeCloseTo(0.125, 4);
    expect(geometric.pEqualTo(4)).toBeCloseTo(0.0625, 4);

    expect(geometric.pEqualTo(-1)).toBeNaN();
    expect(geometric.pEqualTo(0)).toBeNaN();
    expect(geometric.pEqualTo(0.5)).toBeNaN();
  });
});
