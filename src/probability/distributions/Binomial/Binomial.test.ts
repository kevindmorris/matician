import Binomial from "./Binomial";

describe("binomial module", () => {
  test("should calcluate the binomial distribution", () => {
    const binomial = new Binomial(10, 0.5);
    expect(binomial.mean).toBe(5);
    expect(binomial.variance).toBe(2.5);
    expect(binomial.stdev).toBe(Math.sqrt(2.5));

    expect(binomial.pEqualTo(0)).toBeCloseTo(0.00098, 4);
    expect(binomial.pEqualTo(1)).toBeCloseTo(0.00977, 4);
    expect(binomial.pEqualTo(2)).toBeCloseTo(0.04395, 4);
    expect(binomial.pEqualTo(3)).toBeCloseTo(0.11719, 4);
    expect(binomial.pEqualTo(4)).toBeCloseTo(0.20508, 4);

    expect(binomial.pEqualTo(-1)).toBeNaN();
    expect(binomial.pEqualTo(20)).toBeNaN();
    expect(binomial.pEqualTo(0.5)).toBeNaN();
  });
});
