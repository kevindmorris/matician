import divide from "./divide";

describe("divide", () => {
  it("divides positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("divides negative numbers", () => {
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(10, -2)).toBe(-5);
    expect(divide(-10, -2)).toBe(5);
  });

  it("returns decimal results when needed", () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  it("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero");
  });

  it("returns 0 when 0 is divided by any non-zero number", () => {
    expect(divide(0, 5)).toBe(0);
  });
});
