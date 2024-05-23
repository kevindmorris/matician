import mean from "./mean";

describe("mean module", () => {
  test("should find the mean of an array", () => {
    expect(mean([])).toBe(0);
    expect(mean([1, 2, 3, 4, 5, 6, 7, 8])).toBe(4.5);
    expect(mean([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(5);
    expect(mean([-1, 2, -3, 4, -5, 6, -7, 8])).toBe(0.5);
    expect(mean([-1, -2, -3, -4, -5, -6, -7, -8])).toBe(-4.5);
    expect(mean([-1, -2, -3, -4, -5, -6, -7, -8, -9])).toBe(-5);
  });
});
