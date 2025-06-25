import log10 from "./log10";

describe("log10", () => {
  it("returns 1 for log10(10)", () => {
    expect(log10(10)).toBeCloseTo(1);
  });

  it("returns 2 for log10(100)", () => {
    expect(log10(100)).toBeCloseTo(2);
  });

  it("returns 0 for log10(1)", () => {
    expect(log10(1)).toBeCloseTo(0);
  });

  it("throws for zero", () => {
    expect(() => log10(0)).toThrow(
      "Logarithm is undefined for zero or negative values"
    );
  });

  it("throws for negative numbers", () => {
    expect(() => log10(-10)).toThrow(
      "Logarithm is undefined for zero or negative values"
    );
  });
});
