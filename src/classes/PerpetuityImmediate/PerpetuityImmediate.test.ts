import PerpetuityImmediate from "./PerpetuityImmediate";

describe("PerpetuityImmediate", () => {
  it("calculates present value correctly", () => {
    const p = new PerpetuityImmediate(100, 0.05);
    expect(p.presentValue()).toBeCloseTo(2000);
  });

  it("throws on non-positive payment or interest rate", () => {
    expect(() => new PerpetuityImmediate(0, 0.05)).toThrow();
    expect(() => new PerpetuityImmediate(100, 0)).toThrow();
  });
});
