import median from "./median";

describe("median", () => {
  it("returns the middle element for odd-length arrays", () => {
    expect(median([1])).toBe(1);
    expect(median([1, 3, 2])).toBe(2);
    expect(median([5, 1, 4])).toBe(4);
  });

  it("returns the average of middle elements for even-length arrays", () => {
    expect(median([1, 2])).toBe(1.5);
    expect(median([1, 3, 2, 4])).toBe(2.5);
    expect(median([10, 5, 3, 1])).toBe(4);
  });

  it("throws an error for empty arrays", () => {
    expect(() => median([])).toThrow("Cannot compute median of an empty array");
  });

  it("does not modify the original array", () => {
    const arr = [5, 2, 9];
    const copy = [...arr];
    median(arr);
    expect(arr).toEqual(copy);
  });
});
