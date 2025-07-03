import AnnuityImmediate from "./AnnuityImmediate";

describe("AnnuityImmediate", () => {
  it("computes present and future value with non-zero interest", () => {
    const ann = new AnnuityImmediate(0.05, 10, 100);
    expect(ann.presentValue()).toBeCloseTo(772.17, 2);
    expect(ann.futureValue()).toBeCloseTo(1257.79, 2);
  });

  it("computes present and future value with zero interest", () => {
    const ann = new AnnuityImmediate(0, 10, 100);
    expect(ann.presentValue()).toBeCloseTo(1000);
    expect(ann.futureValue()).toBeCloseTo(1000);
  });

  it("computes correct future value schedule with interest", () => {
    const annuity = new AnnuityImmediate(0.05, 3, 100);
    const schedule = annuity.futureValues();

    expect(schedule.length).toBe(4);
    expect(schedule[0]).toBeCloseTo(0, 2);
    expect(schedule[1]).toBeCloseTo(100, 2);
    expect(schedule[2]).toBeCloseTo(205, 2);
    expect(schedule[3]).toBeCloseTo(315.25, 2);
  });

  it("computes correct future value schedule with zero interest", () => {
    const annuity = new AnnuityImmediate(0, 3, 100);
    const schedule = annuity.futureValues();

    expect(schedule).toEqual([0, 100, 200, 300]);
  });

  it("has correct getters", () => {
    const ann = new AnnuityImmediate(0.04, 20, 500);
    expect(ann.i).toBe(0.04);
    expect(ann.n).toBe(20);
    expect(ann.P).toBe(500);
  });

  it("throws for negative interest rate", () => {
    expect(() => new AnnuityImmediate(-0.01, 10)).toThrow();
  });

  it("throws for invalid periods", () => {
    expect(() => new AnnuityImmediate(0.05, 0)).toThrow();
    expect(() => new AnnuityImmediate(0.05, -5)).toThrow();
    expect(() => new AnnuityImmediate(0.05, 3.2)).toThrow();
  });

  it("throws for negative payment", () => {
    expect(() => new AnnuityImmediate(0.05, 10, -100)).toThrow();
  });
});
