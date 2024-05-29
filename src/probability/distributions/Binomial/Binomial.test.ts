import Binomial from "./Binomial";

describe("Binomial module", () => {
  test("should throw an error", () => {
    expect(() => new Binomial(10.5, 0.5)).toThrow("Invalid parameters");
    expect(() => new Binomial(0, 0.5)).toThrow("Invalid parameters");
    expect(() => new Binomial(-10, 0.5)).toThrow("Invalid parameters");
    expect(() => new Binomial(10, -0.5)).toThrow("Invalid parameters");
    expect(() => new Binomial(10, -1.5)).toThrow("Invalid parameters");
  });
  test("should calcluate the Binomial distribution", () => {
    let bin = new Binomial(10, 0.4);
    expect(bin.mean).toBeCloseTo(4, 2);
    expect(bin.variance).toBeCloseTo(2.4, 2);
    expect(bin.stdev).toBeCloseTo(Math.sqrt(2.4), 2);

    expect(bin.pEqualTo(0)).toBeCloseTo(0.00605, 2);
    expect(bin.pEqualTo(1)).toBeCloseTo(0.04031, 2);
    expect(bin.pEqualTo(2)).toBeCloseTo(0.12093, 2);
    expect(bin.pEqualTo(1.5)).toBeNaN();
    expect(bin.pEqualTo(-1)).toBeNaN();
    expect(bin.pEqualTo(20)).toBeNaN();

    bin = new Binomial(9, 0.3);
    expect(bin.mean).toBeCloseTo(2.7, 2);
    expect(bin.variance).toBeCloseTo(1.89, 2);
    expect(bin.stdev).toBeCloseTo(1.375, 2);

    expect(bin.pEqualTo(0)).toBeCloseTo(0.04035, 2);
    expect(bin.pEqualTo(1)).toBeCloseTo(0.15565, 2);
    expect(bin.pEqualTo(2)).toBeCloseTo(0.26683, 2);
    expect(bin.pEqualTo(1.5)).toBeNaN();
    expect(bin.pEqualTo(-1)).toBeNaN();
    expect(bin.pEqualTo(20)).toBeNaN();
  });
});
