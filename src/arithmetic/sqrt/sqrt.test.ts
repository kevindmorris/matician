import sqrt from "./sqrt";

describe("sqrt", () => {
  test("should be NaN for the square root of negative numbers", () => {
    expect(sqrt(-1)).toBeNaN();
  });
  test("should find the square root of a number", () => {
    expect(sqrt(0)).toBe(0);
    expect(sqrt(1)).toBe(1);
    expect(sqrt(4)).toBe(2);
    expect(sqrt(16)).toBe(4);
    expect(sqrt(25)).toBe(5);
    expect(sqrt(10)).toBeCloseTo(Math.pow(10, 1 / 2));
  });
});
