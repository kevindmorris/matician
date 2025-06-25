import range from "./range";

describe("range", () => {
  it("calculates the range of a set of numbers", () => {
    expect(range([1, 2, 3])).toBe(2);
    expect(range([10, 5, 7])).toBe(5);
    expect(range([100, 50, 25])).toBe(75);
  });

  it("returns 0 when all values are equal", () => {
    expect(range([5, 5, 5])).toBe(0);
  });

  it("handles negative values", () => {
    expect(range([-10, 0, 10])).toBe(20);
  });

  it("throws for empty arrays", () => {
    expect(() => range([])).toThrow("Cannot compute range of an empty array");
  });
});
