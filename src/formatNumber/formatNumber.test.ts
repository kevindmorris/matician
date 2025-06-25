import formatNumber from "./formatNumber";

describe("formatNumber", () => {
  it("formats numbers with specified decimal places", () => {
    expect(formatNumber(1.2345, 2)).toBe("1.23");
    expect(formatNumber(1.236, 2)).toBe("1.24");
    expect(formatNumber(1.2, 3)).toBe("1.200");
  });

  it("formats whole numbers with trailing zeros", () => {
    expect(formatNumber(1, 2)).toBe("1.00");
    expect(formatNumber(0, 3)).toBe("0.000");
  });

  it("rounds up and down correctly", () => {
    expect(formatNumber(2.675, 2)).toBe("2.68"); // Classic floating-point test
    expect(formatNumber(2.674, 2)).toBe("2.67");
  });

  it("handles edge cases", () => {
    expect(formatNumber(0.1 + 0.2, 2)).toBe("0.30"); // 0.30000000000000004
    expect(formatNumber(-1.555, 2)).toBe("-1.56");
  });
});
