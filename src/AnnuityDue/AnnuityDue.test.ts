import AnnuityDue from "./AnnuityDue";

describe("AnnuityDue", () => {
  it("computes present and future value with non-zero interest", () => {
    const ann = new AnnuityDue(0.05, 10, 100);
    expect(ann.presentValue()).toBeCloseTo(810.78, 2);
    expect(ann.futureValue()).toBeCloseTo(1320.68, 2);
  });

  it("computes present and future value with zero interest", () => {
    const ann = new AnnuityDue(0, 10, 100);
    expect(ann.presentValue()).toBeCloseTo(1000);
    expect(ann.futureValue()).toBeCloseTo(1000);
  });

  it("has correct getters", () => {
    const ann = new AnnuityDue(0.04, 20, 500);
    expect(ann.i).toBe(0.04);
    expect(ann.n).toBe(20);
    expect(ann.P).toBe(500);
  });

  it("throws for invalid interest rate", () => {
    expect(() => new AnnuityDue(-0.01, 10, 100)).toThrow();
  });

  it("throws for invalid number of periods", () => {
    expect(() => new AnnuityDue(0.05, 0, 100)).toThrow();
    expect(() => new AnnuityDue(0.05, -3, 100)).toThrow();
    expect(() => new AnnuityDue(0.05, 2.5, 100)).toThrow();
  });

  it("throws for negative payment amount", () => {
    expect(() => new AnnuityDue(0.05, 10, -100)).toThrow();
  });
});
