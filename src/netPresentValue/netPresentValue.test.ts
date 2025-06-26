import netPresentValue from "./netPresentValue";

describe("netPresentValue", () => {
  it("calculates correct NPV for positive cash flows", () => {
    const cashFlows = [100, 100, 100, 100, 100];
    expect(netPresentValue(0.1, cashFlows)).toBeCloseTo(416.99, 2);
  });

  it("calculates NPV for mixed cash flows", () => {
    const cashFlows = [-1000, 300, 400, 500];
    expect(netPresentValue(0.1, cashFlows)).toBeCloseTo(-21.04, 2);
  });

  it("returns 0 for empty array", () => {
    expect(netPresentValue(0.05, [])).toBe(0);
  });

  it("returns sum of cash flows if rate is 0", () => {
    const cashFlows = [100, 100, 100];
    expect(netPresentValue(0, cashFlows)).toBe(300);
  });
});
