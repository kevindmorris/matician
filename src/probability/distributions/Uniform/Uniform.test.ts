import Uniform from "./Uniform";

describe("Uniform module", () => {
  test("should calcluate the uniform distribution", () => {
    const uniform = new Uniform(1, 11);
    expect(uniform.mean).toBe(6);
    expect(uniform.variance).toBe(25 / 3);
    expect(uniform.stdev).toBe(Math.sqrt(25 / 3));

    expect(uniform.pLessThan(0)).toBeCloseTo(0, 4);
    expect(uniform.pLessThan(1)).toBeCloseTo(0, 4);
    expect(uniform.pLessThan(2)).toBeCloseTo(0.1, 4);
    expect(uniform.pLessThan(3)).toBeCloseTo(0.2, 4);
    expect(uniform.pLessThan(4)).toBeCloseTo(0.3, 4);
  });
});
