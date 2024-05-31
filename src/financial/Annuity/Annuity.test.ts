import Annuity from "./Annuity";

describe("Annuity", () => {
  test("should throw an error", () => {
    expect(() => new Annuity(-100, 100, 0.1, 10)).toThrow("Invalid parameters");
    expect(() => new Annuity(0, -100, 0.1, 10)).toThrow("Invalid parameters");
    expect(() => new Annuity(0, 100, -0.1, 10)).toThrow("Invalid parameters");
    expect(() => new Annuity(0, 100, -0.1, 10.5)).toThrow("Invalid parameters");
    expect(() => new Annuity(0, 100, -0.1, -10)).toThrow("Invalid parameters");
  });
  test("should calculate the present value of an annuity immediate", () => {
    let annuity = new Annuity(0, 100, 0.1, 10);
    expect(annuity.presentValue()).toBeCloseTo(614.46, 2);

    annuity = new Annuity(0, 1000, 0.1, 10);
    expect(annuity.presentValue()).toBeCloseTo(6144.57, 2);

    annuity = new Annuity(0, 25, 0.02, 20);
    expect(annuity.presentValue()).toBeCloseTo(408.79, 2);

    annuity = new Annuity(0, 33, 0.03, 18);
    expect(annuity.presentValue()).toBeCloseTo(453.87, 2);

    annuity = new Annuity(1000, 25, 0.02, 20);
    expect(annuity.presentValue()).toBeCloseTo(1408.79, 2);

    annuity = new Annuity(1000, 33, 0.03, 18);
    expect(annuity.presentValue()).toBeCloseTo(1453.87, 2);
  });
  test("should calculate the present value of an annuity due", () => {
    let annuity = new Annuity(0, 100, 0.1, 10, { type: "due" });
    expect(annuity.presentValue()).toBeCloseTo(675.9, 2);

    annuity = new Annuity(0, 1000, 0.1, 10, { type: "due" });
    expect(annuity.presentValue()).toBeCloseTo(6759.02, 2);

    annuity = new Annuity(0, 25, 0.02, 20, { type: "due" });
    expect(annuity.presentValue()).toBeCloseTo(416.96, 2);

    annuity = new Annuity(0, 33, 0.03, 18, { type: "due" });
    expect(annuity.presentValue()).toBeCloseTo(467.48, 2);

    annuity = new Annuity(1000, 25, 0.02, 20, { type: "due" });
    expect(annuity.presentValue()).toBeCloseTo(1416.96, 2);

    annuity = new Annuity(1000, 33, 0.03, 18, { type: "due" });
    expect(annuity.presentValue()).toBeCloseTo(1467.48, 2);
  });
  test("should calculate the future value of an annuity immediate", () => {
    let annuity = new Annuity(0, 100, 0.1, 10);
    expect(annuity.futureValue()).toBeCloseTo(1593.74, 2);

    annuity = new Annuity(0, 1000, 0.1, 10);
    expect(annuity.futureValue()).toBeCloseTo(15937.42, 2);

    annuity = new Annuity(0, 25, 0.02, 20);
    expect(annuity.futureValue()).toBeCloseTo(607.43, 2);

    annuity = new Annuity(0, 33, 0.03, 18);
    expect(annuity.futureValue()).toBeCloseTo(772.68, 2);

    annuity = new Annuity(1000, 25, 0.02, 20);
    expect(annuity.futureValue()).toBeCloseTo(2093.38, 2);

    annuity = new Annuity(1000, 33, 0.03, 18);
    expect(annuity.futureValue()).toBeCloseTo(2475.11, 2);
  });
  test("should calculate the future value of an annuity due", () => {
    let annuity = new Annuity(0, 100, 0.1, 10, { type: "due" });
    expect(annuity.futureValue()).toBeCloseTo(1753.12, 2);

    annuity = new Annuity(0, 1000, 0.1, 10, { type: "due" });
    expect(annuity.futureValue()).toBeCloseTo(17531.17, 2);

    annuity = new Annuity(0, 25, 0.02, 20, { type: "due" });
    expect(annuity.futureValue()).toBeCloseTo(619.58, 2);

    annuity = new Annuity(0, 33, 0.03, 18, { type: "due" });
    expect(annuity.futureValue()).toBeCloseTo(795.86, 2);

    annuity = new Annuity(1000, 25, 0.02, 20, { type: "due" });
    expect(annuity.futureValue()).toBeCloseTo(2105.53, 2);

    annuity = new Annuity(1000, 33, 0.03, 18, { type: "due" });
    expect(annuity.futureValue()).toBeCloseTo(2498.29, 2);
  });
});
