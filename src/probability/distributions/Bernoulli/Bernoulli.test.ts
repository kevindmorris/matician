import Bernoulli from "./Bernoulli";

describe("Bernoulli", () => {
  test("should throw an error", () => {
    expect(() => new Bernoulli(-0.5)).toThrow("Invalid parameters");
    expect(() => new Bernoulli(1.5)).toThrow("Invalid parameters");
  });
  test("should calcluate the Bernoulli distribution", () => {
    let b = new Bernoulli(0.4);
    expect(b.mean).toBeCloseTo(0.4, 2);
    expect(b.variance).toBeCloseTo(0.24, 2);
    expect(b.stdev).toBeCloseTo(Math.sqrt(0.24), 2);

    expect(b.pEqualTo(0)).toBeCloseTo(0.6, 2);
    expect(b.pEqualTo(1)).toBeCloseTo(0.4, 2);
    expect(b.pEqualTo(-2)).toBeNaN();
    expect(b.pEqualTo(0.5)).toBeNaN();
    expect(b.pEqualTo(2)).toBeNaN();

    expect(b.pLessThanOrEqualTo(0)).toBeCloseTo(0.6, 2);
    expect(b.pLessThanOrEqualTo(1)).toBeCloseTo(1, 2);
    expect(b.pLessThanOrEqualTo(-2)).toBeNaN();
    expect(b.pLessThanOrEqualTo(0.5)).toBeNaN();
    expect(b.pLessThanOrEqualTo(2)).toBeNaN();

    expect(b.pGreaterThanOrEqualTo(0)).toBeCloseTo(1, 2);
    expect(b.pGreaterThanOrEqualTo(1)).toBeCloseTo(0.4, 2);
    expect(b.pGreaterThanOrEqualTo(-2)).toBeNaN();
    expect(b.pGreaterThanOrEqualTo(0.5)).toBeNaN();
    expect(b.pGreaterThanOrEqualTo(2)).toBeNaN();

    b = new Bernoulli(0.3);
    expect(b.mean).toBeCloseTo(0.3, 2);
    expect(b.variance).toBeCloseTo(0.21, 2);
    expect(b.stdev).toBeCloseTo(Math.sqrt(0.21), 2);

    expect(b.pEqualTo(0)).toBeCloseTo(0.7, 2);
    expect(b.pEqualTo(1)).toBeCloseTo(0.3, 2);
    expect(b.pEqualTo(-2)).toBeNaN();
    expect(b.pEqualTo(0.5)).toBeNaN();
    expect(b.pEqualTo(2)).toBeNaN();

    expect(b.pLessThanOrEqualTo(0)).toBeCloseTo(0.7, 2);
    expect(b.pLessThanOrEqualTo(1)).toBeCloseTo(1, 2);
    expect(b.pLessThanOrEqualTo(-2)).toBeNaN();
    expect(b.pLessThanOrEqualTo(0.5)).toBeNaN();
    expect(b.pLessThanOrEqualTo(2)).toBeNaN();

    expect(b.pGreaterThanOrEqualTo(0)).toBeCloseTo(1, 2);
    expect(b.pGreaterThanOrEqualTo(1)).toBeCloseTo(0.3, 2);
    expect(b.pGreaterThanOrEqualTo(-2)).toBeNaN();
    expect(b.pGreaterThanOrEqualTo(0.5)).toBeNaN();
    expect(b.pGreaterThanOrEqualTo(2)).toBeNaN();
  });
});
