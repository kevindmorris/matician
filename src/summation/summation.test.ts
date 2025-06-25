import summation from "./summation";

describe("summation", () => {
  it("sums positive numbers", () => {
    expect(summation([1, 2, 3])).toBe(6);
  });

  it("sums negative numbers", () => {
    expect(summation([-1, -2, -3])).toBe(-6);
  });

  it("sums a mix of positive and negative numbers", () => {
    expect(summation([-1, 0, 1])).toBe(0);
  });

  it("returns 0 for an empty array", () => {
    expect(summation([])).toBe(0);
  });

  it("sums floating point numbers", () => {
    expect(summation([1.1, 2.2, 3.3])).toBeCloseTo(6.6);
  });

  it("returns the value itself for a single-element array", () => {
    expect(summation([42])).toBe(42);
  });
});
