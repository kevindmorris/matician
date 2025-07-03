import AnnuityDue from "./AnnuityDue";

describe("AnnuityDue", () => {
  test("should calculate present value with zero interest", () => {
    const annuity = new AnnuityDue(0, 5, 100, 500);
    expect(annuity.presentValue()).toBe(100 * 5 + 500);
  });

  test("should calculate future value with zero interest", () => {
    const annuity = new AnnuityDue(0, 5, 100, 500);
    expect(annuity.futureValue()).toBe(100 * 5 + 500);
  });

  test("should calculate present value with positive interest", () => {
    const i = 0.05;
    const n = 5;
    const PMT = 100;
    const P = 500;
    const annuity = new AnnuityDue(i, n, PMT, P);

    const v = 1 / (1 + i);
    const aImmediate = (1 - Math.pow(v, n)) / i;
    const aDue = aImmediate * (1 + i);
    const expectedPV = PMT * aDue + P;

    expect(annuity.presentValue()).toBeCloseTo(expectedPV, 2);
  });

  test("should calculate future value with positive interest", () => {
    const i = 0.05;
    const n = 5;
    const PMT = 100;
    const P = 500;
    const annuity = new AnnuityDue(i, n, PMT, P);

    const sImmediate = (Math.pow(1 + i, n) - 1) / i;
    const sDue = sImmediate * (1 + i);
    const expectedFV = PMT * sDue + P * Math.pow(1 + i, n);

    expect(annuity.futureValue()).toBeCloseTo(expectedFV, 2);
  });

  test("should generate correct future values schedule with interest", () => {
    const i = 0.1;
    const n = 3;
    const PMT = 100;
    const P = 1000;
    const annuity = new AnnuityDue(i, n, PMT, P);

    const schedule = annuity.futureValues();

    const expectedSchedule: number[] = [];
    for (let t = 0; t <= n; t++) {
      const val =
        PMT * (((Math.pow(1 + i, t) - 1) / i) * (1 + i)) +
        P * Math.pow(1 + i, t);
      expectedSchedule.push(val);
    }

    schedule.forEach((val, idx) => {
      expect(val).toBeCloseTo(expectedSchedule[idx], 2);
    });
  });

  test("should throw for invalid constructor parameters", () => {
    expect(() => new AnnuityDue(-0.01, 5, 100)).toThrow();
    expect(() => new AnnuityDue(0.05, 0, 100)).toThrow();
    expect(() => new AnnuityDue(0.05, 5, -100)).toThrow();
    expect(() => new AnnuityDue(0.05, 5, 100, -1000)).toThrow();
  });
});
