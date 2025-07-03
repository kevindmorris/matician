import AnnuityImmediate from "./AnnuityImmediate";

describe("AnnuityImmediate", () => {
  test("should calculate present value with zero interest", () => {
    const annuity = new AnnuityImmediate(0, 5, 100, 500); // i=0, n=5, PMT=100, P=500
    expect(annuity.presentValue()).toBe(100 * 5 + 500);
  });

  test("should calculate future value with zero interest", () => {
    const annuity = new AnnuityImmediate(0, 5, 100, 500);
    expect(annuity.futureValue()).toBe(100 * 5 + 500);
  });

  test("should calculate present value with positive interest", () => {
    const annuity = new AnnuityImmediate(0.05, 5, 100, 500);
    const v = 1 / (1 + 0.05);
    const aImmediate = (1 - Math.pow(v, 5)) / 0.05;
    const expectedPV = 100 * aImmediate + 500;
    expect(annuity.presentValue()).toBeCloseTo(expectedPV, 2);
  });

  test("should calculate future value with positive interest", () => {
    const annuity = new AnnuityImmediate(0.05, 5, 100, 500);
    const sImmediate = (Math.pow(1.05, 5) - 1) / 0.05;
    const expectedFV = 100 * sImmediate + 500 * Math.pow(1.05, 5);
    expect(annuity.futureValue()).toBeCloseTo(expectedFV, 2);
  });

  test("should generate correct future values schedule with interest", () => {
    const annuity = new AnnuityImmediate(0.1, 3, 100, 1000); // i = 10%
    const schedule = annuity.futureValues();

    const expectedSchedule = [
      1000, // t=0
      100 * ((Math.pow(1.1, 1) - 1) / 0.1) + 1000 * Math.pow(1.1, 1), // t=1
      100 * ((Math.pow(1.1, 2) - 1) / 0.1) + 1000 * Math.pow(1.1, 2), // t=2
      100 * ((Math.pow(1.1, 3) - 1) / 0.1) + 1000 * Math.pow(1.1, 3) // t=3
    ];

    schedule.forEach((val, idx) => {
      expect(val).toBeCloseTo(expectedSchedule[idx], 2);
    });
  });

  test("should throw for invalid constructor parameters", () => {
    expect(() => new AnnuityImmediate(-0.01, 5, 100)).toThrow();
    expect(() => new AnnuityImmediate(0.05, 0, 100)).toThrow();
    expect(() => new AnnuityImmediate(0.05, 5, -100)).toThrow();
    expect(() => new AnnuityImmediate(0.05, 5, 100, -1000)).toThrow();
  });
});
