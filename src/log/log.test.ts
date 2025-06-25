import log from "./log";

describe("log", () => {
  it("returns 0 for log(1)", () => {
    expect(log(1)).toBeCloseTo(0);
  });

  it("returns 1 for log(Math.E)", () => {
    expect(log(Math.E)).toBeCloseTo(1);
  });

  it("computes log for positive values", () => {
    expect(log(10)).toBeCloseTo(2.302, 2);
  });

  it("throws for 0", () => {
    expect(() => log(0)).toThrow(
      "Logarithm is undefined for zero or negative values"
    );
  });

  it("throws for negative numbers", () => {
    expect(() => log(-5)).toThrow(
      "Logarithm is undefined for zero or negative values"
    );
  });
});
