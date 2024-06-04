import abs from "./abs";

describe("abs", () => {
  test("should find the absolute value", () => {
    expect(abs(-10)).toBeCloseTo(10, 8);
    expect(abs(-2.5)).toBeCloseTo(2.5, 8);
    expect(abs(0)).toBeCloseTo(0, 8);
    expect(abs(2.5)).toBeCloseTo(2.5, 8);
    expect(abs(10)).toBeCloseTo(10, 8);
    expect(abs(-Infinity)).toBeCloseTo(Infinity, 8);
    expect(abs(Infinity)).toBeCloseTo(Infinity, 8);
  });
});
