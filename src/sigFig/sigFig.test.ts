import sigFig from "./sigFig";

describe("sigFig", () => {
  it("rounds positive numbers correctly", () => {
    expect(sigFig(1234.567, 3)).toBe(1230);
    expect(sigFig(98765, 2)).toBe(99000);
  });

  it("rounds small decimals correctly", () => {
    expect(sigFig(0.012345, 2)).toBe(0.012);
    expect(sigFig(0.0006789, 2)).toBe(0.00068);
  });

  it("handles negative numbers", () => {
    expect(sigFig(-987.65, 2)).toBe(-990);
    expect(sigFig(-0.004321, 2)).toBe(-0.0043);
  });

  it("returns 0 if input is 0", () => {
    expect(sigFig(0, 3)).toBe(0);
  });

  it("throws for invalid input", () => {
    expect(() => sigFig(123, 0)).toThrow();
    expect(() => sigFig(Infinity, 2)).toThrow();
    expect(() => sigFig(NaN, 2)).toThrow();
  });
});
