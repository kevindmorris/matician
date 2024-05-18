import median from "./median";

describe("median module", () => {
  test("median of [] to be undefined", () => {
    expect(median([])).toBeNaN();
  });
  test("median of [1, 2, 3] to equal 2", () => {
    expect(median([1, 2, 3])).toBe(2);
  });
  test("median of [5, 1, 4, 2, 3] to equal 3", () => {
    expect(median([5, 1, 4, 2, 3])).toBe(3);
  });
  test("median of [1, -1, 2, -2] to equal 0", () => {
    expect(median([1, -1, 2, -2])).toBe(0);
  });
});
