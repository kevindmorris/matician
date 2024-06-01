import median from "./median";

describe("median", () => {
  test("should find the median of an array", () => {
    expect(median([])).toBe(0);
    expect(median([1, 2, 3, 4, 5, 6, 7, 8])).toBe(4.5);
    expect(median([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(5);
    expect(median([-1, 2, -3, 4, -5, 6, -7, 8])).toBe(0.5);
    expect(median([-1, -2, -3, -4, -5, -6, -7, -8])).toBe(-4.5);
    expect(median([-1, -2, -3, -4, -5, -6, -7, -8, -9])).toBe(-5);
  });
});
