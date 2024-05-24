import Poisson from "./Poisson";

describe("poisson module", () => {
  test("should calcluate the poisson distribution", () => {
    const poisson = new Poisson(1);
    expect(poisson.mean).toBe(1);
    expect(poisson.variance).toBe(1);
    expect(poisson.stdev).toBe(Math.sqrt(1));

    expect(poisson.pEqualTo(0)).toBeCloseTo(0.36788, 4);
    expect(poisson.pEqualTo(1)).toBeCloseTo(0.36788, 4);
    expect(poisson.pEqualTo(2)).toBeCloseTo(0.18394, 4);
    expect(poisson.pEqualTo(3)).toBeCloseTo(0.06131, 4);
    expect(poisson.pEqualTo(4)).toBeCloseTo(0.01533, 4);

    expect(poisson.pEqualTo(-1)).toBeNaN();
    expect(poisson.pEqualTo(0.5)).toBeNaN();
  });
});
