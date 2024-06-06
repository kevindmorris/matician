import range from "./range";

describe("range", () => {
  test("should be NaN", () => {
    expect(range([])).toBeNaN();
  });
  test("should find the range", () => {
    expect(range([1, 2, 3, 4])).toBe(3);
    expect(range([-1, -2, -3, 4])).toBe(7);
  });
});
