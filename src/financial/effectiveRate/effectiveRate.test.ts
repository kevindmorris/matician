import effectiveRate from "./effectiveRate";

describe("effectiveRate module", () => {
  test("should calculate the effective interest rate", () => {
    let r = effectiveRate(0.035, 2);
    expect(r).toBeCloseTo(0.035306, 2);

    r = effectiveRate(0.035, 4);
    expect(r).toBeCloseTo(0.035462, 2);

    r = effectiveRate(0.1, 12);
    expect(r).toBeCloseTo(0.104713, 2);

    r = effectiveRate(0.1, 365);
    expect(r).toBeCloseTo(0.10156, 2);

    r = effectiveRate(0.04, Infinity);
    expect(r).toBeCloseTo(0.041, 2);

    r = effectiveRate(0.1, -2);
    expect(r).toBeNaN();
  });
});