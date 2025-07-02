import PerpetuityDue from "./PerpetuityDue";

describe("PerpetuityDue", () => {
  it("calculates present value correctly", () => {
    const p = new PerpetuityDue(100, 0.05);
    expect(p.presentValue()).toBeCloseTo(2100); // 100 * 1.05 / 0.05
  });

  it("throws on invalid payment or interest rate", () => {
    expect(() => new PerpetuityDue(0, 0.05)).toThrow();
    expect(() => new PerpetuityDue(100, 0)).toThrow();
  });
});
