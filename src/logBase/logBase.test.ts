import logBase from "./logBase";

describe("logBase", () => {
  it("returns correct result for common bases", () => {
    expect(logBase(8, 2)).toBeCloseTo(3);
    expect(logBase(100, 10)).toBeCloseTo(2);
    expect(logBase(27, 3)).toBeCloseTo(3);
  });

  it("returns 1 for logBase(x, x)", () => {
    expect(logBase(5, 5)).toBeCloseTo(1);
    expect(logBase(Math.E, Math.E)).toBeCloseTo(1);
  });

  it("throws if value is 0 or negative", () => {
    expect(() => logBase(0, 10)).toThrow(
      "Logarithm is undefined for zero or negative values"
    );
    expect(() => logBase(-5, 10)).toThrow();
  });

  it("throws if base is 0, 1, or negative", () => {
    expect(() => logBase(10, 0)).toThrow(
      "Base must be greater than 0 and not equal to 1"
    );
    expect(() => logBase(10, 1)).toThrow();
    expect(() => logBase(10, -2)).toThrow();
  });
});
