import max from "./max";

describe("max", () => {
  it("returns the largest number in a list", () => {
    expect(max([1, 2, 3])).toBe(3);
    expect(max([5, 2, 8])).toBe(8);
    expect(max([-1, -5, 0])).toBe(0);
  });

  it("returns the number itself if the array has one element", () => {
    expect(max([42])).toBe(42);
  });

  it("throws an error if the array is empty", () => {
    expect(() => max([])).toThrow("Cannot compute max of an empty array");
  });
});
