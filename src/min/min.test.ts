import min from "./min";

describe("min", () => {
  it("returns the smallest number in a list", () => {
    expect(min([1, 2, 3])).toBe(1);
    expect(min([5, 2, 8])).toBe(2);
    expect(min([-1, -5, 0])).toBe(-5);
  });

  it("returns the number itself if the array has one element", () => {
    expect(min([42])).toBe(42);
  });

  it("throws an error if the array is empty", () => {
    expect(() => min([])).toThrow("Cannot compute min of an empty array");
  });
});
