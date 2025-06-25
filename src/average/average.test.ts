import average from "./average";

describe("average", () => {
  it("computes the average of positive numbers", () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  it("computes the average of negative numbers", () => {
    expect(average([-2, -4, -6])).toBe(-4);
  });

  it("computes the average of mixed numbers", () => {
    expect(average([-1, 0, 1])).toBe(0);
  });

  it("computes the average of decimal numbers", () => {
    expect(average([1.5, 2.5, 3.5])).toBeCloseTo(2.5);
  });

  it("throws an error for an empty array", () => {
    expect(() => average([])).toThrow("Cannot compute average of empty array");
  });

  it("computes average for a single-element array", () => {
    expect(average([42])).toBe(42);
  });
});
