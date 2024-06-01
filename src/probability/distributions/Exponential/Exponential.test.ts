import Exponential from "./Exponential";

describe("Exponential", () => {
  test("should throw an error", () => {
    expect(() => new Exponential(-1)).toThrow("Invalid parameters");
    expect(() => new Exponential(0)).toThrow("Invalid parameters");
  });
  test("should calcluate the exponential distribution", () => {
    let exp = new Exponential(1);
    expect(exp.mean).toBe(1);
    expect(exp.variance).toBe(1);
    expect(exp.stdev).toBe(1);

    expect(exp.pLessThanOrEqualTo(0)).toBeCloseTo(0, 2);
    expect(exp.pLessThanOrEqualTo(0.5)).toBeCloseTo(0.39347, 2);
    expect(exp.pLessThanOrEqualTo(1)).toBeCloseTo(0.63212, 2);
    expect(exp.pLessThanOrEqualTo(2)).toBeCloseTo(0.86466, 2);
    expect(exp.pLessThanOrEqualTo(-1)).toBeNaN();

    exp = new Exponential(1.5);
    expect(exp.mean).toBe(2 / 3);
    expect(exp.variance).toBe(4 / 9);
    expect(exp.stdev).toBe(2 / 3);

    expect(exp.pLessThanOrEqualTo(0)).toBeCloseTo(0, 2);
    expect(exp.pLessThanOrEqualTo(0.5)).toBeCloseTo(0.52763, 2);
    expect(exp.pLessThanOrEqualTo(1)).toBeCloseTo(0.77687, 2);
    expect(exp.pLessThanOrEqualTo(2)).toBeCloseTo(0.95021, 2);
  });
});
