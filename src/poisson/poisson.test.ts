import poisson from "./poisson";

describe("poisson module", () => {
  test("should calcluate the poisson distribution", () => {
    expect(poisson(0.5, 0)).toBeCloseTo(0.60653, 4);
    expect(poisson(0.5, 1)).toBeCloseTo(0.30327, 4);
    expect(poisson(0.5, 2)).toBeCloseTo(0.07582, 4);
    expect(poisson(0.5, 3)).toBeCloseTo(0.01264, 4);
    expect(poisson(0.5, 4)).toBeCloseTo(0.00158, 4);
  });
  test("should return NaN", () => {
    expect(poisson(-0.5, 1)).toBeNaN();
    expect(poisson(0.5, -1)).toBeNaN();
    expect(poisson(0.5, 1.5)).toBeNaN();
  });
});
