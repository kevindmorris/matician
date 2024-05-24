import Exponential from "./Exponential";

describe("exponential module", () => {
  test("should calcluate the exponential distribution", () => {
    const exponential = new Exponential(1);
    expect(exponential.mean).toBe(1);
    expect(exponential.variance).toBe(1);
    expect(exponential.stdev).toBe(Math.sqrt(1));

    expect(exponential.pLessThan(0)).toBeCloseTo(0, 4);
    expect(exponential.pLessThan(0.5)).toBeCloseTo(0.39347, 4);
    expect(exponential.pLessThan(1)).toBeCloseTo(0.63212, 4);
    expect(exponential.pLessThan(2)).toBeCloseTo(0.86466, 4);
    expect(exponential.pLessThan(3)).toBeCloseTo(0.95021, 4);
    expect(exponential.pLessThan(4)).toBeCloseTo(0.98168, 4);

    expect(exponential.pGreaterThan(0)).toBeCloseTo(1, 4);
    expect(exponential.pGreaterThan(0.5)).toBeCloseTo(0.60653, 4);
    expect(exponential.pGreaterThan(1)).toBeCloseTo(0.36788, 4);
    expect(exponential.pGreaterThan(2)).toBeCloseTo(0.13534, 4);
    expect(exponential.pGreaterThan(3)).toBeCloseTo(0.04979, 4);
    expect(exponential.pGreaterThan(4)).toBeCloseTo(0.01832, 4);

    expect(exponential.pLessThan(-1)).toBeNaN();
  });
});
