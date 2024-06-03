import compoundInterest from "./compoundInterest";

describe("compoundInterest", () => {
  test("should be NaN", () => {
    let obj = compoundInterest(-1000, 0.05, 1, 2);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = compoundInterest(1000, -0.05, 1, 2);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = compoundInterest(1000, 1.05, 1, 2);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = compoundInterest(1000, 0.05, 1.5, 2.5);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = compoundInterest(1000, 0.05, -1, 2.5);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = compoundInterest(1000, 0.05, 1, 2.5);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = compoundInterest(1000, 0.05, 1, -2);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();
  });
  test("should calculate compound interest growth", () => {
    let obj = compoundInterest(1000, 0.05, 1, 2);
    expect(obj.A).toBeCloseTo(1102.5);
    expect(obj.I).toBeCloseTo(102.5);

    obj = compoundInterest(5000, 0.0125, 1, 5);
    expect(obj.A).toBeCloseTo(5320.41);
    expect(obj.I).toBeCloseTo(320.41);

    obj = compoundInterest(5000, 0.04, 12, 5);
    expect(obj.A).toBeCloseTo(6104.98);
    expect(obj.I).toBeCloseTo(1104.98);
  });
});
