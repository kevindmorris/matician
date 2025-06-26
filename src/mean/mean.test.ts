import mean from "./mean";

describe("mean", () => {
  it("computes the mean of positive numbers", () => {
    expect(mean([2, 4, 6])).toBe(4);
  });

  it("computes the mean of negative numbers", () => {
    expect(mean([-2, -4, -6])).toBe(-4);
  });

  it("computes the mean of mixed numbers", () => {
    expect(mean([-1, 0, 1])).toBe(0);
  });

  it("computes the mean of decimal numbers", () => {
    expect(mean([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
  });

  it("throws an error for an empty array", () => {
    expect(() => mean([])).toThrow("Cannot compute mean of empty array");
  });

  it("computes mean for a single-element array", () => {
    expect(mean([42])).toBe(42);
  });
});
