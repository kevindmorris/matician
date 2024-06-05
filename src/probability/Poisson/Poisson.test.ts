import Poisson from "./Poisson";

describe("Poisson", () => {
  test("should throw an error", () => {
    expect(() => new Poisson(-1)).toThrow("Invalid parameters");
    expect(() => new Poisson(0)).toThrow("Invalid parameters");
  });
  test("should calcluate the Poisson distribution", () => {
    let pois = new Poisson(2);
    expect(pois.mean).toBeCloseTo(2, 2);
    expect(pois.variance).toBeCloseTo(2, 2);
    expect(pois.stdev).toBeCloseTo(Math.sqrt(2), 2);

    expect(pois.pEqualTo(0)).toBeCloseTo(0.13534, 2);
    expect(pois.pEqualTo(1)).toBeCloseTo(0.27067, 2);
    expect(pois.pEqualTo(2)).toBeCloseTo(0.27067, 2);
    expect(pois.pEqualTo(1.5)).toBeNaN();
    expect(pois.pEqualTo(-1)).toBeNaN();

    pois = new Poisson(3.5);
    expect(pois.mean).toBeCloseTo(3.5, 2);
    expect(pois.variance).toBeCloseTo(3.5, 2);
    expect(pois.stdev).toBeCloseTo(Math.sqrt(3.5), 2);

    expect(pois.pEqualTo(0)).toBeCloseTo(0.0302, 2);
    expect(pois.pEqualTo(1)).toBeCloseTo(0.10569, 2);
    expect(pois.pEqualTo(2)).toBeCloseTo(0.18496, 2);
    expect(pois.pEqualTo(1.5)).toBeNaN();
    expect(pois.pEqualTo(-1)).toBeNaN();
  });
});
